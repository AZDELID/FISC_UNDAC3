/**
 * Datos del Quiz Vocacional
 * 25 preguntas organizadas en 4 bloques temáticos (20 principales + 5 opcionales)
 * Las preguntas de escala (2, 5, 8, 11, 14, 17, 22, 25) mantienen orden fijo
 */

import type { Question } from '../types/quiz.types';

export const QUIZ_QUESTIONS: Question[] = [
  // ========================================
  // BLOQUE 1: TU INSTINTO TÉCNICO (5 preguntas)
  // ========================================
  {
    id: 1,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Se cae el internet en tu casa y nadie puede navegar. ¿Qué es lo primero que piensas hacer?',
    answers: [
      { text: 'Revisar el router, el Wi-Fi, los cables o llamar al proveedor', track: 'redes', points: 1 },
      { text: 'Probar si las páginas cargan bien o si el problema es el navegador', track: 'web', points: 1 },
      { text: 'Pensar que puede ser un error del sistema o del programa', track: 'software', points: 1 }
    ]
  },
  {
    id: 2,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: '¿Qué tanto te gusta instalar, configurar o ajustar tecnología, aunque al inicio no funcione?',
    isScale: true,
    scaleType: 'config',
    answers: [
      { text: '1 – Nada: lo evito o me incomoda', scale: { web: 0.5 } },
      { text: '2 – Poco: solo si es obligatorio', scale: { web: 0.3 } },
      { text: '3 – Neutral: me es indiferente', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante: me gusta hacerlo', scale: { redes: 0.5, software: 0.5 } },
      { text: '5 – Mucho: lo disfruto mucho', scale: { redes: 1, software: 0.8 } }
    ]
  },
  {
    id: 3,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Un amigo quiere mejorar su pequeño negocio con tecnología. Tú le propones primero:',
    answers: [
      { text: 'Crear una página web atractiva y fácil de usar', track: 'web', points: 1 },
      { text: 'Desarrollar un sistema para ventas, clientes e inventario', track: 'software', points: 1 },
      { text: 'Configurar servidores, hosting o la nube', track: 'redes', points: 1 }
    ]
  },
  {
    id: 4,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Si te regalaran un curso gratuito, ¿cuál te llamaría más la atención?',
    answers: [
      { text: 'Programación, lógica o arquitectura de software', track: 'software', points: 1 },
      { text: 'Diseño web, UX/UI o interfaces', track: 'web', points: 1 },
      { text: 'Redes, servidores, nube o ciberseguridad', track: 'redes', points: 1 }
    ]
  },
  {
    id: 5,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: '¿Qué tanto te gustan los problemas de lógica y razonamiento, aunque no tengan gráficos?',
    isScale: true,
    scaleType: 'abstract',
    answers: [
      { text: '1 – Nada: no me gustan', scale: { web: 1 } },
      { text: '2 – Poco: los hago por obligación', scale: { web: 0.5 } },
      { text: '3 – Neutral: me da igual', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante: me gustan', scale: { software: 0.7, redes: 0.4 } },
      { text: '5 – Mucho: los disfruto mucho', scale: { software: 1, redes: 0.5 } }
    ]
  },

  // ========================================
  // BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS (5 preguntas)
  // ========================================
  {
    id: 6,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'Una aplicación falla y no funciona bien. ¿Qué piensas primero?',
    answers: [
      { text: 'Hay un error en la lógica o en la base de datos', track: 'software', points: 1 },
      { text: 'El diseño es confuso o la interfaz no se entiende', track: 'web', points: 1 },
      { text: 'El servidor, la red o la conexión están fallando', track: 'redes', points: 1 }
    ]
  },
  {
    id: 7,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: '¿Cuál de estas frases se parece más a tu forma de pensar?',
    answers: [
      { text: '"La experiencia del usuario es lo más importante."', track: 'web', points: 1 },
      { text: '"Lo principal es que el sistema sea estable y no se caiga."', track: 'redes', points: 1 },
      { text: '"La lógica debe ser clara y el código bien organizado."', track: 'software', points: 1 }
    ]
  },
  {
    id: 8,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: '¿Qué tan importante es para ti que algo se vea bonito y ordenado?',
    isScale: true,
    scaleType: 'aesthetic',
    answers: [
      { text: '1 – Nada importante', scale: { redes: 0.3 } },
      { text: '2 – Poco importante', scale: { software: 0.2 } },
      { text: '3 – Me es indiferente', scale: { redes: 0.2, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante importante', scale: { web: 0.7 } },
      { text: '5 – Muy importante', scale: { web: 1 } }
    ]
  },
  {
    id: 9,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'En un trabajo grupal de tecnología con poco tiempo, tú prefieres encargarte de:',
    answers: [
      { text: 'Diseñar las pantallas y la interacción con el usuario', track: 'web', points: 1 },
      { text: 'Programar la lógica y las funciones del sistema', track: 'software', points: 1 },
      { text: 'Configurar el servidor o la infraestructura', track: 'redes', points: 1 }
    ]
  },
  {
    id: 10,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'Cuando usas TikTok, Instagram o YouTube, ¿qué te da más curiosidad técnica?',
    answers: [
      { text: 'Cómo crean animaciones y efectos visuales', track: 'web', points: 1 },
      { text: 'Cómo funcionan los algoritmos de recomendación', track: 'software', points: 1 },
      { text: 'Cómo soportan millones de usuarios sin caerse', track: 'redes', points: 1 }
    ]
  },

  // ========================================
  // BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL (5 preguntas)
  // ========================================
  {
    id: 11,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Qué tan cómodo te sientes usando una consola o terminal solo con teclado?',
    isScale: true,
    scaleType: 'console',
    answers: [
      { text: '1 – Nada cómodo', scale: { web: 0.3 } },
      { text: '2 – Poco cómodo', scale: { web: 0.2 } },
      { text: '3 – Neutral', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante cómodo', scale: { redes: 0.7, software: 0.7 } },
      { text: '5 – Muy cómodo', scale: { redes: 1, software: 1 } }
    ]
  },
  {
    id: 12,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: 'Debes mejorar un sistema de matrícula. ¿Qué priorizas?',
    answers: [
      { text: 'Que no tenga errores en reglas y validaciones', track: 'software', points: 1 },
      { text: 'Que sea fácil de usar desde el celular', track: 'web', points: 1 },
      { text: 'Que soporte muchos usuarios conectados', track: 'redes', points: 1 }
    ]
  },
  {
    id: 13,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Qué tema estudiarías un viernes por la noche sin aburrirte?',
    answers: [
      { text: 'Diseño web, HTML, CSS y animaciones', track: 'web', points: 1 },
      { text: 'Redes, servidores o virtualización', track: 'redes', points: 1 },
      { text: 'Programación y estructuras de datos', track: 'software', points: 1 }
    ]
  },
  {
    id: 14,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Qué tan importante es para ti ver resultados visuales inmediatos cuando programas?',
    isScale: true,
    scaleType: 'visual',
    answers: [
      { text: '1 – Nada importante', scale: { redes: 0.5, software: 0.3 } },
      { text: '2 – Poco importante', scale: { software: 0.4 } },
      { text: '3 – Me es indiferente', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante importante', scale: { web: 0.7 } },
      { text: '5 – Muy importante', scale: { web: 1 } }
    ]
  },
  {
    id: 15,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Cómo te imaginas en tu primer trabajo profesional?',
    answers: [
      { text: 'Administrando servidores o la nube', track: 'redes', points: 1 },
      { text: 'Programando sistemas y resolviendo problemas lógicos', track: 'software', points: 1 },
      { text: 'Diseñando interfaces y experiencia de usuario', track: 'web', points: 1 }
    ]
  },

  // ========================================
  // BLOQUE 4: TU PERSONALIDAD DE TRABAJO (5 preguntas)
  // ========================================
  {
    id: 16,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: 'Tienes una laptop antigua que aún funciona. ¿Qué proyecto te emociona más?',
    answers: [
      { text: 'Convertirla en un servidor con Linux', track: 'redes', points: 1 },
      { text: 'Diseñar un portafolio web', track: 'web', points: 1 },
      { text: 'Automatizar tareas con Python', track: 'software', points: 1 }
    ]
  },
  {
    id: 17,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: '¿Qué tan disciplinado eres siguiendo normas, estándares y procedimientos?',
    isScale: true,
    scaleType: 'discipline',
    answers: [
      { text: '1 – Nada disciplinado', scale: { web: 0.2 } },
      { text: '2 – Poco disciplinado', scale: { software: 0.2 } },
      { text: '3 – Neutral', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante disciplinado', scale: { redes: 0.7, software: 0.5 } },
      { text: '5 – Muy disciplinado', scale: { redes: 1, software: 0.7 } }
    ]
  },
  {
    id: 18,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: 'Debes modernizar una aplicación antigua. ¿Por dónde empiezas?',
    answers: [
      { text: 'Rediseñar completamente la interfaz', track: 'web', points: 1 },
      { text: 'Migrarla a la nube o mejorar su infraestructura', track: 'redes', points: 1 },
      { text: 'Refactorizar el código para hacerlo más legible', track: 'software', points: 1 }
    ]
  },
  {
    id: 19,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: '¿Qué tipo de video técnico verías completo sin aburrirte?',
    answers: [
      { text: 'Recreando la interfaz de Netflix o Spotify', track: 'web', points: 1 },
      { text: 'Resolviendo retos de programación', track: 'software', points: 1 },
      { text: 'Montando un servidor o laboratorio en casa', track: 'redes', points: 1 }
    ]
  },
  {
    id: 20,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: 'Cuando trabajas en equipo, te sientes más cómodo:',
    answers: [
      { text: 'Revisando diseños y prototipos', track: 'web', points: 1 },
      { text: 'Organizando la lógica y tareas del proyecto', track: 'software', points: 1 },
      { text: 'Asegurando que la infraestructura funcione', track: 'redes', points: 1 }
    ]
  },

  // ========================================
  // 🔎 PREGUNTAS OPCIONALES (MAYOR PRECISIÓN) - 5 preguntas adicionales
  // ========================================
  {
    id: 21,
    block: '🔍 PREGUNTAS OPCIONALES: MAYOR PRECISIÓN',
    question: 'Cuando algo no funciona, ¿qué haces primero?',
    answers: [
      { text: 'Pienso en la experiencia del usuario', track: 'web', points: 1 },
      { text: 'Analizo la lógica del sistema', track: 'software', points: 1 },
      { text: 'Reviso red, servicios o configuración', track: 'redes', points: 1 }
    ]
  },
  {
    id: 22,
    block: '🔍 PREGUNTAS OPCIONALES: MAYOR PRECISIÓN',
    question: '¿Qué tanto disfrutas optimizar o mejorar algo que ya funciona?',
    isScale: true,
    scaleType: 'optimization',
    answers: [
      { text: '1 – Nada', scale: { web: 0.2 } },
      { text: '2 – Poco', scale: { web: 0.3 } },
      { text: '3 – Neutral', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante', scale: { redes: 0.7, software: 0.7 } },
      { text: '5 – Mucho', scale: { redes: 1, software: 1 } }
    ]
  },
  {
    id: 23,
    block: '🔍 PREGUNTAS OPCIONALES: MAYOR PRECISIÓN',
    question: '¿Qué tipo de error te frustra más?',
    answers: [
      { text: 'Que la interfaz sea confusa', track: 'web', points: 1 },
      { text: 'Que la lógica falle', track: 'software', points: 1 },
      { text: 'Que el sistema se caiga', track: 'redes', points: 1 }
    ]
  },
  {
    id: 24,
    block: '🔍 PREGUNTAS OPCIONALES: MAYOR PRECISIÓN',
    question: '¿Qué te genera más satisfacción?',
    answers: [
      { text: 'Ver una interfaz terminada', track: 'web', points: 1 },
      { text: 'Ver el sistema funcionando correctamente', track: 'software', points: 1 },
      { text: 'Ver todo estable y rápido', track: 'redes', points: 1 }
    ]
  },
  {
    id: 25,
    block: '🔍 PREGUNTAS OPCIONALES: MAYOR PRECISIÓN',
    question: '¿Qué tan cómodo te sientes aprendiendo cosas sin ver resultados visuales inmediatos?',
    isScale: true,
    scaleType: 'abstract_learning',
    answers: [
      { text: '1 – Nada cómodo', scale: { web: 0.8 } },
      { text: '2 – Poco cómodo', scale: { web: 0.5 } },
      { text: '3 – Neutral', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante cómodo', scale: { redes: 0.7, software: 0.8 } },
      { text: '5 – Muy cómodo', scale: { redes: 1, software: 1 } }
    ]
  }
];

/**
 * Configuración del sistema de puntuación
 */
export const QUIZ_CONFIG = {
  totalQuestions: 25,
  mainQuestions: 20,
  optionalQuestions: 5,
  scaleQuestionIds: [2, 5, 8, 11, 14, 17, 22, 25], // Preguntas con escala que no se mezclan
  blocks: [
    { id: 1, name: 'Tu Instinto Técnico', emoji: '🎯', questionRange: [1, 5] },
    { id: 2, name: 'Mentalidad y Resolución de Problemas', emoji: '🧠', questionRange: [6, 10] },
    { id: 3, name: 'Preferencias y Futuro Profesional', emoji: '💻', questionRange: [11, 15] },
    { id: 4, name: 'Tu Personalidad de Trabajo', emoji: '🎯', questionRange: [16, 20] },
    { id: 5, name: 'Preguntas Opcionales: Mayor Precisión', emoji: '🔍', questionRange: [21, 25] },
  ],
} as const;
