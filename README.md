# CV Web - Byron Gonzalez

Una aplicación web moderna y minimalista para mostrar mi CV profesional, desarrollada con Angular y Tailwind CSS.

## 🚀 Características

- **Diseño Minimalista**: Interfaz limpia y profesional
- **Modo Oscuro**: Tema oscuro por defecto con toggle para cambiar a modo claro
- **Multilingüe**: Soporte para inglés y español con cambio dinámico
- **Responsive**: Diseño adaptativo para todos los dispositivos
- **Moderno**: Construido con Angular 18+ y Tailwind CSS
- **Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Angular 18+**: Framework principal
- **Tailwind CSS**: Framework de CSS utilitario
- **TypeScript**: Lenguaje de programación
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd cv-web-byron
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:4200
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── cv-display/          # Componente principal del CV
│   │   └── header/              # Header con controles de idioma y tema
│   ├── data/
│   │   ├── cv-data.en.ts       # Datos del CV en inglés
│   │   └── cv-data.es.ts       # Datos del CV en español
│   ├── models/
│   │   └── cv-data.interface.ts # Interfaces TypeScript
│   ├── services/
│   │   ├── language.service.ts  # Servicio para manejo de idiomas
│   │   └── theme.service.ts     # Servicio para manejo de temas
│   └── styles.css              # Estilos globales con Tailwind
```

## 🎨 Personalización

### Modificar Datos del CV

Los datos del CV se encuentran en los archivos:
- `src/app/data/cv-data.en.ts` - Versión en inglés
- `src/app/data/cv-data.es.ts` - Versión en español

### Cambiar Colores y Estilos

Los colores personalizados están definidos en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Colores primarios personalizados
      },
      dark: {
        // Colores para modo oscuro
      }
    }
  }
}
```

### Agregar Nuevas Secciones

1. Actualizar la interfaz `CVData` en `cv-data.interface.ts`
2. Agregar los datos en los archivos de datos
3. Actualizar el template HTML en `cv-display.component.html`

## 🌐 Despliegue

### Build para Producción

```bash
ng build --configuration production
```

### Desplegar en GitHub Pages

```bash
ng build --configuration production --base-href="/cv-web-byron/"
npx angular-cli-ghpages --dir=dist/cv-web-byron
```

### Desplegar en Netlify

1. Conectar el repositorio a Netlify
2. Configurar el comando de build: `ng build --configuration production`
3. Configurar el directorio de salida: `dist/cv-web-byron`

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: 1024px y superior
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## ♿ Accesibilidad

- Navegación por teclado
- Etiquetas ARIA apropiadas
- Contraste de colores optimizado
- Texto alternativo en iconos
- Estructura semántica HTML

## 🔧 Scripts Disponibles

- `ng serve`: Servidor de desarrollo
- `ng build`: Build para producción
- `ng test`: Ejecutar tests unitarios
- `ng lint`: Ejecutar linter
- `ng generate component <nombre>`: Generar nuevo componente

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Byron Gonzalez**
- Email: byron.Gonzalez@email.com
- LinkedIn: [linkedin.com/in/byron-Gonzalez](https://linkedin.com/in/byron-Gonzalez)
- GitHub: [github.com/byron-Gonzalez](https://github.com/byron-Gonzalez)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de:

- **Email**: byron.Gonzalez@email.com
- **LinkedIn**: [linkedin.com/in/byron-Gonzalez](https://linkedin.com/in/byron-Gonzalez)
- **GitHub**: [github.com/byron-Gonzalez](https://github.com/byron-Gonzalez)

---

⭐ ¡No olvides darle una estrella al proyecto si te gusta!