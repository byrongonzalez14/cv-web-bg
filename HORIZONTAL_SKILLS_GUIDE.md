# 🎨 Guía: Horizontal Skills Scroll (como Lenis)

## ✨ ¿Qué es?

Efecto donde **scrolleas vertical** pero las **cards se mueven horizontal**, exactamente como en https://lenis.darkroom.engineering/

---

## 🎬 Cómo Funciona

### Visual:

```
Tu scroll: ↓ (vertical)

Cards:  →→→→→ (horizontal)

┌─────────────────────────────────┐
│  [Card 1] [Card 2] [Card 3]    │ ← Se mueven horizontalmente
└─────────────────────────────────┘
   ↓ Sigues scrolleando vertical
┌─────────────────────────────────┐
│     [Card 2] [Card 3] [Card 4] │ ← Cards se desplazaron
└─────────────────────────────────┘
```

---

## 🔧 Los 3 Ingredientes

### 1. Contenedor Alto (300vh)
```tsx
height: '300vh'  // 3 pantallas de scroll
```

### 2. Sticky Container
```tsx
className="sticky top-0 h-screen"  // Se pega
```

### 3. Transform Horizontal
```tsx
transform: `translateX(-${horizontalOffset}px)`
```

---

## 📊 La Fórmula

```javascript
// 1. Calcular progreso del scroll (0 a 1)
const progress = -rect.top / (rect.height - windowHeight);

// 2. Calcular cuántos píxeles mover horizontalmente
const cardWidth = 400;
const totalWidth = skills.length * cardWidth;
const maxScroll = totalWidth - window.innerWidth;
const horizontalOffset = progress * maxScroll;

// 3. Aplicar transformación
transform: `translateX(-${horizontalOffset}px)`
```

---

## 🎨 Características Implementadas

### ✅ 17 Skills con datos reales
- AWS, Generative AI, n8n, SQL, Java, JavaScript, Docker, Angular, Vue, etc.

### ✅ Cards con diseño profesional
- Gradientes únicos por skill
- Número en grande (01, 02, 03...)
- Estrellas de rating
- Badges de nivel (Expert, Advanced, Intermediate)
- Hover effect con scale

### ✅ Efectos visuales
- Opacity: Cards lejanas se ven más transparentes
- Scale: Cards lejanas se ven más pequeñas
- Smooth transition

### ✅ Indicador de progreso
- Barra animada en la parte inferior
- Porcentaje de exploración

---

## 🛠️ Personalización

### Cambiar Velocidad del Scroll

```tsx
// Línea 151 - Más scroll = más lento
style={{ height: '400vh' }}

// Normal (actual)
style={{ height: '300vh' }}

// Menos scroll = más rápido
style={{ height: '200vh' }}
```

### Cambiar Ancho de Cards

```tsx
// Línea 182
const cardWidth = 400;  // Actual

// Más anchas
const cardWidth = 500;

// Más estrechas
const cardWidth = 300;
```

### Agregar/Quitar Skills

```tsx
// Edita el array 'skills' (línea 15-175)
const skills: Skill[] = [
  {
    id: 18,
    name: "Nueva Skill",
    category: "Descripción",
    level: "Expert",
    stars: 5,
    description: "Categoría",
    color: "from-pink-500 to-purple-600"
  },
  // ... más skills
];
```

### Cambiar Gradientes

```tsx
// Opciones de gradientes:
color: "from-orange-500 to-yellow-600"   // Naranja-Amarillo
color: "from-purple-500 to-pink-600"     // Morado-Rosa
color: "from-blue-500 to-cyan-600"       // Azul-Cyan
color: "from-red-500 to-orange-600"      // Rojo-Naranja
color: "from-green-500 to-emerald-600"   // Verde-Esmeralda
```

---

## 🎯 Diferencias con Scroll Normal

| Scroll Normal | Horizontal Scroll |
|---------------|-------------------|
| Scrolleas ↓, contenido baja ↓ | Scrolleas ↓, contenido va → |
| Vertical todo | Efecto cinematográfico |
| Menos impacto | Muy visual y moderno |

---

## 📐 Matemática del Efecto

### Ejemplo Práctico:

Si tienes **17 skills** y cada card mide **400px**:

```
Total width = 17 × 400 = 6800px
Window width = 1440px
Max scroll = 6800 - 1440 = 5360px

Progress = 0    → horizontalOffset = 0px      (inicio)
Progress = 0.25 → horizontalOffset = 1340px   (25%)
Progress = 0.5  → horizontalOffset = 2680px   (50%)
Progress = 0.75 → horizontalOffset = 4020px   (75%)
Progress = 1    → horizontalOffset = 5360px   (final)
```

---

## 🎨 Efectos Aplicados

### 1. Opacity (Transparencia)
```tsx
opacity: Math.max(0.3, 1 - Math.abs(index - scrollProgress * skills.length) * 0.2)
```
**¿Qué hace?**
- Cards cerca del centro: opacity = 1 (100%)
- Cards lejos: opacity = 0.3-0.8 (más transparentes)

### 2. Scale (Escala)
```tsx
scale(${Math.max(0.85, 1 - Math.abs(index - scrollProgress * skills.length) * 0.05)})
```
**¿Qué hace?**
- Cards cerca: scale = 1 (tamaño normal)
- Cards lejos: scale = 0.85-0.95 (más pequeñas)

---

## 💡 Por Qué Funciona

### El Truco del Sticky:

1. **Contenedor alto (300vh)**: Crea espacio para scroll
2. **Sticky top**: El viewport se "pega" a la pantalla
3. **Transform translateX**: Mueve las cards horizontalmente
4. **Progress tracking**: Sincroniza scroll vertical con movimiento horizontal

### Analogía:

Es como ver una **película en cine panorámico** 🎬:
- La pantalla (viewport) está fija
- La película (cards) se mueve horizontalmente
- Tú controlas con scroll (en lugar de botón play)

---

## 🚀 Optimización

### Performance Tips:

1. **GPU Acceleration**
   ```tsx
   transform: translateX()  // ✅ Usa GPU
   left: 0px               // ❌ Usa CPU
   ```

2. **Transition Duration**
   ```tsx
   transition-transform duration-100  // Smooth pero no lag
   ```

3. **Will-Change** (opcional)
   ```tsx
   style={{ willChange: 'transform' }}
   ```

---

## 📱 Responsive

Las cards se adaptan automáticamente:

```tsx
// Desktop
w-[380px] h-[450px]  // Cards grandes

// Mobile (podrías ajustar)
w-[300px] h-[400px]  // Cards más pequeñas
```

---

## ✅ Checklist

- [x] Contenedor con 300vh
- [x] Sticky positioning
- [x] 17 skills configuradas
- [x] Transform horizontal
- [x] Opacity/Scale effects
- [x] Progress indicator
- [x] Hover effects
- [x] Smooth transitions
- [x] Gradientes únicos
- [x] Ratings con estrellas

---

## 🎓 Conceptos Clave

### Transform: translateX

```css
/* Mueve a la izquierda */
transform: translateX(-500px);

/* Mueve a la derecha */
transform: translateX(500px);
```

### Progreso Lineal

```
scrollProgress: 0 → 0.1 → 0.2 → ... → 0.9 → 1
        ↓
horizontalOffset: 0 → 536 → 1072 → ... → 4824 → 5360
```

---

¡Ahora tienes un scroll horizontal súper profesional como Lenis! 🎉
