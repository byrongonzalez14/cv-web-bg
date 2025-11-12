# 🎨 Guía Completa de Efectos Parallax

## 🎯 ¿Qué es Parallax?

**Parallax** es cuando elementos se mueven a **diferentes velocidades** al hacer scroll, creando sensación de profundidad.

### Analogía Simple:

Imagina que vas en un auto 🚗:
- Los **árboles cercanos** pasan rápido 🌳💨
- Las **montañas lejanas** pasan lento 🏔️
- Eso crea **sensación de profundidad** ✨

---

## 📊 Los 8 Efectos Parallax que Implementé

### 1️⃣ **Parallax de Fondo** (Background Parallax)

```tsx
<div 
  className="absolute inset-0 bg-gradient-to-br from-purple-900"
  style={{
    transform: `translateY(${scrollY * 100}px)`,
  }}
/>
```

**¿Qué hace?**
- El fondo se mueve **más lento** que el scroll
- Crea sensación de profundidad
- Efecto clásico de parallax

**Fórmula:**
```
Velocidad del elemento = scrollY * factor
- factor bajo (50-100) = movimiento sutil
- factor alto (200-300) = movimiento dramático
```

---

### 2️⃣ **Parallax de Imágenes** (Image Parallax)

```tsx
<div 
  style={{
    transform: `translateY(${scrollY * -80}px)`,
  }}
>
  <img src="..." />
</div>
```

**¿Qué hace?**
- La imagen se mueve en **dirección opuesta** al scroll
- Negativo (-) = sube mientras scrolleas abajo
- Positivo (+) = baja mientras scrolleas abajo

**Casos de uso:**
- Galerías de fotos dinámicas
- Secciones de productos
- Portfolios creativos

---

### 3️⃣ **Scale Effect** (Efecto de Escala)

```tsx
<div
  style={{
    transform: `scale(${1 + scrollY * 0.3})`,
    opacity: Math.max(0, 1 - scrollY * 0.5),
  }}
>
  <h2>I grow as you scroll</h2>
</div>
```

**¿Qué hace?**
- El elemento **crece** mientras scrolleas
- También puede **desaparecer** (opacity)
- Muy usado en títulos hero

**Fórmula:**
```
Scale = 1 + (scrollY * factor)
- 1 = tamaño normal
- 1.3 = 30% más grande
- 0.7 = 30% más pequeño
```

---

### 4️⃣ **Horizontal Parallax** (Parallax Horizontal)

```tsx
<div 
  style={{
    transform: `translateX(${scrollY * -200}px)`,
  }}
>
  {/* Contenido que se mueve horizontalmente */}
</div>
```

**¿Qué hace?**
- Los elementos se mueven **de lado** mientras scrolleas vertical
- Crea carruseles automáticos
- Efecto muy moderno

**Trucos:**
- Negativo (-) = se mueve a la izquierda
- Positivo (+) = se mueve a la derecha
- Diferentes velocidades = capas en movimiento

---

### 5️⃣ **Fade & Blur** (Desvanecer y Difuminar)

```tsx
<div
  style={{
    opacity: Math.max(0, 1 - scrollY * 2),
    filter: `blur(${scrollY * 10}px)`,
  }}
>
  <h2>I fade and blur</h2>
</div>
```

**¿Qué hace?**
- El elemento se **desvanece** (opacity: 1 → 0)
- Se **difumina** (blur: 0px → 10px)
- Efecto dramático para transiciones

**Funciones útiles:**
```javascript
Math.max(0, valor)     // No baja de 0
Math.min(1, valor)     // No sube de 1
Math.abs(valor)        // Valor absoluto
```

---

### 6️⃣ **Rotate Effect** (Efecto de Rotación)

```tsx
<div
  style={{
    transform: `rotate(${scrollY * 180}deg) scale(${1 + scrollY * 0.2})`,
  }}
>
  <span>Rotate</span>
</div>
```

**¿Qué hace?**
- El elemento **rota** mientras scrolleas
- Puede combinar con scale, translate, etc.
- Perfecto para logos, íconos, elementos decorativos

**Valores comunes:**
```
rotate(90deg)    = 1/4 de vuelta
rotate(180deg)   = 1/2 vuelta
rotate(360deg)   = vuelta completa
rotate(-90deg)   = 1/4 vuelta al revés
```

---

### 7️⃣ **Staggered Parallax** (Parallax Escalonado)

```tsx
{layers.map((layer, index) => (
  <div
    key={index}
    style={{
      transform: `translateX(${scrollY * layer.speed}px)`,
    }}
  >
    {layer.content}
  </div>
))}
```

**¿Qué hace?**
- Múltiples elementos con **diferentes velocidades**
- Crea efecto de capas
- Muy visual y dinámico

**Ejemplo de velocidades:**
```javascript
Layer 1: speed = 50   (lento)
Layer 2: speed = 100  (normal)
Layer 3: speed = 150  (rápido)
Layer 4: speed = 200  (muy rápido)
Layer 5: speed = 250  (extremo)
```

---

### 8️⃣ **Emerge Effect** (Efecto de Aparición)

```tsx
<div
  style={{
    transform: `translateY(${Math.max(0, 100 - scrollY * 100)}px)`,
    opacity: Math.min(1, scrollY * 2),
  }}
>
  <h2>I emerge from below</h2>
</div>
```

**¿Qué hace?**
- El elemento **emerge desde abajo**
- Aparece gradualmente (opacity)
- Perfecto para secciones finales

---

## 🧮 La Fórmula Maestra del Parallax

```javascript
const handleScroll = () => {
  // Obtener el contenedor
  const rect = container.getBoundingClientRect();
  
  // Calcular progreso del scroll (0 a 1)
  const scrollProgress = -rect.top / (rect.height - window.innerHeight);
  
  // Aplicar transformaciones
  element.style.transform = `translateY(${scrollProgress * factor}px)`;
};
```

### Variables Clave:

| Variable | ¿Qué es? | Rango |
|----------|----------|-------|
| `rect.top` | Distancia del contenedor al top de la ventana | Cualquier número |
| `rect.height` | Altura total del contenedor | Píxeles |
| `window.innerHeight` | Altura de la ventana | Píxeles |
| `scrollProgress` | Progreso del scroll | 0 (arriba) a 1+ (abajo) |
| `factor` | Multiplicador de velocidad | Lo que quieras |

---

## 🎨 Cómo Personalizar Cada Efecto

### Cambiar la Velocidad

```tsx
// Lento
transform: `translateY(${scrollY * 20}px)`

// Normal
transform: `translateY(${scrollY * 50}px)`

// Rápido
transform: `translateY(${scrollY * 100}px)`

// Muy rápido
transform: `translateY(${scrollY * 200}px)`
```

### Cambiar la Dirección

```tsx
// Hacia arriba
transform: `translateY(${scrollY * -100}px)`

// Hacia abajo
transform: `translateY(${scrollY * 100}px)`

// Hacia izquierda
transform: `translateX(${scrollY * -100}px)`

// Hacia derecha
transform: `translateX(${scrollY * 100}px)`
```

### Combinar Efectos

```tsx
style={{
  transform: `
    translateY(${scrollY * 50}px) 
    translateX(${scrollY * -30}px)
    scale(${1 + scrollY * 0.2})
    rotate(${scrollY * 45}deg)
  `,
  opacity: Math.max(0, 1 - scrollY * 0.5),
  filter: `blur(${scrollY * 5}px)`,
}}
```

---

## 💡 Casos de Uso Reales

### 1. Hero Section Impactante

```tsx
<section className="relative h-screen">
  {/* Fondo con parallax */}
  <div 
    className="absolute inset-0 bg-image"
    style={{ transform: `translateY(${scrollY * 100}px)` }}
  />
  
  {/* Título que sube */}
  <h1 
    style={{
      transform: `translateY(${scrollY * -50}px)`,
      opacity: 1 - scrollY,
    }}
  >
    Welcome
  </h1>
</section>
```

### 2. Galería de Productos

```tsx
<div className="grid grid-cols-3">
  {products.map((product, i) => (
    <div
      key={i}
      style={{
        transform: `translateY(${scrollY * (i % 2 ? 80 : -80)}px)`,
      }}
    >
      <img src={product.image} />
    </div>
  ))}
</div>
```

### 3. Sección About con Profundidad

```tsx
<section>
  {/* Capa 1: Fondo lento */}
  <div style={{ transform: `translateY(${scrollY * 20}px)` }}>
    Background
  </div>
  
  {/* Capa 2: Contenido normal */}
  <div>
    Main Content
  </div>
  
  {/* Capa 3: Decoración rápida */}
  <div style={{ transform: `translateY(${scrollY * 150}px)` }}>
    Decoration
  </div>
</section>
```

---

## 🚀 Optimización y Performance

### ✅ Mejores Prácticas:

1. **Usar `transform` en lugar de `top/left`**
   ```tsx
   // ✅ Bien (usa GPU)
   transform: `translateY(100px)`
   
   // ❌ Mal (más lento)
   top: '100px'
   ```

2. **Usar `will-change` para animaciones complejas**
   ```tsx
   <div style={{ willChange: 'transform' }}>
   ```

3. **Limitar el número de elementos animados**
   - Máximo 10-15 elementos con parallax por sección

4. **Usar `requestAnimationFrame` para scroll smooth**
   ```javascript
   let ticking = false;
   
   window.addEventListener('scroll', () => {
     if (!ticking) {
       requestAnimationFrame(() => {
         handleScroll();
         ticking = false;
       });
       ticking = true;
     }
   });
   ```

---

## 🎓 Conceptos Técnicos

### Transform vs Position

```css
/* GPU-accelerated (más rápido) ✅ */
transform: translateY(100px);

/* CPU-based (más lento) ❌ */
top: 100px;
```

### getBoundingClientRect()

```javascript
const rect = element.getBoundingClientRect();
console.log(rect.top);    // Distancia al top de viewport
console.log(rect.bottom); // Distancia bottom al top de viewport
console.log(rect.height); // Altura del elemento
```

### ScrollY vs ScrollProgress

```javascript
// scrollY: Posición absoluta del scroll (0, 100, 500...)
window.scrollY

// scrollProgress: Posición relativa (0 a 1)
const progress = scrollY / (document.height - window.height);
```

---

## 🛠️ Herramientas de Debugging

### Console Log del Scroll

```javascript
useEffect(() => {
  const handleScroll = () => {
    console.log('ScrollY:', scrollY);
    console.log('Progress:', scrollProgress);
    console.log('Transform:', `translateY(${scrollY * 100}px)`);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Visual Debugger

```tsx
<div className="fixed top-0 right-0 bg-black/80 text-white p-4 z-50">
  <p>ScrollY: {scrollY.toFixed(2)}</p>
  <p>Progress: {(scrollY * 100).toFixed(0)}%</p>
</div>
```

---

## 📚 Recursos para Aprender Más

### Sitios con Parallax Increíble:
1. **Lenis Demo**: https://lenis.darkroom.engineering/
2. **Awwwards**: https://www.awwwards.com/ (busca "parallax")
3. **Studio Freight**: https://studiofreight.com/

### Librerías Populares:
- **Lenis**: Smooth scroll (ya lo tienes ✅)
- **GSAP ScrollTrigger**: Animaciones avanzadas
- **Locomotive Scroll**: Parallax + smooth scroll
- **React Scroll Parallax**: Componentes listos

---

## ✅ Checklist de Implementación

- [x] Parallax de fondo
- [x] Parallax de imágenes
- [x] Scale effect
- [x] Horizontal parallax
- [x] Fade & blur
- [x] Rotate effect
- [x] Staggered parallax
- [x] Emerge effect
- [ ] Tus propios efectos personalizados

---

## 🎯 Ejercicios Prácticos

### Ejercicio 1: Crear tu Hero Parallax

```tsx
<section className="relative h-screen">
  {/* TODO: Agregar fondo con parallax */}
  {/* TODO: Agregar título que suba */}
  {/* TODO: Agregar elementos decorativos */}
</section>
```

### Ejercicio 2: Galería con Parallax

```tsx
{/* TODO: Crear grid de imágenes */}
{/* TODO: Aplicar diferentes velocidades */}
{/* TODO: Agregar hover effects */}
```

### Ejercicio 3: Sección About Creativa

```tsx
{/* TODO: 3 capas con diferentes velocidades */}
{/* TODO: Texto que aparece gradualmente */}
{/* TODO: Combinarlo con fade effect */}
```

---

## 💬 Tips Finales

1. **Empieza simple**: Un solo efecto, luego combina
2. **Menos es más**: No abuses del parallax
3. **Prueba en móvil**: Ajusta para touch devices
4. **Usa Lenis**: Ya lo tienes, aprovéchalo
5. **Inspírate**: Visita sitios con parallax y analiza

---

¡Ahora tienes todas las herramientas para crear efectos parallax impresionantes como Lenis! 🚀

**Siguiente paso**: Abre tu navegador y experimenta con los valores. ¡Cambia números y mira qué pasa!
