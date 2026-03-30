/**
 * BASE DE DATOS DE INFORMACIÓN DETALLADA DE CURSOS
 * 
 * Esta base de datos contiene información extendida de cada curso.
 * FÁCIL DE MODIFICAR: Solo edita el texto en "importancia" y "recomendacion"
 * 
 * El espacio de texto se adapta automáticamente al contenido.
 */

interface CursoDetalle {
  codigo: string;
  importancia: string;
  recomendacion: string;
}

export const cursosDetalle: CursoDetalle[] = [
  // ==================== SEMESTRE 1 ====================
  {
    codigo: "17101",
    importancia: "Base para cursos matemáticos posteriores",
    recomendacion: "Es importante comprender álgebra básica, ecuaciones y manipulación algebraica, ya que estos conceptos se utilizarán en múltiples cursos de matemática."
  },
  {
    codigo: "17102",
    importancia: "Esencial para comunicación profesional",
    recomendacion: "Es importante desarrollar habilidades de redacción técnica que serán necesarias en informes, proyectos y tesis."
  },
  {
    codigo: "17103",
    importancia: "Refuerzo matemático general",
    recomendacion: "Curso importante para fortalecer habilidades matemáticas utilizadas en cursos avanzados de ingeniería."
  },
  {
    codigo: "17104",
    importancia: "Fundamento para física aplicada",
    recomendacion: "Se recomienda reforzar conceptos de trigonometría y vectores. Este curso es base para Física I."
  },
  {
    codigo: "17201",
    importancia: "Fundamental para ramas matemáticas avanzadas",
    recomendacion: "Se recomienda dominar funciones algebraicas y conceptos básicos de límites. Este curso es fundamental para comprender cursos posteriores como cálculo integral y cálculo multivariable."
  },
  {
    codigo: "17301",
    importancia: "Base fundamental de la programación",
    recomendacion: "Este curso introduce el pensamiento algorítmico. Es fundamental para programación, estructuras de datos y desarrollo de software."
  },

  // ==================== SEMESTRE 2 ====================
  {
    codigo: "17105",
    importancia: "Fundamentos científicos",
    recomendacion: "Curso de formación científica básica."
  },
  {
    codigo: "17106",
    importancia: "Formación ciudadana",
    recomendacion: "Curso orientado a comprender el contexto social y económico del país."
  },
  {
    codigo: "17107",
    importancia: "Base para análisis de datos",
    recomendacion: "Fundamental para inferencia estadística y análisis de datos en cursos posteriores."
  },
  {
    codigo: "17108",
    importancia: "Metodología de estudio universitario",
    recomendacion: "Desarrolla técnicas de estudio y gestión del tiempo académico."
  },
  {
    codigo: "17109",
    importancia: "Desarrollo cultural y artístico",
    recomendacion: "Electivo de arte que desarrolla sensibilidad cultural."
  },
  {
    codigo: "17110",
    importancia: "Desarrollo cultural y artístico",
    recomendacion: "Electivo de arte que desarrolla expresión corporal."
  },
  {
    codigo: "17111",
    importancia: "Desarrollo cultural y artístico",
    recomendacion: "Electivo de arte que desarrolla expresión teatral."
  },
  {
    codigo: "17202",
    importancia: "Cálculo avanzado",
    recomendacion: "Profundiza en técnicas de integración y aplicaciones del cálculo."
  },
  {
    codigo: "17302",
    importancia: "Programación estructurada",
    recomendacion: "Primer lenguaje de programación formal. Base para todos los cursos de programación."
  },

  // ==================== SEMESTRE 3 ====================
  {
    codigo: "17112",
    importancia: "Consciencia ambiental",
    recomendacion: "Desarrolla consciencia sobre el impacto ambiental de la tecnología."
  },
  {
    codigo: "17113",
    importancia: "Idioma técnico internacional",
    recomendacion: "Inglés técnico para lectura de documentación y papers."
  },
  {
    codigo: "17114",
    importancia: "Idioma originario",
    recomendacion: "Preservación de idioma originario y cultura."
  },
  {
    codigo: "17115",
    importancia: "Desarrollo físico",
    recomendacion: "Curso de desarrollo físico y deportivo."
  },
  {
    codigo: "17203",
    importancia: "Matemática avanzada",
    recomendacion: "Profundización en matemática para ingeniería."
  },
  {
    codigo: "17204",
    importancia: "Cálculo en varias variables",
    recomendacion: "Esencial para optimización y modelamiento matemático."
  },
  {
    codigo: "17205",
    importancia: "Física aplicada",
    recomendacion: "Mecánica clásica aplicada a ingeniería."
  },
  {
    codigo: "17303",
    importancia: "Programación orientada a objetos",
    recomendacion: "Introduce paradigma de objetos. Base para ingeniería de software."
  },

  // ==================== SEMESTRE 4 ====================
  {
    codigo: "17116",
    importancia: "Metodología de investigación",
    recomendacion: "Base para seminario de tesis. Fundamental para trabajo de investigación."
  },
  {
    codigo: "17206",
    importancia: "Matemática discreta y lógica",
    recomendacion: "Fundamental para algoritmos, estructuras de datos y teoría de la computación."
  },
  {
    codigo: "17207",
    importancia: "Estadística inferencial",
    recomendacion: "Permite hacer inferencias a partir de muestras. Base para machine learning."
  },
  {
    codigo: "17208",
    importancia: "Electrónica básica",
    recomendacion: "Fundamentos de circuitos electrónicos y componentes."
  },
  {
    codigo: "17209",
    importancia: "Optimización matemática",
    recomendacion: "Técnicas de optimización lineal. Aplicable a logística y planificación."
  },
  {
    codigo: "17210",
    importancia: "Fundamentos económicos",
    recomendacion: "Comprensión de principios económicos para gestión de proyectos."
  },
  {
    codigo: "17304",
    importancia: "Teoría de autómatas y lenguajes",
    recomendacion: "Base teórica de la computación. Fundamental para diseño de compiladores."
  },

  // ==================== SEMESTRE 5 ====================
  {
    codigo: "17211",
    importancia: "Pensamiento sistémico",
    recomendacion: "Visión holística de sistemas. Base para análisis y diseño de sistemas."
  },
  {
    codigo: "17212",
    importancia: "Optimización no lineal",
    recomendacion: "Técnicas avanzadas de investigación operativa."
  },
  {
    codigo: "17213",
    importancia: "Electrónica digital",
    recomendacion: "Circuitos digitales y sistemas embebidos."
  },
  {
    codigo: "17214",
    importancia: "Gestión financiera",
    recomendacion: "Fundamental para evaluación de proyectos y gestión empresarial."
  },
  {
    codigo: "17215",
    importancia: "Gestión de calidad",
    recomendacion: "Normas de calidad y mejora continua en procesos."
  },
  {
    codigo: "17305",
    importancia: "Hardware de computadoras",
    recomendacion: "Arquitectura de computadores. Base para sistemas operativos."
  },
  {
    codigo: "17306",
    importancia: "Bases de datos relacionales",
    recomendacion: "Fundamental para cualquier sistema de información. SQL y diseño de BD."
  },

  // ==================== SEMESTRE 6 ====================
  {
    codigo: "17216",
    importancia: "Logística y supply chain",
    recomendacion: "Gestión de cadena de suministro y logística empresarial."
  },
  {
    codigo: "17217",
    importancia: "Gestión de talento humano",
    recomendacion: "Comportamiento organizacional y liderazgo."
  },
  {
    codigo: "17307",
    importancia: "Sistemas operativos",
    recomendacion: "Fundamental para administración de servidores y programación de sistemas."
  },
  {
    codigo: "17308",
    importancia: "Metodologías de desarrollo",
    recomendacion: "Ciclo de vida del software. UML y análisis de requerimientos."
  },
  {
    codigo: "17309",
    importancia: "Bases de datos avanzadas",
    recomendacion: "Optimización de BD, transacciones, y bases de datos distribuidas."
  },
  {
    codigo: "17310",
    importancia: "Modelamiento y simulación",
    recomendacion: "Simulación de sistemas. Útil para análisis de procesos."
  },
  {
    codigo: "17311",
    importancia: "Herramientas de minería de datos",
    recomendacion: "Introducción a herramientas para análisis de grandes volúmenes de datos."
  },

  // ==================== SEMESTRE 7 ====================
  {
    codigo: "17218",
    importancia: "Planificación estratégica",
    recomendacion: "Gestión estratégica de organizaciones. BSC y estrategia empresarial."
  },
  {
    codigo: "17219",
    importancia: "Finanzas corporativas",
    recomendacion: "Evaluación financiera de proyectos. VAN, TIR, y análisis de inversión."
  },
  {
    codigo: "17312",
    importancia: "Redes de computadoras",
    recomendacion: "Fundamental para cualquier ingeniero de sistemas. TCP/IP, routing, switching."
  },
  {
    codigo: "17313",
    importancia: "Business Intelligence",
    recomendacion: "Análisis de datos para toma de decisiones. Data warehousing y reporting."
  },
  {
    codigo: "17314",
    importancia: "Ingeniería de software avanzada",
    recomendacion: "Patrones de diseño, arquitectura de software, y testing."
  },
  {
    codigo: "17315",
    importancia: "Compiladores y lenguajes",
    recomendacion: "Diseño e implementación de lenguajes de programación."
  },
  {
    codigo: "17316",
    importancia: "Redes avanzadas - RAMA REDES",
    recomendacion: "Especialización en protocolos de red y enrutamiento avanzado. CISCO CCNA."
  },
  {
    codigo: "17317",
    importancia: "Desarrollo ágil - RAMA SOFTWARE",
    recomendacion: "Metodologías modernas como Scrum, Kanban y XP. Certificación Scrum Master."
  },
  {
    codigo: "17318",
    importancia: "Desarrollo web frontend - RAMA WEB",
    recomendacion: "Desarrollo frontend con HTML5, CSS3, JavaScript, React/Angular/Vue."
  },

  // ==================== SEMESTRE 8 ====================
  {
    codigo: "17220",
    importancia: "Project Management",
    recomendacion: "Metodologías de gestión de proyectos como PMBOK y PRINCE2."
  },
  {
    codigo: "17221",
    importancia: "Marketing y ventas",
    recomendacion: "Estrategias de marketing digital y tradicional para productos tech."
  },
  {
    codigo: "17222",
    importancia: "Investigación de tesis - Parte 1",
    recomendacion: "Inicio del proyecto de investigación de tesis. Definición de problema y marco teórico."
  },
  {
    codigo: "17319",
    importancia: "Redes avanzadas",
    recomendacion: "Profundización en arquitecturas de red, seguridad y protocolos avanzados."
  },
  {
    codigo: "17320",
    importancia: "Sistemas gerenciales",
    recomendacion: "Sistemas de información para la toma de decisiones gerenciales. ERP y CRM."
  },
  {
    codigo: "17321",
    importancia: "Tendencias tecnológicas",
    recomendacion: "Temas actuales en ingeniería de sistemas: AI, IoT, Blockchain, etc."
  },
  {
    codigo: "17322",
    importancia: "Administración de infraestructura - RAMA REDES",
    recomendacion: "Gestión y administración de servidores Linux/Windows. Active Directory, DNS, DHCP."
  },
  {
    codigo: "17323",
    importancia: "Desarrollo empresarial - RAMA SOFTWARE",
    recomendacion: "Desarrollo de soluciones de software empresarial. Arquitecturas empresariales."
  },
  {
    codigo: "17324",
    importancia: "Backend web - RAMA WEB",
    recomendacion: "Desarrollo backend con Node.js, Python Django/Flask, PHP, Java Spring."
  },

  // ==================== SEMESTRE 9 ====================
  {
    codigo: "17223",
    importancia: "Investigación de tesis - Parte 2",
    recomendacion: "Continuación del proyecto de tesis. Desarrollo e implementación."
  },
  {
    codigo: "17224",
    importancia: "BPM y rediseño",
    recomendacion: "Business Process Management. Optimización y automatización de procesos."
  },
  {
    codigo: "17225",
    importancia: "Inteligencia artificial",
    recomendacion: "Sistemas expertos, lógica difusa, y sistemas de inferencia."
  },
  {
    codigo: "17326",
    importancia: "Gestión de TI",
    recomendacion: "ITIL, COBIT, y gestión de servicios de tecnología."
  },
  {
    codigo: "17327",
    importancia: "Temas avanzados de sistemas",
    recomendacion: "Profundización en temas de investigación actuales."
  },
  {
    codigo: "17328",
    importancia: "Experiencia profesional - Parte 1",
    recomendacion: "Primera experiencia profesional en empresas del sector."
  },
  {
    codigo: "17329",
    importancia: "Cloud computing - RAMA REDES",
    recomendacion: "Tecnologías de virtualización y computación en la nube. AWS, Azure, GCP."
  },
  {
    codigo: "17330",
    importancia: "Desarrollo avanzado - RAMA SOFTWARE",
    recomendacion: "Desarrollo avanzado de soluciones de software. Microservicios y DevOps."
  },
  {
    codigo: "17331",
    importancia: "DevOps web - RAMA WEB",
    recomendacion: "Despliegue de aplicaciones web. Docker, Kubernetes, CI/CD."
  },

  // ==================== SEMESTRE 10 ====================
  {
    codigo: "17225",
    importancia: "Proyecto final de investigación",
    recomendacion: "Culminación del proyecto de tesis. Sustentación final."
  },
  {
    codigo: "17226",
    importancia: "Emprendimiento tecnológico",
    recomendacion: "Creación de startups tecnológicas. Pitch, business model canvas, financiamiento."
  },
  {
    codigo: "17332",
    importancia: "RPA y automatización",
    recomendacion: "Robotic Process Automation. UiPath, Automation Anywhere."
  },
  {
    codigo: "17333",
    importancia: "Data mining y analytics",
    recomendacion: "Técnicas de minería de datos. Python, R, machine learning aplicado."
  },
  {
    codigo: "17334",
    importancia: "Auditoría de sistemas",
    recomendacion: "Auditoría de TI. Normas ISO 27001, controles de seguridad."
  },
  {
    codigo: "17335",
    importancia: "Marco legal tecnológico",
    recomendacion: "Aspectos legales de TI. Protección de datos, propiedad intelectual, delitos informáticos."
  },
  {
    codigo: "17336",
    importancia: "Experiencia profesional - Parte 2",
    recomendacion: "Continuación de prácticas profesionales. Proyectos reales en empresas."
  }
];

/**
 * Función auxiliar para obtener el detalle de un curso por código
 */
export function obtenerDetalleCurso(codigo: string): CursoDetalle | undefined {
  return cursosDetalle.find(c => c.codigo === codigo);
}
