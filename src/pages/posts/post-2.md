---

title: 'Cómo configurar Tailwind CSS en Astro'
pubDate: 2026-07-02
description: 'Aprende paso a paso cómo integrar Tailwind CSS en tu proyecto de Astro para diseñar interfaces rápidas y modernas.'
author: 'Tu Nombre'
image:
    url: 'https://astro.build'
    alt: 'Código de estilos CSS'
tags: ["astro", "tailwind", "css", "diseño"]
---

En el artículo anterior te conté por qué elegí **Astro** para mi blog. Hoy vamos a dar el siguiente paso lógico: añadir un sistema de estilos potente. 

**Tailwind CSS** es el framework de CSS utilitario más popular del mercado, y su integración con Astro es ridículamente sencilla gracias a las herramientas oficiales.

## Instalación automática

La forma más rápida de añadir Tailwind a tu proyecto es utilizando la interfaz de línea de comandos de Astro. Solo debes ejecutar el siguiente comando en tu terminal:

```bash
npx astro add tailwind
```

El asistente automático hará tres cosas por ti:
* Instalará los paquetes necesarios de Tailwind.
* Creará el archivo de configuración `tailwind.config.mjs`.
* Integrará la extensión directamente en tu archivo `astro.config.mjs`.

## Verificando la instalación

Para comprobar que todo funciona, ve a cualquiera de tus páginas (por ejemplo, `src/pages/index.astro`) y aplica algunas clases de Tailwind a un elemento HTML:

```html
<h1 class="text-4xl font-bold text-purple-600 hover:scale-105 transition-transform">
  ¡Hola con Tailwind!
</h1>
```

Si ejecutas tu servidor de desarrollo con `npm run dev`, deberías ver el texto grande, de color morado y con un efecto de escala al pasar el cursor.

## Ventajas de esta combinación

* **Cero configuración compleja:** Astro se encarga del procesamiento del diseño sin que configures PostCSS a mano.
* **Estilos ultra optimizados:** Tailwind elimina todo el CSS que no usas en producción, manteniendo tu sitio web ligero.
* **Estilos locales:** Puedes usar Tailwind tanto en tus archivos `.astro` como en componentes de React, Vue o Svelte.

En el próximo post veremos cómo publicar este blog en internet de forma gratuita. ¡No te lo pierdas!
