# 🎓 Plataforma de Orientación Académica - Ingeniería de Sistemas y Computación UNDAC

> **Desarrollado por:** AzDeLid  
> **Universidad:** Universidad Nacional Daniel Alcides Carrión (UNDAC)  
> **Carrera:** Ingeniería de Sistemas y Computación

---

## 📋 Descripción

Plataforma web moderna e interactiva diseñada para estudiantes de Ingeniería de Sistemas y Computación de la UNDAC. Proporciona herramientas completas para navegar la ruta académica, elegir áreas de especialización y gestionar el progreso universitario.

### ✨ Características Principales

- **🗺️ Roadmap Interactivo:** Visualiza los 46 cursos organizados por 10 semestres
- **🎯 Quiz Vocacional:** 25 preguntas para descubrir tu área ideal de especialización
- **📚 Comparación de Áreas:** Análisis detallado de las 3 áreas electivas (Redes, Software, Desarrollo Web)
- **📅 Planificador de Horarios:** Generación automática de horarios académicos con detección de cruces
- **🧮 Calculadora de Promedios:** Calcula promedios por unidades y semestres
- **📖 Base de Conocimiento:** Información detallada de cada curso con recomendaciones
- **📊 Simulador de Progreso:** Rastrea tu avance académico a través de la carrera

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** + **TypeScript** - Framework principal
- **Vite** - Build tool y dev server
- **TailwindCSS v4** - Estilos y diseño responsivo
- **Motion (Framer Motion)** - Animaciones fluidas

### Bibliotecas Adicionales
- **Lucide React** - Iconos modernos
- **Recharts** - Gráficos y visualizaciones
- **jsPDF** - Exportación a PDF
- **html2canvas** - Capturas de pantalla

---

## 🚀 Instalación y Configuración

### Prerrequisitos
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/plataforma-sistemas-undac.git
cd plataforma-sistemas-undac
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Construcción para producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`

---

## 📂 Estructura del Proyecto

```
├── components/           # Componentes React
│   ├── Home.tsx         # Página de inicio
│   ├── Horarios.tsx     # Módulo de planificación de horarios
│   ├── Quiz.tsx         # Quiz vocacional
│   ├── Roadmap.tsx      # Roadmap de cursos
│   ├── CalculadoraPromedio.tsx
│   ├── BaseConocimiento.tsx
│   └── ProgresoAcademico.tsx
├── data/                # Datos estáticos
│   ├── cursos.ts        # Información de 46 cursos
│   ├── cursos-detalle.ts
│   ├── horarios-csv.ts  # Datos de horarios
│   └── quiz-questions.ts
├── styles/              # Estilos globales
│   └── globals.css
├── App.tsx              # Componente principal
├── index.html           # HTML base
└── vite.config.ts       # Configuración de Vite
```

---

## 🎨 Diseño y Estilos

### Paleta de Colores

- **Azul Principal:** `#4A6DFF`
- **Púrpura:** `#7A5BFF`
- **Verde Menta:** `#56F0C3`
- **Fondo Oscuro:** `#1B1E28` - `#252935`

### Tipografía

- **Font Family:** Poppins (Google Fonts)
- Sistema de escalado responsivo con Tailwind CSS

---

## 📱 Características por Módulo

### 1. Roadmap Interactivo
- Visualización de 46 cursos en 10 semestres
- Indicadores de prerrequisitos y cursos desbloqueados
- Filtrado por semestre y tipo de curso
- Diseño tipo timeline moderno

### 2. Quiz Vocacional (25 Preguntas)
- 4 bloques temáticos
- Preguntas con puntuación ponderada
- Sistema de escalas 1-5 para mayor precisión
- Resultados personalizados por área

### 3. Planificador de Horarios
- Selección de cursos por semestre
- 15 bloques horarios (08:00 am - 21:10 pm)
- Detección automática de cruces de horarios
- Manejo de cursos electivos mutuamente excluyentes (semestres 7, 8, 9)
- Exportación a PNG y PDF
- Indicadores visuales de conflictos

### 4. Calculadora de Promedios
- Cálculo por unidades (4 unidades)
- Promedio final del curso
- Historial de cursos calculados
- Validación de notas (0-20)

### 5. Base de Conocimiento
- 46 cursos con información detallada
- Recomendaciones personalizadas
- Filtrado por semestre y búsqueda
- Indicadores de dificultad e importancia

### 6. Simulador de Progreso
- Seguimiento visual del avance académico
- Estadísticas de créditos completados
- Proyección de graduación
- Gráficos interactivos

---

## 🔧 Características Técnicas

### Módulo de Horarios - Características Avanzadas

1. **Sistema de Coincidencia Inteligente:**
   - Normalización de nombres (acentos, espacios)
   - Tolerancia singular/plural
   - Coincidencia con números romanos

2. **Gestión de Cursos Electivos:**
   - Exclusión mutua automática en semestres 7, 8, 9
   - Indicadores visuales de bloqueo
   - Prevención de selección conflictiva

3. **Detección de Cruces:**
   - Algoritmo de detección entre semestres
   - Visualización con colores de advertencia
   - Mensajes informativos

4. **Exportación:**
   - Generación de imágenes PNG (alta resolución)
   - Creación de PDF en formato horizontal A4

---

## 📞 Contacto y Soporte

**WhatsApp:** [934 277 990](https://wa.me/51934277990)

Para dudas, asesoramiento o apoyo relacionado con la plataforma.

---

## 📥 Recursos Adicionales

### Formato Único de Trámite (FUT) UNDAC
[Descargar FUT](https://drive.google.com/file/d/1dQ3IOKSMePSf4sOCzRD2sal5Yri4DliF/view?usp=sharing)

---

## 🎯 Áreas de Especialización

### 1. Redes y Telecomunicaciones
- Conmutación y Enrutamiento de Redes
- Administración de Servidores
- Virtualización y Servicios en la Nube

### 2. Ingeniería de Software
- Metodologías Ágiles de Desarrollo
- Desarrollo de Soluciones I y II
- Gestión de Proyectos

### 3. Desarrollo Web
- Desarrollo Web en Entorno Cliente
- Desarrollo Web en Entorno Servidor
- Despliegue de Aplicaciones Web

---

## 📊 Estadísticas de la Carrera

- **Duración:** 10 semestres (5 años)
- **Total de Cursos:** 46
- **Áreas Electivas:** 3
- **Créditos Totales:** Variable según cursos electivos
- **Semestre de Especialización:** 7mo semestre

---

## 🤝 Contribuciones

Este proyecto fue desarrollado como herramienta de apoyo para estudiantes de Ingeniería de Sistemas y Computación de la UNDAC.

---

## 📄 Licencia

© 2025 AzDeLid - Todos los derechos reservados

---

## 🔄 Versión

**Versión Actual:** 2.0.0  
**Última Actualización:** Enero 2025

---

## 🎓 Créditos

**Desarrollador:** AzDeLid  
**Universidad:** UNDAC - Universidad Nacional Daniel Alcides Carrión  
**Escuela:** Ingeniería de Sistemas y Computación  
**Año:** 2025

---

## 🚀 Deploy

La aplicación está optimizada para deploy en:
- GitHub Pages
- Vercel
- Netlify
- Cualquier servidor estático

### Deploy en GitHub Pages

```bash
npm run build
# Los archivos en dist/ están listos para deploy
```

---

## 📝 Notas Importantes

1. **Horarios Académicos:** Los datos de horarios se cargan desde archivo CSV hardcodeado
2. **Cursos Electivos:** Semestres 7, 8 y 9 tienen restricciones de selección mutua
3. **Actualización de Datos:** Los datos de cursos están en `/data/cursos.ts`
4. **Responsive:** Completamente adaptado para móviles, tablets y desktop

---

## 💡 Próximas Funcionalidades

- [ ] Integración con sistema de matrícula UNDAC
- [ ] Notificaciones de fechas importantes
- [ ] Foro estudiantil
- [ ] Recursos de estudio por curso
- [ ] Sistema de mentorías

---

**¿Preguntas o sugerencias?** Contacta por WhatsApp: **934 277 990**
