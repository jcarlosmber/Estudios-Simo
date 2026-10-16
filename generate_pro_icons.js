const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Diseño vectorial SVG minimalista, moderno y limpio para SIMO Prep
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

async function generateIcons() {
  const iconsDir = path.join(__dirname, 'icons');
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // Guardar SVG de referencia
  fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgIcon);

  const svgBuffer = Buffer.from(svgIcon);

  // Renderizar icon128.png
  await sharp(svgBuffer)
    .resize(128, 128)
    .png()
    .toFile(path.join(iconsDir, 'icon128.png'));

  // Renderizar icon48.png
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(path.join(iconsDir, 'icon48.png'));

  // Renderizar icon16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(iconsDir, 'icon16.png'));

  console.log('✅ Iconos profesionales (16, 48, 128 px) generados exitosamente en /icons');
}

generateIcons().catch(err => {
  console.error('Error generando iconos:', err);
});
