// build_extension_zip.js - Generador del paquete ZIP instalable para Google Chrome (PC)
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

function buildExtensionZip() {
  const zip = new AdmZip();
  const rootFiles = [
    'manifest.json',
    'background.js',
    'sidepanel.html',
    'sidepanel.css',
    'sidepanel.js',
    'profiles.js',
    'questions.js',
    'questions_gestor_iii.js',
    'questions_gestor_iii_ci.js',
    'questions_analista_iv.js',
    'tips_data.js',
    'speed_drills.js',
    'image_catalog.js',
    'sound_effects.js',
    'cloud_sync.js',
    'verbos_rectores_data.js',
    'popup.html',
    'popup.js',
    'tip_popup.html',
    'tip_popup.js'
  ];

  rootFiles.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      zip.addLocalFile(fullPath);
    }
  });

  const iconsDir = path.join(__dirname, 'icons');
  if (fs.existsSync(iconsDir)) {
    zip.addLocalFolder(iconsDir, 'icons');
  }

  const assetsDir = path.join(__dirname, 'assets');
  if (fs.existsSync(assetsDir)) {
    zip.addLocalFolder(assetsDir, 'assets');
  }

  const guideContent = `========================================================================
 GUÍA FÁCIL: CÓMO INSTALAR SIMO PREP EN GOOGLE CHROME (PC)
========================================================================

1. Descomprime este archivo .zip en cualquier carpeta de tu computadora 
   (por ejemplo: en Documentos\\SIMO-Prep).

2. Abre Google Chrome y escribe en la barra de direcciones:
   chrome://extensions
   (y presiona Enter).

3. En la esquina superior derecha de la ventana, ACTIVA el interruptor:
   "Modo de desarrollador" (Developer mode).

4. En la esquina superior izquierda, haz clic en el botón:
   "Cargar descomprimida" (Load unpacked).

5. Selecciona la carpeta que acabas de descomprimir (donde está manifest.json).

¡LISTO! 🎉
Verás el ícono de SIMO Prep en la barra de extensiones de Chrome.
Haz clic en él o presiona el ícono del Panel Lateral (Side Panel)
para estudiar casos y recibir microaprendizaje mientras navegas.
========================================================================`;
  zip.addFile('LEEME_COMO_INSTALAR.txt', Buffer.from(guideContent, 'utf8'));

  const outputPath = path.join(__dirname, 'simo-prep-extension.zip');
  zip.writeZip(outputPath);
  console.log(`[ZIP BUILD] Paquete creado exitosamente en: ${outputPath}`);
  return zip.toBuffer();
}

if (require.main === module) {
  buildExtensionZip();
}

module.exports = { buildExtensionZip };
