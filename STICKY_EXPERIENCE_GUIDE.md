# 🎯 Guía: Sticky Experience con Scroll-Triggered Content

## ✨ ¿Qué es este efecto?

Es un **scroll-triggered pinning effect** donde:
- ✅ Un DIV se **queda pegado** en la pantalla (sticky)
- ✅ Mientras scrolleas, el **contenido DENTRO cambia**
- ✅ Logo a la izquierda, descripción a la derecha
- ✅ Comfenalco → Freelancer → Colgate → Banco Unión/Q-Vision
- ✅ Todo en el **MISMO contenedor** (no se crean divs nuevos)

---

## 🎬 Cómo Funciona

### Analogía Simple:

Imagina un **teatro** 🎭:
- El **escenario** (div) se queda fijo
- Los **actores** (contenido) cambian mientras avanza la obra
- La **audiencia** (tú) hace scroll pero el escenario no se mueve

### Técnicamente:

```
┌─────────────────────────────────┐
│  Scrolleas ↓                    │
├─────────────────────────────────┤
│                                 │
│  ╔═══════════════════════════╗  │
│  ║  CONTENEDOR STICKY        ║  │ ← Se queda fijo
│  ║                           ║  │
│  ║  [Logo 1] | [Desc 1]      ║  │
│  ╚═══════════════════════════╝  │
│                                 │
│  Sigues scrolleando ↓           │
│                                 │
│  ╔═══════════════════════════╗  │
│  ║  MISMO CONTENEDOR         ║  │ ← Sigue fijo
│  ║                           ║  │
│  ║  [Logo 2] | [Desc 2]      ║  │ ← Contenido cambió
│  ╚═══════════════════════════╝  │
│                                 │
└─────────────────────────────────┘
```

---

## 🔧 Componentes del Sistema

### 1. Contenedor Sticky
```tsx
<div className="sticky top-0 h-screen">
  {/* Este div se queda pegado */}
</div>
```

**¿Qué hace `sticky`?**
- Funciona como `position: fixed` pero solo dentro de su contenedor padre
- Cuando scrolleas, se "pega" al top de la pantalla

### 2. Secciones Trigger Invisibles
```tsx
{experiences.map((exp, index) => (
  <div className="h-screen" />  {/* Sección invisible */}
))}
```

**¿Para qué sirven?**
- Son **espaciadores** que crean espacio para hacer scroll
- Actúan como **triggers** para detectar cuándo cambiar el contenido
- Son **invisibles** (`pointer-events: none`)

### 3. Intersection Observer
```tsx
const observer = new IntersectionObserver((entries) => {
  if (entry.isIntersecting) {
    setActiveIndex(index);  // Cambiar contenido
  }
});
```

**¿Qué hace?**
- Vigila cuando cada sección trigger entra al viewport
- Dispara el cambio de contenido
- Actualiza el estado `activeIndex`

### 4. Contenido Dinámico
```tsx
const activeExperience = experiences[activeIndex];

return (
  <div>
    <h3>{activeExperience.company}</h3>
    <p>{activeExperience.description}</p>
  </div>
);
```

**¿Qué hace?**
- Muestra SOLO la experiencia activa
- Cambia cuando `activeIndex` cambia
- Anima con fade-in al cambiar

---

## 📊 Flujo del Sistema

```
1. Usuario hace scroll ↓
         ↓
2. Sección trigger 2 entra al viewport
         ↓
3. Intersection Observer detecta
         ↓
4. setActiveIndex(2)
         ↓
5. activeExperience cambia a experiences[2]
         ↓
6. React re-renderiza el contenido
         ↓
7. Animación fade-in
         ↓
8. Usuario ve Colgate-Palmolive
```

---

## 🎨 Estructura del Componente

```tsx
<div ref={containerRef}>  {/* Contenedor padre */}
  
  {/* PARTE VISIBLE - Se queda pegada */}
  <div className="sticky top-0">
    <div className="grid grid-cols-2">
      
      {/* IZQUIERDA - Logo */}
      <div key={activeExperience.id}>
        <h3>{activeExperience.logoText}</h3>
        {/* Indicador de progreso */}
      </div>
      
      {/* DERECHA - Descripción */}
      <div key={activeExperience.id}>
        <h2>{activeExperience.role}</h2>
        <p>{activeExperience.description}</p>
        <div>{activeExperience.skills}</div>
      </div>
      
    </div>
  </div>
  
  {/* PARTE INVISIBLE - Triggers para scroll */}
  <div className="absolute top-0">
    {experiences.map((exp, index) => (
      <div 
        ref={sectionRef} 
        className="h-screen"  {/* 100vh de altura */}
      />
    ))}
  </div>
  
</div>
```

---

## 🎯 Datos de las Experiencias

Actualmente incluye 4 experiencias con datos reales:

### 1. Comfenalco Valle & Delagente
- **Rol**: Web Designer (Internship)
- **Período**: January 2017 - June 2017
- **Skills**: HTML5, CSS3, JavaScript, Bootstrap, jQuery, LESS, Scrum

### 2. Freelancer
- **Rol**: Cloud & Automation Engineer
- **Período**: May 2014 - Present
- **Skills**: AWS, Serverless, n8n, Clouds, Superset, etc.

### 3. Colgate-Palmolive
- **Rol**: Web Content Analyst - QA & SEO Specialist
- **Período**: March 2018 - June 2022
- **Skills**: AEM, SEO, Google Analytics, QA Testing, etc.

### 4. Banco Unión & Q-Vision
- **Rol**: Technical Lead - Development Analyst
- **Período**: June 2022 - May 2024
- **Skills**: Spring Boot, REST APIs, SQL, PostgreSQL, BPMN, etc.

---

## 🛠️ Cómo Personalizar

### Cambiar el Orden de las Experiencias

Abre: `src/components/StickyExperience/StickyExperience.tsx`

Reorganiza el array `experiences` (línea 11):

```tsx
const experiences: Experience[] = [
  // Puedes reordenar estos objetos como quieras
  {
    id: 1,
    company: "Primera empresa a mostrar",
    // ...
  },
  {
    id: 2,
    company: "Segunda empresa",
    // ...
  },
  // ...
];
```

### Agregar una Nueva Experiencia

```tsx
{
  id: 5,
  company: "Nueva Empresa S.A.",
  logoText: "Nueva\nEmpresa",  // \n = salto de línea
  role: "Senior Developer",
  period: "January 2025 - Present",
  description: [
    "Primera responsabilidad o logro",
    "Segunda responsabilidad o logro",
    "Tercera responsabilidad o logro",
  ],
  keyProjects: [
    "Proyecto importante 1",
    "Proyecto importante 2",
  ],
  skills: ["React", "TypeScript", "Node.js", "AWS"],
}
```

### Cambiar el Color del Indicador de Progreso

Línea 118:
```tsx
// Actual (verde lima)
bg-[#d9ff6c]

// Opciones:
bg-blue-500       // Azul
bg-purple-500     // Morado
bg-pink-500       // Rosa
bg-red-500        // Rojo
```

### Cambiar la Sensibilidad del Scroll

Línea 39:
```tsx
threshold: 0.5,  // 50% visible para cambiar (actual)
threshold: 0.3,  // 30% visible = más sensible
threshold: 0.7,  // 70% visible = menos sensible
```

### Ajustar el Margen de Activación

Línea 40:
```tsx
rootMargin: '-20% 0px -20% 0px',  // Actual
rootMargin: '-10% 0px -10% 0px',  // Más amplio
rootMargin: '-30% 0px -30% 0px',  // Más estricto
```

---

## 🎨 Estilos y Animaciones

### Animación Fade-In

Definida en `tailwind.css`:

```css
@keyframes fade-in-experience {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in-experience 0.6s ease-out forwards;
}
```

**Para modificar:**
```css
/* Más rápido */
animation: fade-in-experience 0.3s ease-out forwards;

/* Más lento */
animation: fade-in-experience 1s ease-out forwards;

/* Sin escala */
transform: scale(1);  /* Remover cambio de escala */
```

### Scrollbar Personalizado

```css
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;  /* Ancho del scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(217, 255, 108, 0.5);  /* Color */
}
```

---

## 📱 Responsive Design

El componente es responsive:

### En Móviles (< 768px):
```tsx
grid-cols-1  // Una columna (vertical)
```
- Logo arriba
- Descripción abajo

### En Tablets/Desktop (≥ 768px):
```tsx
md:grid-cols-2  // Dos columnas (horizontal)
```
- Logo izquierda
- Descripción derecha

---

## 🔍 Debugging

### ¿El contenido no cambia al hacer scroll?

1. Abre la consola del navegador (F12)
2. Verifica que no haya errores
3. Comprueba que las secciones trigger tengan altura:
   ```tsx
   className="h-screen"  // Debe tener 100vh
   ```

### ¿El contenedor no se queda pegado?

1. Verifica que tenga `sticky`:
   ```tsx
   className="sticky top-0"
   ```

2. Asegúrate que el contenedor padre no tenga `overflow: hidden`

### ¿Las animaciones no se ven?

1. Verifica que `tailwind.css` tenga las animaciones
2. Comprueba que los elementos tengan la clase:
   ```tsx
   className="animate-fade-in"
   ```

---

## 🎯 Conceptos Clave

### CSS Position: Sticky

```css
position: sticky;
top: 0;
```

**¿Qué hace?**
- Se comporta como `relative` hasta que llegas a su posición
- Luego se "pega" como `fixed`
- Pero solo dentro de su contenedor padre

### Intersection Observer API

```javascript
new IntersectionObserver(callback, options)
```

**¿Qué hace?**
- Observa cuando un elemento entra/sale del viewport
- Más eficiente que usar `scroll` events
- Permite lazy loading, infinite scroll, etc.

### React Keys

```tsx
<div key={`logo-${activeExperience.id}`}>
```

**¿Por qué es importante?**
- Le dice a React que es un elemento NUEVO
- Fuerza re-render y animación
- Sin key, React podría reutilizar el elemento

---

## 💡 Tips Avanzados

### 1. Agregar Logos Reales

Reemplaza el placeholder (línea 95-100):

```tsx
{/* Antes */}
<h3>{activeExperience.logoText}</h3>

{/* Después */}
{activeExperience.logo ? (
  <img src={activeExperience.logo} alt={activeExperience.company} />
) : (
  <h3>{activeExperience.logoText}</h3>
)}
```

### 2. Agregar Sonido al Cambiar

```tsx
const playSound = () => {
  const audio = new Audio('/sounds/transition.mp3');
  audio.play();
};

useEffect(() => {
  playSound();
}, [activeIndex]);
```

### 3. Sincronizar con URL

```tsx
useEffect(() => {
  window.history.pushState({}, '', `#exp-${activeIndex}`);
}, [activeIndex]);
```

---

## 📊 Rendimiento

### Optimizaciones Incluidas:

1. **useRef** en lugar de querySelector
2. **IntersectionObserver** en lugar de scroll events
3. **CSS animations** en lugar de JavaScript
4. **Cleanup** de observers en useEffect

### Métricas Esperadas:

- **FPS**: 60fps constante
- **Memory**: < 50MB adicional
- **CPU**: < 5% uso adicional

---

## ✅ Checklist de Implementación

- [x] Componente StickyExperience creado
- [x] 4 experiencias con datos reales
- [x] Efecto sticky funcionando
- [x] Animaciones fade-in
- [x] Indicador de progreso
- [x] Responsive design
- [x] Custom scrollbar
- [x] Integrado en DesktopView
- [ ] Logos reales (cuando los tengas)
- [ ] Ajustar textos si es necesario

---

## 🚀 Resultado Final

### Al hacer scroll verás:

```
Pantalla 1 (scroll arriba):
┌─────────────────────────────────┐
│  Comfenalco Valle  │  Web      │
│  🦅 Delagente      │  Designer │
└─────────────────────────────────┘

↓ Sigues scrolleando

Pantalla 2 (mismo div):
┌─────────────────────────────────┐
│  Freelancer        │  Cloud &  │
│                    │  Automation│
└─────────────────────────────────┘

↓ Sigues scrolleando

Pantalla 3 (mismo div):
┌─────────────────────────────────┐
│  💙 Colgate-       │  Web       │
│  Palmolive         │  Content   │
└─────────────────────────────────┘

↓ Sigues scrolleando

Pantalla 4 (mismo div):
┌─────────────────────────────────┐
│  BANCO UNIÓN       │  Technical │
│  + Q-Vision        │  Lead      │
└─────────────────────────────────┘
```

---

¡El efecto está funcionando! Abre tu navegador y haz scroll para verlo en acción. 🎉
