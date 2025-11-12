# 🎯 Guía: Efecto "Pinned Scroll" como Lenis

## ✨ ¿Qué es el Efecto Pinned Scroll?

Es el efecto que ves en https://lenis.darkroom.engineering/ donde:
- ✅ La sección se **pega** a la pantalla
- ✅ **NO se ve que scrolleas** (no pasan cajas/elementos)
- ✅ El contenido **FLOTA** y cambia en su lugar
- ✅ Da sensación de **magia** sin movimiento de scroll

---

## 🎬 Diferencia Visual

### ❌ Scroll Normal (lo que NO querías):
```
┌─────────────────┐
│  Caja 1         │  ← Ves esta caja
└─────────────────┘
   ↓ scroll (ves que te mueves)
┌─────────────────┐
│  Caja 2         │  ← Ahora ves esta
└─────────────────┘
   ↓ scroll
┌─────────────────┐
│  Caja 3         │  ← Ahora esta
└─────────────────┘
```

### ✅ Pinned Scroll (lo que SÍ querías):
```
┌─────────────────┐
│  Logo A         │  ← La pantalla NO se mueve
│  Contenido A    │     pero el contenido cambia
└─────────────────┘
   ↓ scroll (pantalla fija!)
┌─────────────────┐
│  Logo A → B     │  ← Misma posición en pantalla
│  Cont. A → B    │     contenido transiciona
└─────────────────┘
   ↓ scroll (pantalla fija!)
┌─────────────────┐
│  Logo B         │  ← Misma posición
│  Contenido B    │     nuevo contenido
└─────────────────┘
```

---

## 🔧 Los 3 Ingredientes Mágicos

### 1️⃣ Contenedor Alto (400vh)

```tsx
<div style={{ height: '400vh' }}>
  {/* Este div ocupa 4 pantallas de altura */}
  {/* Esto crea espacio para hacer scroll */}
</div>
```

**¿Por qué 400vh?**
- `100vh` = 1 pantalla
- `400vh` = 4 pantallas
- Tienes 4 experiencias
- 1 pantalla de scroll por experiencia

### 2️⃣ Contenedor Sticky (position: sticky)

```tsx
<div className="sticky top-0 h-screen">
  {/* Este div se PEGA al top */}
  {/* Mientras scrolleas, se queda ahí */}
</div>
```

**¿Qué hace `sticky`?**
- Cuando llegas a él: se pega al `top: 0`
- Mientras scrolleas: permanece pegado
- Cuando terminas: se despega y continúa

### 3️⃣ Progreso de Scroll

```tsx
const handleScroll = () => {
  const rect = container.getBoundingClientRect();
  const progress = -rect.top / (rect.height - window.innerHeight);
  // progress va de 0 (inicio) a 1 (final)
};
```

**¿Qué hace?**
- Calcula qué % del contenedor has scrolleado
- `0` = inicio (arriba del todo)
- `0.25` = 25% scrolleado (experiencia 1)
- `0.5` = 50% scrolleado (experiencia 2)
- `0.75` = 75% scrolleado (experiencia 3)
- `1` = 100% scrolleado (experiencia 4)

---

## 📊 Cómo Funciona Paso a Paso

### Paso 1: Setup Inicial

```tsx
<div style={{ height: '400vh' }}>  // Contenedor padre (4 pantallas)
  <div className="sticky top-0 h-screen">  // Contenedor pegado (1 pantalla)
    {/* Contenido visible */}
  </div>
</div>
```

### Paso 2: Usuario Hace Scroll

```
Scroll: 0% → contenedor en posición normal
Scroll: 1% → contenedor se pega (sticky activado)
Scroll: 25% → contenido empieza a cambiar
Scroll: 50% → segunda experiencia visible
Scroll: 75% → tercera experiencia visible
Scroll: 100% → sticky se despega, scroll continúa
```

### Paso 3: Cambiar Contenido

```tsx
// Determinar qué experiencia mostrar
const currentIndex = Math.floor(scrollProgress * 4); // 0, 1, 2, o 3

// Progreso dentro de la experiencia actual
const experienceProgress = (scrollProgress * 4) % 1; // 0 a 1

// Animar transición
opacity: 1 - experienceProgress,  // Actual se desvanece
opacity: experienceProgress,      // Siguiente aparece
```

---

## 🎨 La Matemática del Efecto

### Fórmula del Progress:

```javascript
scrollProgress = -rect.top / (rect.height - window.innerHeight)
```

**Desglosando:**

| Variable | ¿Qué es? | Ejemplo |
|----------|----------|---------|
| `rect.top` | Distancia del contenedor al top del viewport | -2000px |
| `rect.height` | Altura total del contenedor | 4000px (400vh) |
| `window.innerHeight` | Altura del viewport | 1000px |
| `scrollProgress` | Resultado | 0.67 (67%) |

### Ejemplo Práctico:

Si tu contenedor mide `4000px` y la ventana `1000px`:

```
rect.top = 0px       → progress = 0      (0%)
rect.top = -750px    → progress = 0.25   (25%)  ← Experiencia 1
rect.top = -1500px   → progress = 0.5    (50%)  ← Experiencia 2
rect.top = -2250px   → progress = 0.75   (75%)  ← Experiencia 3
rect.top = -3000px   → progress = 1      (100%) ← Experiencia 4
```

---

## 🎯 Animaciones de Transición

### Logo - Scale + Fade

```tsx
// Logo actual (desaparece)
style={{
  opacity: 1 - experienceProgress,        // 1 → 0
  transform: `scale(${1 - experienceProgress * 0.2})`, // 1 → 0.8
}}

// Logo siguiente (aparece)
style={{
  opacity: experienceProgress,            // 0 → 1
  transform: `scale(${0.8 + experienceProgress * 0.2})`, // 0.8 → 1
}}
```

**¿Qué logra?**
- Logo actual: se encoge (scale down) y desvanece
- Logo nuevo: crece (scale up) y aparece
- Transición suave entre ambos

### Descripción - Slide + Fade

```tsx
// Descripción actual (sale)
style={{
  opacity: 1 - experienceProgress,        // 1 → 0
  transform: `translateX(${experienceProgress * -50}px)`, // 0 → -50px
}}

// Descripción siguiente (entra)
style={{
  opacity: experienceProgress,            // 0 → 1
  transform: `translateX(${(1 - experienceProgress) * 50}px)`, // 50px → 0
}}
```

**¿Qué logra?**
- Descripción actual: se desliza a la izquierda y desvanece
- Descripción nueva: entra desde la derecha y aparece
- Efecto de "cambio de página"

---

## 🛠️ Cómo Personalizar

### Cambiar la Altura del Scroll

```tsx
// Más scroll (más lento)
style={{ height: '600vh' }}  // 6 pantallas

// Normal
style={{ height: '400vh' }}  // 4 pantallas (actual)

// Menos scroll (más rápido)
style={{ height: '200vh' }}  // 2 pantallas
```

### Cambiar la Velocidad de Transición

```tsx
// Transición más rápida entre experiencias
const currentIndex = Math.floor(scrollProgress * totalExperiences * 1.5);

// Transición más lenta
const currentIndex = Math.floor(scrollProgress * totalExperiences * 0.7);
```

### Cambiar el Tipo de Animación

```tsx
// En lugar de fade + scale, usa solo fade:
style={{
  opacity: 1 - experienceProgress,
  // transform: `scale(...)`, ← Comenta esta línea
}}

// O añade rotación:
style={{
  opacity: 1 - experienceProgress,
  transform: `scale(...) rotate(${experienceProgress * 10}deg)`,
}}
```

### Personalizar Colores del Indicador

```tsx
// Línea 112-122
backgroundColor: index === currentIndex 
  ? '#d9ff6c'              // Color activo (verde lima)
  : index < currentIndex 
    ? 'rgba(217, 255, 108, 0.3)'  // Ya pasado
    : 'rgba(255, 255, 255, 0.2)', // Por venir
```

---

## 🎓 Conceptos Clave

### Position: Sticky

```css
.sticky {
  position: sticky;
  top: 0;
}
```

**¿Cómo funciona?**
1. Elemento se comporta como `position: relative`
2. Cuando llegas a su posición scrolleando
3. Se "pega" como `position: fixed`
4. Permanece pegado mientras scrolleas por su contenedor padre
5. Se despega cuando sales del contenedor padre

### getBoundingClientRect()

```javascript
const rect = element.getBoundingClientRect();
```

**Retorna:**
```javascript
{
  top: -500,      // Distancia al top del viewport
  bottom: 500,    // Distancia al bottom del viewport
  left: 0,
  right: 1440,
  width: 1440,
  height: 4000,
}
```

### Math.floor vs Math.ceil vs Math.round

```javascript
Math.floor(2.7)  // 2 (redondea hacia abajo)
Math.ceil(2.3)   // 3 (redondea hacia arriba)
Math.round(2.5)  // 3 (redondea al más cercano)
```

**En nuestro caso:**
```javascript
scrollProgress = 0.7  // 70% del contenedor
totalExperiences = 4
currentIndex = Math.floor(0.7 * 4)  // 2 (experiencia 3)
```

---

## 💡 Por Qué NO se Ve el Scroll

### La Clave está en el Sticky

```
Usuario en posición scroll: 0
┌────────────────────────┐
│  [Sección normal]      │
│  [Otra sección]        │
│  ┌──────────────────┐  │
│  │ PINNED START     │  │ ← Nuestro contenedor
│  └──────────────────┘  │
└────────────────────────┘

Usuario hace scroll ↓

┌────────────────────────┐ ← Viewport
│  ┌──────────────────┐  │
│  │ PINNED PEGADO    │  │ ← Se pegó! (sticky)
│  │ Contenido cambia │  │    viewport no se mueve
│  └──────────────────┘  │    contenido sí cambia
└────────────────────────┘

Usuario sigue scroll ↓ (contenedor sigue pegado)

┌────────────────────────┐ ← Viewport (misma posición)
│  ┌──────────────────┐  │
│  │ PINNED PEGADO    │  │ ← Sigue pegado
│  │ Nuevo contenido  │  │    nuevo contenido
│  └──────────────────┘  │
└────────────────────────┘
```

**El Truco:**
- El `sticky` mantiene el contenedor en la misma posición visual
- El scroll se "consume" actualizando el contenido
- Al usuario le parece que no se mueve
- Pero el scroll sí está ocurriendo (medimos con getBoundingClientRect)

---

## 🎨 Estructura del Componente

```tsx
<div style={{ height: '400vh' }}>           // 1. Contenedor padre alto
  <div className="sticky top-0 h-screen">   // 2. Contenedor pegado
    <div className="grid grid-cols-2">      // 3. Layout 2 columnas
      
      {/* Columna Izquierda - Logo */}
      <div className="relative">            // 4. Posición relativa
        <div style={{ opacity: 1 - p }}>   // 5. Logo actual (fade out)
          {currentExperience.logo}
        </div>
        <div style={{ opacity: p }}>       // 6. Logo siguiente (fade in)
          {nextExperience.logo}
        </div>
      </div>
      
      {/* Columna Derecha - Descripción */}
      <div className="relative">
        <div style={{ opacity: 1 - p }}>   // 7. Desc actual (fade out)
          {currentExperience.description}
        </div>
        <div style={{ opacity: p }}>       // 8. Desc siguiente (fade in)
          {nextExperience.description}
        </div>
      </div>
      
    </div>
  </div>
</div>
```

---

## 🚀 Ventajas de Este Efecto

1. **Inmersivo**: El usuario se enfoca en el contenido, no en el scroll
2. **Storytelling**: Perfecto para contar una historia paso a paso
3. **Moderno**: Se ve premium y profesional
4. **Smooth**: Transiciones suaves entre elementos
5. **Controlado**: Sabes exactamente cuándo cambia el contenido

---

## ⚠️ Consideraciones

### Performance

✅ **Bien:**
- Usa `transform` y `opacity` (GPU-accelerated)
- Solo 2 elementos visibles a la vez
- No hay re-renders innecesarios

❌ **Evita:**
- Animar `width`, `height`, `top`, `left`
- Tener muchos elementos animándose simultáneamente
- Re-calcular en cada frame sin debounce

### Accesibilidad

```tsx
// Agregar indicadores accesibles
<div 
  role="region" 
  aria-label="Work Experience Timeline"
  aria-live="polite"
>
  {/* Contenido */}
</div>
```

### Móviles

```tsx
// Ajustar altura para móviles
<div 
  style={{ 
    height: window.innerWidth < 768 ? '300vh' : '400vh' 
  }}
>
```

---

## 🎯 Resumen de la Fórmula

```javascript
// 1. Contenedor alto para crear espacio de scroll
<div style={{ height: '400vh' }}>

  // 2. Contenedor sticky que se pega
  <div className="sticky top-0 h-screen">
  
    // 3. Calcular progreso del scroll
    const progress = -rect.top / (rect.height - windowHeight);
    
    // 4. Determinar contenido actual
    const current = Math.floor(progress * total);
    
    // 5. Animar transición
    <div style={{
      opacity: 1 - (progress * total % 1),
      transform: `scale(${1 - (progress * total % 1) * 0.2})`
    }}>
      {content[current]}
    </div>
    
  </div>
</div>
```

---

## ✅ Checklist de Implementación

- [x] Contenedor con `height: 400vh`
- [x] Contenedor sticky con `position: sticky`
- [x] Cálculo de scroll progress
- [x] Determinación de índice actual
- [x] Animación de fade out/in
- [x] Animación de scale
- [x] Animación de slide (translateX)
- [x] Indicador de progreso
- [x] Transiciones suaves
- [x] 4 experiencias configuradas

---

¡Ahora tienes el efecto EXACTO de Lenis! 🎉

**La pantalla NO se mueve, el contenido SÍ cambia.** ✨
