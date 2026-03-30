/**
 * ============================================
 * Módulo: Planificación de Horarios
 * Autor: AzDeLid
 * ============================================
 * 
 * Sistema completo de gestión de horarios académicos:
 * - Selección de cursos por semestre
 * - Generación automática de horarios
 * - Detección de cruces entre semestres
 * - Manejo de cursos electivos mutuamente excluyentes
 * - Exportación a PDF/PNG
 * 
 * ============================================
 */

import { useState, useRef } from "react";
import { cursosData } from "../data/cursos";
import { horariosCSVData, HorarioCSV } from "../data/horarios-csv";
import { Download, Image as ImageIcon, FileText, Calendar, Search } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// ============================================
// INTERFACES
// ============================================

interface Curso {
  codigo: string;
  nombre: string;
  semestre: number;
  creditos: number;
}

interface CeldaHorario {
  cursos: Array<{
    curso: string;
    modalidad: string;
    codigo: string;
  }>;
}

// ============================================
// FUNCIÓN PARA GENERAR COLORES POR CURSO
// ============================================

const getColorForCourse = (courseName: string): string => {
  const colors = [
    "rgba(255, 138, 128, 0.4)",  // Coral suave
    "rgba(129, 168, 255, 0.4)",  // Azul claro moderno
    "rgba(255, 209, 102, 0.4)",  // Amarillo cálido suave
    "rgba(134, 239, 172, 0.4)",  // Verde menta
    "rgba(255, 179, 186, 0.4)",  // Rosa pastel
    "rgba(174, 198, 255, 0.4)",  // Azul cielo suave
    "rgba(255, 167, 120, 0.4)",  // Naranja suave
    "rgba(204, 153, 255, 0.4)",  // Lila
    "rgba(153, 216, 255, 0.4)",  // Celeste limpio
    "rgba(255, 236, 179, 0.4)",  // Amarillo pastel
    "rgba(167, 243, 208, 0.4)",  // Verde agua
    "rgba(255, 204, 229, 0.4)",  // Rosa claro elegante
    "rgba(176, 224, 230, 0.4)",  // Azul grisáceo
    "rgba(255, 218, 185, 0.4)",  // Durazno suave
    "rgba(221, 209, 255, 0.4)"   // Lavanda clara
  ];
  
  // Generar hash del nombre del curso para obtener un color consistente
  let hash = 0;
  for (let i = 0; i < courseName.length; i++) {
    hash = courseName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export function Horarios() {
  const [semestreSeleccionado, setSemestreSeleccionado] = useState(1);
  const [cursosSeleccionados, setCursosSeleccionados] = useState<string[]>([]);
  const [horarioGenerado, setHorarioGenerado] = useState(false);
  const [busquedaOtrosCursos, setBusquedaOtrosCursos] = useState("");
  const [semestreFiltroOtros, setSemestreFiltroOtros] = useState<number | null>(null);
  const horarioRef = useRef<HTMLDivElement>(null);

  const cursos = cursosData as Curso[];

  // Definir grupos de cursos electivos mutuamente excluyentes
  const cursosElectivosExcluyentes = {
    semestre7: ['17316', '17317', '17318'], // Comunicaciones, Metodologías Ágiles, Desarrollo Web Cliente
    semestre8: ['17322', '17323', '17324'], // Administración Servidores, Desarrollo Soluciones I, Desarrollo Web Servidor
    semestre9: ['17329', '17330', '17331']  // Virtualización Cloud, Desarrollo Soluciones II, Despliegue Aplicaciones Web
  };

  const cursosPorSemestre = cursos.filter(
    (c) => c.semestre === semestreSeleccionado
  );

  // ============================================
  // FUNCIONES DE MANEJO DE ESTADO
  // ============================================

  // Función para verificar si un curso pertenece a un grupo electivo excluyente
  const obtenerGrupoElectivo = (codigo: string): string[] | null => {
    if (cursosElectivosExcluyentes.semestre7.includes(codigo)) {
      return cursosElectivosExcluyentes.semestre7;
    }
    if (cursosElectivosExcluyentes.semestre8.includes(codigo)) {
      return cursosElectivosExcluyentes.semestre8;
    }
    if (cursosElectivosExcluyentes.semestre9.includes(codigo)) {
      return cursosElectivosExcluyentes.semestre9;
    }
    return null;
  };

  // Función para verificar si un curso está bloqueado por otro curso electivo
  const estaBloqueado = (codigo: string): boolean => {
    const grupoElectivo = obtenerGrupoElectivo(codigo);
    if (!grupoElectivo) return false;
    
    // Verificar si algún otro curso del mismo grupo está seleccionado
    return grupoElectivo.some(codigoGrupo => 
      codigoGrupo !== codigo && cursosSeleccionados.includes(codigoGrupo)
    );
  };

  const toggleCurso = (codigo: string) => {
    // Verificar si está bloqueado
    if (estaBloqueado(codigo) && !cursosSeleccionados.includes(codigo)) {
      // Mostrar advertencia visual temporal
      alert('⚠️ Solo puedes seleccionar un curso electivo de este grupo. Deselecciona el otro primero.');
      return;
    }

    if (cursosSeleccionados.includes(codigo)) {
      setCursosSeleccionados(cursosSeleccionados.filter((c) => c !== codigo));
    } else {
      setCursosSeleccionados([...cursosSeleccionados, codigo]);
    }
  };

  const seleccionarSemestre = (sem: number) => {
    setSemestreSeleccionado(sem);
    
    // Obtener todos los cursos del semestre
    const cursosSemestre = cursos.filter((c) => c.semestre === sem);
    
    // Filtrar cursos electivos mutuamente excluyentes
    let cursosASeleccionar: string[] = [];
    
    if (sem === 7) {
      // Semestre 7: No seleccionar ningún curso electivo por defecto
      cursosASeleccionar = cursosSemestre
        .filter(c => !cursosElectivosExcluyentes.semestre7.includes(c.codigo))
        .map(c => c.codigo);
    } else if (sem === 8) {
      // Semestre 8: No seleccionar ningún curso electivo por defecto
      cursosASeleccionar = cursosSemestre
        .filter(c => !cursosElectivosExcluyentes.semestre8.includes(c.codigo))
        .map(c => c.codigo);
    } else if (sem === 9) {
      // Semestre 9: No seleccionar ningún curso electivo por defecto
      cursosASeleccionar = cursosSemestre
        .filter(c => !cursosElectivosExcluyentes.semestre9.includes(c.codigo))
        .map(c => c.codigo);
    } else {
      // Otros semestres: seleccionar todos los cursos
      cursosASeleccionar = cursosSemestre.map(c => c.codigo);
    }
    
    setCursosSeleccionados(cursosASeleccionar);
    setHorarioGenerado(false);
  };

  const generarHorario = () => {
    setHorarioGenerado(true);
  };

  // ============================================
  // CONFIGURACIÓN DE DÍAS Y HORARIOS
  // ============================================

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  
  // Horarios en bloques de 50 minutos - 16 bloques totales
  const bloqueHorarios = [
    { inicio: "08:00 am", fin: "08:50 am", hora: "08:00 am" },
    { inicio: "08:50 am", fin: "09:40 am", hora: "08:50 am" },
    { inicio: "09:40 am", fin: "10:30 am", hora: "09:40 am" },
    { inicio: "10:30 am", fin: "11:20 am", hora: "10:30 am" },
    { inicio: "11:20 am", fin: "12:10 pm", hora: "11:20 am" },
    { inicio: "12:10 pm", fin: "13:00 pm", hora: "12:10 pm" },
    { inicio: "13:00 pm", fin: "13:50 pm", hora: "13:00 pm" },
    { inicio: "14:30 pm", fin: "15:20 pm", hora: "14:30 pm" },
    { inicio: "15:20 pm", fin: "16:10 pm", hora: "15:20 pm" },
    { inicio: "16:10 pm", fin: "17:00 pm", hora: "16:10 pm" },
    { inicio: "17:00 pm", fin: "17:50 pm", hora: "17:00 pm" },
    { inicio: "17:50 pm", fin: "18:40 pm", hora: "17:50 pm" },
    { inicio: "18:40 pm", fin: "19:30 pm", hora: "18:40 pm" },
    { inicio: "19:30 pm", fin: "20:20 pm", hora: "19:30 pm" },
    { inicio: "20:20 pm", fin: "21:10 pm", hora: "20:20 pm" },
    { inicio: "21:10 pm", fin: "22:00 pm", hora: "21:10 pm" },
  ];

  // ============================================
  // CONSTRUCCIÓN DE LA MATRIZ DE HORARIO
  // ============================================

  // Función para normalizar nombres de cursos (eliminar acentos, espacios extra, etc.)
  const normalizarNombre = (nombre: string): string => {
    return nombre
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
      .replace(/\s+/g, " ") // Normalizar espacios
      .replace(/[^\w\s]/g, ""); // Eliminar caracteres especiales excepto espacios
  };

  // Función para normalizar singular/plural - convierte a singular común
  const normalizarSingularPlural = (palabra: string): string => {
    // Si termina en 's' y es largo (más de 4 letras), quitar la 's'
    if (palabra.length > 4 && palabra.endsWith('s') && !palabra.endsWith('ss')) {
      return palabra.slice(0, -1);
    }
    return palabra;
  };

  const construirMatrizHorario = (): (CeldaHorario | null)[][] => {
    const matriz: (CeldaHorario | null)[][] = Array(bloqueHorarios.length)
      .fill(null)
      .map(() => Array(dias.length).fill(null));

    // Obtener horarios de todos los cursos seleccionados, incluyendo de otros semestres
    const cursosSeleccionadosSet = new Set(cursosSeleccionados);
    const horariosRelevantes: HorarioCSV[] = [];
    
    // Para cada curso seleccionado, buscar sus horarios en el CSV
    cursosSeleccionados.forEach(codigoCurso => {
      const curso = cursos.find(c => c.codigo === codigoCurso);
      if (!curso) return;
      
      // Normalizar el nombre del curso de la base de datos
      const nombreCursoNormalizado = normalizarNombre(curso.nombre);
      const palabrasCurso = nombreCursoNormalizado.split(" ").filter(p => p.length > 0);
      
      // Buscar horarios que coincidan EXACTAMENTE con el nombre del curso
      const horariosDelCurso = horariosCSVData.filter(h => {
        const cursoNombreCSVNormalizado = normalizarNombre(h.curso);
        const palabrasCSV = cursoNombreCSVNormalizado.split(" ").filter(p => p.length > 0);
        
        // ESTRATEGIA 1: Coincidencia exacta (sin importar acentos ni mayúsculas)
        if (cursoNombreCSVNormalizado === nombreCursoNormalizado) {
          return true;
        }
        
        // ESTRATEGIA 2: Coincidencia con tolerancia a singular/plural
        // Normalizar cada palabra a su forma singular
        const palabrasCursoSingular = palabrasCurso.map(p => normalizarSingularPlural(p));
        const palabrasCSVSingular = palabrasCSV.map(p => normalizarSingularPlural(p));
        
        if (palabrasCursoSingular.length === palabrasCSVSingular.length) {
          const todasCoinciden = palabrasCursoSingular.every((palabra, index) => 
            palabrasCSVSingular[index] === palabra
          );
          if (todasCoinciden) return true;
        }
        
        // ESTRATEGIA 3: Para casos como "Practicas Pre profesionales" vs "Practicas Preprofesionales"
        // Eliminar espacios intermedios y comparar
        const nombreSinEspaciosExtras = palabrasCurso.join("");
        const csvSinEspaciosExtras = palabrasCSV.join("");
        
        if (nombreSinEspaciosExtras === csvSinEspaciosExtras) {
          return true;
        }
        
        // ESTRATEGIA 4: Verificación estricta palabra por palabra con números romanos
        if (palabrasCurso.length === palabrasCSV.length && palabrasCurso.length >= 2) {
          // Extraer números romanos o arábigos
          const numerosCurso = nombreCursoNormalizado.match(/\b(i{1,3}|iv|v|vi{0,3}|ix|x|\d+)\b/g) || [];
          const numerosCSV = cursoNombreCSVNormalizado.match(/\b(i{1,3}|iv|v|vi{0,3}|ix|x|\d+)\b/g) || [];
          
          // Las palabras sin números deben coincidir
          const palabrasCursoSinNumeros = palabrasCurso.filter(p => !numerosCurso.includes(p));
          const palabrasCSVSinNumeros = palabrasCSV.filter(p => !numerosCSV.includes(p));
          
          // Normalizar singular/plural para comparación
          const cursoSinNumSingular = palabrasCursoSinNumeros.map(p => normalizarSingularPlural(p)).sort().join(" ");
          const csvSinNumSingular = palabrasCSVSinNumeros.map(p => normalizarSingularPlural(p)).sort().join(" ");
          
          if (cursoSinNumSingular === csvSinNumSingular) {
            // Si las palabras coinciden, los números también deben coincidir
            if (numerosCurso.length === 0 && numerosCSV.length === 0) {
              return true;
            }
            return JSON.stringify(numerosCurso.sort()) === JSON.stringify(numerosCSV.sort());
          }
        }
        
        return false;
      });
      
      horariosRelevantes.push(...horariosDelCurso);
    });

    // Llenar la matriz con los horarios relevantes
    horariosRelevantes.forEach((slot) => {
      const diaIndex = dias.indexOf(slot.dia);
      if (diaIndex === -1) return;

      const bloqueIndex = bloqueHorarios.findIndex(b => {
        const slotHora = slot.horaInicio.toLowerCase().trim();
        const bloqueHora = b.inicio.toLowerCase().trim();
        return slotHora === bloqueHora;
      });

      if (bloqueIndex !== -1) {
        const cursoNombre = slot.curso.toLowerCase().trim();
        
        // ELIMINAR: No mostrar "libre"
        if (cursoNombre === "libre") {
          return; // Saltar este slot
        }
        
        // Si ya existe una celda en esta posición
        if (matriz[bloqueIndex][diaIndex]) {
          const celdaActual = matriz[bloqueIndex][diaIndex];
          if (celdaActual) {
            // Verificar si ya existe este curso en la celda (evitar duplicados)
            const yaExiste = celdaActual.cursos.some(c => c.curso.toLowerCase() === cursoNombre);
            if (!yaExiste) {
              // Agregar como cruce de horarios
              celdaActual.cursos.push({
                curso: slot.curso,
                modalidad: slot.modalidad,
                codigo: slot.curso,
              });
            }
          }
        } else {
          // Crear nueva celda
          matriz[bloqueIndex][diaIndex] = {
            cursos: [{
              curso: slot.curso,
              modalidad: slot.modalidad,
              codigo: slot.curso,
            }]
          };
        }
      }
    });

    return matriz;
  };

  const matrizHorario = construirMatrizHorario();

  // ============================================
  // FUNCIONES DE EXPORTACIÓN
  // ============================================

  const exportarImagen = async () => {
    if (!horarioRef.current) return;

    try {
      const canvas = await html2canvas(horarioRef.current, {
        backgroundColor: "#1B1E28",
        scale: 2,
      });

      const link = document.createElement("a");
      link.download = `horario-semestre-${semestreSeleccionado}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error("Error al exportar imagen:", error);
    }
  };

  const exportarPDF = async () => {
    if (!horarioRef.current) return;

    try {
      const canvas = await html2canvas(horarioRef.current, {
        backgroundColor: "#1B1E28",
        scale: 2,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 280;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`horario-semestre-${semestreSeleccionado}.pdf`);
    } catch (error) {
      console.error("Error al exportar PDF:", error);
    }
  };

  // ============================================
  // RENDERIZADO
  // ============================================

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ============================================ */}
        {/* HEADER */}
        {/* ============================================ */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calendar className="w-12 h-12 text-[#56F0C3]" />
          </div>
          <h1 className="text-white mb-4">Planificación de Horarios</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Selecciona tus cursos y genera tu horario académico semanal.
            Exporta en imagen o PDF.
          </p>
        </div>

        {/* ============================================ */}
        {/* SELECTOR DE SEMESTRE */}
        {/* ============================================ */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 mb-8">
          <h2 className="text-white text-xl mb-4">Seleccionar Semestre</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sem) => (
              <button
                key={sem}
                onClick={() => seleccionarSemestre(sem)}
                className={`px-4 py-3 rounded-xl transition-all ${
                  semestreSeleccionado === sem
                    ? "bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white shadow-lg shadow-[#4A6DFF]/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                Semestre {sem}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* LISTA DE CURSOS */}
        {/* ============================================ */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 mb-8">
          <h2 className="text-white text-xl mb-4">
            Cursos - Semestre {semestreSeleccionado}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {cursosPorSemestre.map((curso) => {
              const bloqueado = estaBloqueado(curso.codigo);
              const seleccionado = cursosSeleccionados.includes(curso.codigo);
              
              return (
                <label
                  key={curso.codigo}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all border ${
                    bloqueado 
                      ? 'bg-red-500/10 border-red-500/30 cursor-not-allowed opacity-60' 
                      : 'bg-white/5 hover:bg-white/10 border-white/5 cursor-pointer'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={seleccionado}
                    onChange={() => toggleCurso(curso.codigo)}
                    disabled={bloqueado}
                    className="w-5 h-5 rounded accent-[#4A6DFF] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <div className="flex-1">
                    <p className={`text-white ${bloqueado ? 'line-through' : ''}`}>
                      {curso.nombre}
                      {bloqueado && <span className="text-red-400 text-xs ml-2">(Bloqueado - Curso electivo ya seleccionado)</span>}
                    </p>
                    <p className="text-white/50 text-sm">
                      {curso.codigo} • {curso.creditos} créditos
                    </p>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Agregar cursos de otros semestres */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <h3 className="text-white/70 text-sm mb-3">
              Cursos de otros semestres
            </h3>
            <div className="flex flex-col gap-3 mb-3">
              <input
                type="text"
                value={busquedaOtrosCursos}
                onChange={(e) => setBusquedaOtrosCursos(e.target.value)}
                placeholder="Buscar curso por nombre..."
                className="w-full px-4 py-2 bg-white/5 text-white rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4A6DFF]"
              />
              
              <div>
                <p className="text-white/50 text-xs mb-2">Filtrar por semestre:</p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  <button
                    onClick={() => setSemestreFiltroOtros(null)}
                    className={`px-3 py-2 rounded-lg text-sm transition-all ${
                      semestreFiltroOtros === null
                        ? "bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    Todos
                  </button>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sem) => (
                    <button
                      key={sem}
                      onClick={() => setSemestreFiltroOtros(sem)}
                      className={`px-3 py-2 rounded-lg text-sm transition-all ${
                        semestreFiltroOtros === sem
                          ? "bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white"
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      Semestre {sem}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
              {cursos
                .filter(
                  (c) =>
                    c.semestre !== semestreSeleccionado &&
                    (!semestreFiltroOtros || c.semestre === semestreFiltroOtros) &&
                    c.nombre.toLowerCase().includes(busquedaOtrosCursos.toLowerCase())
                )
                .map((curso) => (
                  <label
                    key={curso.codigo}
                    className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={cursosSeleccionados.includes(curso.codigo)}
                      onChange={() => toggleCurso(curso.codigo)}
                      className="w-4 h-4 rounded accent-[#4A6DFF]"
                    />
                    <div className="flex-1">
                      <p className="text-white text-sm">
                        {curso.nombre} - Semestre {curso.semestre}
                      </p>
                    </div>
                  </label>
                ))}
            </div>
          </div>

          <button
            onClick={generarHorario}
            className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-xl hover:shadow-lg hover:shadow-[#4A6DFF]/50 transition-all"
          >
            Generar Horario
          </button>
        </div>

        {/* ============================================ */}
        {/* HORARIO GENERADO */}
        {/* ============================================ */}
        {horarioGenerado && (
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">
                Horario Semestre {semestreSeleccionado}
              </h2>
              <div className="flex gap-3">
                <button
                  onClick={exportarImagen}
                  className="flex items-center gap-2 px-4 py-2 bg-[#56F0C3]/10 text-[#56F0C3] rounded-xl hover:bg-[#56F0C3]/20 transition-all border border-[#56F0C3]/30"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Imagen</span>
                </button>
                <button
                  onClick={exportarPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-[#7A5BFF]/10 text-[#7A5BFF] rounded-xl hover:bg-[#7A5BFF]/20 transition-all border border-[#7A5BFF]/30"
                >
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">PDF</span>
                </button>
              </div>
            </div>

            <div ref={horarioRef} className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#4A6DFF]/30 to-[#7A5BFF]/30">
                    <th className="text-white p-3 border border-white/20 text-sm font-bold">
                      HORAS
                    </th>
                    {dias.map((dia) => (
                      <th
                        key={dia}
                        className="text-white p-3 border border-white/20 text-sm font-bold"
                      >
                        {dia.toUpperCase()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bloqueHorarios.map((bloque, rowIndex) => (
                    <tr key={bloque.hora}>
                      <td className="bg-white/10 text-white/90 p-2 border border-white/20 text-center text-xs font-medium">
                        {bloque.inicio} - {bloque.fin}
                      </td>
                      {dias.map((dia, colIndex) => {
                        const celda = matrizHorario[rowIndex][colIndex];
                        
                        // Verificar si es continuación de la celda anterior
                        const celdaAnterior =
                          rowIndex > 0
                            ? matrizHorario[rowIndex - 1][colIndex]
                            : null;
                        
                        const esRepetida = celda && celdaAnterior && 
                          JSON.stringify(celda) === JSON.stringify(celdaAnterior);

                        if (esRepetida) {
                          return null;
                        }

                        // Calcular rowSpan
                        let rowSpan = 1;
                        if (celda) {
                          for (let i = rowIndex + 1; i < bloqueHorarios.length; i++) {
                            const celdaSiguiente = matrizHorario[i][colIndex];
                            if (celdaSiguiente && JSON.stringify(celdaSiguiente) === JSON.stringify(celda)) {
                              rowSpan++;
                            } else {
                              break;
                            }
                          }
                        }

                        // Determinar el color de fondo
                        let bgColor = "rgba(255, 255, 255, 0.05)";
                        let borderStyle = "";
                        if (celda && celda.cursos.length > 0) {
                          if (celda.cursos.length > 1) {
                            // Cruce de horarios - color de advertencia más visible
                            bgColor = "rgba(255, 100, 0, 0.45)";
                            borderStyle = "border-2 border-orange-400 border-dashed";
                          } else {
                            bgColor = getColorForCourse(celda.cursos[0].curso);
                          }
                        }

                        return (
                          <td
                            key={`${dia}-${bloque.hora}`}
                            rowSpan={rowSpan}
                            style={{ backgroundColor: bgColor }}
                            className={`border border-white/20 p-2 text-center text-xs align-middle ${borderStyle}`}
                          >
                            {celda && celda.cursos.length > 0 && (
                              <div className="space-y-1">
                                {celda.cursos.length > 1 && (
                                  <div className="text-xs text-white font-bold mb-2 flex items-center justify-center gap-1 bg-orange-600/60 rounded px-2 py-1">
                                    ⚠️ CRUCE DE HORARIOS
                                  </div>
                                )}
                                {celda.cursos.map((curso, idx) => (
                                  <div key={idx} className={celda.cursos.length > 1 ? "text-[11px]" : ""}>
                                    {idx > 0 && (
                                      <div className="border-t border-white/50 my-1.5"></div>
                                    )}
                                    <span className="text-white font-semibold block">
                                      {curso.curso}
                                    </span>
                                    {curso.modalidad && (
                                      <span className="text-white/70 text-[10px] block mt-0.5">
                                        ({curso.modalidad})
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-[#56F0C3]/10 border border-[#56F0C3]/30 rounded-xl">
              <p className="text-[#56F0C3] text-sm">
                <strong>Total de cursos:</strong> {cursosSeleccionados.length} •{" "}
                <strong>Total de créditos:</strong>{" "}
                {cursos
                  .filter((c) => cursosSeleccionados.includes(c.codigo))
                  .reduce((sum, c) => sum + c.creditos, 0)}
              </p>
            </div>

            {/* Aviso de cruces de horarios */}
            {(() => {
              const tieneCruces = matrizHorario.some(fila => 
                fila.some(celda => celda && celda.cursos.length > 1)
              );
              
              if (tieneCruces) {
                return (
                  <div className="mt-4 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⚠️</span>
                      <div>
                        <p className="text-orange-300 font-semibold text-sm mb-1">
                          Atención: Se detectaron cruces de horarios
                        </p>
                        <p className="text-orange-200/70 text-xs">
                          Algunos cursos seleccionados tienen horarios que se superponen. 
                          Las celdas con fondo naranja indican estos cruces. Considera ajustar tu selección de cursos.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })()}
          </div>
        )}
      </div>
    </div>
  );
}