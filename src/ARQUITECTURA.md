# 🏗 Arquitectura del Proyecto

Este documento describe en detalle la arquitectura, patrones de diseño y decisiones técnicas del proyecto.

---

## 📐 Principios de Diseño

### **1. Separación de Responsabilidades (SoC)**

Cada módulo tiene una responsabilidad única y bien definida:

```
📊 DATA LAYER (Datos)
    ↓ lee datos
🧠 LOGIC LAYER (Lógica)
    ↓ transforma datos
🎨 PRESENTATION LAYER (UI)
    ↓ muestra al usuario
```

### **2. Composición sobre Herencia**

Componentes pequeños que se combinan para crear interfaces complejas:

```tsx
<Quiz>
  <QuizProgress />
  <QuizQuestion />
  <QuizAnswers>
    <AnswerItem />
    <AnswerItem />
  </QuizAnswers>
  <QuizNavigation />
</Quiz>
```

### **3. DRY (Don't Repeat Yourself)**

- Custom hooks para lógica reutilizable
- Componentes modulares
- Constantes centralizadas
- Utility functions compartidas

---

## 🗂 Capas de la Aplicación

### **Capa 1: Data Layer**

**Ubicación**: `/data/`, `/constants/`

**Responsabilidad**: Proveer datos estáticos y configuración

```typescript
// /data/quiz-questions.ts
export const QUIZ_QUESTIONS: Question[] = [...]

// /constants/colors.ts
export const COLORS = { primary: {...}, tracks: {...} }

// /constants/navigation.ts
export const NAVIGATION_ITEMS = [...]
```

**Características**:
- Datos tipados con TypeScript
- Fácil de modificar sin tocar lógica
- Source of truth única

---

### **Capa 2: Logic Layer**

**Ubicación**: `/hooks/`, `/utils/`

**Responsabilidad**: Contener lógica de negocio y estado

```typescript
// /hooks/useQuizLogic.ts
export function useQuizLogic(onComplete) {
  // Estado
  const [scores, setScores] = useState(...)
  
  // Lógica
  const handleNext = () => { /* lógica compleja */ }
  const calculateWinner = () => { /* algoritmo */ }
  
  // API pública
  return { scores, handleNext, ... }
}
```

**Ventajas**:
- Testeable de forma aislada
- Reutilizable en múltiples componentes
- Fácil de debuggear

---

### **Capa 3: Presentation Layer**

**Ubicación**: `/components/`

**Responsabilidad**: Renderizar UI y manejar interacciones del usuario

```typescript
// /components/quiz/QuizAnswers.tsx
export function QuizAnswers({ answers, onSelect }) {
  return (
    <div>
      {answers.map(answer => (
        <button onClick={() => onSelect(answer)}>
          {answer.text}
        </button>
      ))}
    </div>
  )
}
```

**Características**:
- Componentes "tontos" (presentacionales)
- Sin lógica de negocio
- Altamente reutilizables

---

## 🔄 Flujo de Datos

### **Patrón: Unidirectional Data Flow**

```
┌─────────────────────────────────────────┐
│  App (Estado Global)                    │
│  - currentPage                          │
│  - quizResult                           │
└──────────────┬──────────────────────────┘
               ↓ props
┌──────────────▼──────────────────────────┐
│  Quiz (Lógica en Hook)                  │
│  - useQuizLogic()                       │
└──────────────┬──────────────────────────┘
               ↓ props
┌──────────────▼──────────────────────────┐
│  QuizAnswers (Presentación)             │
│  - Renderiza UI                         │
│  - onClick → callback al padre          │
└──────────────┬──────────────────────────┘
               ↓ eventos
┌──────────────▼──────────────────────────┐
│  useQuizLogic (Actualiza Estado)        │
│  - handleAnswerSelect()                 │
│  - handleNext()                         │
└─────────────────────────────────────────┘
```

---

## 🧩 Patrones de Diseño

### **1. Custom Hooks Pattern**

**Problema**: Componentes con demasiada lógica

**Solución**: Extraer lógica a custom hooks

```typescript
// ❌ ANTES: Todo en el componente
function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState({...})
  const [shuffled, setShuffled] = useState([])
  
  const shuffleAnswers = () => { /* 20 líneas */ }
  const handleNext = () => { /* 30 líneas */ }
  const calculateWinner = () => { /* 15 líneas */ }
  
  return <div>{/* 100 líneas de JSX */}</div>
}

// ✅ DESPUÉS: Lógica en hook, UI en componente
function Quiz() {
  const quizLogic = useQuizLogic()
  
  return (
    <div>
      <QuizProgress {...quizLogic} />
      <QuizAnswers {...quizLogic} />
    </div>
  )
}
```

**Beneficios**:
- Componente más limpio (72 líneas vs 289)
- Lógica testeable de forma aislada
- Reutilizable en otros componentes

---

### **2. Compound Components Pattern**

**Problema**: Componentes monolíticos difíciles de personalizar

**Solución**: Dividir en componentes más pequeños

```typescript
// ❌ ANTES: Monolítico
<Quiz 
  showProgress={true}
  showBlockHeader={true}
  showNavigation={true}
/>

// ✅ DESPUÉS: Composición
<Quiz>
  <QuizProgress />
  <QuizBlockHeader />
  <QuizQuestion />
  <QuizAnswers />
  <QuizNavigation />
</Quiz>
```

---

### **3. Container/Presenter Pattern**

**Container** (Smart Component): Maneja estado y lógica
**Presenter** (Dumb Component): Solo renderiza UI

```typescript
// CONTAINER: Quiz (con lógica)
export function Quiz({ onComplete }) {
  const logic = useQuizLogic(onComplete)
  return <QuizUI {...logic} />
}

// PRESENTER: QuizAnswers (sin lógica)
export function QuizAnswers({ answers, onSelect }) {
  return answers.map(a => <button onClick={onSelect}>{a.text}</button>)
}
```

---

## 🎯 Decisiones Técnicas

### **¿Por qué Custom Hooks?**

**Alternativas consideradas**:
1. ❌ Redux - Demasiado boilerplate para este tamaño
2. ❌ Context API - Innecesario, no hay estado global complejo
3. ✅ **Custom Hooks** - Perfecto balance de simplicidad y poder

**Razones**:
- Sin dependencias externas
- Fácil de entender
- Escalable para el tamaño del proyecto

---

### **¿Por qué TypeScript?**

**Beneficios**:
- Catch de errores en tiempo de desarrollo
- IntelliSense y autocompletado
- Documentación viva del código
- Refactoring más seguro

**Ejemplo**:

```typescript
// Sin TypeScript - Errores en runtime
function Quiz({ onComplete }) {
  onComplete({ trck: 'web' }) // typo! 💥
}

// Con TypeScript - Error en desarrollo
function Quiz({ onComplete }: { onComplete: (r: QuizResult) => void }) {
  onComplete({ trck: 'web' }) // ❌ Error: Property 'trck' doesn't exist
  onComplete({ track: 'web' }) // ✅ Correcto
}
```

---

### **¿Por qué Tailwind CSS?**

**Alternativas consideradas**:
1. ❌ CSS Modules - Requiere archivos separados
2. ❌ Styled Components - Runtime overhead
3. ✅ **Tailwind** - Utility-first, rápido, consistente

**Ventajas**:
- No hay naming conflicts
- Purge CSS automático (bundle pequeño)
- Design system integrado
- No context switching

---

## 📊 Métricas de Calidad

### **Antes de Refactorizar**

| Métrica | Valor |
|---------|-------|
| Líneas de código (App.tsx) | 142 |
| Líneas de código (Quiz.tsx) | 289 |
| Componentes reutilizables | 0 |
| Custom hooks | 0 |
| Archivos de constantes | 0 |
| Cobertura de tipos | ~60% |

### **Después de Refactorizar**

| Métrica | Valor | Mejora |
|---------|-------|--------|
| Líneas de código (App.refactored.tsx) | 45 | ⬇️ 68% |
| Líneas de código (Quiz.refactored.tsx) | 72 | ⬇️ 75% |
| Componentes reutilizables | 7 | ⬆️ +700% |
| Custom hooks | 2 | ⬆️ +200% |
| Archivos de constantes | 2 | ⬆️ +200% |
| Cobertura de tipos | 100% | ⬆️ +40% |

---

## 🔒 Principios SOLID

### **S - Single Responsibility Principle**

Cada módulo tiene una única responsabilidad:

```typescript
// ✅ CORRECTO
useQuizLogic() // Solo lógica del quiz
QuizProgress() // Solo mostrar progreso
QuizAnswers()  // Solo mostrar respuestas

// ❌ INCORRECTO
Quiz() // Lógica + UI + navegación + estado (too much!)
```

---

### **O - Open/Closed Principle**

Abierto para extensión, cerrado para modificación:

```typescript
// Fácil de extender sin modificar código existente
const COLORS = {
  tracks: {
    redes: '#c1ff72',
    software: '#e2a9f1',
    web: '#5ce1e6',
    // Agregar nuevo track aquí sin romper nada
    data: '#FFB6C1'
  }
}
```

---

### **L - Liskov Substitution Principle**

Los componentes pueden ser reemplazados por sus subtipos:

```typescript
// Cualquier componente que renderice preguntas
// puede reemplazar QuizAnswers
interface AnswerListProps {
  answers: Answer[]
  onSelect: (index: number) => void
}

<QuizAnswers {...props} />
<QuizGridAnswers {...props} />  // Alternativa
<QuizSliderAnswers {...props} /> // Alternativa
```

---

### **I - Interface Segregation Principle**

Interfaces específicas en lugar de genéricas:

```typescript
// ❌ INCORRECTO - Interface demasiado grande
interface QuizProps {
  questions: Question[]
  onComplete: () => void
  showProgress: boolean
  showNavigation: boolean
  theme: string
  analytics: Analytics
  // ... 10 props más
}

// ✅ CORRECTO - Interfaces específicas
interface QuizProgressProps {
  current: number
  total: number
}

interface QuizNavigationProps {
  onBack: () => void
  onNext: () => void
}
```

---

### **D - Dependency Inversion Principle**

Depender de abstracciones, no de implementaciones:

```typescript
// ✅ CORRECTO - Depende de interface
function Quiz({ onComplete }: { onComplete: (r: QuizResult) => void }) {
  // No importa cómo se implementa onComplete
}

// Uso 1: Guardar en localStorage
<Quiz onComplete={saveToLocalStorage} />

// Uso 2: Enviar a API
<Quiz onComplete={sendToAPI} />

// Uso 3: Solo logging
<Quiz onComplete={console.log} />
```

---

## 🚀 Escalabilidad

### **¿Cómo agregar un nuevo tipo de pregunta?**

1. Actualizar tipos:
```typescript
// /types/quiz.types.ts
export type ScaleType = 'config' | 'abstract' | 'NEW_TYPE'
```

2. Agregar pregunta:
```typescript
// /data/quiz-questions.ts
{
  id: 21,
  isScale: true,
  scaleType: 'NEW_TYPE',
  // ...
}
```

3. Actualizar UI (opcional):
```typescript
// /components/quiz/QuizAnswers.tsx
{question.scaleType === 'NEW_TYPE' && <CustomBadge />}
```

---

### **¿Cómo agregar una nueva página?**

1. Crear componente:
```typescript
// /components/MyNewPage.tsx
export function MyNewPage() { return <div>...</div> }
```

2. Agregar tipo:
```typescript
// /constants/navigation.ts
export type PageType = 'home' | 'roadmap' | 'NEW_PAGE'
```

3. Agregar a navegación:
```typescript
// /constants/navigation.ts
{ id: 'NEW_PAGE', label: 'Mi Página', showInNav: true }
```

4. Renderizar en App:
```typescript
// /App.refactored.tsx
{currentPage === 'NEW_PAGE' && <MyNewPage />}
```

---

## 🧪 Testing Strategy

### **Estructura de Tests**

```
tests/
├── unit/              # Tests unitarios
│   ├── hooks/
│   │   ├── useQuizLogic.test.ts
│   │   └── useNavigation.test.ts
│   └── components/
│       ├── QuizProgress.test.tsx
│       └── QuizAnswers.test.tsx
│
├── integration/       # Tests de integración
│   └── Quiz.test.tsx
│
└── e2e/              # Tests end-to-end
    └── quiz-flow.test.ts
```

### **Ejemplo de Test Unitario**

```typescript
// tests/unit/hooks/useQuizLogic.test.ts
describe('useQuizLogic', () => {
  it('should calculate correct winner', () => {
    const { result } = renderHook(() => useQuizLogic(onComplete))
    
    // Simular respuestas
    act(() => {
      result.current.handleAnswerSelect(0)
      result.current.handleNext()
    })
    
    expect(result.current.scores.redes).toBe(1)
  })
})
```

---

## 📈 Roadmap Técnico

### **Fase 1: Fundamentos** ✅ COMPLETADO
- ✅ Arquitectura modular
- ✅ TypeScript
- ✅ Custom hooks
- ✅ Componentes reutilizables

### **Fase 2: Optimización** (Próximamente)
- [ ] React.memo en componentes
- [ ] Lazy loading de páginas
- [ ] Code splitting
- [ ] Service Worker

### **Fase 3: Testing** (Futuro)
- [ ] Unit tests (80% coverage)
- [ ] Integration tests
- [ ] E2E tests
- [ ] Visual regression tests

### **Fase 4: Avanzado** (Futuro)
- [ ] Server-Side Rendering (SSR)
- [ ] Static Site Generation (SSG)
- [ ] PWA features
- [ ] Offline support

---

## 🎓 Lecciones Aprendidas

### **1. Refactorizar temprano**

> "Es más fácil prevenir código espagueti que limpiarlo después"

- Empezar con buena arquitectura desde el inicio
- Refactorizar cuando un componente supera 200 líneas

### **2. Tipos son documentación**

> "TypeScript no es overhead, es documentación ejecutable"

- Los tipos evitan bugs y documentan el código
- IntelliSense hace el desarrollo más rápido

### **3. Componentes pequeños son mejores**

> "Un componente debe hacer una cosa y hacerla bien"

- Más fácil de testear
- Más fácil de entender
- Más fácil de reutilizar

---

## 🤝 Convenciones del Proyecto

### **Naming Conventions**

```typescript
// Componentes: PascalCase
export function QuizProgress() {}

// Hooks: camelCase con prefijo 'use'
export function useQuizLogic() {}

// Constantes: UPPER_SNAKE_CASE
export const QUIZ_QUESTIONS = []

// Tipos: PascalCase
export type QuizResult = {}

// Archivos: kebab-case
quiz-questions.ts
use-navigation.ts
```

### **File Organization**

```typescript
// Orden dentro de un archivo
1. Imports
2. Types/Interfaces
3. Constants
4. Component/Hook
5. Exports

// Ejemplo:
import { useState } from 'react'        // 1. Imports
import type { QuizProps } from './types' // 1. Imports

interface State { /* */ }               // 2. Types

const INITIAL_STATE = {}               // 3. Constants

export function Quiz() { /* */ }       // 4. Component

export { Quiz }                        // 5. Exports (opcional)
```

---

**Última actualización**: 2025  
**Autor**: PJ
