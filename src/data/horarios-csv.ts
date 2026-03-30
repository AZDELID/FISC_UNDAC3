// Datos de horarios procesados desde el CSV
// Formato: semestre, día, numHora, horaInicio, horaFin, curso
// Incluye todas las entradas, incluyendo las marcadas como "libre"

import { csvRawText } from './horarios-csv-data';

export interface HorarioCSV {
  semestre: number;
  dia: string;
  numHora: number;
  horaInicio: string;
  horaFin: string;
  curso: string;
  modalidad: string;
}

// Esta función procesa el texto del CSV y devuelve un array de datos
export function parseCSVToHorarios(csvText: string): HorarioCSV[] {
  const lines = csvText.trim().split('\n');
  const horarios: HorarioCSV[] = [];
  
  for (let i = 1; i < lines.length; i++) { // Saltar encabezado
    const line = lines[i].trim();
    if (!line) continue; // Saltar líneas vacías
    
    // Intentar parsear la línea
    const parts = line.split(',');
    if (parts.length < 6) {
      // Si tiene menos de 6 partes, intentar arreglar el error común de "08:50 amlibre"
      if (parts.length === 5) {
        const lastPart = parts[4];
        // Buscar patrón "XX:XX am/pmXXXX" o "XX:XX am/pm XXXX"
        const match = lastPart.match(/^(\d{2}:\d{2}\s*(?:am|pm))(.+)$/i);
        if (match) {
          parts[4] = match[1].trim(); // Hora fin
          parts.push(match[2].trim()); // Curso
        } else {
          continue; // Saltar línea malformada
        }
      } else {
        continue; // Saltar línea malformada
      }
    }
    
    const semestre = parseInt(parts[0]);
    const dia = parts[1].trim();
    const numHora = parseInt(parts[2]);
    const horaInicio = parts[3].trim();
    const horaFin = parts[4].trim();
    const curso = parts.slice(5).join(',').trim(); // Por si tiene comas
    
    // Validar datos
    if (isNaN(semestre) || isNaN(numHora)) continue;
    if (!curso) continue;
    
    horarios.push({
      semestre,
      dia,
      numHora,
      horaInicio,
      horaFin,
      curso,
      modalidad: "" // Se llenará después si es necesario
    });
  }
  
  return horarios;
}

export const horariosCSVData: HorarioCSV[] = parseCSVToHorarios(csvRawText);
