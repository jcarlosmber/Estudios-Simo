/**
 * server.js - Servidor de Sincronización y Web App para Coolify
 * 
 * Cumple doble función:
 * 1. API de Sincronización: guarda y sirve progreso y preguntas a la extensión en PC y celulares.
 * 2. Servidor Web: sirve la interfaz (sidepanel.html) en la raíz '/' para abrirla directamente en cualquier navegador o instalar como PWA móvil.
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Directorio para persistencia de datos (apto para volúmenes de Coolify)
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
const DB_FILE = path.join(DATA_DIR, 'cloud_user_progress.json');

// Permitir peticiones CORS desde extensiones de Chrome (chrome-extension://) y cualquier origen
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));

// Servir archivos estáticos del proyecto (HTML, CSS, JS, imágenes, iconos)
app.use(express.static(__dirname));

function loadDB() {
  if (!fs.existsSync(DB_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) {
    return {};
  }
}

function saveDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// 1. Ruta Principal: Redirige a la Web App para usarla en celular o PC
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sidepanel.html'));
});

// 2. Healthcheck para Coolify
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'SIMO Prep DIAN 2676',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 3. Subir Progreso (PUSH)
app.post('/sync/push', (req, res) => {
  const { userId, stats, srsCards, activeJob, activeProfileId, streak } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'userId es obligatorio' });
  }

  const db = loadDB();
  db[userId] = {
    updatedAt: new Date().toISOString(),
    stats: stats || {},
    srsCards: srsCards || [],
    activeJob: activeJob || null,
    activeProfileId: activeProfileId || (activeJob && activeJob.id) || 'gestor_iii',
    streak: streak || { current: 0, best: 0 }
  };
  saveDB(db);

  console.log(`[COOLIFY SYNC PUSH] Progreso guardado para: ${userId}`);
  res.json({
    success: true,
    message: 'Progreso guardado exitosamente en el servidor',
    updatedAt: db[userId].updatedAt
  });
});

// 4. Descargar Progreso (PULL)
app.get('/sync/pull', (req, res) => {
  const userId = req.query.userId || 'jcarlos';
  const db = loadDB();

  if (!db[userId]) {
    return res.status(404).json({ error: 'No hay datos guardados para este usuario' });
  }

  console.log(`[COOLIFY SYNC PULL] Progreso entregado a: ${userId}`);
  res.json(db[userId]);
});

// 5. Servir Banco de Preguntas Actualizado
app.get('/questions', (req, res) => {
  try {
    const questionsPath = path.join(__dirname, 'questions.js');
    if (fs.existsSync(questionsPath)) {
      const qModule = require('./questions.js');
      const profile = req.query.profile;
      if (profile && typeof qModule.getQuestionsForProfile === 'function') {
        return res.json(qModule.getQuestionsForProfile(profile));
      }
      if (qModule.QUESTION_BANK) {
        return res.json(qModule.QUESTION_BANK);
      }
    }
    res.json([]);
  } catch (err) {
    res.status(500).json({ error: 'Error cargando preguntas', detail: err.message });
  }
});

// 6. Descargar Paquete de Extensión de Chrome (.ZIP)
app.get(['/download/extension', '/simo-prep-extension.zip'], (req, res) => {
  try {
    let zipPath = path.join(__dirname, 'simo-prep-extension.zip');
    if (!fs.existsSync(zipPath)) {
      const { buildExtensionZip } = require('./build_extension_zip.js');
      buildExtensionZip();
    }
    res.download(zipPath, 'simo-prep-extension.zip', (err) => {
      if (err && !res.headersSent) {
        res.status(500).json({ error: 'Error al enviar el archivo zip', detail: err.message });
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Error generando la extensión', detail: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`🚀 SIMO Prep Server activo en el puerto ${PORT}`);
  console.log(`🌐 Web App disponible en: http://localhost:${PORT}`);
  console.log(`📂 Almacenamiento persistente en: ${DATA_DIR}`);
  console.log(`=======================================================`);
});
