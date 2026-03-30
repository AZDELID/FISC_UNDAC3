/**
 * ============================================
 * Módulo: Quiz Vocacional Interactivo
 * Autor: AzDeLid
 * ============================================
 * 
 * Sistema de orientación vocacional con 25 preguntas
 * para determinar el área de especialización ideal.
 * 
 * ============================================
 */

import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface QuizProps {
  onComplete: (result: { track: string; scores: { redes: number; software: number; web: number } }) => void;
}

interface Answer {
  text: string;
  track?: string;
  points?: number;
  scale?: {
    redes?: number;
    software?: number;
    web?: number;
  };
}

interface Question {
  id: number;
  block: string;
  question: string;
  isScale?: boolean;
  scaleType?: 'config' | 'abstract' | 'aesthetic' | 'console' | 'visual' | 'discipline';
  answers: Answer[];
}

// Quiz questions data with 20 questions in 4 blocks
const questions: Question[] = [
  // BLOQUE 1: TU INSTINTO TÉCNICO
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

  // BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS
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

  // BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL
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

  // BLOQUE 4: TU PERSONALIDAD DE TRABAJO
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

  // PREGUNTAS OPCIONALES (MAYOR PRECISIÓN)
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
    scaleType: 'discipline',
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
    scaleType: 'abstract',
    answers: [
      { text: '1 – Nada cómodo', scale: { web: 0.8 } },
      { text: '2 – Poco cómodo', scale: { web: 0.5 } },
      { text: '3 – Neutral', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4 – Bastante cómodo', scale: { redes: 0.7, software: 0.8 } },
      { text: '5 – Muy cómodo', scale: { redes: 1, software: 1 } }
    ]
  }
];

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ redes: 0, software: 0, web: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>([]);
  const [answerMapping, setAnswerMapping] = useState<number[]>([]);

  // Shuffle answers when question changes
  const shuffleAnswers = (answers: Answer[], questionIndex: number) => {
    // Don't shuffle if it's a scale question
    if (questions[questionIndex]?.isScale) {
      setAnswerMapping(answers.map((_, idx) => idx));
      setShuffledAnswers(answers);
      return;
    }
    
    const indices = answers.map((_, idx) => idx);
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setAnswerMapping(indices);
    setShuffledAnswers(indices.map(idx => answers[idx]));
  };

  // Initialize shuffled answers for first question
  useState(() => {
    if (questions.length > 0) {
      shuffleAnswers(questions[0].answers, 0);
    }
  });

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    // Get the original answer index from the shuffled position
    const originalIndex = answerMapping[selectedAnswer];
    const answer = questions[currentQuestion].answers[originalIndex];
    const newScores = { ...scores };
    
    // Handle different answer types
    if (answer.track && answer.points) {
      // Simple track-based answer
      if (answer.track === 'redes') newScores.redes += answer.points;
      else if (answer.track === 'software') newScores.software += answer.points;
      else if (answer.track === 'web') newScores.web += answer.points;
    } else if (answer.scale) {
      // Scale-based answer
      if (answer.scale.redes) newScores.redes += answer.scale.redes;
      if (answer.scale.software) newScores.software += answer.scale.software;
      if (answer.scale.web) newScores.web += answer.scale.web;
    }

    setScores(newScores);

    // Check if quiz is complete
    if (currentQuestion === questions.length - 1) {
      // Calculate winner
      const maxScore = Math.max(newScores.redes, newScores.software, newScores.web);
      let track = 'redes';
      if (newScores.software === maxScore) track = 'software';
      else if (newScores.web === maxScore) track = 'web';
      
      onComplete({ track, scores: newScores });
    } else {
      // Animate to next question
      setIsAnimating(true);
      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        shuffleAnswers(questions[nextQuestion].answers, nextQuestion);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setSelectedAnswer(null);
        shuffleAnswers(questions[currentQuestion - 1].answers, currentQuestion - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  // Show block header if it's the first question of a new block
  const showBlockHeader = currentQuestion === 0 || 
    questions[currentQuestion].block !== questions[currentQuestion - 1]?.block;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl text-white mb-4">Descubre tu Área Ideal</h1>
          <p className="text-white/70 text-lg">
            25 preguntas para encontrar tu especialización
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60 text-sm">Pregunta {currentQuestion + 1} de {questions.length}</span>
            <span className="text-white/60 text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4A6DFF] via-[#7A5BFF] to-[#56F0C3] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Block Header */}
        {showBlockHeader && (
          <div className="mb-6 text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#4A6DFF]/20 to-[#7A5BFF]/20 border border-[#4A6DFF]/30 rounded-2xl">
              <span className="text-white text-lg">{question.block}</span>
            </div>
          </div>
        )}

        {/* Question Card */}
        <div
          className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Question Number Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4A6DFF] to-[#7A5BFF] rounded-xl flex items-center justify-center text-white text-xl">
              {currentQuestion + 1}
            </div>
            {question.isScale && (
              <span className="px-3 py-1 bg-[#7A5BFF]/20 border border-[#7A5BFF]/30 text-[#7A5BFF] rounded-full text-sm">
                📊 Escala 1-5
              </span>
            )}
          </div>

          {/* Question Text */}
          <h2 className="text-2xl md:text-3xl text-white mb-8">{question.question}</h2>

          {/* Answers */}
          <div className="space-y-4 mb-8">
            {shuffledAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all hover:scale-[1.02] ${
                  selectedAnswer === index
                    ? 'bg-gradient-to-r from-[#4A6DFF]/20 to-[#7A5BFF]/20 border-[#4A6DFF] shadow-lg shadow-[#4A6DFF]/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all ${
                      selectedAnswer === index
                        ? 'bg-[#4A6DFF] border-[#4A6DFF]'
                        : 'border-white/30'
                    }`}
                  >
                    {selectedAnswer === index && (
                      <CheckCircle className="text-white" size={20} />
                    )}
                  </div>
                  <span className="text-white text-lg flex-1">{answer.text}</span>
                  {question.isScale && (
                    <span className="text-white/40">
                      {'⭐'.repeat(index + 1)}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Anterior
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="px-6 py-3 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-xl hover:shadow-lg hover:shadow-[#4A6DFF]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? 'Ver Resultados' : 'Siguiente'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Quiz Info */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm">
            Tus respuestas nos ayudarán a recomendarte el área más adecuada para tu perfil profesional
          </p>
        </div>
      </div>
    </div>
  );
}