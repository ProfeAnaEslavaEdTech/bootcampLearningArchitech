#!/usr/bin/env python3
"""
pack-scorm.py — Build a self-contained SCORM 1.2 package from a bootcamp page.

Usage:
  python3 scripts/pack-scorm.py <page-dir>              # e.g. ai-literacy
  python3 scripts/pack-scorm.py <page-dir> --mastery 80  # pass threshold (default 80)
  python3 scripts/pack-scorm.py <page-dir> --scroll      # completion = 90% scroll
  python3 scripts/pack-scorm.py all                      # package every sub-page

Output: dist/<page-dir>.zip  (SCORM 1.2, ready to upload to Cornerstone)

Package structure:
  <page-dir>.zip/
  ├── imsmanifest.xml
  ├── index.html         (page with scorm12.js injected, paths fixed)
  ├── scorm12.js         (SCORM driver)
  └── shared/
      ├── oi.css
      └── i18n.js
"""

import argparse
import os
import re
import shutil
import sys
import textwrap
import zipfile
from pathlib import Path
from html.parser import HTMLParser

ROOT = Path(__file__).parent.parent.resolve()
DIST = ROOT / 'dist'
SHARED = ROOT / 'shared'

SCORM_PAGES = [
    'ai-literacy', 'ai-skills-architect', 'articulate360', 'bootcamp',
    'cefr-metrics-architect', 'change-management', 'facilitation',
    'frameworks', 'handson', 'jnj-bootcamp', 'jnj-dual-track', 'job-search',
    'language-learning-experience-designer', 'lrs', 'scripting',
    'tooling-sprint', 'unicef', 'unicef-apply', 'ux-ui', 'wida-k12',
    'cuxedtech', 'ocean-ink',
]

# Pages that have no quiz interactions — complete on 90% scroll
SCROLL_COMPLETE = {
    'articulate360', 'change-management', 'facilitation', 'ux-ui',
    'cuxedtech', 'ocean-ink',
}

# Pages with step-based navigation — set finalStep to last step index
FINAL_STEPS = {
    'ai-literacy': 11,
}


class TitleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self._in_title = False
        self.title = ''

    def handle_starttag(self, tag, attrs):
        if tag == 'title':
            self._in_title = True

    def handle_endtag(self, tag):
        if tag == 'title':
            self._in_title = False

    def handle_data(self, data):
        if self._in_title:
            self.title += data


def get_page_title(html: str) -> str:
    p = TitleParser()
    p.feed(html)
    return p.title.strip() or 'Bootcamp Module'


def slugify(s: str) -> str:
    s = re.sub(r'[^\w\s-]', '', s.lower())
    return re.sub(r'[\s_-]+', '-', s).strip('-')[:64]


def build_manifest(identifier: str, title: str, mastery: int) -> str:
    return textwrap.dedent(f"""\
        <?xml version="1.0" encoding="UTF-8"?>
        <manifest identifier="{identifier}"
          xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
          xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2
            imscp_rootv1p1p2.xsd
            http://www.adlnet.org/xsd/adlcp_rootv1p2
            adlcp_rootv1p2.xsd">
          <metadata>
            <schema>ADL SCORM</schema>
            <schemaversion>1.2</schemaversion>
          </metadata>
          <organizations default="org_{identifier}">
            <organization identifier="org_{identifier}">
              <title>{title}</title>
              <item identifier="item_{identifier}" identifierref="res_{identifier}">
                <title>{title}</title>
                <adlcp:masteryscore>{mastery}</adlcp:masteryscore>
              </item>
            </organization>
          </organizations>
          <resources>
            <resource identifier="res_{identifier}" type="webcontent"
              adlcp:scormtype="sco" href="index.html">
              <file href="index.html"/>
              <file href="scorm12.js"/>
              <file href="shared/oi.css"/>
              <file href="shared/i18n.js"/>
            </resource>
          </resources>
        </manifest>
        """)


def inject_scorm(html: str, page: str, mastery: int, scroll: bool,
                 final_step: int | None) -> str:
    # Fix relative paths: ../shared/ → shared/
    html = html.replace('../shared/', 'shared/')

    # Build SCORM_CONFIG
    config_parts = [f'masteryScore: {mastery}']
    if scroll:
        config_parts.append("completionMode: 'scroll'")
    if final_step is not None:
        config_parts.append(f'finalStep: {final_step}')
    config_js = 'window.SCORM_CONFIG = {' + ', '.join(config_parts) + '};'

    scorm_inject = (
        f'<script>{config_js}</script>\n'
        '<script src="scorm12.js"></script>\n'
    )

    # Insert just before </body>
    if '</body>' in html:
        html = html.replace('</body>', scorm_inject + '</body>', 1)
    else:
        html += '\n' + scorm_inject

    return html


def package_page(page: str, mastery: int, scroll_override: bool) -> Path:
    # Resolve the HTML file
    if page in ('cuxedtech', 'ocean-ink'):
        html_path = ROOT / f'{page}.html'
        page_dir = None
    else:
        html_path = ROOT / page / 'index.html'
        page_dir = ROOT / page

    if not html_path.exists():
        print(f'  SKIP {page}: {html_path} not found')
        return None

    DIST.mkdir(exist_ok=True)
    zip_path = DIST / f'{page}.zip'

    html = html_path.read_text(encoding='utf-8')
    title = get_page_title(html)
    identifier = slugify(title) or slugify(page)

    use_scroll = scroll_override or (page in SCROLL_COMPLETE)
    final_step = FINAL_STEPS.get(page)

    html = inject_scorm(html, page, mastery, use_scroll, final_step)

    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        zf.writestr('imsmanifest.xml',
                    build_manifest(identifier, title, mastery))
        zf.writestr('index.html', html)
        zf.write(SHARED / 'scorm12.js', 'scorm12.js')
        zf.write(SHARED / 'oi.css', 'shared/oi.css')
        if (SHARED / 'i18n.js').exists():
            zf.write(SHARED / 'i18n.js', 'shared/i18n.js')

        # Include any additional assets in the page directory
        if page_dir and page_dir.exists():
            for asset in page_dir.rglob('*'):
                if asset.is_file() and asset.name != 'index.html':
                    rel = asset.relative_to(page_dir)
                    zf.write(asset, str(rel))

    size_kb = zip_path.stat().st_size // 1024
    print(f'  OK  {page}.zip  ({size_kb} KB)  "{title}"')
    return zip_path


def main():
    ap = argparse.ArgumentParser(description='Build SCORM 1.2 packages')
    ap.add_argument('page', help='Page dir name, or "all"')
    ap.add_argument('--mastery', type=int, default=80,
                    help='Pass threshold %% (default 80)')
    ap.add_argument('--scroll', action='store_true',
                    help='Complete on 90%% scroll (overrides default logic)')
    args = ap.parse_args()

    pages = SCORM_PAGES if args.page == 'all' else [args.page]
    print(f'Building SCORM 1.2 packages → {DIST}/')
    built = 0
    for p in pages:
        result = package_page(p, args.mastery, args.scroll)
        if result:
            built += 1
    print(f'\nDone — {built}/{len(pages)} packages built in {DIST}/')


if __name__ == '__main__':
    main()
