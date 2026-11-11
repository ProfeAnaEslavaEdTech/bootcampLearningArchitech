# Cómo Auditar Accesibilidad Web: WCAG 2.2 AA

**Módulo:** Accesibilidad en Diseño de Experiencias de Aprendizaje  
**Nivel:** Intermedio  
**Tiempo estimado:** 90 minutos  
**Autor:** Ana Eslava-Graterol · Bootcamp Learning ArchiTech

---

## 1. ¿Por qué WCAG 2.2 y no WCAG 2.1?

WCAG 2.2 (W3C, octubre 2023) añade **9 criterios nuevos** sobre WCAG 2.1. Los relevantes para diseño instruccional digital:

| Criterio | Nivel | Qué exige |
|----------|-------|-----------|
| 2.4.11 Focus Not Obscured (Mínimo) | AA | El elemento con foco no queda *completamente* oculto por otro (p. ej., un header sticky) |
| 2.4.12 Focus Not Obscured (Mejorado) | AAA | El elemento no queda oculto *en absoluto* |
| 2.4.13 Focus Appearance | AAA | El indicador de foco cumple tamaño y contraste mínimos |
| 2.5.7 Dragging Movements | AA | Toda funcionalidad de arrastre tiene alternativa sin arrastre |
| 2.5.8 Target Size (Minimum) | AA | Área de toque ≥ 24×24 CSS px |
| 3.2.6 Consistent Help | AA | El mecanismo de ayuda aparece en la misma posición en todas las páginas |
| 3.3.7 Redundant Entry | A | No se solicita información que ya se proporcionó antes en el mismo proceso |
| 3.3.8 Accessible Authentication (Minimum) | AA | No se requiere test cognitivo para autenticarse sin alternativa |
| 3.3.9 Accessible Authentication (Enhanced) | AAA | No se requiere test cognitivo, ni siquiera con alternativa |

> **Nota legal:** La Ley 11/2023 (España) transpone la Directiva UE 2016/2102 y exige WCAG 2.1 AA como mínimo para el sector público. WCAG 2.2 AA es la práctica recomendada actual. EN 301 549 v3.2.1 (2021) es el estándar europeo de referencia.

---

## 2. Los cuatro principios POUR

Toda página accesible cumple:

1. **Perceptible** — La información puede percibirse por todos los sentidos.
2. **Operable** — Los controles y la navegación son accionables con teclado y puntero.
3. **Comprensible** — El lenguaje y el comportamiento son predecibles.
4. **Robusto** — El contenido funciona con tecnologías de asistencia actuales y futuras.

---

## 3. Proceso de auditoría paso a paso

### Paso 1 — Preparación

```
□ Identifica el alcance: ¿cuántas páginas/vistas distintas?
□ Anota la URL canónica del sitio (ej. https://dominio.com/app/, no /index.html)
□ Elige el agente de usuario: Chrome + NVDA o Safari + VoiceOver
□ Descarga el WCAG Quick Reference: https://www.w3.org/WAI/WCAG22/quickref/
```

### Paso 2 — Inspección automatizada (detecta ~30-40 % de problemas)

**axe DevTools** (extensión Chrome/Edge) — gratuita:
1. Abre DevTools → pestaña "axe DevTools"
2. Pulsa "Scan ALL of my page"
3. Exporta el informe en JSON o CSV
4. Clasifica cada hallazgo: Critical · Serious · Moderate · Minor

**WAVE** (webaim.org/wave o extensión):
1. Introduce la URL en wave.webaim.org
2. Revisa:
   - Rojo = Error (fallo WCAG)
   - Amarillo = Alert (posible problema)
   - Verde = Structural element (ayuda a entender la estructura)

**Lighthouse** (Chrome DevTools → pestaña Lighthouse):
```bash
# O desde terminal:
npx lighthouse https://tudominio.com --only-categories=accessibility --output=html
```

### Paso 3 — Verificación manual con teclado

```
Protocolo de prueba de teclado:
1. Recarga la página con el cursor fuera del browser
2. Pulsa Tab repetidamente: ¿todo elemento interactivo recibe foco visible?
3. Pulsa Shift+Tab: ¿el recorrido inverso es coherente?
4. Activa botones/links con Enter y Espacio
5. Navega menús/sliders con teclas de flecha
6. Verifica que el foco NO queda atrapado en ningún componente
7. Comprueba el skip link: ¿aparece al pulsar Tab desde el inicio de la página?
```

**Lista de control teclado:**
- [ ] Skip link visible al recibir foco → `<a href="#main-content">Skip to main content</a>`
- [ ] Foco visible en todos los elementos (no `outline: 0` sin alternativa)
- [ ] Sin trampa de foco (modales: foco debe quedar dentro, luego volver al disparador)
- [ ] Tablas: foco en celdas de cabecera con `scope`
- [ ] Carruseles/tabs: teclas de flecha funcionan

### Paso 4 — Lector de pantalla básico

**Con NVDA + Firefox (Windows, gratis):**
```
Insert+F7 → Lista de elementos (links, encabezados, formularios)
Insert+H  → Navegar por encabezados
Insert+K  → Navegar por links
F → Navegar a siguiente formulario
```

**Con VoiceOver + Safari (macOS/iOS):**
```
Cmd+F5          → Activar/desactivar VoiceOver
VO+U            → Rotor (links, encabezados, formularios)
VO+Flecha dcha  → Siguiente elemento
VO+Espacio      → Activar elemento
```

**Qué verificar:**
- [ ] Imágenes: el lector anuncia el alt text (imágenes decorativas → `alt=""`)
- [ ] Botones: el nombre accesible refleja su función
- [ ] Formularios: cada campo tiene `<label>` o `aria-label`
- [ ] `aria-live`: los cambios dinámicos (p. ej., carga de contenido) se anuncian
- [ ] Tablas de datos: `<th scope="col/row">` correcto

### Paso 5 — Verificar contraste de color

**Colour Contrast Analyser (TPGi, gratis):**
1. Descarga desde paciellogroup.com
2. Usa el cuentagotas para medir texto sobre fondo
3. Verifica:
   - Texto normal (< 18pt): **≥ 4.5:1**
   - Texto grande (≥ 18pt o ≥ 14pt en negrita): **≥ 3:1**
   - Componentes UI (bordes de inputs, iconos funcionales): **≥ 3:1**

**Herramienta online:** webaim.org/resources/contrastchecker

### Paso 6 — Documentar hallazgos

Usa esta tabla para cada hallazgo:

| Campo | Ejemplo |
|-------|---------|
| Criterio WCAG | 2.4.1 Bypass Blocks (Nivel A) |
| Descripción | No existe skip link como primer elemento enfocable |
| Impacto | Los usuarios de teclado deben navegar toda la barra de nav en cada página |
| Pasos para reproducir | 1. Ir a /portfolio 2. Pulsar Tab desde la barra de dirección |
| Elemento HTML afectado | `<nav class="main-nav">` (línea 183 aprox.) |
| Severidad | Critical (fallo WCAG Nivel A) |
| Recomendación de corrección | Añadir `<a class="skip-link" href="#main-content">` como primer elemento del `<body>` |
| Estado | Corregido / Pendiente |

---

## 4. Correcciones más frecuentes en proyectos e-learning

### 4.1 Skip link (2.4.1 Bypass Blocks — Nivel A)

**Antes (fallo):**
```html
<body>
  <nav>…navegación completa…</nav>
  <main>…contenido…</main>
</body>
```

**Después (conforme):**
```html
<body>
  <!-- PRIMER elemento enfocable -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <nav>…navegación completa…</nav>
  <main id="main-content">…contenido…</main>
</body>
```

```css
/* Visible solo en foco, no en pantalla */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  background: #3B5BD6;
  color: #fff;
  padding: 10px 18px;
  border-radius: 0 0 10px 10px;
  font-weight: 700;
  text-decoration: none;
  transition: top .1s;
  z-index: 200;
}
.skip-link:focus {
  top: 0;
  outline: 3px solid #E8A33C;
  outline-offset: 2px;
}
```

### 4.2 Mensajes de estado dinámico (4.1.3 Status Messages — Nivel AA)

**Antes (fallo):**
```html
<div id="panelHead"></div>
<!-- panelHead.textContent = "Sector: Salud" via JS → NO anunciado -->
```

**Después (conforme):**
```html
<div id="panelHead" aria-live="polite" aria-atomic="true"></div>
<!-- Ahora VoiceOver/NVDA anuncia el cambio cuando ocurre -->
```

> **Cuándo usar `aria-live`:**
> - `polite` (espera a que el usuario termine de leer): actualizaciones no urgentes (contenido cargado, selección cambiada)
> - `assertive` (interrumpe inmediatamente): solo para errores críticos o alertas de seguridad
> - `aria-atomic="true"`: anuncia el contenedor completo, no solo el texto nuevo

### 4.3 Encabezados en botones (1.3.1 Info and Relationships — Nivel A)

**Antes (inválido HTML/ARIA):**
```html
<button role="tab">
  <h3>Sector Salud</h3>  <!-- INVÁLIDO: heading dentro de button -->
</button>
```

**Después (conforme):**
```html
<button role="tab">
  <span class="tab-label">Sector Salud</span>  <!-- Estilo con CSS -->
</button>
```

### 4.4 Alt text en imágenes (1.1.1 Non-text Content — Nivel A)

```html
<!-- Imagen informativa: describir el contenido -->
<img src="grafico-resultados.png" alt="Gráfico de barras: tasa de finalización 87% en módulo 1, 72% en módulo 2">

<!-- Imagen decorativa: alt vacío (el lector la ignora) -->
<img src="decoracion-borde.png" alt="">

<!-- Imagen de enlace: describir el destino -->
<a href="/curso-ia"><img src="icono-ia.png" alt="Ir al módulo de IA"></a>
```

### 4.5 Contraste en Articulate Rise / Storyline

- Usa siempre los colores del sistema de diseño que ya han sido validados
- En Rise: revisa el color personalizado con webaim.org/resources/contrastchecker antes de guardarlo
- En Storyline: las imágenes de texto (títulos en PNG) no pasan el verificador automático — usa texto real siempre que sea posible
- Foco en Storyline: añade `outline: 3px solid #3B5BD6` en el CSS personalizado del skin

---

## 5. Herramientas de verificación — resumen

| Herramienta | Tipo | Qué detecta | Coste |
|-------------|------|-------------|-------|
| axe DevTools | Extensión browser | ~30-40 % errores automáticos | Gratis (versión básica) |
| WAVE | Web / extensión | Errores + estructura ARIA | Gratis |
| Lighthouse | DevTools / CLI | Puntuación + auditoría básica | Gratis |
| Colour Contrast Analyser | App escritorio | Contraste exacto | Gratis |
| NVDA | Lector de pantalla | Windows + Firefox | Gratis |
| VoiceOver | Lector de pantalla | macOS / iOS (integrado) | Incluido en OS |
| arc Toolkit | Extensión Chrome | ARIA, roles, tabindex | Gratis |
| Deque axe Pro | Extensión browser | ~80 % errores automáticos | De pago |

---

## 6. Qué NO detectan las herramientas automáticas

Los automatizados solo cubren ~30-40 % de los criterios WCAG. Siempre verificar manualmente:

- **2.1.1 Keyboard** — ¿Funciona todo con Tab/Enter/Espacio/Flechas?
- **1.4.4 Resize Text** — ¿A 200 % zoom no se pierde contenido?
- **2.4.3 Focus Order** — ¿El recorrido de foco tiene sentido lógico?
- **2.4.11 Focus Not Obscured** — ¿El header sticky oculta el foco?
- **1.3.1 Info and Relationships** — ¿La semántica HTML refleja la estructura visual?
- **3.3.2 Labels or Instructions** — ¿Todos los campos de formulario tienen etiqueta visible?
- **1.4.1 Use of Color** — ¿El color es el ÚNICO indicador de estado/error?

---

## 7. Informe de auditoría: estructura recomendada

```
1. Resumen ejecutivo (hallazgos clave, nivel de conformidad actual)
2. Alcance (URL, fecha, herramientas usadas, versión WCAG)
3. Resultados por principio (tabla: criterio / nivel / estado / evidencia)
4. Correcciones aplicadas (antes / después en código)
5. Correcciones pendientes (priorizadas por nivel WCAG)
6. Checklist para futuras actividades
7. Marco legal aplicable
8. Declaración de conformidad (si aplica)
```

> **Declaración de conformidad WCAG:** solo se declara cuando se ha auditado el 100 % del sitio con verificación manual + lector de pantalla. Declarar "parcialmente conforme" es más honesto que "conforme" cuando hay páginas sin auditar.

---

## 8. Ejercicio práctico

**Objetivo:** Auditar una página web con las herramientas descritas.

**Pasos:**
1. Elige una URL de un proyecto e-learning o portfolio
2. Ejecuta axe DevTools y exporta el informe
3. Navega la página entera solo con teclado (sin ratón) durante 5 minutos
4. Verifica el contraste de los 3 colores de texto principales
5. Activa NVDA o VoiceOver y navega por encabezados
6. Documenta cada hallazgo en la tabla del Paso 6 (sección 3)
7. Propón la corrección de código para los 2 problemas más graves

**Criterio de éxito:** Has identificado al menos 1 fallo Nivel A y propuesto su corrección con código antes/después.

---

## 9. Referencias y recursos

- **WCAG 2.2 (W3C):** https://www.w3.org/TR/WCAG22/
- **WCAG Quick Reference:** https://www.w3.org/WAI/WCAG22/quickref/
- **WebAIM:** https://webaim.org
- **Deque University (cursos gratuitos):** https://dequeuniversity.com
- **Ley 11/2023 (ES):** BOE núm. 68, 21 marzo 2023
- **Directiva UE 2016/2102:** EUR-Lex
- **EN 301 549 v3.2.1 (2021):** ETSI
- **Section 508 (US):** https://www.section508.gov
- **A11y Project Checklist:** https://www.a11yproject.com/checklist/

---

*© 2026 Ana Eslava-Graterol · Bootcamp Learning ArchiTech · Material de formación interna*  
*Generado con asistencia de IA, revisado por experto humano · WCAG 2.2 (W3C, oct 2023)*
