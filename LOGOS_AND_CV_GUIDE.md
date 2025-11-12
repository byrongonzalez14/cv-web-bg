# 📁 Guía: Logos de Skills y Botón Download CV

## ✅ Lo que Implementé

### 1. **Grid 2x2 de Logos en Skills Cards**
Cada skill ahora muestra hasta 4 logos en formato grid 2x2

### 2. **Botón Download CV Funcional**
Descarga el CV correcto según el idioma seleccionado

---

## 🎨 Skills con Logos

### Grid 2x2 Layout

```
┌──────────┬──────────┐
│  Logo 1  │  Logo 2  │
├──────────┼──────────┤
│  Logo 3  │  Logo 4  │
└──────────┴──────────┘
```

### Características:
- ✅ Máximo 4 logos por skill
- ✅ Grid responsive 2x2
- ✅ Fondo con glassmorphism
- ✅ Hover effect (se ilumina)
- ✅ Border blanco semi-transparente
- ✅ Logos a 48x48px

---

## 📂 Estructura de Archivos

```
src/assets/
├── cv/
│   ├── CV-2026-EN-LT-BA-BYRON-GONZALEZ.pdf  ← CV Inglés
│   └── CV-2026-ES-LT-BA-BYRON-GONZALEZ.pdf  ← CV Español
│
└── logos-skills/
    ├── aem.svg
    ├── angular.svg
    ├── aws.svg
    ├── bizagi.svg
    ├── bootstrap.svg
    ├── chatgpt.svg
    ├── claude.svg
    ├── confluence.svg
    ├── cursor.svg
    ├── docker.svg
    ├── firebase.svg
    ├── gcp.svg
    ├── gemini.svg
    ├── google-analytics.svg
    ├── gtm.svg
    ├── java.svg
    ├── javascript.svg
    ├── jira.svg
    ├── kubernetes.svg
    ├── lucidchart.svg
    ├── mongodb.svg
    ├── n8n.svg
    ├── nodejs.svg
    ├── oracle.svg
    ├── postgresql.svg
    ├── postman.svg
    ├── powerbi.svg
    ├── reactjs.svg
    ├── soapui.svg
    ├── spring-boot.svg
    ├── tailwind.svg
    ├── trello.svg
    ├── typescript.svg
    ├── vuejs.svg
    ├── windsurf.svg
    ├── wordpress.svg
    └── zapier.svg
```

---

## 🔧 Cómo Funcionan los Logos

### 1. Datos en `cv-data.en.ts` / `cv-data.es.ts`

```typescript
skills: [
  {
    name: "Frontend Development",
    level: 5,
    category: "Development",
    logos: [
      "assets/logos-skills/angular.svg",
      "assets/logos-skills/vuejs.svg",
      "assets/logos-skills/reactjs.svg",
      "assets/logos-skills/tailwind.svg"
    ]
  }
]
```

### 2. Componente HorizontalSkills

```tsx
{/* Grid 2x2 de Logos */}
{skill.logos && skill.logos.length > 0 && (
  <div className="grid grid-cols-2 gap-3 mt-4">
    {skill.logos.slice(0, 4).map((logo, i) => (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <img 
          src={`/${logo}`}
          alt={`Logo ${i + 1}`}
          className="w-12 h-12 object-contain"
        />
      </div>
    ))}
  </div>
)}
```

### Características del Grid:
- `grid-cols-2`: 2 columnas fijas
- `gap-3`: Espacio entre logos
- `slice(0, 4)`: Solo primeros 4 logos
- `object-contain`: Mantiene proporción

---

## 📥 Botón Download CV

### Funcionalidad:
```tsx
const { language } = useLanguage();

const cvFile = language === 'en' 
  ? '/src/assets/cv/CV-2026-EN-LT-BA-BYRON-GONZALEZ.pdf'
  : '/src/assets/cv/CV-2026-ES-LT-BA-BYRON-GONZALEZ.pdf';

<a href={cvFile} download>Download CV</a>
```

### Flujo:
1. **Usuario selecciona idioma** (EN/ES)
2. **`language` state cambia**
3. **`cvFile` se actualiza** al PDF correcto
4. **Click en botón** → Descarga el PDF correspondiente

---

## 🎨 Diseño del Grid de Logos

### Card Individual:
```css
bg-white/10           /* Fondo semi-transparente */
backdrop-blur-sm      /* Efecto glassmorphism */
rounded-xl            /* Esquinas redondeadas */
p-4                   /* Padding 16px */
border-white/20       /* Border sutil */
hover:bg-white/20     /* Hover más brillante */
```

### Logo:
```css
w-12 h-12            /* 48x48 píxeles */
object-contain       /* Mantiene proporción */
```

---

## 📝 Agregar/Modificar Logos

### Agregar Nuevo Logo:

1. **Guardar SVG** en `src/assets/logos-skills/`
   ```
   nuevo-logo.svg
   ```

2. **Actualizar datos** en `cv-data.en.ts` y `cv-data.es.ts`:
   ```typescript
   {
     name: "Nueva Skill",
     level: 4,
     category: "Development",
     logos: [
       "assets/logos-skills/nuevo-logo.svg",
       "assets/logos-skills/otro-logo.svg"
     ]
   }
   ```

3. **Resultado**: Se muestra automáticamente en grid 2x2

---

## 🎯 Ejemplos por Skill

### Frontend Development (4 logos)
```
┌──────────┬──────────┐
│ Angular  │  Vue.js  │
├──────────┼──────────┤
│  React   │ Tailwind │
└──────────┴──────────┘
```

### Cloud Architecture (2 logos)
```
┌──────────┬──────────┐
│   AWS    │   GCP    │
└──────────┴──────────┘
(Solo 2, resto vacío)
```

### Generative AI (2 logos)
```
┌──────────┬──────────┐
│ ChatGPT  │  Gemini  │
└──────────┴──────────┘
```

---

## 🚀 Ventajas del Sistema

### ✅ Dinámico
- Logos se cargan desde los datos
- Fácil agregar/quitar logos
- Sin hardcoding

### ✅ Responsive
- Grid se adapta automáticamente
- Logos mantienen proporción
- Funciona en mobile y desktop

### ✅ Visual
- Glassmorphism moderno
- Hover effects
- Diseño consistente

### ✅ Inteligente
- Solo muestra primeros 4 logos
- Maneja errores (onError)
- Fallback si imagen no carga

---

## 💡 Detalles Técnicos

### Error Handling:
```tsx
onError={(e) => {
  e.currentTarget.style.display = 'none';
}}
```
Si un logo no carga, se oculta en lugar de mostrar broken image.

### Path Resolution:
```tsx
src={`/${logo}`}
```
Convierte `assets/logos-skills/aws.svg` → `/assets/logos-skills/aws.svg`

### Slicing:
```tsx
skill.logos.slice(0, 4)
```
Toma solo los primeros 4 logos, ignora el resto.

---

## 📱 Responsive Behavior

### Desktop:
- Grid 2x2 completo
- Logos 48x48px
- Spacing óptimo

### Mobile (Futuro):
- Podría cambiar a 1 columna
- Logos un poco más grandes
- Scroll vertical

---

## 🎨 Customización

### Cambiar Tamaño de Logos:
```tsx
className="w-12 h-12"   // 48x48 (actual)
className="w-16 h-16"   // 64x64 (más grande)
className="w-10 h-10"   // 40x40 (más pequeño)
```

### Cambiar Número de Columnas:
```tsx
className="grid-cols-2"  // 2 columnas (actual)
className="grid-cols-3"  // 3 columnas
className="grid-cols-4"  // 4 columnas (1 fila)
```

### Cambiar Cantidad de Logos:
```tsx
.slice(0, 4)  // 4 logos (actual)
.slice(0, 6)  // 6 logos
.slice(0, 8)  // 8 logos
```

---

## ✅ Checklist de Implementación

- [x] Carpeta `assets/cv/` con PDFs (EN y ES)
- [x] Carpeta `assets/logos-skills/` con 37 SVGs
- [x] Datos actualizados con paths de logos
- [x] Componente HorizontalSkills mostrando grid 2x2
- [x] Botón Download CV funcional con idioma
- [x] Hover effects en logos
- [x] Error handling para imágenes
- [x] Path resolution correcto

---

## 🎯 Resultado Final

### Skills Cards Ahora Tienen:
1. ✅ Número grande (01, 02...)
2. ✅ Título del skill
3. ✅ Categoría
4. ✅ **Grid 2x2 de logos** ← NUEVO
5. ✅ Estrellas de rating (1-5)
6. ✅ Badges (Expert/Advanced)
7. ✅ Gradiente único por categoría

### Download CV:
- ✅ Funciona en inglés y español
- ✅ Descarga el PDF correcto
- ✅ Hover effect
- ✅ Responsive

---

¡Sistema de logos y CV completamente implementado! 🎉
