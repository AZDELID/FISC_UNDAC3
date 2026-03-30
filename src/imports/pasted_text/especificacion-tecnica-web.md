Especificación Técnica para el Desarrollo de Plataforma Web de Apoyo Académico para Estudiantes de Ingeniería de Sistemas
1. Objetivo del Sistema

Desarrollar una plataforma web que permita a los estudiantes de Ingeniería de Sistemas:

planificar horarios académicos

calcular promedios de cursos

consultar información y recomendaciones de cursos

visualizar el plan curricular de la carrera

El sistema se desarrollará como aplicación web estática ejecutada completamente en el navegador, sin uso de servidor.

Esto implica que:

no habrá base de datos en servidor

no habrá cuentas de usuario

toda la lógica se ejecutará en JavaScript en el cliente

2. Tecnologías a Utilizar
2.1 Lenguajes Principales

El sistema debe desarrollarse utilizando las siguientes tecnologías:

HTML5
CSS3
JavaScript (ES6)

2.2 Librerías Recomendadas

Para funcionalidades específicas se recomienda usar:

html2canvas

Función:

convertir elementos HTML en imagen.

Uso:

generar imagen del horario.

jsPDF

Función:

exportar contenido en formato PDF.

Uso:

descargar el horario generado.

3. Estructura del Proyecto (Organización del Código)

El proyecto debe organizarse en carpetas separadas por responsabilidad.

Estructura recomendada:

sistema-academico-web

index.html

/pages
    horarios.html
    calculadora-promedio.html
    cursos.html
    recomendaciones.html

/css
    main.css
    horarios.css
    promedio.css
    cursos.css

/js
    main.js
    horarios.js
    promedio.js
    cursos.js

/data
    cursos.json
    horarios.json

/assets
    images
    icons

/libs
    jspdf
    html2canvas
4. Base de Conocimiento de Cursos (Course Knowledge Base)

Este módulo mostrará información detallada de cada curso del plan curricular.

Cada curso debe contener la siguiente información:

nombre del curso

código del curso

semestre al que pertenece

cursos prerrequisito

cursos que dependen de él

recomendación académica

importancia dentro de la carrera

5. Estructura de Datos del Plan Curricular

La información de cursos debe almacenarse en un archivo:

data/cursos.json

Cada curso tendrá la siguiente estructura:

{
 "codigo": "",
 "nombre": "",
 "semestre": "",
 "prerrequisitos": [],
 "desbloquea": [],
 "recomendacion": ""
}
6. Cursos del Plan Curricular

A continuación se define la información inicial basada en el diagrama del plan de estudios.

I SEMESTRE
Cálculo Diferencial

Semestre: 1

Recomendación:

Se recomienda dominar funciones algebraicas y conceptos básicos de límites. Este curso es fundamental para comprender cursos posteriores como cálculo integral y cálculo multivariable.

Matemática Básica

Semestre: 1

Recomendación:

Es importante comprender álgebra básica, ecuaciones y manipulación algebraica, ya que estos conceptos se utilizarán en múltiples cursos de matemática.

Física General

Semestre: 1

Recomendación:

Se recomienda reforzar conceptos de trigonometría y vectores. Este curso es base para Física I.

Algoritmos

Semestre: 1

Recomendación:

Este curso introduce el pensamiento algorítmico. Es fundamental para programación, estructuras de datos y desarrollo de software.

Matemática Superior

Semestre: 1

Recomendación:

Curso importante para fortalecer habilidades matemáticas utilizadas en cursos avanzados de ingeniería.

Comunicación Oral y Escrita

Semestre: 1

Recomendación:

Es importante desarrollar habilidades de redacción técnica que serán necesarias en informes, proyectos y tesis.

II SEMESTRE
Cálculo Integral

Prerrequisito:

Cálculo Diferencial

Recomendación:

Dominar derivadas y límites facilitará el aprendizaje de integrales.

Estadística General

Recomendación:

Este curso es fundamental para análisis de datos, inteligencia artificial e investigación.

Lenguaje de Programación I

Prerrequisito:

Algoritmos

Recomendación:

Es importante comprender estructuras de control, variables y lógica de programación.

Taller de Arte: Danza

Recomendación:

Curso orientado al desarrollo integral del estudiante.

Métodos de Estudio del Trabajo Universitario

Recomendación:

Permite desarrollar técnicas de organización y aprendizaje académico.

Realidad Nacional

Recomendación:

Curso orientado a comprender el contexto social y económico del país.

Química General

Recomendación:

Curso de formación científica básica.

III SEMESTRE
Cálculo Multivariable

Prerrequisito:

Cálculo Integral

Recomendación:

Se recomienda dominar integrales y derivadas parciales.

Matemática Básica II

Prerrequisito:

Matemática Básica

Física I

Prerrequisito:

Física General

Lenguaje de Programación II

Prerrequisito:

Lenguaje de Programación I

Recomendación:

Consolidar conocimientos de programación estructurada y modular.

Ecología

Curso de formación general.

Educación Física

Curso orientado a la formación integral.

Inglés Básico

Recomendación:

El dominio del inglés es fundamental en la ingeniería de sistemas debido a la gran cantidad de documentación técnica disponible en este idioma.

IV SEMESTRE
Economía

Recomendación:

Permite comprender principios económicos aplicados a organizaciones.

Investigación de Operaciones I

Recomendación:

Curso fundamental para optimización, modelamiento matemático y toma de decisiones.

Matemática Discreta

Recomendación:

Curso extremadamente importante para estructuras de datos, algoritmos y teoría de la computación.

Electrónica I

Recomendación:

Introduce conceptos de hardware que serán utilizados en arquitectura de computadoras.

Inferencia Estadística

Prerrequisito:

Estadística General

Teoría de la Computación

Recomendación:

Curso fundamental para comprender autómatas, lenguajes formales y fundamentos de la computación.

Metodología de la Investigación Científica

Recomendación:

Curso importante para la elaboración de proyectos de investigación.

7. Módulo de Planificación de Horarios

Este módulo debe desarrollarse siguiendo las siguientes etapas.

Paso 1

Crear un archivo:

data/horarios.json

Este archivo debe contener:

código de curso

semestre

día

hora inicio

hora fin

aula

Paso 2

En la página horarios.html el sistema debe mostrar:

selector de semestre

lista de cursos

Todos los cursos del semestre seleccionado deben aparecer marcados automáticamente.

Paso 3

El usuario podrá:

desmarcar cursos

marcar cursos de otros semestres

Paso 4

Al presionar Generar Horario el sistema debe:

buscar los cursos seleccionados

leer sus horarios en horarios.json

construir una tabla semanal.

Paso 5

La tabla del horario debe tener la siguiente estructura:

Días:

Lunes
Martes
Miércoles
Jueves
Viernes

Horas:

bloques horarios definidos.

Paso 6

Permitir exportación del horario:

Botón 1:

Descargar imagen (html2canvas)

Botón 2:

Descargar PDF (jsPDF)

8. Módulo de Cálculo de Promedios

El sistema debe permitir ingresar notas para 4 unidades académicas.

Cada unidad se compone de:

Actitudinal → 10%
Conceptual → 40%
Procedimental → 50%

Paso 1

El usuario puede ingresar:

notas individuales

nota final de unidad

Paso 2

El sistema calcula:

Unidad = (Actitudinal * 0.10) +
         (Conceptual * 0.40) +
         (Procedimental * 0.50)
Paso 3

Promedio final:

Promedio = (U1 + U2 + U3 + U4) / 4
Paso 4

Mostrar resultado:

Estado:

Aprobado
Desaprobado

Condición:

Promedio ≥ 10.5

9. Funcionalidades No Implementadas (Versión Actual)

Las siguientes funcionalidades aparecerán en la interfaz pero no estarán operativas.

Repositorio de recursos académicos

Perfil académico del estudiante

Sistema colaborativo de consejos

Simulador de carga académica

Estas se mostrarán como:

"Funcionalidad en desarrollo"

10. Página Principal

La página principal debe mostrar:

descripción del sistema

acceso a los módulos

visualización del plan curricular completo (imagen proporcionada)