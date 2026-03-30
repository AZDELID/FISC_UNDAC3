# 🌐 GitHub Pages Setup - Guía Visual

Esta es una guía paso a paso con instrucciones exactas para configurar GitHub Pages.

---

## 📦 Paso 1: Preparar el Proyecto

### 1.1 Instalar Dependencias

```bash
npm install
```

**Salida esperada:**
```
added XXX packages, and audited XXX packages in Xs
```

### 1.2 Verificar que todo funcione

```bash
npm run dev
```

**Resultado esperado:**
- Servidor se inicia en `http://localhost:5173`
- Puedes ver tu aplicación funcionando
- No hay errores en la terminal

---

## 🔨 Paso 2: Build del Proyecto

### 2.1 Compilar para producción

```bash
npm run build
```

**Resultado esperado:**
```
vite v5.x.x building for production...
✓ XXX modules transformed.
dist/index.html                X.XX kB
dist/assets/index-XXXX.js      XX.XX kB
✓ built in Xs
```

### 2.2 Verificar carpetas generadas

Debes tener estas carpetas:

```
tu-proyecto/
├── dist/           ← Carpeta temporal de build
└── docs/           ← Carpeta para GitHub Pages ✅
    ├── index.html
    └── assets/
        ├── index-XXXX.js
        └── index-XXXX.css
```

### 2.3 Preview del build

```bash
npm run preview
```

**URL esperada:**
```
http://localhost:4173/FISC/
```

⚠️ **IMPORTANTE**: La URL debe incluir `/FISC/` al final.

Si no aparece `/FISC/`, verifica tu `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/FISC/',  // ← Debe estar así
})
```

---

## 📤 Paso 3: Subir a GitHub

### 3.1 Verificar Git

```bash
git status
```

### 3.2 Agregar archivos

```bash
git add .
```

### 3.3 Hacer commit

```bash
git commit -m "Deploy: FISC Platform to GitHub Pages"
```

### 3.4 Conectar con GitHub (primera vez)

Si es tu primera vez:

```bash
git remote add origin https://github.com/TU_USUARIO/FISC.git
```

Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

### 3.5 Subir cambios

```bash
git push -u origin main
```

O si tu rama se llama `master`:

```bash
git push -u origin master
```

---

## ⚙️ Paso 4: Configurar GitHub Pages

### 4.1 Ir a Settings

1. Ve a tu repositorio en GitHub
2. URL: `https://github.com/TU_USUARIO/FISC`
3. Click en **"Settings"** (⚙️)

```
┌─────────────────────────────────────┐
│ < > Code  Issues  Pull requests    │
│                                     │
│ ⚙️  Settings  ← CLICK AQUÍ         │
└─────────────────────────────────────┘
```

### 4.2 Ir a Pages

En el menú lateral izquierdo, busca y click en **"Pages"**:

```
Settings
├── General
├── Access
├── ...
└── Pages  ← CLICK AQUÍ
```

### 4.3 Configurar Source

En la sección **"Build and deployment"**:

#### Source:
```
┌─────────────────────────┐
│ Deploy from a branch  ▼ │
└─────────────────────────┘
```

#### Branch:
```
┌──────────┐  ┌──────┐
│ main   ▼ │  │ /docs ▼ │  [Save]
└──────────┘  └──────┘
     ↑            ↑
  Tu rama    Carpeta docs
```

**Configuración correcta:**
- **Branch**: `main` (o `master`)
- **Folder**: `/docs`

#### 4.4 Guardar

Click en **"Save"** ✅

---

## ⏳ Paso 5: Esperar Deployment

### 5.1 Verificar el proceso

GitHub Pages tarda 2-3 minutos en hacer el deployment.

Puedes ver el progreso en:
```
Tu repo → Actions
```

### 5.2 URL de tu sitio

Después de unos minutos, verás un mensaje verde:

```
✅ Your site is live at https://TU_USUARIO.github.io/FISC/
```

---

## 🎉 Paso 6: Verificar que Funciona

### 6.1 Abrir tu sitio

URL: `https://TU_USUARIO.github.io/FISC/`

### 6.2 Checklist de verificación

- [ ] La página carga sin errores
- [ ] Puedes navegar entre secciones
- [ ] Las imágenes se ven correctamente
- [ ] El diseño se ve bien en móvil
- [ ] No hay errores en la consola (F12)

---

## 🔄 Actualizar tu Sitio

Cuando hagas cambios al código:

```bash
# 1. Hacer cambios en tu código

# 2. Build de nuevo
npm run build

# 3. Commit y push
git add .
git commit -m "Update: [descripción de cambios]"
git push origin main

# 4. GitHub Pages se actualiza automáticamente en 2-3 minutos
```

---

## 🐛 Solución de Problemas Comunes

### ❌ Error: "Site not found" (404)

**Causa**: GitHub Pages no está configurado correctamente.

**Solución**:
1. Ve a Settings → Pages
2. Verifica que:
   - Branch sea `main` (o `master`)
   - Folder sea `/docs`
3. Click "Save" de nuevo
4. Espera 5 minutos

### ❌ La página carga pero sin estilos

**Causa**: El `base` en `vite.config.ts` está mal configurado.

**Solución**:
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/FISC/',  // ← Verifica que esté así
})
```

Luego:
```bash
npm run build
git add .
git commit -m "Fix: base URL"
git push origin main
```

### ❌ Las imágenes no cargan

**Causa**: Rutas absolutas en los imports.

**Solución**: Las imágenes de Figma ya están configuradas correctamente. Si agregaste imágenes nuevas, usa imports relativos:

```typescript
// ✅ Correcto
import imagen from './assets/imagen.png'

// ❌ Incorrecto
import imagen from '/assets/imagen.png'
```

### ❌ "npm run build" falla

**Solución**:
```bash
# Limpiar todo y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📊 Estructura Final en GitHub

Tu repositorio debe verse así:

```
FISC/
├── components/
├── data/
├── hooks/
├── styles/
├── docs/              ← GitHub Pages sirve desde aquí
│   ├── index.html
│   └── assets/
├── src/
│   └── main.tsx
├── App.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## ✅ Resumen: Comandos Completos

```bash
# Setup inicial
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Deploy a GitHub
git add .
git commit -m "Deploy: FISC Platform"
git push origin main

# Configurar en GitHub:
# Settings → Pages → Branch: main → Folder: /docs → Save
```

---

## 🎯 URL Final

Tu sitio estará disponible en:

```
https://TU_USUARIO.github.io/FISC/
```

**Ejemplo:**
- Usuario: `juanperez`
- URL: `https://juanperez.github.io/FISC/`

---

## 📞 Necesitas Ayuda?

- [PRE_DEPLOY_CHECKLIST.md](./PRE_DEPLOY_CHECKLIST.md) - Checklist completo
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Guía detallada
- [README.md](./README.md) - Documentación del proyecto

---

**¡Feliz Deployment! 🚀**

Tu aplicación FISC está lista para compartir con el mundo.
