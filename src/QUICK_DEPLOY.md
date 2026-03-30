# ⚡ Quick Deploy - Comandos Rápidos

Esta es la versión ultra-rápida para deployment. Si necesitas más detalles, consulta [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

---

## 🚀 Deployment en 5 Pasos

### 1️⃣ Instalar Dependencias

```bash
npm install
```

### 2️⃣ Build del Proyecto

```bash
npm run build
```

Esto genera automáticamente la carpeta `docs/` lista para GitHub Pages.

### 3️⃣ Commit y Push

```bash
git add .
git commit -m "Deploy: FISC Platform"
git push origin main
```

### 4️⃣ Configurar GitHub Pages

1. Ve a: `https://github.com/TU_USUARIO/FISC/settings/pages`
2. **Source**: Deploy from a branch
3. **Branch**: `main`
4. **Folder**: `/docs`
5. Click **Save**

### 5️⃣ Esperar y Visitar

Espera 2-3 minutos y visita:
```
https://TU_USUARIO.github.io/FISC/
```

---

## 🔄 Actualización Rápida

Después de hacer cambios:

```bash
npm run build
git add .
git commit -m "Update: descripción de cambios"
git push origin main
```

GitHub Pages se actualiza automáticamente en 2-3 minutos.

---

## 🎯 Comandos Útiles

### Desarrollo Local
```bash
npm run dev
```
Abre: http://localhost:5173

### Preview del Build
```bash
npm run preview
```
Abre: http://localhost:4173/FISC/

### Verificar Git Status
```bash
git status
```

### Ver Remote
```bash
git remote -v
```

### Agregar Remote (primera vez)
```bash
git remote add origin https://github.com/TU_USUARIO/FISC.git
```

---

## 🐛 Solución Rápida de Problemas

### Página 404 en GitHub Pages
```bash
# Verifica configuración:
# Settings → Pages → Branch: main → Folder: /docs
```

### Build falla
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Limpiar y Rebuild
```bash
rm -rf dist docs
npm run build
```

---

## 📱 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Desarrollo local |
| `npm run build` | Build + docs/ generado |
| `npm run preview` | Vista previa del build |

---

## ✅ Verificación Rápida

Después del deploy, verifica:

- [ ] https://TU_USUARIO.github.io/FISC/ carga
- [ ] Navegación funciona
- [ ] No hay errores en consola (F12)

---

## 🎉 ¡Listo!

Tu sitio está online en:
```
https://TU_USUARIO.github.io/FISC/
```

---

**Necesitas más detalles?**
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Guía completa paso a paso
- [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) - Guía visual de configuración
- [PRE_DEPLOY_CHECKLIST.md](./PRE_DEPLOY_CHECKLIST.md) - Checklist de verificación
