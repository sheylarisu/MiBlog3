---

title: 'Despliega tu web de Astro gratis en 5 minutos'
pubDate: 2026-07-05
description: 'Llegó el momento de mostrar tu trabajo al mundo. Guía rápida para desplegar tu sitio web estático con Astro.'
author: 'Tu Nombre'
image:
    url: 'https://astro.build'
    alt: 'Servidores de despliegue en la nube'
tags: ["astro", "despliegue", "hosting", "webdev"]
---

¡Tu blog ya tiene contenido y diseño! Ahora toca el paso más emocionante: **publicarlo en internet** para que cualquiera pueda leerlo. 

Astro genera archivos HTML estáticos por defecto, lo que significa que puedes alojarlo de forma gratuita, segura y con una velocidad de carga impresionante.

## Paso 1: Sube tu código a GitHub

Antes de conectar un servicio de hosting, necesitas tener tu proyecto en un repositorio remoto.

1. Crea un repositorio en **GitHub**.
2. Inicializa Git en tu carpeta local (si no lo has hecho ya):
   ```bash
   git init
   git add .
   git commit -m "Primer commit"
   ```
3. Sigue las instrucciones de GitHub para vincular tu repositorio local y subir el código (`git push`).

## Paso 2: Elegir tu plataforma de hosting

Tanto **Vercel** como **Netlify** ofrecen planes gratuitos excelentes que se integran perfectamente con Astro.

### Opción A: Despliegue en Vercel
1. Inicia sesión en Vercel con tu cuenta de GitHub.
2. Haz clic en **"Add New"** y selecciona **"Project"**.
3. Importa el repositorio de tu blog.
4. Vercel detectará automáticamente que estás usando Astro. Haz clic en **"Deploy"**.

### Opción B: Despliegue en Netlify
1. Inicia sesión en Netlify usando GitHub.
2. Selecciona **"Add new site"** y luego **"Import an existing project"**.
3. Elige tu proveedor (GitHub) y selecciona tu repositorio.
4. Deja la configuración por defecto (Netlify sabe cómo compilar Astro) y haz clic en **"Deploy site"**.

## Despliegue continuo automático

¡Listo! En un par de minutos tendrás un enlace público para compartir tu web. 

Lo mejor de este flujo de trabajo es el **Despliegue Continuo (CI/CD)**: cada vez que escribas un nuevo post en Markdown y hagas un `git push` a tu repositorio, la plataforma compilará y actualizará tu web automáticamente en segundos.

---
*¿Lograste poner tu sitio en línea? ¡Comparte tu enlace en los comentarios para que pueda visitarlo!*
