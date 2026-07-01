# MiBlog2

Blog personal creado con [Astro](https://astro.build).

## Estructura

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Navigation.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── index.astro
│   │   └── posts/
│   │       ├── post-1.md
│   │       ├── post-2.md
│   │       └── post-3.md
│   └── styles/
│       └── style.css
└── package.json
```

## Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia servidor local en `localhost:4321` |
| `npm run build` | Compila el sitio a `./dist/` |
| `npm run preview` | Previsualiza la build localmente |
