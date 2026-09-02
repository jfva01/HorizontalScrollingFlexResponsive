# Horizontal Scrolling Flex Responsive
 
Componente de tabs con scroll horizontal animado (flechas + drag con mouse) y una grilla de tarjetas responsive construida con Flexbox. Proyecto estático, sin build ni dependencias instaladas: HTML, CSS y JS puros.
 
## Estructura
 
```
.
├── index.html     # Marcado: header con tabs + sección de tarjetas
├── estilos.css    # Estilos, layout flex y responsive
└── script.js      # Lógica de scroll, flechas y drag
```
 
## Cómo usarlo
 
No requiere instalación. Abre `index.html` directamente en el navegador, o sírvelo con cualquier servidor estático:
 
```bash
npx serve .
```
 
## Dependencias externas (vía CDN, no instaladas)
 
- **Font Awesome 6.4.2** — íconos de flecha izquierda/derecha.
- **Google Fonts (Nunito Sans)** — importada en `estilos.css`.
No hay `package.json` ni gestor de paquetes: todo se resuelve con `<link>` y `@import` directos en el HTML/CSS.
 
## Funcionalidad
 
- **Tabs con scroll horizontal**: la lista `.tabs__box` desborda horizontalmente (`overflow-x: hidden` + `scroll-behavior: smooth`) y se desplaza con las flechas o arrastrando con el mouse.
- **Flechas contextuales**: `script.js` oculta la flecha izquierda al inicio del scroll y la derecha al llegar al final (`handleIcons()`), calculando `scrollLeft` vs. `scrollWidth`.
- **Tab activo**: al hacer clic en un tab se le agrega la clase `.active` y se remueve del anterior.
- **Drag horizontal**: eventos `mousedown` / `mousemove` / `mouseup` (mouse) y `touchstart` / `touchmove` / `touchend` (táctil) sobre `.tabs__box` permiten arrastrar los tabs. Agrega la clase `.dragging`, que desactiva `scroll-behavior` suave y bloquea eventos de puntero sobre los tabs mientras se arrastra. En táctil, `touchmove` usa `preventDefault()` (listener `{ passive: false }`) para que el drag horizontal no dispare el scroll vertical de la página.
- **Grilla de tarjetas responsive**: `.card` usa `flex-wrap: wrap` y `.card__item` tiene `flex-basis: 320px` con `flex-grow: 1`, así las tarjetas se acomodan automáticamente según el ancho disponible.
## Known issues
 
Ninguno pendiente por el momento.
