/*
 * service-worker.js
 * ---------------------------------------------------------------
 * Garde une copie de secours de l'application pour qu'elle reste
 * utilisable sans connexion Internet. Stratégie "réseau d'abord" :
 * on va toujours chercher la dernière version en ligne en priorité,
 * et on ne se sert de la copie en mémoire que si l'appareil est
 * hors ligne. Ainsi, une mise à jour du site est visible immédiatement,
 * sans jamais rester bloqué sur une ancienne version.
 *
 * Les données de l'utilisateur (clients, devis, factures) sont
 * stockées à part dans IndexedDB (voir idb-shim.js) et ne transitent
 * jamais par ce fichier.
 */
// Augmenté lors d'une mise à jour de l'interface afin que les installations
// existantes récupèrent aussi les nouveaux menus et le tutoriel hors ligne.
const CACHE_NAME = 'registre-cache-v6';

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
  if (request.method !== 'GET') return;

  // Réseau d'abord : on essaie toujours de récupérer la dernière version.
  // Si ça échoue (hors ligne), on sert la copie en mémoire.
  event.respondWith(
    fetch(request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return response;
      })
      .catch(() => caches.match(request))
  );
});
