# 🚀 Guía de Lenis - Smooth Scroll

## ✨ ¿Qué es Lenis?

**Lenis** hace que el scroll (desplazamiento) de tu página sea **super suave y fluido**, como si navegaras sobre mantequilla.

### Antes vs Después:
- ❌ **Antes**: Scroll normal, puede sentirse brusco o "robótico"
- ✅ **Después**: Scroll suave, elegante, profesional (como en sitios premium)

---

## 🎯 ¿Qué hice para implementarlo?

### Paso 1: Instalé Lenis
```bash
npm install lenis
```

### Paso 2: Creé el Componente SmoothScroll

**Ubicación:** `src/components/SmoothScroll/SmoothScroll.tsx`

Este componente:
- Inicializa Lenis cuando la página carga
- Configura la animación del scroll
- Se limpia automáticamente cuando se cierra la página

### Paso 3: Agregué los Estilos CSS

**Ubicación:** `tailwind.css` (al final del archivo)

Estilos que optimizan el comportamiento de Lenis.

### Paso 4: Lo Integré en la App

**Ubicación:** `src/index.tsx`

Envolvimos tu página principal con el componente:

```tsx
<SmoothScroll>
  <DesktopView />
</SmoothScroll>
```

---

## ⚙️ Configuración Actual

```tsx
duration: 1.2           // Duración de la animación (1.2 segundos)
smoothWheel: true       // Suaviza la rueda del mouse
orientation: 'vertical' // Scroll vertical
```

---

## 🎨 Cómo Personalizarlo

### Cambiar la Velocidad

Abre: `src/components/SmoothScroll/SmoothScroll.tsx`

```tsx
// Más lento (más suave)
duration: 2.0

// Normal (recomendado)
duration: 1.2

// Más rápido (más dinámico)
duration: 0.8
```

### Cambiar el Multiplicador del Mouse

```tsx
// Scroll más lento con mouse
wheelMultiplier: 0.5

// Normal
wheelMultiplier: 1

// Scroll más rápido con mouse
wheelMultiplier: 2
```

### Cambiar el Multiplicador Táctil (Touch)

```tsx
// Scroll más lento en móviles
touchMultiplier: 1

// Normal
touchMultiplier: 2

// Scroll más rápido en móviles
touchMultiplier: 3
```

---

## 🚫 Desactivar Smooth Scroll en Elementos Específicos

Si quieres que un elemento tenga scroll normal (no suave), agrégale el atributo:

```html
<div data-lenis-prevent>
  Este contenedor tendrá scroll normal
</div>
```

**Ejemplo de uso:**
```tsx
<div 
  data-lenis-prevent 
  className="overflow-y-auto h-96"
>
  Contenido con scroll normal (no suave)
</div>
```

---

## 🔧 Cómo Funciona (Explicación Simple)

### Analogía:

Imagina que el scroll es un auto:

1. **Sin Lenis**: El auto frena en seco cuando sueltas el pedal (brusco)
2. **Con Lenis**: El auto frena suavemente con inercia (suave)

### Técnicamente:

1. **Detecta** cuando haces scroll (rueda mouse, touch, etc.)
2. **Intercepta** el scroll nativo del navegador
3. **Anima** el desplazamiento de forma suave usando matemáticas
4. **Actualiza** la posición 60 veces por segundo (60 FPS)

---

## 📊 Estructura de Archivos

```
src/
├── index.tsx                       ← Envuelve todo con SmoothScroll
├── components/
│   └── SmoothScroll/
│       ├── SmoothScroll.tsx       ← Componente que maneja Lenis
│       └── index.ts               ← Export del componente
└── screens/
    └── DesktopView/
        └── DesktopView.tsx        ← Tu página (ahora con smooth scroll)

tailwind.css                        ← Estilos de Lenis agregados al final
```

---

## 🎯 Flujo de Ejecución

```
1. Usuario abre → http://localhost:5173
                     ↓
2. React carga  → src/index.tsx
                     ↓
3. index.tsx renderiza → <SmoothScroll>
                     ↓
4. SmoothScroll inicializa → Lenis
                     ↓
5. Lenis intercepta → Todo el scroll de la página
                     ↓
6. Resultado → Scroll super suave ✨
```

---

## 💡 Casos de Uso

### ¿Cuándo usar Lenis?

✅ **SÍ usar cuando:**
- Quieres una experiencia premium
- Tienes un portafolio creativo
- Tienes animaciones sincronizadas con scroll
- Quieres impresionar a visitantes

❌ **NO usar cuando:**
- Tu sitio es muy simple
- Tienes muchos elementos interactivos complejos
- Necesitas compatibilidad con navegadores antiguos

---

## 🐛 Solución de Problemas

### El scroll no es suave

1. ✅ Verifica que el servidor esté corriendo
2. ✅ Revisa la consola del navegador (F12) por errores
3. ✅ Asegúrate que SmoothScroll esté en index.tsx
4. ✅ Recarga la página con Ctrl+F5

### El scroll está demasiado lento

Abre `SmoothScroll.tsx` y cambia:
```tsx
duration: 0.8,           // Menos duración = más rápido
wheelMultiplier: 1.5,    // Más multiplicador = más rápido
```

### El scroll está demasiado rápido

```tsx
duration: 2.0,           // Más duración = más lento
wheelMultiplier: 0.5,    // Menos multiplicador = más lento
```

### Quiero desactivarlo temporalmente

Comenta el wrapper en `index.tsx`:

```tsx
// <SmoothScroll>
  <DesktopView />
// </SmoothScroll>
```

---

## 🎓 Conceptos Técnicos (Opcional)

### useEffect
Hook de React que ejecuta código cuando el componente se monta:
```tsx
useEffect(() => {
  // Este código se ejecuta cuando el componente aparece
  return () => {
    // Este código se ejecuta cuando el componente desaparece
  };
}, []);
```

### requestAnimationFrame (RAF)
Función del navegador que ejecuta código 60 veces por segundo:
```tsx
function animate(time) {
  lenis.raf(time);              // Actualiza Lenis
  requestAnimationFrame(animate); // Repite
}
```

### Linear Interpolation (Lerp)
Fórmula matemática que suaviza el movimiento:
```
nuevaPosición = posiciónActual + (objetivo - posiciónActual) * velocidad
```

---

## 📚 Recursos Adicionales

- [Documentación oficial](https://github.com/darkroomengineering/lenis)
- [Demo interactiva](https://lenis.darkroom.engineering/)
- [Ejemplos en CodePen](https://codepen.io/collection/lenis)

---

## ✅ Checklist Final

- [x] Lenis instalado
- [x] Componente SmoothScroll creado
- [x] Estilos CSS agregados
- [x] Integrado en index.tsx
- [x] Servidor corriendo
- [x] Smooth scroll funcionando

---

¡Disfruta de tu scroll súper suave! ✨
