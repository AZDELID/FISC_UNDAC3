import { useState } from "react";
import { Calculator, TrendingUp, CheckCircle, XCircle, Target, Download } from "lucide-react";

export function CalculadoraPromedio() {
  const [tipoCalculo, setTipoCalculo] = useState<'unidad' | 'semestre'>('unidad');
  
  // Para modo "Aprobar Unidad" - solo UNA unidad
  const [unidadUnica, setUnidadUnica] = useState({
    actitudinal: "",
    conceptual: "",
    procedimental: "",
  });

  // Para modo "Aprobar Semestre" - solo las notas finales de las 4 unidades
  const [notasFinalesSemestre, setNotasFinalesSemestre] = useState<string[]>(["", "", "", ""]);

  // ============================================
  // FUNCIONES PARA MODO "APROBAR UNIDAD"
  // ============================================
  
  // Calcular nota final de unidad (con redondeo hacia abajo)
  const calcularNotaUnidadFinal = (actitudinal: string, conceptual: string, procedimental: string): number | null => {
    const a = parseFloat(actitudinal);
    const c = parseFloat(conceptual);
    const p = parseFloat(procedimental);

    if (isNaN(a) || isNaN(c) || isNaN(p)) {
      return null;
    }

    const notaCalculada = a * 0.1 + c * 0.4 + p * 0.5;
    return Math.floor(notaCalculada); // Redondeo hacia abajo
  };

  // Calcular nota necesaria para aprobar UNIDAD
  const calcularNotaNecesariaUnidad = () => {
    const actitudinal = parseFloat(unidadUnica.actitudinal) || 0;
    const conceptual = parseFloat(unidadUnica.conceptual) || 0;
    
    // Para aprobar necesitamos nota final >= 11 (porque se redondea hacia abajo)
    const notaNecesaria = (11 - actitudinal * 0.1 - conceptual * 0.4) / 0.5;
    
    if (notaNecesaria <= 0) {
      return "Ya tienes nota aprobatoria";
    }
    if (notaNecesaria > 20) {
      return "No es posible aprobar con estas notas";
    }
    
    return Math.ceil(notaNecesaria);
  };

  // Aplicar nota necesaria para unidad única
  const aplicarNotaUnidad = () => {
    const notaNecesaria = calcularNotaNecesariaUnidad();
    if (typeof notaNecesaria === 'number') {
      setUnidadUnica({
        ...unidadUnica,
        procedimental: notaNecesaria.toString()
      });
    }
  };

  // ============================================
  // FUNCIONES PARA MODO "APROBAR SEMESTRE"
  // ============================================
  
  // Calcular nota necesaria para aprobar SEMESTRE
  const calcularNotaNecesariaSemestre = (): string | number => {
    const notasCompletas = notasFinalesSemestre.filter(n => n !== "").map(n => parseFloat(n));
    
    if (notasCompletas.length === 4) {
      return "Ya completaste todas las unidades";
    }
    
    if (notasCompletas.length === 0) {
      return "Ingresa al menos 1 nota para calcular";
    }
    
    const sumaNotas = notasCompletas.reduce((sum, n) => sum + n, 0);
    const unidadesFaltantes = 4 - notasCompletas.length;
    
    // Necesitamos promedio >= 10.5
    const notaNecesaria = (10.5 * 4 - sumaNotas) / unidadesFaltantes;
    
    if (notaNecesaria <= 0) {
      return "Ya tienes promedio aprobatorio";
    }
    if (notaNecesaria > 20) {
      return "No es posible aprobar con estas notas";
    }
    
    return notaNecesaria.toFixed(2);
  };

  // Actualizar nota final del semestre
  const actualizarNotaFinalSemestre = (index: number, valor: string) => {
    const nuevasNotas = [...notasFinalesSemestre];
    nuevasNotas[index] = valor;
    setNotasFinalesSemestre(nuevasNotas);
  };

  // Calcular promedio final del semestre
  const calcularPromedioSemestre = (): number | null => {
    const notasCompletas = notasFinalesSemestre.filter(n => n !== "").map(n => parseFloat(n));
    if (notasCompletas.length !== 4) return null;
    return notasCompletas.reduce((sum, n) => sum + n, 0) / 4;
  };

  // ============================================
  // FUNCIONES GENERALES
  // ============================================
  
  const promedioFinal = calcularPromedioSemestre();
  const aprobado = promedioFinal !== null && promedioFinal >= 10.5;

  const limpiarFormulario = () => {
    setUnidadUnica({ actitudinal: "", conceptual: "", procedimental: "" });
    setNotasFinalesSemestre(["", "", "", ""]);
  };

  // Calcular nota final de la unidad única
  const notaFinalUnidadUnica = calcularNotaUnidadFinal(
    unidadUnica.actitudinal,
    unidadUnica.conceptual,
    unidadUnica.procedimental
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* ============================================ */}
        {/* HEADER */}
        {/* ============================================ */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calculator className="w-12 h-12 text-[#56F0C3]" />
          </div>
          <h1 className="text-white mb-4">Calculadora de Promedios</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Calcula tu promedio por unidades académicas. Selecciona el tipo de cálculo que necesitas.
          </p>
        </div>

        {/* ============================================ */}
        {/* SISTEMA DE CALIFICACIÓN */}
        {/* ============================================ */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 mb-8">
          <h2 className="text-white text-xl mb-4">Sistema de Calificación</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#4A6DFF]/10 border border-[#4A6DFF]/30 rounded-xl p-4">
              <p className="text-[#4A6DFF] text-sm mb-1">Actitudinal</p>
              <p className="text-white text-2xl font-bold">10%</p>
            </div>
            <div className="bg-[#7A5BFF]/10 border border-[#7A5BFF]/30 rounded-xl p-4">
              <p className="text-[#7A5BFF] text-sm mb-1">Conceptual</p>
              <p className="text-white text-2xl font-bold">40%</p>
            </div>
            <div className="bg-[#56F0C3]/10 border border-[#56F0C3]/30 rounded-xl p-4">
              <p className="text-[#56F0C3] text-sm mb-1">Procedimental</p>
              <p className="text-white text-2xl font-bold">50%</p>
            </div>
          </div>
          <p className="text-white/60 text-sm mt-4 text-center">
            Nota mínima aprobatoria: <strong className="text-white">10.5</strong> • Escala: 0-20 • 
            <span className="text-[#56F0C3]"> Las notas se redondean hacia abajo</span>
          </p>
        </div>

        {/* ============================================ */}
        {/* SELECTOR DE TIPO DE CÁLCULO */}
        {/* ============================================ */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 mb-8">
          <h2 className="text-white text-xl mb-4">Tipo de Cálculo</h2>
          <p className="text-white/60 text-sm mb-4">
            Selecciona el tipo de cálculo que necesitas realizar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setTipoCalculo('unidad')}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                tipoCalculo === 'unidad'
                  ? 'bg-[#56F0C3]/20 border-[#56F0C3] shadow-lg shadow-[#56F0C3]/30'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${tipoCalculo === 'unidad' ? 'bg-[#56F0C3]/30' : 'bg-white/10'}`}>
                  <Target className={`w-5 h-5 ${tipoCalculo === 'unidad' ? 'text-[#56F0C3]' : 'text-white/70'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`${tipoCalculo === 'unidad' ? 'text-[#56F0C3]' : 'text-white'} font-semibold mb-1`}>
                    Aprobar Unidad
                  </h3>
                  <p className="text-white/60 text-sm">
                    Calcula la nota en Procedimental necesaria para aprobar una unidad específica (≥11 antes del redondeo)
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setTipoCalculo('semestre')}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                tipoCalculo === 'semestre'
                  ? 'bg-[#7A5BFF]/20 border-[#7A5BFF] shadow-lg shadow-[#7A5BFF]/30'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${tipoCalculo === 'semestre' ? 'bg-[#7A5BFF]/30' : 'bg-white/10'}`}>
                  <TrendingUp className={`w-5 h-5 ${tipoCalculo === 'semestre' ? 'text-[#7A5BFF]' : 'text-white/70'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`${tipoCalculo === 'semestre' ? 'text-[#7A5BFF]' : 'text-white'} font-semibold mb-1`}>
                    Aprobar Semestre
                  </h3>
                  <p className="text-white/60 text-sm">
                    Ingresa las notas finales de las 4 unidades y calcula el promedio necesario para aprobar el semestre (≥10.5)
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* ============================================ */}
        {/* MODO: APROBAR UNIDAD */}
        {/* ============================================ */}
        {tipoCalculo === 'unidad' && (
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 mb-8">
            <h3 className="text-white text-lg mb-6">Unidad</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Actitudinal (10%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.01"
                  value={unidadUnica.actitudinal}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || (parseFloat(val) >= 0 && parseFloat(val) <= 20)) {
                      setUnidadUnica({ ...unidadUnica, actitudinal: val });
                    }
                  }}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4A6DFF]"
                  placeholder="0-20"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Conceptual (40%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.01"
                  value={unidadUnica.conceptual}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || (parseFloat(val) >= 0 && parseFloat(val) <= 20)) {
                      setUnidadUnica({ ...unidadUnica, conceptual: val });
                    }
                  }}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#7A5BFF]"
                  placeholder="0-20"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Procedimental (50%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  step="0.01"
                  value={unidadUnica.procedimental}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === '' || (parseFloat(val) >= 0 && parseFloat(val) <= 20)) {
                      setUnidadUnica({ ...unidadUnica, procedimental: val });
                    }
                  }}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#56F0C3]"
                  placeholder="0-20"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Nota Final
                </label>
                <input
                  type="text"
                  value={notaFinalUnidadUnica !== null ? notaFinalUnidadUnica : ''}
                  readOnly
                  className="w-full px-4 py-2 bg-[#4A6DFF]/10 border border-[#4A6DFF]/30 rounded-xl text-white placeholder-white/50 cursor-not-allowed"
                  placeholder="Auto"
                />
              </div>
            </div>

            {/* Botón calcular nota necesaria */}
            {unidadUnica.actitudinal && unidadUnica.conceptual && !unidadUnica.procedimental && (
              <button
                onClick={aplicarNotaUnidad}
                className="w-full px-4 py-3 bg-[#56F0C3]/10 text-[#56F0C3] border border-[#56F0C3]/30 rounded-xl hover:bg-[#56F0C3]/20 transition-all flex items-center justify-center gap-2 mb-6"
              >
                <Target className="w-5 h-5" />
                <span className="font-medium">Calcular Nota para Aprobar Unidad</span>
              </button>
            )}

            {/* Resultado */}
            {notaFinalUnidadUnica !== null && (
              <div className={`p-4 rounded-xl border-2 ${
                notaFinalUnidadUnica >= 11 ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {notaFinalUnidadUnica >= 11 ? (
                      <>
                        <CheckCircle className="w-6 h-6 text-green-400" />
                        <span className="text-green-400 font-semibold">APROBADO</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 text-red-400" />
                        <span className="text-red-400 font-semibold">DESAPROBADO</span>
                      </>
                    )}
                  </div>
                  <div className={`text-2xl font-bold ${
                    notaFinalUnidadUnica >= 11 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {notaFinalUnidadUnica}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================ */}
        {/* MODO: APROBAR SEMESTRE */}
        {/* ============================================ */}
        {tipoCalculo === 'semestre' && (
          <div className="space-y-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
              <h3 className="text-white text-lg mb-2">Notas Finales de las 4 Unidades</h3>
              <p className="text-white/60 text-sm mb-6">
                Ingresa la nota final de cada unidad (promedio de Actitudinal, Conceptual y Procedimental)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index}>
                    <label className="block text-white/70 text-sm mb-2">
                      Unidad {index + 1}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="20"
                      step="0.1"
                      value={notasFinalesSemestre[index]}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === '' || (parseFloat(val) >= 0 && parseFloat(val) <= 20)) {
                          actualizarNotaFinalSemestre(index, val);
                        }
                      }}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#7A5BFF]"
                      placeholder="0-20"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Información sobre nota necesaria */}
            {notasFinalesSemestre.filter(n => n !== "").length > 0 && 
             notasFinalesSemestre.filter(n => n !== "").length < 4 && (
              <div className="bg-[#7A5BFF]/10 border border-[#7A5BFF]/30 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#7A5BFF]" />
                  <p className="text-[#7A5BFF] font-medium">
                    {typeof calcularNotaNecesariaSemestre() === 'string' && calcularNotaNecesariaSemestre().toString().includes('.')
                      ? `Necesitas ${calcularNotaNecesariaSemestre()} o más en cada unidad faltante para aprobar el semestre`
                      : calcularNotaNecesariaSemestre()}
                  </p>
                </div>
              </div>
            )}

            {/* Resultado Final del Semestre */}
            {promedioFinal !== null && (
              <div
                className={`bg-white/5 backdrop-blur-lg rounded-2xl border-2 p-8 ${
                  aprobado ? "border-green-500/50" : "border-red-500/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-white text-2xl mb-2">Promedio Final del Semestre</h2>
                    <p className="text-white/70">
                      Promedio de las 4 unidades
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-5xl mb-2 ${
                        aprobado ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {promedioFinal.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      {aprobado ? (
                        <>
                          <CheckCircle className="w-6 h-6 text-green-400" />
                          <span className="text-green-400 font-semibold">APROBADO</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-6 h-6 text-red-400" />
                          <span className="text-red-400 font-semibold">DESAPROBADO</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================ */}
        {/* BOTÓN LIMPIAR */}
        {/* ============================================ */}
        <div className="flex justify-center">
          <button
            onClick={limpiarFormulario}
            className="px-6 py-3 bg-white/10 text-white/70 rounded-xl hover:bg-white/20 transition-all border border-white/10"
          >
            Limpiar Formulario
          </button>
        </div>
      </div>
    </div>
  );
}