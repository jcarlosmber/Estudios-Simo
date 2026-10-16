const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Función para generar un archivo PNG válido sin dependencias externas
function createPNG(width, height, r, g, b) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 2; // Color type: Truecolor (RGB)
  ihdrData[10] = 0; // Compression method
  ihdrData[11] = 0; // Filter method
  ihdrData[12] = 0; // Interlace method
  const ihdr = createChunk('IHDR', ihdrData);

  // Scanlines con filtro 0
  const scanlineLength = width * 3 + 1;
  const rawData = Buffer.alloc(height * scanlineLength);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 3;
      // Gradiente sutil
      const factor = (x + y) / (width + height);
      rawData[pixelOffset] = Math.min(255, Math.floor(r * (0.8 + 0.4 * factor)));
      rawData[pixelOffset + 1] = Math.min(255, Math.floor(g * (0.8 + 0.4 * factor)));
      rawData[pixelOffset + 2] = Math.min(255, Math.floor(b * (0.8 + 0.4 * factor)));
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idat = createChunk('IDAT', compressedData);

  // IEND chunk
  const iend = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

function createChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typeBuffer = Buffer.from(type, 'ascii');
  const crcData = Buffer.concat([typeBuffer, data]);
  const crc = crc32(crcData);

  const crcBuffer = Buffer.alloc(4);
  crcBuffer.writeUInt32BE(crc, 0);

  return Buffer.concat([length, typeBuffer, data, crcBuffer]);
}

// Cálculo CRC32 estándar
function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

const table = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  table[i] = c;
}

const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Color dorado / azul institucional SIMO (#f59e0b)
fs.writeFileSync(path.join(iconsDir, 'icon16.png'), createPNG(16, 16, 245, 158, 11));
fs.writeFileSync(path.join(iconsDir, 'icon48.png'), createPNG(48, 48, 245, 158, 11));
fs.writeFileSync(path.join(iconsDir, 'icon128.png'), createPNG(128, 128, 245, 158, 11));

console.log('Iconos creados exitosamente en /icons');
