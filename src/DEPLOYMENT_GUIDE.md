# 🚀 Guía de Deployment a GitHub Pages

Esta guía te ayudará a publicar tu proyecto FISC en GitHub Pages paso a paso.

## 📋 Pre-requisitos

- Node.js 18+ instalado
- Git instalado
- Cuenta de GitHub
- Repositorio de GitHub creado

## 🛠️ Instalación Inicial

```bash
# 1. Instalar dependencias
npm install
```

## 🏗️ Build del Proyecto

```bash
# 2. Compilar para producción
npm run build
```

Este comando:
- ✅ Compila TypeScript
- ✅ Genera la carpeta `dist/` con archivos optimizados
- ✅ Copia automáticamente `dist/` a `docs/` (para GitHub Pages)

## 📁 Estructura Generada

Después del build tendrás:

```
/
├── dist/          # Build de producción (temporal)
├── docs/          # Copia de dist para GitHub Pages
│   ├── assets/
│   ├── index.html
│   └── ...
└── ...
```

## 🔍 Vista Previa Local

Para probar el build antes de publicar:

```bash
npm run preview
```

Abre el navegador en: `http://localhost:4173/FISC/`

⚠️ **Importante**: La ruta incluye `/FISC/` porque así será en GitHub Pages.

## 📤 Subir a GitHub

### Opción 1: Primera vez (repositorio nuevo)

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Deploy: FISC Platform v1.0"

# Conectar con tu repositorio remoto
git remote add origin https://github.com/TU_USUARIO/FISC.git

# Subir a GitHub
git push -u origin main
```

### Opción 2: Actualización (repositorio existente)

```bash
# Agregar archivos modificados
git add .

# Commit con mensaje descriptivo
git commit -m "Update: [descripción del cambio]"

# Subir cambios
git push origin main
```

## ⚙️ Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (⚙️ Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/docs`
5. Click en **Save**

## 🌐 Acceder a tu Sitio

Después de 2-3 minutos, tu sitio estará disponible en:

```
https://TU_USUARIO.github.io/FISC/
```

Ejemplo:
- Si tu usuario es `juanperez`
- URL: `https://juanperez.github.io/FISC/`

## ✅ Checklist de Deployment

- [ ] `npm install` ejecutado exitosamente
- [ ] `npm run build` sin errores
- [ ] Carpeta `docs/` generada
- [ ] `npm run preview` funciona correctamente
- [ ] Código subido a GitHub (`git push`)
- [ ] GitHub Pages configurado (Branch: main, Folder: /docs)
- [ ] Sitio accesible en la URL de GitHub Pages

## 🔄 Flujo de Actualización

Cuando hagas cambios al proyecto:

```bash
# 1. Hacer cambios en el código
# 2. Probar localmente
npm run dev

# 3. Build de producción
npm run build

# 4. Vista previa del build
npm run preview

# 5. Si todo está bien, subir a GitHub
git add .
git commit -m "Update: descripción de cambios"
git push origin main

# 6. GitHub Pages se actualizará automáticamente
```

## 🐛 Troubleshooting

### Problema: El sitio no carga en GitHub Pages

**Solución:**
- Verifica que la carpeta sea `/docs` en la configuración de GitHub Pages
- Asegúrate de que el archivo `/vite.config.ts` tenga `base: '/FISC/'`

### Problema: Las imágenes no cargan

**Solución:**
- Las rutas de assets deben ser relativas
- Vite maneja automáticamente las rutas con el `base: '/FISC/'`
- Las imágenes importadas desde Figma se incluyen en el build automáticamente

### Problema: Error en `npm run build`

**Solución:**
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Problema: 404 al navegar en GitHub Pages

**Solución:**
- Este proyecto usa navegación por estado (SPA)
- No necesitas configuración adicional porque no usa React Router
- Si agregas React Router, necesitarás un archivo `404.html`

## 📝 Notas Importantes

1. **Base URL**: El proyecto está configurado con `base: '/FISC/'` en `vite.config.ts`
2. **Carpeta docs**: GitHub Pages se sirve desde `/docs`, no desde `/dist`
3. **Script automático**: `npm run build` copia automáticamente `dist` a `docs`
4. **No editar docs manualmente**: Siempre genera con `npm run build`

## 🎯 Comandos Rápidos

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo

# Producción
npm run build           # Build + copiar a docs
npm run preview         # Vista previa del build

# Git
git add .
git commit -m "mensaje"
git push origin main
```

## 🎉 ¡Listo!

Tu proyecto FISC está ahora publicado en GitHub Pages. Comparte tu URL con el mundo:

```
https://TU_USUARIO.github.io/FISC/
```

---

**Creado con ❤️ para el proyecto FISC**
**Ingeniería de Sistemas y Computación**
