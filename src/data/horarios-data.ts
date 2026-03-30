// Archivo generado automáticamente a partir del CSV de horarios
// NO MODIFICAR MANUALMENTE - Este archivo contiene los horarios de todos los semestres

export interface HorarioData {
  semestre: number;
  dia: string;
  numHora: number;
  horaInicio: string;
  horaFin: string;
  curso: string;
}

// Los datos provienen del archivo CSV adjuntado
// Formato: Semestre,Día,num_de_hora,Hora_Inicio,Hora_Fin,Curso
export const horariosCSVData: HorarioData[] = [];

// Procesador de CSV - Esta función lee el archivo CSV y lo convierte en datos
export function parseCSVData(csvText: string): HorarioData[] {
  const lines = csvText.split('\n');
  const data: HorarioData[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Saltar líneas vacías y encabezado
    if (!line || line.startsWith('Semestre,')) continue;
    
    const parts = line.split(',');
    
    if (parts.length >= 6) {
      const semestre = parseInt(parts[0].trim());
      const dia = parts[1].trim();
      const numHora = parseInt(parts[2].trim());
      const horaInicio = parts[3].trim();
      const horaFin = parts[4].trim();
      const curso = parts.slice(5).join(',').trim(); // Por si el curso tiene comas
      
      // Solo agregar si el curso NO es "libre" y los datos son válidos
      if (curso && curso.toLowerCase() !== 'libre' && !isNaN(semestre) && !isNaN(numHora)) {
        data.push({
          semestre,
          dia,
          numHora,
          horaInicio,
          horaFin,
          curso
        });
      }
    }
  }
  
  return data;
}
