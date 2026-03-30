import { useState, useMemo } from "react";
import { Award, CheckCircle, Lock, TrendingUp, BookOpen, Target, AlertCircle } from "lucide-react";
import { cursosData } from "../data/cursos";

// Definición de las ramas electivas
const RAMAS_ELECTIVAS = {
  redes: {
    nombre: "Redes y Servidores",
    cursos: [
      "17316", // Comunicaciones y Enrutamiento de Redes (Sem 7)
      "17322", // Administración de Servidores (Sem 8)
      "17329"  // Virtualización y Servicios en Cloud (Sem 9)
    ],
    color: "#4A6DFF"
  },
  desarrollo: {
    nombre: "Desarrollo de Software",
    cursos: [
      "17317", // Metodologías Ágiles de Desarrollo de Software (Sem 7)
      "17323", // Desarrollo de Soluciones I (Sem 8)
      "17330"  // Desarrollo de Soluciones II (Sem 9)
    ],
    color: "#7A5BFF"
  },
  web: {
    nombre: "Desarrollo Web",
    cursos: [
      "17318", // Desarrollo Web en Entorno Cliente (Sem 7)
      "17324", // Desarrollo Web en Entorno Servidor (Sem 8)
      "17331"  // Despliegue de Aplicaciones Web (Sem 9)
    ],
    color: "#56F0C3"
  }
};

export function ProgresoAcademico() {
  const [cursosCompletados, setCursosCompletados] = useState<string[]>([]);
  const [ramaSeleccionada, setRamaSeleccionada] = useState<string | null>(null);

  // Detectar automáticamente la rama seleccionada según los cursos completados
  useMemo(() => {
    if (ramaSeleccionada) return; // Si ya hay una rama seleccionada manualmente, no detectar

    for (const [key, rama] of Object.entries(RAMAS_ELECTIVAS)) {
      // Si ha completado el primer curso de alguna rama, seleccionar automáticamente esa rama
      if (cursosCompletados.includes(rama.cursos[0])) {
        setRamaSeleccionada(key);
        break;
      }
    }
  }, [cursosCompletados, ramaSeleccionada]);

  const toggleCurso = (codigo: string) => {
    // Verificar si es un curso electivo
    const esElectivo = Object.values(RAMAS_ELECTIVAS).some(rama => 
      rama.cursos.includes(codigo)
    );

    if (esElectivo) {
      // Si ya está completado, permitir desmarcar
      if (cursosCompletados.includes(codigo)) {
        setCursosCompletados(prev => prev.filter(c => c !== codigo));
        
        // Si desmarcamos todos los cursos de la rama, limpiar selección
        if (ramaSeleccionada) {
          const cursosRama = RAMAS_ELECTIVAS[ramaSeleccionada as keyof typeof RAMAS_ELECTIVAS].cursos;
          const quedanCursosRama = cursosCompletados.filter(c => 
            cursosRama.includes(c) && c !== codigo
          ).length > 0;
          
          if (!quedanCursosRama) {
            setRamaSeleccionada(null);
          }
        }
        return;
      }

      // Si es el primer curso de semestre 7, seleccionar la rama
      const ramaDelCurso = Object.entries(RAMAS_ELECTIVAS).find(([_, rama]) => 
        rama.cursos.includes(codigo)
      );

      if (ramaDelCurso && !ramaSeleccionada) {
        setRamaSeleccionada(ramaDelCurso[0]);
      }

      // Solo permitir marcar si es de la rama seleccionada o si no hay rama seleccionada
      if (!ramaSeleccionada || ramaDelCurso?.[0] === ramaSeleccionada) {
        setCursosCompletados(prev => [...prev, codigo]);
      }
    } else {
      // Para cursos no electivos, comportamiento normal
      setCursosCompletados((prev) =>
        prev.includes(codigo)
          ? prev.filter((c) => c !== codigo)
          : [...prev, codigo]
      );
    }
  };

  // Función para verificar si un curso está bloqueado por la rama electiva
  const estaBloqueadoPorRama = (codigo: string): boolean => {
    const esElectivo = Object.values(RAMAS_ELECTIVAS).some(rama => 
      rama.cursos.includes(codigo)
    );

    if (!esElectivo || !ramaSeleccionada) return false;

    const ramaDelCurso = Object.entries(RAMAS_ELECTIVAS).find(([_, rama]) => 
      rama.cursos.includes(codigo)
    );

    return ramaDelCurso ? ramaDelCurso[0] !== ramaSeleccionada : false;
  };

  const estadisticas = useMemo(() => {
    const totalCursos = cursosData.length;
    const completados = cursosCompletados.length;
    const porcentaje = (completados / totalCursos) * 100;
    
    const creditosCompletados = cursosData
      .filter((c) => cursosCompletados.includes(c.codigo))
      .reduce((sum, c) => sum + c.creditos, 0);
    
    const creditosTotales = cursosData.reduce((sum, c) => sum + c.creditos, 0);
    
    const cursosPorSemestre = Array.from({ length: 10 }, (_, i) => i + 1).map(
      (sem) => ({
        semestre: sem,
        total: cursosData.filter((c) => c.semestre === sem).length,
        completados: cursosData.filter(
          (c) => c.semestre === sem && cursosCompletados.includes(c.codigo)
        ).length,
      })
    );

    return {
      totalCursos,
      completados,
      porcentaje,
      creditosCompletados,
      creditosTotales,
      cursosPorSemestre,
    };
  }, [cursosCompletados]);

  const puedeTomarCurso = (curso: typeof cursosData[0]) => {
    // Si no tiene prerrequisitos, puede tomarlo
    if (curso.prerrequisitos.length === 0) return true;
    
    // Verificar que todos los prerrequisitos estén completados
    return curso.prerrequisitos.every((prereq) =>
      cursosCompletados.includes(prereq)
    );
  };

  const cursosDisponibles = cursosData.filter(
    (curso) =>
      !cursosCompletados.includes(curso.codigo) && 
      puedeTomarCurso(curso) &&
      !estaBloqueadoPorRama(curso.codigo)
  );

  const cursosBloqueados = cursosData.filter(
    (curso) =>
      !cursosCompletados.includes(curso.codigo) && 
      (!puedeTomarCurso(curso) || estaBloqueadoPorRama(curso.codigo))
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Award className="w-12 h-12 text-[#56F0C3]" />
          </div>
          <h1 className="text-white mb-4">Simulador de Progreso Académico</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Rastrea tu avance en la carrera, ve qué cursos puedes tomar y
            cuántos créditos has completado
          </p>
        </div>

        {/* Estadísticas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#4A6DFF]/10 to-[#7A5BFF]/10 border border-[#4A6DFF]/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-[#4A6DFF]" />
              <p className="text-white/70 text-sm">Cursos Completados</p>
            </div>
            <p className="text-4xl font-bold text-white mb-1">
              {estadisticas.completados}
            </p>
            <p className="text-white/50 text-sm">
              de {estadisticas.totalCursos} totales
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#7A5BFF]/10 to-[#56F0C3]/10 border border-[#7A5BFF]/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-[#7A5BFF]" />
              <p className="text-white/70 text-sm">Progreso Total</p>
            </div>
            <p className="text-4xl font-bold text-white mb-1">
              {estadisticas.porcentaje.toFixed(1)}%
            </p>
            <div className="w-full bg-white/10 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-[#7A5BFF] to-[#56F0C3] h-2 rounded-full transition-all"
                style={{ width: `${estadisticas.porcentaje}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#56F0C3]/10 to-[#4A6DFF]/10 border border-[#56F0C3]/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-[#56F0C3]" />
              <p className="text-white/70 text-sm">Créditos</p>
            </div>
            <p className="text-4xl font-bold text-white mb-1">
              {estadisticas.creditosCompletados}
            </p>
            <p className="text-white/50 text-sm">
              de {estadisticas.creditosTotales} totales
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#4A6DFF]/10 to-[#56F0C3]/10 border border-[#4A6DFF]/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-[#4A6DFF]" />
              <p className="text-white/70 text-sm">Cursos Disponibles</p>
            </div>
            <p className="text-4xl font-bold text-white mb-1">
              {cursosDisponibles.length}
            </p>
            <p className="text-white/50 text-sm">para tomar ahora</p>
          </div>
        </div>

        {/* Progreso por Semestre */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 mb-8">
          <h2 className="text-white text-xl mb-6">Progreso por Semestre</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {estadisticas.cursosPorSemestre.map((sem) => (
              <div
                key={sem.semestre}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <p className="text-white/70 text-sm mb-2">
                  Semestre {sem.semestre}
                </p>
                <p className="text-white text-2xl font-bold mb-2">
                  {sem.completados}/{sem.total}
                </p>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] h-2 rounded-full transition-all"
                    style={{
                      width: `${(sem.completados / sem.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selector de Ramas Electivas */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-[#56F0C3]" />
            <h2 className="text-white text-xl">Ramas de Especialización</h2>
          </div>
          <p className="text-white/70 text-sm mb-6">
            En los semestres 7, 8 y 9 debes elegir una rama de especialización. Solo puedes cursar los electivos de una rama.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(RAMAS_ELECTIVAS).map(([key, rama]) => {
              const cursosCompletadosRama = rama.cursos.filter(c => cursosCompletados.includes(c)).length;
              const estaSeleccionada = ramaSeleccionada === key;
              const estaBloqueada = ramaSeleccionada !== null && !estaSeleccionada;

              return (
                <div
                  key={key}
                  className={`relative p-6 rounded-xl border-2 transition-all ${
                    estaSeleccionada
                      ? 'bg-gradient-to-br from-[#56F0C3]/20 to-[#4A6DFF]/20 border-[#56F0C3] shadow-lg'
                      : estaBloqueada
                      ? 'bg-white/5 border-white/10 opacity-50'
                      : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  {estaBloqueada && (
                    <div className="absolute top-2 right-2">
                      <Lock className="w-5 h-5 text-white/50" />
                    </div>
                  )}
                  
                  <h3 className="text-white font-semibold text-lg mb-3">{rama.nombre}</h3>
                  
                  <div className="space-y-2 mb-4">
                    {rama.cursos.map(codigoCurso => {
                      const curso = cursosData.find(c => c.codigo === codigoCurso);
                      const completado = cursosCompletados.includes(codigoCurso);
                      
                      return (
                        <div key={codigoCurso} className="flex items-center gap-2">
                          {completado ? (
                            <CheckCircle className="w-4 h-4 text-[#56F0C3] flex-shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${completado ? 'text-white' : 'text-white/60'}`}>
                            {curso?.nombre}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-white/70 text-sm">
                      {cursosCompletadosRama}/3 cursos
                    </span>
                    {estaSeleccionada && (
                      <span className="px-3 py-1 bg-[#56F0C3]/20 text-[#56F0C3] text-xs rounded-full font-medium">
                        Seleccionada
                      </span>
                    )}
                    {estaBloqueada && (
                      <span className="px-3 py-1 bg-white/10 text-white/50 text-xs rounded-full font-medium">
                        Bloqueada
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {ramaSeleccionada && (
            <div className="mt-6 p-4 bg-[#56F0C3]/10 border border-[#56F0C3]/30 rounded-xl">
              <p className="text-[#56F0C3] text-sm">
                <strong>Rama seleccionada:</strong> {RAMAS_ELECTIVAS[ramaSeleccionada as keyof typeof RAMAS_ELECTIVAS].nombre}. 
                Los cursos electivos de las otras ramas están bloqueados.
              </p>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
          <div className="flex gap-2 mb-6 bg-white/5 border border-white/10 rounded-xl p-1">
            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-lg transition-all">
              Disponibles ({cursosDisponibles.length})
            </button>
            <button className="flex-1 px-4 py-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              Completados ({cursosCompletados.length})
            </button>
            <button className="flex-1 px-4 py-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              Bloqueados ({cursosBloqueados.length})
            </button>
          </div>

          {/* Lista de Cursos Disponibles */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {cursosDisponibles.length === 0 ? (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-[#56F0C3] mx-auto mb-4" />
                <p className="text-white/70">
                  ¡Has completado todos los cursos disponibles!
                </p>
              </div>
            ) : (
              cursosDisponibles.map((curso) => (
                <div
                  key={curso.codigo}
                  className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-[#4A6DFF]/20 text-[#4A6DFF] text-xs rounded-lg">
                        {curso.codigo}
                      </span>
                      <span className="px-2 py-1 bg-[#56F0C3]/20 text-[#56F0C3] text-xs rounded-lg">
                        Semestre {curso.semestre}
                      </span>
                    </div>
                    <h3 className="text-white font-medium">{curso.nombre}</h3>
                    <p className="text-white/50 text-sm mt-1">
                      {curso.creditos} créditos • {curso.tipo}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleCurso(curso.codigo)}
                    className="px-4 py-2 bg-gradient-to-r from-[#56F0C3] to-[#4A6DFF] text-white rounded-xl hover:shadow-lg hover:shadow-[#56F0C3]/30 transition-all opacity-0 group-hover:opacity-100"
                  >
                    Marcar como Completado
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}