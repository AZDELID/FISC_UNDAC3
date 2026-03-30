# ✅ Pre-Deploy Checklist

Usa esta lista para verificar que todo está listo antes de hacer deployment a GitHub Pages.

## 📋 Verificaciones Pre-Build

- [ ] **Node.js instalado**: Ejecuta `node --version` (debe ser 18+)
- [ ] **npm instalado**: Ejecuta `npm --version`
- [ ] **Git instalado**: Ejecuta `git --version`
- [ ] **Repositorio de GitHub creado**: https://github.com/TU_USUARIO/FISC

## 🔧 Verificaciones de Configuración

- [ ] **vite.config.ts existe** y tiene `base: '/FISC/'`
- [ ] **package.json existe** con scripts correctos
- [ ] **index.html existe** en la raíz del proyecto
- [ ] **src/main.tsx existe** y importa App correctamente
- [ ] **tsconfig.json** está configurado correctamente

## 🧪 Tests Locales

### 1. Desarrollo Local

```bash
npm install
npm run dev
```

- [ ] Servidor se inicia sin errores
- [ ] Se abre en http://localhost:5173
- [ ] Navegación funciona correctamente
- [ ] Todas las páginas cargan sin errores:
  - [ ] Página Home
  - [ ] Roadmap
  - [ ] Áreas Electivas
  - [ ] Quiz
  - [ ] Resultados

### 2. Build de Producción

```bash
npm run build
```

- [ ] Build completa sin errores
- [ ] Carpeta `dist/` se genera
- [ ] Carpeta `docs/` se genera (copia de dist)
- [ ] No hay warnings críticos en la consola

### 3. Preview del Build

```bash
npm run preview
```

- [ ] Preview se inicia en http://localhost:4173/FISC/
- [ ] **IMPORTANTE**: La URL incluye `/FISC/` al final
- [ ] Navegación funciona en el preview
- [ ] Todas las imágenes cargan correctamente
- [ ] No hay errores 404 en la consola del navegador

## 📁 Verificación de Archivos

- [ ] **docs/** folder exists
- [ ] **docs/index.html** existe
- [ ] **docs/assets/** contiene archivos JS y CSS
- [ ] Las imágenes están en **docs/assets/** (si las hay)

## 🔍 Verificación de Código

- [ ] No hay `console.log` innecesarios
- [ ] No hay TODOs pendientes críticos
- [ ] Todas las rutas de imports son relativas
- [ ] No hay imports de archivos que no existen

## 📝 Verificación de Git

```bash
git status
```

- [ ] Estás en la rama correcta (main o master)
- [ ] No hay cambios sin commit importantes
- [ ] El archivo `.gitignore` existe
- [ ] `node_modules/` está en .gitignore
- [ ] `dist/` está en .gitignore (opcional)
- [ ] `docs/` NO está en .gitignore (necesario para GitHub Pages)

## 🚀 Pre-Push Checklist

- [ ] Todos los archivos relevantes están staged:
  ```bash
  git add .
  ```

- [ ] Commit con mensaje descriptivo:
  ```bash
  git commit -m "Deploy: FISC Platform v1.0"
  ```

- [ ] Remote configurado correctamente:
  ```bash
  git remote -v
  ```

## 📤 GitHub Repository Checklist

- [ ] Repositorio existe en GitHub
- [ ] Repositorio se llama `FISC` (o el nombre que elegiste)
- [ ] Remote está configurado:
  ```bash
  git remote add origin https://github.com/TU_USUARIO/FISC.git
  ```

## 🌐 GitHub Pages Configuration

Después del push, configura GitHub Pages:

- [ ] Ve a Settings en tu repositorio
- [ ] Click en "Pages" en el menú lateral
- [ ] En "Source":
  - [ ] Branch: `main` (o `master`)
  - [ ] Folder: `/docs`
- [ ] Click "Save"
- [ ] Espera 2-3 minutos

## ✅ Post-Deploy Verification

- [ ] Accede a: `https://TU_USUARIO.github.io/FISC/`
- [ ] La página principal carga correctamente
- [ ] Puedes navegar entre secciones
- [ ] Las imágenes cargan correctamente
- [ ] No hay errores en la consola del navegador (F12)
- [ ] La página es responsive (prueba en móvil)

## 🎯 URLs de Verificación

Prueba todas estas URLs después del deploy:

- [ ] `https://TU_USUARIO.github.io/FISC/`
- [ ] Navegación interna funciona
- [ ] No hay errores 404

## 🐛 Si Algo Sale Mal

### El sitio no carga (404)

1. Verifica la configuración de GitHub Pages
2. Asegúrate de que la carpeta sea `/docs`
3. Verifica que `vite.config.ts` tenga `base: '/FISC/'`
4. Espera 5 minutos y refresca (GitHub puede tardar)

### Las imágenes no cargan

1. Verifica que las imágenes estén en `docs/assets/`
2. Verifica que los imports usen rutas relativas
3. Haz un nuevo build: `npm run build`

### Errores en el build

1. Limpia y reinstala:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
2. Intenta build de nuevo: `npm run build`

### El preview funciona pero GitHub Pages no

1. Verifica que el repositorio sea público
2. Verifica que la configuración de Pages esté correcta
3. Revisa la pestaña "Actions" en GitHub para ver si hay errores

## 📞 Recursos de Ayuda

- [Guía de Deployment Completa](./DEPLOYMENT_GUIDE.md)
- [README del Proyecto](./README.md)
- [Documentación de Vite](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

## 🎉 Ready to Deploy!

Si todos los checks están marcados, ¡estás listo para deployment!

```bash
# Deploy completo
npm run build
git add .
git commit -m "Deploy: FISC Platform"
git push origin main
```

**Tu sitio estará en:** `https://TU_USUARIO.github.io/FISC/`

---

**¡Buena suerte con tu deployment! 🚀**
