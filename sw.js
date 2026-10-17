// sw.js - Service Worker para SIMO Prep (Soporte PWA e Instalación en Chrome/Móvil)
const CACHE_NAME = 'simo-prep-v2';
const ASSETS_TO_CACHE = [
  './',
  './sidepanel.html',
  './sidepanel.css',
  './sidepanel.js',
  './profiles.js',
  './questions_gestor_iii.js',
  './questions_analista_iv.js',
  './questions.js',
  './tips_data.js',
  './speed_drills.js',
  './image_catalog.js',
  './sound_effects.js',
  './cloud_sync.js',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon16.png',
  './icons/icon32.png',
  './icons/icon48.png',
  './icons/icon72.png',
  './icons/icon96.png',
  './icons/icon128.png',
  './icons/icon192.png',
  './icons/icon256.png',
  './icons/icon512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/favicon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[SW] Algunos recursos no pudieron cachearse durante install:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Solo interceptar peticiones GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Retornar de caché y actualizar en segundo plano (stale-while-revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).catch(() => {
        // Si no hay red y solicita la página principal, devolver sidepanel.html
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./sidepanel.html');
        }
      });
    })
  );
});
