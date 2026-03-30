#!/bin/bash

# Script de Deployment Automático para FISC
# Este script construye el proyecto y prepara para GitHub Pages

echo "🚀 Iniciando deployment de FISC..."
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Paso 1: Verificar que estemos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encuentra package.json${NC}"
    echo "Asegúrate de estar en la raíz del proyecto"
    exit 1
fi

# Paso 2: Limpiar builds anteriores
echo -e "${BLUE}📦 Limpiando builds anteriores...${NC}"
rm -rf dist
rm -rf docs

# Paso 3: Instalar dependencias (solo si node_modules no existe)
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}📥 Instalando dependencias...${NC}"
    npm install
fi

# Paso 4: Build del proyecto
echo -e "${BLUE}🔨 Compilando proyecto...${NC}"
npm run build

# Verificar que el build fue exitoso
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build completado exitosamente${NC}"
else
    echo -e "${RED}❌ Error en el build${NC}"
    exit 1
fi

# Paso 5: Verificar que docs existe
if [ -d "docs" ]; then
    echo -e "${GREEN}✅ Carpeta docs creada correctamente${NC}"
else
    echo -e "${RED}❌ Error: No se generó la carpeta docs${NC}"
    exit 1
fi

# Paso 6: Git status
echo ""
echo -e "${BLUE}📊 Estado de Git:${NC}"
git status --short

echo ""
echo -e "${GREEN}✅ Deployment preparado!${NC}"
echo ""
echo "Próximos pasos:"
echo "1. git add ."
echo "2. git commit -m 'Deploy: FISC Platform'"
echo "3. git push origin main"
echo ""
echo "Después configura GitHub Pages:"
echo "Settings → Pages → Source: main → Folder: /docs → Save"
echo ""
echo -e "${GREEN}🌐 Tu sitio estará en: https://TU_USUARIO.github.io/FISC/${NC}"
