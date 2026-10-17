const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 1. Icono Estándar (Con esquinas redondeadas y squircle moderno)
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradiente de Fondo Minimalista (Azul profundo zafiro) -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" />
      <stop offset="60%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>

    <!-- Gradiente Dorado / Ámbar para el Checkmark de Mérito -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>

    <!-- Sombra suave para dar relieve sutil -->
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0284c7" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Fondo Squircle redondeado moderno -->
  <rect x="24" y="24" width="464" height="464" rx="116" fill="url(#bgGrad)" stroke="#38bdf8" stroke-width="6" stroke-opacity="0.4" />

  <!-- Grupo central centrado y limpio -->
  <g filter="url(#subtleGlow)">
    <!-- Libro Abierto Minimalista (Símbolo de Estudio y Normativa) -->
    <!-- Página Izquierda -->
    <path d="M 244,195 
             C 190,175 125,178 86,192 
             C 80,194 76,200 76,207 
             L 76,345 
             C 76,354 84,361 93,359 
             C 130,347 190,344 244,364 
             Z" 
          fill="#f8fafc" />

    <!-- Página Derecha -->
    <path d="M 268,195 
             C 322,175 387,178 426,192 
             C 432,194 436,200 436,207 
             L 436,345 
             C 436,354 428,361 419,359 
             C 382,347 322,344 268,364 
             Z" 
          fill="#e2e8f0" />

    <!-- Separador / Lomo central sutil -->
    <line x1="256" y1="190" x2="256" y2="368" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round" />

    <!-- Checkmark de Aprobación / Mérito en Oro Brillante sobre el libro -->
    <path d="M 188,272 
             L 236,320 
             L 342,204" 
          fill="none" 
          stroke="url(#goldGrad)" 
          stroke-width="28" 
          stroke-linecap="round" 
          stroke-linejoin="round" />

    <!-- Estrella / Destello de Mérito Superior -->
    <circle cx="256" cy="128" r="16" fill="#fde047" />
  </g>
</svg>
`;

// 2. Icono Maskable para PWA (Fondo completo hasta los bordes con safe-zone)
const svgMaskableIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" />
      <stop offset="60%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>

    <linearGradient id="goldGradM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>

    <filter id="subtleGlowM" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0284c7" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Fondo completo rectangular para permitir cualquier recorte del SO -->
  <rect x="0" y="0" width="512" height="512" fill="url(#bgGradM)" />

  <!-- Contenido en zona segura del 80% (scale 0.8 centrado) -->
  <g transform="translate(51.2, 51.2) scale(0.8)" filter="url(#subtleGlowM)">
    <!-- Marco redondeado sutil -->
    <rect x="24" y="24" width="464" height="464" rx="116" fill="rgba(255,255,255,0.03)" stroke="#38bdf8" stroke-width="4" stroke-opacity="0.3" />

    <!-- Libro Abierto Minimalista -->
    <path d="M 244,195 
             C 190,175 125,178 86,192 
             C 80,194 76,200 76,207 
             L 76,345 
             C 76,354 84,361 93,359 
             C 130,347 190,344 244,364 
             Z" 
          fill="#f8fafc" />

    <path d="M 268,195 
             C 322,175 387,178 426,192 
             C 432,194 436,200 436,207 
             L 436,345 
             C 436,354 428,361 419,359 
             C 382,347 322,344 268,364 
             Z" 
          fill="#e2e8f0" />

    <line x1="256" y1="190" x2="256" y2="368" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round" />

    <path d="M 188,272 
             L 236,320 
             L 342,204" 
          fill="none" 
          stroke="url(#goldGradM)" 
          stroke-width="28" 
          stroke-linecap="round" 
          stroke-linejoin="round" />

    <circle cx="256" cy="128" r="16" fill="#fde047" />
  </g>
</svg>
`;

async function generateAllIcons() {
  const iconsDir = path.join(__dirname, 'icons');
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // Guardar SVGs
  fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgIcon.trim());
  fs.writeFileSync(path.join(iconsDir, 'icon-maskable.svg'), svgMaskableIcon.trim());

  const svgBuffer = Buffer.from(svgIcon);
  const maskableBuffer = Buffer.from(svgMaskableIcon);

  const standardSizes = [16, 32, 48, 72, 96, 128, 144, 152, 192, 256, 384, 512];

  for (const size of standardSizes) {
    const filename = `icon${size}.png`;
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(iconsDir, filename));
    console.log(`✓ Generado ${filename} (${size}x${size})`);
  }

  // Generar iconos maskable para Android y Chrome
  await sharp(maskableBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(iconsDir, 'icon-maskable-192.png'));
  console.log('✓ Generado icon-maskable-192.png');

  await sharp(maskableBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, 'icon-maskable-512.png'));
  console.log('✓ Generado icon-maskable-512.png');

  // Favicon estándar (32x32 y 48x48)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(iconsDir, 'favicon.png'));
  console.log('✓ Generado favicon.png (32x32)');

  console.log('\n🎉 ¡Todos los iconos profesionales de SIMO Prep han sido generados exitosamente!');
}

generateAllIcons().catch(err => {
  console.error('Error generando iconos:', err);
  process.exit(1);
});
