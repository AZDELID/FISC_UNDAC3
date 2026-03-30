import { useState } from "react";
import { cursosData } from "../data/cursos";
import { cursosDetalle, obtenerDetalleCurso } from "../data/cursos-detalle";
import { Book, Search, ChevronDown, ChevronUp, AlertCircle, Link as LinkIcon } from "lucide-react";

interface Curso {
  codigo: string;
  nombre: string;
  semestre: number;
  creditos: number;
  prerrequisitos: string[];
  desbloquea: string[];
  recomendacion: string;
  importancia: string;
}

export function BaseConocimiento() {
  const [busqueda, setBusqueda] = useState("");
  const [semestreFiltro, setSemestreFiltro] = useState<number | null>(null);
  const [cursoExpandido, setCursoExpandido] = useState<string | null>(null);

  const cursos = cursosData as Curso[];

  const cursosFiltrados = cursos.filter((curso) => {
    const coincideBusqueda =
      curso.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      curso.codigo.toLowerCase().includes(busqueda.toLowerCase());

    const coincideSemestre =
      semestreFiltro === null || curso.semestre === semestreFiltro;

    return coincideBusqueda && coincideSemestre;
  });

  const toggleCurso = (codigo: string) => {
    setCursoExpandido(cursoExpandido === codigo ? null : codigo);
  };

  const obtenerNombreCurso = (codigo: string): string => {
    const curso = cursos.find((c) => c.codigo === codigo);
    return curso ? curso.nombre : codigo;
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Book className="w-12 h-12 text-[#56F0C3]" />
          </div>
          <h1 className="text-white mb-4">Base de Conocimiento de Cursos</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explora información detallada de cada curso: prerrequisitos,
            cursos que desbloquea, recomendaciones académicas e importancia en
            la carrera.
          </p>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 mb-8">
          <div className="mb-6">
            {/* Búsqueda */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Buscar por nombre o código..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4A6DFF]"
              />
            </div>

            {/* Filtro de Semestre con botones */}
            <div>
              <h3 className="text-white text-sm mb-3">Filtrar por Semestre</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                <button
                  onClick={() => setSemestreFiltro(null)}
                  className={`px-4 py-2 rounded-xl transition-all text-sm ${
                    semestreFiltro === null
                      ? "bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white shadow-lg shadow-[#4A6DFF]/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  Todos
                </button>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setSemestreFiltro(sem)}
                    className={`px-4 py-2 rounded-xl transition-all text-sm ${
                      semestreFiltro === sem
                        ? "bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white shadow-lg shadow-[#4A6DFF]/30"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    Semestre {sem}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/60 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>
              Mostrando {cursosFiltrados.length} de {cursos.length} cursos
            </span>
          </div>
        </div>

        {/* Lista de Cursos */}
        <div className="space-y-4">
          {cursosFiltrados.map((curso) => {
            const expandido = cursoExpandido === curso.codigo;
            return (
              <div
                key={curso.codigo}
                className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all hover:border-white/20"
              >
                {/* Header del Curso */}
                <button
                  onClick={() => toggleCurso(curso.codigo)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-4 flex-1 text-left">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4A6DFF] to-[#7A5BFF] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold">
                        {curso.semestre}°
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg mb-1">
                        {curso.nombre}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-white/70">{curso.codigo}</span>
                        <span className="text-white/50">•</span>
                        <span className="text-white/70">
                          {curso.creditos} créditos
                        </span>
                        <span className="text-white/50">•</span>
                        <span className="text-[#56F0C3]">
                          Semestre {curso.semestre}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandido ? (
                      <ChevronUp className="w-6 h-6 text-white/70" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white/70" />
                    )}
                  </div>
                </button>

                {/* Contenido Expandido */}
                {expandido && (
                  <div className="px-6 pb-6 space-y-4">
                    <div className="h-px bg-white/10 mb-4" />

                    {/* Importancia */}
                    <div className="bg-[#4A6DFF]/10 border border-[#4A6DFF]/30 rounded-xl p-4">
                      <p className="text-[#4A6DFF] text-sm mb-1">
                        Importancia
                      </p>
                      <p className="text-white">{curso.importancia}</p>
                    </div>

                    {/* Recomendación */}
                    <div className="bg-[#56F0C3]/10 border border-[#56F0C3]/30 rounded-xl p-4">
                      <p className="text-[#56F0C3] text-sm mb-2">
                        Recomendación Académica
                      </p>
                      <p className="text-white/80 text-sm">
                        {curso.recomendacion}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Prerrequisitos */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <LinkIcon className="w-4 h-4 text-[#7A5BFF]" />
                          <p className="text-[#7A5BFF] text-sm font-semibold">
                            Prerrequisitos
                          </p>
                        </div>
                        {curso.prerrequisitos.length > 0 ? (
                          <ul className="space-y-2">
                            {curso.prerrequisitos.map((prereq) => (
                              <li
                                key={prereq}
                                className="text-white/70 text-sm flex items-start gap-2"
                              >
                                <span className="text-[#7A5BFF] mt-1">•</span>
                                <span>
                                  {prereq} - {obtenerNombreCurso(prereq)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white/50 text-sm">
                            No tiene prerrequisitos
                          </p>
                        )}
                      </div>

                      {/* Desbloquea */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <LinkIcon className="w-4 h-4 text-[#56F0C3]" />
                          <p className="text-[#56F0C3] text-sm font-semibold">
                            Desbloquea
                          </p>
                        </div>
                        {curso.desbloquea.length > 0 ? (
                          <ul className="space-y-2">
                            {curso.desbloquea.map((desbloq) => (
                              <li
                                key={desbloq}
                                className="text-white/70 text-sm flex items-start gap-2"
                              >
                                <span className="text-[#56F0C3] mt-1">•</span>
                                <span>
                                  {desbloq} - {obtenerNombreCurso(desbloq)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white/50 text-sm">
                            No desbloquea cursos
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sin Resultados */}
        {cursosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/70 text-lg mb-2">
              No se encontraron cursos
            </p>
            <p className="text-white/50 text-sm">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}