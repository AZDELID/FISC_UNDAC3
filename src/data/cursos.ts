/**
 * ============================================
 * Base de Datos de Cursos
 * Autor: AzDeLid
 * ============================================
 * 
 * Contiene información completa de los 46 cursos
 * de la carrera de Ingeniería de Sistemas y Computación.
 * 
 * ============================================
 */

// Lista completa de cursos de la carrera
// Total: 46 cursos distribuidos en 10 semestres
export const cursosData = [
  // Semestre 1
  {
    "codigo": "17101",
    "nombre": "Matemática Básica",
    "semestre": 1,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17203"],
    "recomendacion": "Es importante comprender álgebra básica, ecuaciones y manipulación algebraica, ya que estos conceptos se utilizarán en múltiples cursos de matemática.",
    "importancia": "Base para cursos matemáticos posteriores"
  },
  {
    "codigo": "17102",
    "nombre": "Comunicación Oral y Escrita",
    "semestre": 1,
    "creditos": 2,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Es importante desarrollar habilidades de redacción técnica que serán necesarias en informes, proyectos y tesis.",
    "importancia": "Esencial para comunicación profesional"
  },
  {
    "codigo": "17103",
    "nombre": "Matemática Superior",
    "semestre": 1,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso importante para fortalecer habilidades matemáticas utilizadas en cursos avanzados de ingeniería.",
    "importancia": "Refuerzo matemático general"
  },
  {
    "codigo": "17104",
    "nombre": "Física General",
    "semestre": 1,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17205"],
    "recomendacion": "Se recomienda reforzar conceptos de trigonometría y vectores. Este curso es base para Física I.",
    "importancia": "Fundamento para física aplicada"
  },
  {
    "codigo": "17201",
    "nombre": "Cálculo Diferencial",
    "semestre": 1,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17202"],
    "recomendacion": "Se recomienda dominar funciones algebraicas y conceptos básicos de límites. Este curso es fundamental para comprender cursos posteriores como cálculo integral y cálculo multivariable.",
    "importancia": "Fundamental para ramas matemáticas avanzadas"
  },
  {
    "codigo": "17301",
    "nombre": "Algoritmos",
    "semestre": 1,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17302"],
    "recomendacion": "Este curso introduce el pensamiento algorítmico. Es fundamental para programación, estructuras de datos y desarrollo de software.",
    "importancia": "Base fundamental de la programación"
  },

  // Semestre 2
  {
    "codigo": "17105",
    "nombre": "Química General",
    "semestre": 2,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso de formación científica básica.",
    "importancia": "Fundamentos científicos"
  },
  {
    "codigo": "17106",
    "nombre": "Realidad Nacional",
    "semestre": 2,
    "creditos": 1,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso orientado a comprender el contexto social y económico del país.",
    "importancia": "Formación ciudadana"
  },
  {
    "codigo": "17107",
    "nombre": "Estadística General",
    "semestre": 2,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17207"],
    "recomendacion": "Este curso es fundamental para análisis de datos, inteligencia artificial e investigación.",
    "importancia": "Base para análisis de datos"
  },
  {
    "codigo": "17108",
    "nombre": "Métodos de Estudio del Trabajo Universitario",
    "semestre": 2,
    "creditos": 2,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Permite desarrollar técnicas de organización y aprendizaje académico.",
    "importancia": "Herramientas para el éxito académico"
  },
  {
    "codigo": "17110",
    "nombre": "Taller de Arte Danza",
    "semestre": 2,
    "creditos": 1,
    "tipo": "Electivo",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso orientado al desarrollo integral del estudiante.",
    "importancia": "Formación integral"
  },
  {
    "codigo": "17202",
    "nombre": "Cálculo Integral",
    "semestre": 2,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17201"],
    "desbloquea": ["17204"],
    "recomendacion": "Dominar derivadas y límites facilitará el aprendizaje de integrales.",
    "importancia": "Continuación esencial del cálculo"
  },
  {
    "codigo": "17302",
    "nombre": "Lenguaje de Programación I",
    "semestre": 2,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17301"],
    "desbloquea": ["17303"],
    "recomendacion": "Es importante comprender estructuras de control, variables y lógica de programación.",
    "importancia": "Primera experiencia práctica en código"
  },

  // Semestre 3
  {
    "codigo": "17112",
    "nombre": "Ecología",
    "semestre": 3,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso de formación general.",
    "importancia": "Conciencia ambiental"
  },
  {
    "codigo": "17113",
    "nombre": "Inglés Básico",
    "semestre": 3,
    "creditos": 2,
    "tipo": "Electivo",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "El dominio del inglés es fundamental en la ingeniería de sistemas debido a la gran cantidad de documentación técnica disponible en este idioma.",
    "importancia": "Esencial para documentación técnica"
  },
  {
    "codigo": "17114",
    "nombre": "Quechua",
    "semestre": 3,
    "creditos": 2,
    "tipo": "Electivo",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso orientado a la preservación cultural.",
    "importancia": "Formación cultural"
  },
  {
    "codigo": "17115",
    "nombre": "Educación Física",
    "semestre": 3,
    "creditos": 1,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso orientado a la formación integral.",
    "importancia": "Salud y bienestar"
  },
  {
    "codigo": "17203",
    "nombre": "Matemática Básica II",
    "semestre": 3,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17101"],
    "desbloquea": [],
    "recomendacion": "Continuación de álgebra y matemática aplicada.",
    "importancia": "Profundización matemática"
  },
  {
    "codigo": "17204",
    "nombre": "Cálculo Multivariable",
    "semestre": 3,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17202"],
    "desbloquea": ["17209"],
    "recomendacion": "Se recomienda dominar integrales y derivadas parciales.",
    "importancia": "Cálculo avanzado aplicado"
  },
  {
    "codigo": "17205",
    "nombre": "Física I",
    "semestre": 3,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17104"],
    "desbloquea": ["17208"],
    "recomendacion": "Aplicación de conceptos físicos fundamentales.",
    "importancia": "Física aplicada a ingeniería"
  },
  {
    "codigo": "17303",
    "nombre": "Lenguaje de Programación II",
    "semestre": 3,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17302"],
    "desbloquea": [],
    "recomendacion": "Consolidar conocimientos de programación estructurada y modular.",
    "importancia": "Programación intermedia"
  },

  // Semestre 4
  {
    "codigo": "17116",
    "nombre": "Metodología de la Investigación Científica",
    "semestre": 4,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17222"],
    "recomendacion": "Curso importante para la elaboración de proyectos de investigación.",
    "importancia": "Base para investigación académica"
  },
  {
    "codigo": "17206",
    "nombre": "Matemática Discreta",
    "semestre": 4,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso extremadamente importante para estructuras de datos, algoritmos y teoría de la computación.",
    "importancia": "Base de ciencias de la computación"
  },
  {
    "codigo": "17207",
    "nombre": "Inferencia Estadística",
    "semestre": 4,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17107"],
    "desbloquea": [],
    "recomendacion": "Estadística aplicada al análisis y toma de decisiones.",
    "importancia": "Análisis estadístico avanzado"
  },
  {
    "codigo": "17208",
    "nombre": "Electrónica I",
    "semestre": 4,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17205"],
    "desbloquea": ["17213"],
    "recomendacion": "Introduce conceptos de hardware que serán utilizados en arquitectura de computadoras.",
    "importancia": "Fundamentos de hardware"
  },
  {
    "codigo": "17209",
    "nombre": "Investigación de Operaciones I",
    "semestre": 4,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17204"],
    "desbloquea": ["17212"],
    "recomendacion": "Curso fundamental para optimización, modelamiento matemático y toma de decisiones.",
    "importancia": "Optimización y decisiones"
  },
  {
    "codigo": "17210",
    "nombre": "Economía",
    "semestre": 4,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Permite comprender principios económicos aplicados a organizaciones.",
    "importancia": "Gestión y negocios"
  },
  {
    "codigo": "17304",
    "nombre": "Teoría de la Computación",
    "semestre": 4,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17305"],
    "recomendacion": "Curso fundamental para comprender autómatas, lenguajes formales y fundamentos de la computación.",
    "importancia": "Fundamentos teóricos de la computación"
  },

  // Semestre 5
  {
    "codigo": "17211",
    "nombre": "Teoría de Sistemas",
    "semestre": 5,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Curso fundamental para comprender el enfoque sistémico en la ingeniería.",
    "importancia": "Pensamiento sistémico"
  },
  {
    "codigo": "17212",
    "nombre": "Investigación de Operaciones II",
    "semestre": 5,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17209"],
    "desbloquea": ["17310"],
    "recomendacion": "Profundiza en técnicas de optimización avanzadas.",
    "importancia": "Optimización avanzada"
  },
  {
    "codigo": "17213",
    "nombre": "Electrónica II",
    "semestre": 5,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17208"],
    "desbloquea": ["17332"],
    "recomendacion": "Ampliación de conceptos electrónicos aplicados.",
    "importancia": "Hardware avanzado"
  },
  {
    "codigo": "17214",
    "nombre": "Contabilidad y Costos",
    "semestre": 5,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17216"],
    "recomendacion": "Importante para comprender la gestión financiera en proyectos.",
    "importancia": "Gestión financiera"
  },
  {
    "codigo": "17215",
    "nombre": "Administración y Calidad Total",
    "semestre": 5,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17218"],
    "recomendacion": "Fundamentos de gestión y calidad en organizaciones.",
    "importancia": "Gestión organizacional"
  },
  {
    "codigo": "17305",
    "nombre": "Arquitectura del Computador",
    "semestre": 5,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17304"],
    "desbloquea": ["17307"],
    "recomendacion": "Curso fundamental para comprender cómo funcionan los computadores a nivel de hardware.",
    "importancia": "Fundamentos de hardware computacional"
  },
  {
    "codigo": "17306",
    "nombre": "Sistemas de Bases I",
    "semestre": 5,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17301"],
    "desbloquea": ["17309"],
    "recomendacion": "Curso crucial para el diseño y gestión de bases de datos.",
    "importancia": "Gestión de datos"
  },

  // Semestre 6
  {
    "codigo": "17216",
    "nombre": "Gestión de la Cadena de Suministro",
    "semestre": 6,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17214"],
    "desbloquea": ["17219"],
    "recomendacion": "Importante para comprender logística y gestión de operaciones.",
    "importancia": "Gestión de operaciones"
  },
  {
    "codigo": "17217",
    "nombre": "Comportamiento y Desarrollo Organizacional",
    "semestre": 6,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Comprensión del factor humano en organizaciones.",
    "importancia": "Gestión del talento humano"
  },
  {
    "codigo": "17307",
    "nombre": "Sistemas Operativos",
    "semestre": 6,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17305"],
    "desbloquea": ["17312"],
    "recomendacion": "Curso fundamental para comprender cómo funcionan los sistemas operativos.",
    "importancia": "Gestión de recursos computacionales"
  },
  {
    "codigo": "17308",
    "nombre": "Ingeniería de Software I",
    "semestre": 6,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17301"],
    "desbloquea": ["17314"],
    "recomendacion": "Introduce metodologías de desarrollo de software.",
    "importancia": "Desarrollo de software profesional"
  },
  {
    "codigo": "17309",
    "nombre": "Sistemas de Bases II",
    "semestre": 6,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17306"],
    "desbloquea": [],
    "recomendacion": "Profundiza en administración y optimización de bases de datos.",
    "importancia": "Gestión avanzada de datos"
  },
  {
    "codigo": "17310",
    "nombre": "Simulación",
    "semestre": 6,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17212"],
    "desbloquea": [],
    "recomendacion": "Modelamiento y simulación de sistemas complejos.",
    "importancia": "Modelamiento de sistemas"
  },
  {
    "codigo": "17311",
    "nombre": "Herramientas Tecnológicas para la Minería",
    "semestre": 6,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Aplicación de tecnologías en el sector minero.",
    "importancia": "Tecnología aplicada a minería"
  },

  // Semestre 7
  {
    "codigo": "17218",
    "nombre": "Planeamiento y Dirección Estratégica",
    "semestre": 7,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17215"],
    "desbloquea": ["17220"],
    "recomendacion": "Desarrollo de habilidades de planificación estratégica.",
    "importancia": "Gestión estratégica"
  },
  {
    "codigo": "17219",
    "nombre": "Administración Financiera",
    "semestre": 7,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17216"],
    "desbloquea": ["17221"],
    "recomendacion": "Gestión financiera de proyectos y organizaciones.",
    "importancia": "Finanzas corporativas"
  },
  {
    "codigo": "17312",
    "nombre": "Redes de Computadoras I",
    "semestre": 7,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17307"],
    "desbloquea": ["17319"],
    "recomendacion": "Fundamentos de redes y comunicación de datos.",
    "importancia": "Conectividad y redes"
  },
  {
    "codigo": "17313",
    "nombre": "Inteligencia de Negocios",
    "semestre": 7,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17333"],
    "recomendacion": "Análisis de datos para toma de decisiones empresariales.",
    "importancia": "Business Intelligence"
  },
  {
    "codigo": "17314",
    "nombre": "Ingeniería de Software II",
    "semestre": 7,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17308"],
    "desbloquea": ["17321"],
    "recomendacion": "Metodologías avanzadas de desarrollo de software.",
    "importancia": "Desarrollo de software avanzado"
  },
  {
    "codigo": "17315",
    "nombre": "Diseño de Lenguaje de Programación",
    "semestre": 7,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17301"],
    "desbloquea": [],
    "recomendacion": "Comprensión del diseño e implementación de lenguajes.",
    "importancia": "Teoría de lenguajes"
  },
  {
    "codigo": "17316",
    "nombre": "Comunicaciones y Enrutamiento de Redes",
    "semestre": 7,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": ["17312"],
    "desbloquea": [],
    "recomendacion": "Especialización en protocolos de red y enrutamiento.",
    "importancia": "Redes avanzadas"
  },
  {
    "codigo": "17317",
    "nombre": "Metodologías Ágiles de Desarrollo de Software",
    "semestre": 7,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": [],
    "desbloquea": ["17323"],
    "recomendacion": "Metodologías modernas como Scrum y Kanban.",
    "importancia": "Desarrollo ágil"
  },
  {
    "codigo": "17318",
    "nombre": "Desarrollo Web en Entorno Cliente",
    "semestre": 7,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": [],
    "desbloquea": ["17324"],
    "recomendacion": "Desarrollo frontend con tecnologías modernas.",
    "importancia": "Desarrollo web frontend"
  },

  // Semestre 8
  {
    "codigo": "17220",
    "nombre": "Gestión de Proyectos",
    "semestre": 8,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17218"],
    "desbloquea": [],
    "recomendacion": "Metodologías de gestión de proyectos como PMBOK.",
    "importancia": "Project Management"
  },
  {
    "codigo": "17221",
    "nombre": "Mercadotecnia",
    "semestre": 8,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17219"],
    "desbloquea": ["17224"],
    "recomendacion": "Estrategias de marketing para productos y servicios.",
    "importancia": "Marketing y ventas"
  },
  {
    "codigo": "17222",
    "nombre": "Seminario de Tesis I",
    "semestre": 8,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17116"],
    "desbloquea": ["17223"],
    "recomendacion": "Inicio del proyecto de investigación de tesis.",
    "importancia": "Investigación de tesis"
  },
  {
    "codigo": "17319",
    "nombre": "Redes de Computadoras II",
    "semestre": 8,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17312"],
    "desbloquea": ["17326"],
    "recomendacion": "Profundización en arquitecturas de red y protocolos.",
    "importancia": "Redes avanzadas"
  },
  {
    "codigo": "17320",
    "nombre": "Sistemas de Información Gerencial",
    "semestre": 8,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": ["17225"],
    "recomendacion": "Sistemas de información para la toma de decisiones.",
    "importancia": "Sistemas gerenciales"
  },
  {
    "codigo": "17321",
    "nombre": "Tópicos de Ingeniería de Sistemas I",
    "semestre": 8,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": ["17314"],
    "desbloquea": ["17327"],
    "recomendacion": "Temas actuales en ingeniería de sistemas.",
    "importancia": "Tendencias tecnológicas"
  },
  {
    "codigo": "17322",
    "nombre": "Administración de Servidores",
    "semestre": 8,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": ["17319"],
    "desbloquea": ["17329", "17328"],
    "recomendacion": "Gestión y administración de servidores.",
    "importancia": "Administración de infraestructura"
  },
  {
    "codigo": "17323",
    "nombre": "Desarrollo de Soluciones I",
    "semestre": 8,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": ["17317"],
    "desbloquea": ["17330"],
    "recomendacion": "Desarrollo de soluciones de software empresarial.",
    "importancia": "Desarrollo empresarial"
  },
  {
    "codigo": "17324",
    "nombre": "Desarrollo Web en Entorno Servidor",
    "semestre": 8,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": ["17318"],
    "desbloquea": ["17331"],
    "recomendacion": "Desarrollo backend con tecnologías modernas.",
    "importancia": "Desarrollo web backend"
  },

  // Semestre 9
  {
    "codigo": "17223",
    "nombre": "Seminario de Tesis II",
    "semestre": 9,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17222"],
    "desbloquea": ["17225"],
    "recomendacion": "Continuación y desarrollo del proyecto de tesis.",
    "importancia": "Desarrollo de tesis"
  },
  {
    "codigo": "17224",
    "nombre": "Rediseño de Procesos",
    "semestre": 9,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17221"],
    "desbloquea": ["17226"],
    "recomendacion": "Optimización y rediseño de procesos empresariales.",
    "importancia": "Mejora de procesos"
  },
  {
    "codigo": "17225",
    "nombre": "Sistemas Expertos",
    "semestre": 9,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17320"],
    "desbloquea": [],
    "recomendacion": "Sistemas basados en conocimiento e inteligencia artificial.",
    "importancia": "Inteligencia artificial"
  },
  {
    "codigo": "17326",
    "nombre": "Administración de Tecnologías de la Información",
    "semestre": 9,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17319"],
    "desbloquea": ["17334"],
    "recomendacion": "Gestión estratégica de TI en organizaciones.",
    "importancia": "Gestión de TI"
  },
  {
    "codigo": "17327",
    "nombre": "Tópicos de Ingeniería de Sistemas II",
    "semestre": 9,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17321"],
    "desbloquea": [],
    "recomendacion": "Temas avanzados y actuales en ingeniería de sistemas.",
    "importancia": "Tendencias avanzadas"
  },
  {
    "codigo": "17328",
    "nombre": "Prácticas Preprofesionales I",
    "semestre": 9,
    "creditos": 2,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17322"],
    "desbloquea": ["17336"],
    "recomendacion": "Primera experiencia profesional en empresas.",
    "importancia": "Experiencia profesional"
  },
  {
    "codigo": "17329",
    "nombre": "Virtualización y Servicios en Cloud",
    "semestre": 9,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": ["17322"],
    "desbloquea": [],
    "recomendacion": "Tecnologías de virtualización y computación en la nube.",
    "importancia": "Cloud computing"
  },
  {
    "codigo": "17330",
    "nombre": "Desarrollo de Soluciones II",
    "semestre": 9,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": ["17323"],
    "desbloquea": [],
    "recomendacion": "Desarrollo avanzado de soluciones de software.",
    "importancia": "Desarrollo avanzado"
  },
  {
    "codigo": "17331",
    "nombre": "Despliegue de Aplicaciones Web",
    "semestre": 9,
    "creditos": 3,
    "tipo": "Electivo",
    "prerrequisitos": ["17324"],
    "desbloquea": [],
    "recomendacion": "Deployment y DevOps para aplicaciones web.",
    "importancia": "DevOps"
  },

  // Semestre 10
  {
    "codigo": "17401",
    "nombre": "Trabajo de Investigación",
    "semestre": 10,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17223"],
    "desbloquea": [],
    "recomendacion": "Culminación del proyecto de investigación.",
    "importancia": "Proyecto final"
  },
  {
    "codigo": "17226",
    "nombre": "Emprendimiento",
    "semestre": 10,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17224"],
    "desbloquea": [],
    "recomendacion": "Desarrollo de habilidades emprendedoras.",
    "importancia": "Emprendimiento"
  },
  {
    "codigo": "17332",
    "nombre": "Automatización de Procesos",
    "semestre": 10,
    "creditos": 4,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17213"],
    "desbloquea": [],
    "recomendacion": "Automatización industrial y de procesos.",
    "importancia": "Automatización"
  },
  {
    "codigo": "17333",
    "nombre": "Minería de Datos",
    "semestre": 10,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17313"],
    "desbloquea": [],
    "recomendacion": "Técnicas de análisis y extracción de conocimiento.",
    "importancia": "Data mining"
  },
  {
    "codigo": "17334",
    "nombre": "Auditoría de Tecnologías de la Información",
    "semestre": 10,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17326"],
    "desbloquea": [],
    "recomendacion": "Auditoría y evaluación de sistemas de TI.",
    "importancia": "Auditoría de TI"
  },
  {
    "codigo": "17335",
    "nombre": "Derecho Informático",
    "semestre": 10,
    "creditos": 3,
    "tipo": "Obligatorio",
    "prerrequisitos": [],
    "desbloquea": [],
    "recomendacion": "Aspectos legales de la tecnología y sistemas.",
    "importancia": "Marco legal"
  },
  {
    "codigo": "17336",
    "nombre": "Prácticas Preprofesionales II",
    "semestre": 10,
    "creditos": 2,
    "tipo": "Obligatorio",
    "prerrequisitos": ["17328"],
    "desbloquea": [],
    "recomendacion": "Continuación de experiencia profesional.",
    "importancia": "Experiencia profesional avanzada"
  }
];