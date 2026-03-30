# Instrucciones para Agregar el PDF del FUT UNDAC

## Pasos para subir el archivo PDF

Para que el botón "Descargar FUT UNDAC" funcione correctamente, sigue estos pasos:

### Opción 1: Agregar el PDF a tu proyecto (Recomendado)

1. **Crea la carpeta `public` si no existe:**
   - En la raíz de tu proyecto, crea una carpeta llamada `public/`

2. **Copia el archivo PDF:**
   - Copia el archivo `pdf-fut-undac-pdf_compress.pdf` desde tu carpeta de descargas
   - Renómbralo a: `pdf-fut-undac.pdf`
   - Pégalo dentro de la carpeta `public/`

3. **Estructura final:**
   ```
   tu-proyecto/
   ├── public/
   │   └── pdf-fut-undac.pdf
   ├── src/
   ├── components/
   └── ...
   ```

4. **¡Listo!** El botón ahora descargará el PDF correctamente.

---

### Opción 2: Usar un servicio de hosting (Si no puedes agregar archivos al proyecto)

Si estás usando una plataforma que no permite agregar archivos grandes, puedes usar servicios de hosting gratuitos:

#### A. Google Drive
1. Sube el PDF a Google Drive
2. Haz clic derecho → "Obtener enlace"
3. Cambia los permisos a "Cualquier persona con el enlace"
4. Copia el ID del archivo (la parte larga del enlace)
5. Usa este enlace: `https://drive.google.com/uc?export=download&id=TU_ID_AQUI`

#### B. Dropbox
1. Sube el PDF a Dropbox
2. Haz clic en "Compartir"
3. Copia el enlace y cambia `?dl=0` al final por `?dl=1`

#### C. GitHub (Si usas GitHub para tu proyecto)
1. Crea una carpeta `public/` en tu repositorio
2. Sube el PDF
3. El enlace será: `https://github.com/TU-USUARIO/TU-REPO/raw/main/public/pdf-fut-undac.pdf`

---

### Cómo actualizar el enlace en el código

Si usas la Opción 2, ve al archivo `/components/CalculadoraPromedio.tsx` y busca esta línea (aproximadamente línea 558):

```tsx
<a
  href="/pdf-fut-undac.pdf"
  download="FUT-UNDAC.pdf"
```

Cámbiala por:

```tsx
<a
  href="TU_ENLACE_AQUI"
  download="FUT-UNDAC.pdf"
  target="_blank"
  rel="noopener noreferrer"
```

---

## Notas Importantes

- ✅ El archivo debe llamarse exactamente `pdf-fut-undac.pdf`
- ✅ Debe estar en la carpeta `public/` (no en `src/`)
- ✅ Si cambias el nombre del archivo, también debes cambiar el enlace en el código
- ⚠️ Los enlaces de archivo local (`file:///`) NO funcionan en aplicaciones web
- ⚠️ El archivo debe ser accesible públicamente para que el botón de descarga funcione

---

## Verificación

Para verificar que funciona:

1. Inicia tu aplicación
2. Ve a "Calculadora de Promedios"
3. Busca el botón "Descargar FUT UNDAC" al final de la página
4. Haz clic en el botón
5. El archivo debe descargarse automáticamente

---

## ¿Necesitas ayuda?

Si tienes problemas:
- Verifica que el archivo esté en la carpeta correcta
- Revisa la consola del navegador (F12) para ver errores
- Asegúrate de que el nombre del archivo coincida exactamente
