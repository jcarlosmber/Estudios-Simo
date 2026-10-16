/**
 * server_example.js - Servidor de Referencia en Node.js / Express para SIMO Prep
 * 
 * Permite almacenar y sincronizar el progreso de estudio, racha, SRS y banco de preguntas
 * desde cualquier dispositivo (PC, Kiwi Browser en Android, Web App móvil).
 * 
 * Para ejecutarlo:
 * 1. npm install express cors
 * 2. node server_example.js
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'cloud_user_progress.json');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Helper para leer/guardar progreso en archivo JSON local o base de datos
function loadDB() {
  if (!fs.existsSync(DB_FILE)) {
    return {};
  }
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) {
    return {};
  }
}

function saveDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// 1. Endpoint de Salud
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'SIMO Cloud Sync Server', time: new Date().toISOString() });
});

// 2. Guardar / Subir Progreso (PUSH)
app.post('/sync/push', (req, res) => {
  const { userId, stats, srsCards, activeJob, streak } = req.body;
  
  if (!userId) {
    return res.status(400).json({ error: 'userId es obligatorio' });
  }

  const db = loadDB();
  db[userId] = {
    updatedAt: new Date().toISOString(),
    stats: stats || {},
    srsCards: srsCards || [],
    activeJob: activeJob || null,
    streak: streak || { current: 0, best: 0 }
  };
  saveDB(db);

  console.log(`[SYNC PUSH] Progreso actualizado para usuario: ${userId}`);
  res.json({ success: true, message: 'Progreso sincronizado en el servidor', updatedAt: db[userId].updatedAt });
});

// 3. Descargar / Consultar Progreso (PULL)
app.get('/sync/pull', (req, res) => {
  const userId = req.query.userId || 'aspirante_dian_01';
  const db = loadDB();

  if (!db[userId]) {
    return res.status(404).json({ error: 'No hay datos guardados para este usuario' });
  }

  console.log(`[SYNC PULL] Progreso entregado para usuario: ${userId}`);
  res.json(db[userId]);
});

// 4. Servir Banco de Preguntas Actualizado
app.get('/questions', (req, res) => {
  try {
    const questionsPath = path.join(__dirname, 'questions.js');
    if (fs.existsSync(questionsPath)) {
      const { QUESTION_BANK } = require('./questions.js');
      return res.json(QUESTION_BANK);
    }
    res.json([]);
  } catch (err) {
    res.status(500).json({ error: 'Error cargando preguntas', detail: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor SIMO Cloud Sync activo en http://localhost:${PORT}`);
  console.log(`📱 En tu celular en la misma red Wi-Fi: http://TU_IP_LOCAL:${PORT}`);
});
