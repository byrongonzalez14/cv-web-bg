# ✨ Guía: Click Spark Effect

## 🎇 ¿Qué es?

Efecto visual donde al hacer **click en cualquier parte** de la página, aparecen **chispas/rayos** que explotan desde el punto del click.

---

## 🎬 Efecto Visual

```
Click en la página →

         💥
      ╱  │  ╲
    ╱    │    ╲
  ╱      │      ╲
━━━━━━━━●━━━━━━━━  ← Rayos salen en todas direcciones
  ╲      │      ╱
    ╲    │    ╱
      ╲  │  ╱
         💥
```

**12 rayos** salen del punto de click en forma de **explosión radial**.

---

## 🎨 Configuración Actual

```tsx
<ClickSpark
  sparkColor="#d9ff6c"    // Verde lima (color del portfolio)
  sparkSize={12}          // Longitud de cada rayo
  sparkRadius={20}        // Distancia máxima que viajan
  sparkCount={12}         // Cantidad de rayos (360° / 12 = 30° entre cada uno)
  duration={500}          // Duración de la animación (500ms)
  easing="ease-out"       // Tipo de desaceleración
  extraScale={1.2}        // Multiplicador de distancia
>
  {/* Todo tu contenido */}
</ClickSpark>
```

---

## 🚀 Cómo Probarlo

1. **Abre**: http://localhost:5173
2. **Haz click** en cualquier parte de la página
3. **Observa**: Explosión de rayos verde lima ✨

---

## 🔧 Cómo Funciona

### 1. Canvas Overlay
```tsx
<canvas className="absolute inset-0 pointer-events-none" />
```
- Canvas transparente sobre toda la página
- `pointer-events-none`: No interfiere con clicks

### 2. Captura de Click
```tsx
const handleClick = (e: React.MouseEvent) => {
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  // Crear chispas en (x, y)
};
```

### 3. Creación de Sparks
```tsx
const newSparks = Array.from({ length: 12 }, (_, i) => ({
  x, y,
  angle: (2 * Math.PI * i) / 12,  // 360° dividido en 12 partes
  startTime: now
}));
```

**Ángulos:**
- Spark 0: 0° (derecha)
- Spark 1: 30°
- Spark 2: 60°
- Spark 3: 90° (arriba)
- ...
- Spark 11: 330°

### 4. Animación
```tsx
const distance = eased * sparkRadius * extraScale;
const lineLength = sparkSize * (1 - eased);

// Inicio del rayo
const x1 = sparkX + distance * Math.cos(angle);
const y1 = sparkY + distance * Math.sin(angle);

// Final del rayo
const x2 = sparkX + (distance + lineLength) * Math.cos(angle);
const y2 = sparkY + (distance + lineLength) * Math.sin(angle);
```

**Efectos:**
- Los rayos **se alejan** del centro
- Los rayos se **acortan** mientras se alejan
- Después de 500ms → desaparecen

---

## 🛠️ Personalización

### Cambiar Color

```tsx
sparkColor="#d9ff6c"    // Verde lima (actual)
sparkColor="#ff0000"    // Rojo
sparkColor="#00ff00"    // Verde
sparkColor="#0000ff"    // Azul
sparkColor="#ff00ff"    // Magenta
sparkColor="#ffffff"    // Blanco
```

### Cambiar Cantidad de Rayos

```tsx
sparkCount={12}    // 12 rayos (actual)
sparkCount={8}     // 8 rayos (menos denso)
sparkCount={16}    // 16 rayos (más denso)
sparkCount={24}    // 24 rayos (muy denso)
```

### Cambiar Tamaño

```tsx
// Rayos más pequeños
sparkSize={8}
sparkRadius={15}

// Normal (actual)
sparkSize={12}
sparkRadius={20}

// Rayos más grandes
sparkSize={16}
sparkRadius={30}
```

### Cambiar Velocidad

```tsx
duration={300}    // Más rápido
duration={500}    // Normal (actual)
duration={800}    // Más lento
```

### Cambiar Easing

```tsx
easing="ease-out"      // Desaceleración suave (actual)
easing="ease-in"       // Aceleración
easing="ease-in-out"   // Acelera y desacelera
easing="linear"        // Velocidad constante
```

---

## 📊 Matemática del Efecto

### Distribución Circular

```javascript
angle = (2 * Math.PI * i) / sparkCount

Para 12 sparks:
Spark 0:  0 * 30° = 0°
Spark 1:  1 * 30° = 30°
Spark 2:  2 * 30° = 60°
...
Spark 11: 11 * 30° = 330°
```

### Posición en el Círculo

```javascript
x = centerX + distance * Math.cos(angle)
y = centerY + distance * Math.sin(angle)
```

**Ejemplo:**
- Centro: (100, 100)
- Distance: 20px
- Angle: 0° (derecha)
- Resultado: x = 120, y = 100

### Animación Progresiva

```javascript
progress = elapsed / duration  // 0 → 1
eased = progress * (2 - progress)  // ease-out

t=0:    eased=0    → rayos en el centro
t=0.5:  eased=0.75 → rayos al 75%
t=1:    eased=1    → rayos al máximo
```

---

## 🎨 Variaciones de Estilo

### Explosión Rápida

```tsx
<ClickSpark
  sparkCount={16}
  sparkRadius={30}
  duration={300}
  easing="ease-out"
/>
```

### Explosión Lenta y Grande

```tsx
<ClickSpark
  sparkCount={24}
  sparkRadius={50}
  duration={800}
  easing="ease-in-out"
/>
```

### Explosión Minimalista

```tsx
<ClickSpark
  sparkCount={6}
  sparkRadius={15}
  sparkSize={8}
  duration={400}
/>
```

### Explosión Dramática

```tsx
<ClickSpark
  sparkCount={32}
  sparkRadius={40}
  sparkSize={15}
  duration={600}
  extraScale={1.5}
/>
```

---

## 💡 Por Qué Funciona Bien

1. **Canvas**: Rendering rápido y eficiente
2. **RequestAnimationFrame**: Sincronizado con el refresh rate
3. **Pointer-events-none**: No interfiere con la interacción
4. **Cleanup automático**: Sparks se eliminan después de la animación

---

## 🎯 Detalles Técnicos

### Canvas Context 2D

```javascript
ctx.strokeStyle = sparkColor;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
```

**Dibuja:**
- Línea de color `sparkColor`
- Grosor de 2px
- Desde (x1, y1) hasta (x2, y2)

### Performance

```javascript
requestAnimationFrame(draw);
```

**Beneficios:**
- Se ejecuta a ~60 FPS
- Pausa cuando la pestaña no está visible
- Sincronizado con el navegador

### Cleanup

```javascript
sparksRef.current = sparksRef.current.filter((spark) => {
  const elapsed = timestamp - spark.startTime;
  if (elapsed >= duration) {
    return false;  // Eliminar este spark
  }
  return true;  // Mantener este spark
});
```

---

## ✅ Implementación Actual

```
src/components/ClickSpark/
  ├── ClickSpark.tsx    ← Componente
  └── index.ts

src/screens/DesktopView/DesktopView.tsx
  └── Envuelve toda la app con <ClickSpark>
```

---

## 🚀 Resultado

Ahora tu portfolio tiene:
1. ✅ Smooth scroll (Lenis)
2. ✅ Pinned scroll (experiencias)
3. ✅ Horizontal scroll (skills)
4. ✅ Bounce animations (certificaciones)
5. ✅ **Click spark effect (toda la página)** ← NUEVO
6. ✅ Parallax showcase
7. ✅ Curved text loops

**¡6 efectos visuales increíbles!** 🎉

---

## 🎨 Ideas Adicionales (Opcional)

### Sparks de Diferentes Colores al Azar

```tsx
const colors = ['#d9ff6c', '#ff6b6b', '#4ecdc4', '#ffe66d'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
```

### Sparks que Cambian por Sección

```tsx
// En hero: verde lima
// En skills: cyan
// En certifications: amarillo
```

### Doble Click para Explosión Mayor

```tsx
const handleDoubleClick = () => {
  // sparkCount={24}, sparkRadius={40}
};
```

---

¡Efecto de click con chispas implementado! ✨

Haz click en cualquier parte y disfruta la explosión de rayos verde lima.
