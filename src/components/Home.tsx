/**
 * ============================================
 * Módulo: Página de Inicio
 * Autor: AzDeLid
 * ============================================
 * 
 * Landing page principal con hero section,
 * grid de herramientas, y secciones de contacto.
 * 
 * ============================================
 */

import { ArrowDown, Compass, Map, BookOpen, Sparkles, Calendar, Calculator, Database, Target, Award, Download, Phone } from 'lucide-react';

type Page = 'home' | 'roadmap' | 'tracks' | 'quiz' | 'result' | 'resources' | 'horarios' | 'promedio' | 'cursos' | 'progreso';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A6DFF]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7A5BFF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#56F0C3]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Sparkles className="text-[#56F0C3]" size={16} />
            <span className="text-white/80 text-sm">Plataforma Interactiva de Orientación Académica</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            Explora tu Viaje en{' '}
            <span className="bg-gradient-to-r from-[#4A6DFF] via-[#7A5BFF] to-[#56F0C3] bg-clip-text text-transparent">
              Ingeniería de Sistemas y Computación
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">
            Rutas académicas, cursos, áreas de especialización y tu futuro profesional en un solo lugar
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => onNavigate('roadmap')}
              className="group px-8 py-4 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#4A6DFF]/50 transition-all hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Map size={20} />
              Ver Ruta de Cursos
            </button>
            
            <button
              onClick={() => onNavigate('quiz')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Compass size={20} />
              Encuentra tu Área Ideal
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="text-white/40 mx-auto" size={32} />
          </div>
        </div>
      </section>

      {/* Todas las secciones juntas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white mb-4">Explora Todas las Herramientas</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Todo lo que necesitas para navegar tu carrera universitaria en un solo lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Roadmap Completo */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#4A6DFF]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A6DFF] to-[#7A5BFF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Map className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">Roadmap Completo</h3>
              <p className="text-white/70 text-sm mb-4">
                Visualiza todos los cursos organizados por semestre
              </p>
              <button
                onClick={() => onNavigate('roadmap')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2 text-sm"
              >
                Explorar →
              </button>
            </div>

            {/* Áreas de Especialización */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#7A5BFF]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#7A5BFF] to-[#56F0C3] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">Áreas de Especialización</h3>
              <p className="text-white/70 text-sm mb-4">
                Conoce las tres áreas electivas del 7mo semestre
              </p>
              <button
                onClick={() => onNavigate('tracks')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2 text-sm"
              >
                Comparar →
              </button>
            </div>

            {/* Quiz Interactivo */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#56F0C3]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#56F0C3] to-[#4A6DFF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">Quiz Interactivo</h3>
              <p className="text-white/70 text-sm mb-4">
                Descubre qué área se ajusta mejor a tu perfil
              </p>
              <button
                onClick={() => onNavigate('quiz')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2 text-sm"
              >
                Comenzar →
              </button>
            </div>

            {/* Planificación de Horarios */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#4A6DFF]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A6DFF] to-[#7A5BFF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">Planificación de Horarios</h3>
              <p className="text-white/70 text-sm mb-4">
                Crea y visualiza tu horario semanal
              </p>
              <button
                onClick={() => onNavigate('horarios')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2 text-sm"
              >
                Crear Horario →
              </button>
            </div>

            {/* Calculadora de Promedios */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#7A5BFF]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#7A5BFF] to-[#56F0C3] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">Calculadora de Promedios</h3>
              <p className="text-white/70 text-sm mb-4">
                Calcula tu promedio por unidades
              </p>
              <button
                onClick={() => onNavigate('promedio')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2 text-sm"
              >
                Calcular Notas →
              </button>
            </div>

            {/* Base de Cursos */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#56F0C3]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#56F0C3] to-[#4A6DFF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Database className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">Base de Cursos</h3>
              <p className="text-white/70 text-sm mb-4">
                Información detallada y recomendaciones
              </p>
              <button
                onClick={() => onNavigate('cursos')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2 text-sm"
              >
                Explorar →
              </button>
            </div>

            {/* Simulador de Progreso Académico */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#4A6DFF]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4A6DFF] to-[#56F0C3] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">Simulador de Progreso</h3>
              <p className="text-white/70 text-sm mb-4">
                Rastrea tu avance académico por la carrera
              </p>
              <button
                onClick={() => onNavigate('progreso')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2 text-sm"
              >
                Ver Progreso →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECCIÓN DESCARGAR FUT UNDAC */}
      {/* ============================================ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#4A6DFF]/10 via-[#7A5BFF]/10 to-[#56F0C3]/10 backdrop-blur-lg rounded-3xl border border-[#4A6DFF]/30 p-8 md:p-12 hover:shadow-2xl hover:shadow-[#4A6DFF]/20 transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A6DFF]/20 rounded-full mb-4">
                  <Download className="w-4 h-4 text-[#56F0C3]" />
                  <span className="text-white/80 text-sm font-medium">Documento Oficial</span>
                </div>
                <h2 className="text-3xl md:text-4xl text-white mb-4">
                  Formato Único de Trámite (FUT)
                </h2>
                <p className="text-white/70 text-lg mb-2">
                  Descarga el formato oficial de la UNDAC para realizar tus trámites administrativos
                </p>
                <p className="text-white/50 text-sm">
                  Documento necesario para solicitudes, permisos y otros trámites universitarios
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto text-center md:text-right">
                <a
                  href="https://drive.google.com/file/d/1dQ3IOKSMePSf4sOCzRD2sal5Yri4DliF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#4A6DFF]/50 transition-all hover:scale-105 font-semibold text-lg"
                >
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Descargar FUT</span>
                </a>
                <p className="text-white/40 text-xs text-center mt-3">
                  Formato PDF - Listo para imprimir
                </p>
              </div>
            </div>
            
            {/* Nota informativa eliminada según las instrucciones del usuario */}
          </div>

          {/* Sección de Contacto - Separada */}
          <div className="mt-6 bg-gradient-to-r from-[#56F0C3]/10 via-[#4A6DFF]/10 to-[#7A5BFF]/10 backdrop-blur-lg rounded-3xl border border-[#56F0C3]/30 p-8 md:p-12 hover:shadow-2xl hover:shadow-[#56F0C3]/20 transition-all">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="flex items-center justify-center w-16 h-16 bg-[#56F0C3]/10 rounded-full flex-shrink-0">
                <Phone className="w-8 h-8 text-[#56F0C3]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-2xl md:text-3xl font-semibold mb-3">
                  ¿Dudas o necesitas asesoramiento?
                </h3>
                <p className="text-white/70 text-base md:text-lg">
                  Cualquier duda, necesidad de asesoramiento o apoyo que requieran, pueden contactarme a este número con total confianza.
                </p>
              </div>
              <a
                href="https://wa.me/51934277990"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#56F0C3] to-[#4A6DFF] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#56F0C3]/50 transition-all hover:scale-105 font-semibold text-lg flex-shrink-0"
              >
                <Phone className="w-6 h-6" />
                934 277 990
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white mb-4">Tu Carrera en Números</h2>
            <p className="text-white/70">Todo lo que necesitas saber sobre tu trayectoria académica</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] bg-clip-text text-transparent">10</div>
              <div className="text-white/70">Semestres</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#7A5BFF] to-[#56F0C3] bg-clip-text text-transparent">46</div>
              <div className="text-white/70">Cursos Totales</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#56F0C3] to-[#4A6DFF] bg-clip-text text-transparent">3</div>
              <div className="text-white/70">Áreas Electivas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#4A6DFF] to-[#56F0C3] bg-clip-text text-transparent">∞</div>
              <div className="text-white/70">Posibilidades</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}