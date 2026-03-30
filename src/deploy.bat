@echo off
REM Script de Deployment Automático para FISC (Windows)
REM Este script construye el proyecto y prepara para GitHub Pages

echo ================================
echo    FISC Deployment Script
echo ================================
echo.

REM Paso 1: Verificar package.json
if not exist "package.json" (
    echo [ERROR] No se encuentra package.json
    echo Asegurate de estar en la raiz del proyecto
    pause
    exit /b 1
)

REM Paso 2: Limpiar builds anteriores
echo [1/5] Limpiando builds anteriores...
if exist "dist" rmdir /s /q dist
if exist "docs" rmdir /s /q docs

REM Paso 3: Instalar dependencias (solo si node_modules no existe)
if not exist "node_modules" (
    echo [2/5] Instalando dependencias...
    call npm install
)

REM Paso 4: Build del proyecto
echo [3/5] Compilando proyecto...
call npm run build

if %errorlevel% neq 0 (
    echo [ERROR] Fallo en el build
    pause
    exit /b 1
)

REM Paso 5: Verificar que docs existe
if exist "docs" (
    echo [4/5] Carpeta docs creada correctamente
) else (
    echo [ERROR] No se genero la carpeta docs
    pause
    exit /b 1
)

REM Paso 6: Git status
echo [5/5] Estado de Git:
git status --short

echo.
echo ================================
echo    Deployment Preparado!
echo ================================
echo.
echo Proximos pasos:
echo 1. git add .
echo 2. git commit -m "Deploy: FISC Platform"
echo 3. git push origin main
echo.
echo Despues configura GitHub Pages:
echo Settings -^> Pages -^> Source: main -^> Folder: /docs -^> Save
echo.
echo Tu sitio estara en: https://TU_USUARIO.github.io/FISC/
echo.
pause
