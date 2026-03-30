# Nuevas Funcionalidades Implementadas

## Resumen

Se han implementado exitosamente tres nuevas herramientas académicas basadas en las especificaciones técnicas del documento proporcionado:

### 1. 📅 Planificación de Horarios

**Ubicación:** Menú "Herramientas" → "Planificación de Horarios"

**Características:**
- Selector de semestre (1° a 8°)
- Selección automática de todos los cursos del semestre elegido
- Posibilidad de marcar/desmarcar cursos individuales
- Opción de agregar cursos de otros semestres
- Generación de horario semanal visual (Lunes a Viernes, 08:00 a 18:00)
- Exportación a imagen PNG usando `html2canvas`
- Exportación a PDF usando `jsPDF`
- Contador de créditos totales
- Detección automática de conflictos de horario (cursos en el mismo bloque)

**Archivos:**
- `/components/Horarios.tsx` - Componente principal
- `/data/horarios.json` - Base de datos de horarios por curso y sección
- `/data/cursos.json` - Información de cursos (códigos, nombres, créditos, semestres)

### 2. 🧮 Calculadora de Promedios

**Ubicación:** Menú "Herramientas" → "Calculadora de Promedios"

**Características:**
- Sistema de calificación por 4 unidades académicas
- Cada unidad se compone de:
  - Actitudinal → 10%
  - Conceptual → 40%
  - Procedimental → 50%
- Opción de ingresar notas individuales o nota final de unidad
- Cálculo automático del promedio final
- Indicador visual de aprobación/desaprobación (≥ 10.5)
- Visualización de notas por unidad
- Botón para limpiar formulario

**Archivos:**
- `/components/CalculadoraPromedio.tsx` - Componente principal

**Fórmulas:**
```
Nota Unidad = (Actitudinal × 0.10) + (Conceptual × 0.40) + (Procedimental × 0.50)
Promedio Final = (U1 + U2 + U3 + U4) / 4
Aprobado si: Promedio Final ≥ 10.5
```

### 3. 📚 Base de Conocimiento de Cursos

**Ubicación:** Menú "Herramientas" → "Base de Conocimiento"

**Características:**
- Listado completo de todos los cursos del plan curricular
- Sistema de búsqueda por nombre o código
- Filtro por semestre
- Para cada curso se muestra:
  - Código y nombre
  - Semestre y créditos
  - Importancia dentro de la carrera
  - Recomendación académica
  - Prerrequisitos (cursos que debes aprobar antes)
  - Cursos que desbloquea
- Vista expandible con información detallada
- Navegación entre cursos relacionados

**Archivos:**
- `/components/BaseConocimiento.tsx` - Componente principal
- `/data/cursos.json` - Base de datos con información completa

### Información Incluida (Primeros 4 Semestres)

**I Semestre:**
- Cálculo Diferencial
- Matemática Básica
- Física General
- Algoritmos
- Matemática Superior
- Comunicación Oral y Escrita

**II Semestre:**
- Cálculo Integral
- Estadística General
- Lenguaje de Programación I
- Taller de Arte: Danza
- Métodos de Estudio del Trabajo Universitario
- Realidad Nacional
- Química General

**III Semestre:**
- Cálculo Multivariable
- Matemática Básica II
- Física I
- Lenguaje de Programación II
- Ecología
- Educación Física
- Inglés Básico

**IV Semestre:**
- Economía
- Investigación de Operaciones I
- Matemática Discreta
- Electrónica I
- Inferencia Estadística
- Teoría de la Computación
- Metodología de la Investigación Científica

## Integración con la Plataforma

### Navegación

Las nuevas herramientas están integradas en:

1. **Menú Desktop:** Dropdown "Herramientas" en la barra de navegación superior
2. **Menú Mobile:** Sección expandible "Herramientas" en el menú hamburguesa
3. **Página de Inicio:** Nueva sección "Herramientas Académicas" con 3 cards
4. **Footer:** Nueva columna "Herramientas" con enlaces directos

### Diseño

- Mantiene la paleta de colores tech existente:
  - Azul: `#4A6DFF`
  - Púrpura: `#7A5BFF`
  - Verde menta: `#56F0C3`
- Diseño responsivo para desktop, tablet y móvil
- Microinteracciones y animaciones suaves
- Iconos de Lucide React para consistencia visual

## Dependencias Agregadas

```json
{
  "html2canvas": "^1.4.1",
  "jspdf": "^2.5.1"
}
```

## Estructura de Datos

### `/data/cursos.json`
```json
{
  "codigo": "CAL-DIF",
  "nombre": "Cálculo Diferencial",
  "semestre": 1,
  "creditos": 4,
  "prerrequisitos": [],
  "desbloquea": ["CAL-INT"],
  "recomendacion": "...",
  "importancia": "..."
}
```

### `/data/horarios.json`
```json
{
  "codigo": "CAL-DIF",
  "semestre": 1,
  "seccion": "A",
  "horarios": [
    {
      "dia": "Lunes",
      "horaInicio": "08:00",
      "horaFin": "10:00",
      "aula": "301"
    }
  ]
}
```

## Próximos Pasos Sugeridos

1. **Completar información de cursos** para semestres 5-10
2. **Agregar múltiples secciones** por curso en horarios.json
3. **Implementar sistema de favoritos** para cursos
4. **Agregar persistencia local** (localStorage) para:
   - Horarios guardados
   - Historial de promedios
   - Cursos favoritos
5. **Sistema de notificaciones** para recordatorios de fechas importantes
6. **Exportar base de conocimiento** a PDF o compartir por redes sociales

## Notas Técnicas

- Toda la lógica se ejecuta en el cliente (no requiere servidor)
- Los datos están en formato JSON estático
- Las exportaciones de horario funcionan completamente en el navegador
- Compatible con todos los navegadores modernos
- Diseño mobile-first y totalmente responsivo

---

**Fecha de implementación:** Marzo 2026
**Versión:** 2.0.0
**Estado:** ✅ Completado y funcional
