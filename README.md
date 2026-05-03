# MiHub

Sitio web personal de presentación profesional con blog técnico.

---

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| UI | React 18 + JSX |
| Build | Vite 4 |
| Routing | React Router DOM v6 |
| Blog | MDX (@mdx-js/rollup) con frontmatter YAML |
| Estilos | CSS global + inline styles (tema oscuro) |
| Deploy | Vercel (SPA con rewrite `/*` → `index.html`) |

---

## Objetivo y estructura

El sitio es una presentación pública estática — sin login, sin backend, sin base de datos. Cualquier persona puede acceder al link de Vercel y ver el perfil y los artículos.

### Rutas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Presentación | Hero, bio, redes sociales, estadísticas de impacto |
| `/perfil` | Perfil | Experiencia profesional completa, skills, logros, certificaciones |
| `/articulos` | Artículos | Listado de artículos del blog (tarjetas con título, fecha, tags) |
| `/articulos/:slug` | Artículo individual | Contenido MDX renderizado con estilos prose |

### Estructura de archivos

```
src/
├── articles/          # Archivos .mdx — uno por artículo
│   └── index.js       # Carga todos los .mdx con import.meta.glob
├── components/
│   ├── Header.jsx     # Navegación sticky (Presentación · Perfil · Artículos)
│   ├── Footer.jsx     # Pie con links anterior/siguiente
│   ├── ArticleCard.jsx
│   ├── PhotoOrInitials.jsx
│   └── PdfViewer.jsx  # Visor iframe para PDFs
├── pages/
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Articles.jsx
│   └── ArticlePage.jsx
└── index.css          # Variables, layout, responsive, estilos .mdx-prose
public/
├── images/            # Imágenes referenciadas desde MDX como /images/...
└── docs/              # PDFs referenciados desde MDX como /docs/...
```

### Cómo agregar un artículo

1. Crear `src/articles/mi-articulo.mdx` con frontmatter:

```yaml
---
title: Título del artículo
date: 2026-05-03
description: Descripción breve para la tarjeta.
tags: [QA, IA, Testing]
---
```

2. Escribir el contenido en Markdown/MDX.
3. Para embeber un PDF: `<PdfViewer src="/docs/mi.pdf" title="Mi documento" />`
4. Commitear y pushear — Vercel redespliega automáticamente.

---

## Historial de cambios

### 2026-05-03 — Limpieza y MDX

- Eliminadas las páginas de login, edición y distribución
- Eliminado el servidor Express completo (auth JWT, rutas `/api`)
- Eliminado el componente `ProtectedRoute` y el contexto `AuthContext`
- Instalado y configurado `@mdx-js/rollup` con `remark-frontmatter` y `remark-mdx-frontmatter`
- Creado `src/articles/index.js` para cargar artículos con `import.meta.glob`
- Creados componentes: `ArticleCard`, `ArticlePage`, `PdfViewer`, `Carousel` (luego eliminado)
- Creado artículo de ejemplo `src/articles/ejemplo.mdx`
- Creadas carpetas `public/images/` y `public/docs/`
- Agregados estilos `.mdx-prose` en `index.css`

### 2026-05-03 — Estilos del blog

- Tipografía `.mdx-prose` alineada con las páginas Presentación y Perfil:
  - Cuerpo: `1.1rem`, color `#ccc`, `lineHeight 1.8`
  - `h2` → igual a `sectionTitle` de Perfil (uppercase, `#888`, border-bottom)
  - `h3` → igual a `jobTitle` de Perfil (bold, blanco, `1.25rem`)
  - `blockquote` → borde izquierdo púrpura (igual a certificaciones en Perfil)
- Eliminado componente `Carousel` y sección galería del artículo de ejemplo

### 2026-05-03 — Ajustes de espaciado y tipografía

- Márgenes reducidos en las 3 páginas: `padding` del `.page-content` de `48/64/40px` a `28/48/12px` en desktop, con ajustes proporcionales en tablet y mobile
- Espacio entre contenido y pie de página reducido: `marginTop` del Footer de `64px` a `24px`
- Encabezados de sección (`sectionTitle` en Perfil y `h2` en artículos) aumentados de `1rem` a `1.2rem` (24px)
