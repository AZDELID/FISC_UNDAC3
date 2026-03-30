<!-- 
  ============================================
  Plataforma de Orientación Académica
  Desarrollado por: AzDeLid
  ============================================
-->

# 🎓 Plataforma de Orientación Académica - Ingeniería de Sistemas UNDAC

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)

**Plataforma web interactiva para estudiantes de Ingeniería de Sistemas y Computación**

[🚀 Demo en Vivo](#) • [📖 Documentación](./README.md) • [📞 Contacto](#contacto)

</div>

---

## 🌟 Características Destacadas

- ✅ **100% Funcional** - Sin dependencias externas de backend
- 🎨 **Diseño Moderno** - Interfaz futurista con animaciones fluidas
- 📱 **Responsive** - Optimizado para móvil, tablet y desktop
- ⚡ **Alto Rendimiento** - Carga rápida con Vite
- 🔧 **Código Limpio** - TypeScript con tipos estrictos

---

## 🛠️ Tech Stack

```
Frontend:   React 18 + TypeScript + TailwindCSS v4
Build:      Vite 5.4
Animations: Motion (Framer Motion)
Charts:     Recharts
Export:     jsPDF + html2canvas
Icons:      Lucide React
```

---

## 📦 Módulos Principales

### 1. 🗺️ Roadmap Interactivo
- 46 cursos en 10 semestres
- Visualización de prerrequisitos
- Indicadores de progreso

### 2. 🎯 Quiz Vocacional
- 25 preguntas estratégicas
- Sistema de puntuación ponderada
- Resultados personalizados

### 3. 📅 Planificador de Horarios
- Generación automática desde CSV
- Detección de cruces de horarios
- Exportación a PDF/PNG
- Manejo de cursos electivos

### 4. 🧮 Calculadora de Promedios
- Cálculo por unidades (4 unidades)
- Historial de cursos
- Validación automática

### 5. 📚 Base de Conocimiento
- Información detallada de 46 cursos
- Recomendaciones por curso
- Sistema de búsqueda

### 6. 📊 Simulador de Progreso
- Tracking de avance académico
- Gráficos interactivos
- Proyección de graduación

---

## 🚀 Inicio Rápido

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/plataforma-sistemas-undac.git

# Instalar dependencias
cd plataforma-sistemas-undac
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

---

## 📂 Estructura del Proyecto

```
├── components/          # Componentes React
│   ├── Home.tsx        # Landing page
│   ├── Horarios.tsx    # Módulo de horarios
│   ├── Quiz.tsx        # Quiz vocacional
│   └── ...
├── data/               # Datos estáticos
│   ├── cursos.ts       # 46 cursos
│   ├── horarios-csv.ts # Horarios académicos
│   └── ...
├── styles/             # Estilos globales
└── App.tsx             # Componente principal
```

---

## 🎨 Paleta de Colores

```css
--color-primary:   #4A6DFF  /* Azul Principal */
--color-secondary: #7A5BFF  /* Púrpura */
--color-accent:    #56F0C3  /* Verde Menta */
--color-bg-dark:   #1B1E28  /* Fondo Oscuro */
```

---

## 📊 Características Técnicas

### Módulo de Horarios - Algoritmos Avanzados

1. **Sistema de Coincidencia Inteligente**
   - Normalización de acentos y espacios
   - Tolerancia singular/plural
   - Coincidencia con números romanos

2. **Gestión de Cursos Electivos**
   - Exclusión mutua automática (semestres 7, 8, 9)
   - Indicadores visuales de bloqueo
   - Prevención de conflictos

3. **Detección de Cruces**
   - Algoritmo de detección multi-semestre
   - Visualización con colores de advertencia
   - Mensajes informativos claros

---

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

---

## 🔐 Sin Backend Requerido

Esta plataforma es 100% frontend:
- ✅ No requiere servidor
- ✅ No necesita base de datos
- ✅ Deploy estático simple
- ✅ Datos hardcodeados en TypeScript

---

## 📞 Contacto

**Desarrollador:** AzDeLid  
**WhatsApp:** [934 277 990](https://wa.me/51934277990)  
**Universidad:** UNDAC  

Para dudas, asesoramiento o colaboraciones.

---

## 📄 Licencia

© 2025 AzDeLid - Todos los derechos reservados

Desarrollado con ❤️ para estudiantes de Ingeniería de Sistemas y Computación UNDAC

---

## 🙏 Agradecimientos

- Universidad Nacional Daniel Alcides Carrión (UNDAC)
- Escuela de Ingeniería de Sistemas y Computación
- Todos los estudiantes que inspiraron este proyecto

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

</div>
