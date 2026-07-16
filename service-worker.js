/*
 * service-worker.js
 * ---------------------------------------------------------------
 * Met en cache les fichiers de l'application (le "app shell") afin
 * qu'elle reste utilisable sans connexion Internet après une première
 * visite. Les données de l'utilisateur, elles, sont stockées à part
 * dans IndexedDB (voir idb-shim.js) et ne transitent jamais par ici.
 */
const CACHE_NAME = 'registre-cache-v1';

const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './idb-shim.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Stratégie "cache d'abord" pour les fichiers de l'application.
  // Pour tout le reste (ex. polices Google, jsPDF via CDN), on tente
  // le réseau puis on retombe sur le cache si hors ligne.
  const url = new URL(request.url);
  const isAppShell = url.origin === self.location.origin;

  if (isAppShell) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
  } else {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
});
