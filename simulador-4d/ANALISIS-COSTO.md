# Analisis de costo - Simulador 4D (material simulable y VR)
### Simulador 4D - Surcido Cero-Error (prototesis implantable Clase III)

> Autoria: Ana Eslava-Graterol. Asistido por IA bajo gobernanza humana. Marca neutra.
> Nota de honestidad: este documento da MODELOS y ORDENES DE MAGNITUD, no cotizaciones.
> [ESTIMACION] = rango orientativo a validar con proveedores. [VERIFY] = dato real del sitio. [DEFINIR] = decision de stakeholder.
> Las cifras exactas dependen de marca, volumen y pais; sirven para dimensionar, no para presupuestar.

---

## Parte 1 - Costo de implementar con material simulable (vs material real)

### 1.1 El problema economico
Aprender el surcido sobre material real destruye componentes controlados Clase III: cada error del aprendiz es coste de la pieza + retrabajo + un registro de calidad. El valor del simulador es mover ese error a un material simulable donde cuesta casi nada.

### 1.2 Modelo de costo (rellenar con datos del sitio [VERIFY])
Variables:
- C_u = costo de una unidad/componente real desechado (pieza + retrabajo + tiempo + registro).
- r = tasa de defecto del aprendiz durante la cualificacion (semanas 1-6).
- U = unidades que practica cada aprendiz hasta la cualificacion.
- A = numero de aprendices por ano.

Costo anual actual (practica sobre material real), aprox.:
  Costo_real ~= A * U * r * C_u   (+ coste de los registros de calidad asociados)

Costo con material simulable:
- Digital (este simulador): costo marginal por practica ~= 0. Costo = desarrollo/licencias (una vez) + mantenimiento anual.
- Fisico simulable (maquetas, foam, cuff de entrenamiento): C_m por unidad, con C_m << C_u y reutilizable.

Ahorro anual aproximado:
  Ahorro ~= Costo_real - (amortizacion_simulador + consumibles_simulables)

Payback (meses):
  Payback ~= Inversion_inicial / (Ahorro_mensual)

Interpretacion: a mayor C_u (pieza Clase III, cara) y mayor A (volumen de aprendices), el payback del material simulable es muy corto. En digital, como el coste marginal por intento es casi cero, el ahorro escala sin limite con el numero de practicas.

### 1.3 Opciones de material simulable (comparativa cualitativa)
| Opcion | CapEx | OpEx / consumible | Fidelidad tactil | Datos/auditabilidad | Escalabilidad |
|---|---|---|---|---|---|
| A. Digital (web/LMS) - lo que tenemos | Bajo-medio (contenido) | Muy bajo | Baja (no hay tacto) | Alta (xAPI/cmi5) | Muy alta |
| B. Fisico simulable (maquetas/foam/cuff de practica) | Bajo | Bajo (consumible reutilizable) | Alta | Baja (manual) | Media |
| C. Hibrido (digital para secuencia/decision + fisico para destreza) | Medio | Bajo | Alta | Alta (digital) + manual | Alta |
| D. VR (ver Parte 2) | Alto | Medio | Media-alta (con haptica) | Muy alta (guante+mirada) | Media |

Recomendacion de coste-beneficio: empezar por A (ya hecho) para secuencia, decision y datos; anadir B para la destreza tactil fina; C (hibrido) es el optimo practico antes de considerar D (VR).

### 1.4 Que reduce el coste frente a material real
- Cero desecho de piezas controladas durante el aprendizaje.
- Menos registros de calidad por error de aprendiz.
- Menor tiempo-a-primera-pieza-buena (el operario llega entrenado al puesto).
- Reutilizacion: el digital se amortiza una vez y sirve a todos los aprendices y turnos.

---

## Parte 2 - Costo de implementar en Realidad Virtual (VR)

### 2.1 Estructura de coste
CapEx (unico):
- Hardware por estacion: casco VR con eye tracking + PC capaz; guantes de datos (opcional haptica).
- Desarrollo: motor XR (Unity/Unreal), fisica de sutura (aguja-hilo-tejido), integracion xAPI.
- Contenido: modelado 3D del manguito/stent, narracion, vide, instrucciones.
- Validacion: si el simulador VR evidencia competencia de Clase III, entra en validacion bajo el QMS.

OpEx (recurrente):
- Licencias de software y SDK; mantenimiento y reposicion de hardware; soporte.
- Actualizacion de contenido; LRS (almacenamiento/analitica); formacion de facilitadores.

### 2.2 Ordenes de magnitud del hardware [ESTIMACION - a validar con proveedores]
- Casco VR con eye tracking: del orden de cientos a varios miles por unidad, segun gama.
- PC VR-capable: del orden de 1-3 mil por estacion.
- Guantes de datos (captura de dedos/trayectoria): del orden de varios miles por par.
- Guantes hapticos avanzados (retorno de fuerza): notablemente mas (decenas de miles por par).
No son cotizaciones; la haptica es el principal multiplicador de coste y suele dejarse para fases avanzadas.

### 2.3 Coste por fases (esfuerzo orientativo) [ESTIMACION]
| Fase | Alcance | Hardware | Desarrollo/contenido | Validacion |
|---|---|---|---|---|
| F0 (hoy) | Web/2.5D + cmi5/xAPI | Ninguno extra | Hecho | No aplica |
| F1 | VR piloto, 1 procedimiento, sin haptica, eye tracking basico | 1-2 estaciones | Semanas a pocos meses, equipo pequeno | Opcional (piloto) |
| F2 | VR + guantes de datos + eye tracking completo, dashboards | Varias estaciones | Crece con fidelidad | Recomendada si mide competencia |
| F3 | VR validado en QMS, integrado a LMS/LRS, haptica si procede | Escala de estaciones | Mayor (fidelidad + validacion) | Formal (IQ/OQ/PQ) [VERIFY] |

### 2.4 Que impulsa el coste (drivers)
- Numero de estaciones (coste lineal con el hardware).
- Haptica si/no (gran multiplicador).
- Fidelidad del modelo 3D y de la fisica de sutura.
- Alcance de la validacion regulatoria.
- Numero de procedimientos/variantes a cubrir.

### 2.5 Cuando se justifica VR (ROI)
VR compensa cuando se combinan: alto coste por error en material real (C_u alto), alto volumen de aprendices (A alto), destreza manual critica, y/o requisito de evidenciar competencia. Si el volumen es bajo, el hibrido digital+fisico (Parte 1, opcion C) suele ser mas coste-eficiente.

### 2.6 Como reducir el coste de VR
- Empezar F1 con pocas estaciones y un procedimiento; sin haptica.
- Reutilizar el modelo de medicion xAPI ya definido (no se rehace la capa de datos).
- Elegir hardware con SDK abierto y soporte xAPI (evita dependencia de proveedor).
- Compartir estaciones por turnos; amortizar sobre muchos aprendices.

---

## 3. Variables a confirmar para un numero real
- [VERIFY] C_u (costo de una pieza controlada desechada, con retrabajo y registro).
- [VERIFY] r (tasa de defecto del aprendiz, semanas 1-6) y U (unidades practicadas por aprendiz).
- [VERIFY] A (aprendices por ano) y numero de turnos/estaciones.
- [DEFINIR] si el simulador (digital o VR) se usara para evidenciar competencia (activa validacion QMS).
- [ESTIMACION] cotizaciones de hardware/desarrollo con 2-3 proveedores.

Con esas cifras, el modelo de la Parte 1 da el ahorro y el payback reales, y la Parte 2 convierte los rangos en un presupuesto.
