@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM  SafeZoneRank - Deploy a produccion (GitHub -> Vercel)
REM  Uso:  deploy.cmd  ["descripcion opcional"]
REM  Hace: git add . -> git commit -> git push origin main
REM  Vercel detecta el push y redeploya en ~1 minuto.
REM ============================================================

REM Ejecuta siempre desde la carpeta donde vive este script
cd /d "%~dp0"

echo ============================================================
echo   SafeZoneRank - Deploy a produccion
echo ============================================================

REM Marca de tiempo robusta e independiente del idioma de Windows
for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd HH:mm'"`) do set "STAMP=%%i"

REM Descripcion: usa el argumento si se pasa, si no una por defecto
set "DESC=%~1"
if "%DESC%"=="" set "DESC=actualizacion de contenido"

echo.
echo [1/3] Agregando cambios...
git add .

REM Si no hay nada en el stage, no hay nada que desplegar
git diff --cached --quiet
if not errorlevel 1 (
    echo.
    echo No hay cambios para desplegar. Nada que hacer.
    goto :fin
)

echo [2/3] Creando commit: "update: %DESC% (%STAMP%)"
git commit -m "update: %DESC% (%STAMP%)"
if errorlevel 1 goto :error

echo [3/3] Enviando a GitHub (origin/main)...
git push origin main
if errorlevel 1 goto :error

echo.
echo OK - Push enviado correctamente.
echo Vercel redeploya automaticamente en ~1 minuto.
echo Repo:  https://github.com/humbertoagdez-a11y/safezonerank
goto :fin

:error
echo.
echo ERROR durante el deploy. Revisa el mensaje de arriba.
echo (Causas comunes: sin conexion, credenciales de GitHub, o conflicto remoto)
endlocal
exit /b 1

:fin
endlocal
