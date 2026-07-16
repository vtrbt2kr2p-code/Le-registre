/*
 * idb-shim.js
 * ---------------------------------------------------------------
 * Fournit un objet `window.storage` avec la même interface que
 * celle utilisée par app.js (get / set / delete / list), mais
 * appuyée sur IndexedDB plutôt que sur un service propriétaire.
 *
 * Cela permet à app.js de fonctionner tel quel, sans connexion
 * Internet, une fois l'application déployée en dehors de Claude
 * (GitHub Pages, serveur statique, Electron, etc.).
 *
 * Toutes les données restent dans le navigateur de l'utilisateur.
 * Aucune requête réseau n'est effectuée par ce fichier.
 */
(function () {
  const DB_NAME = 'registre-db';
  const STORE_NAME = 'kv';
  const DB_VERSION = 1;

  let dbPromise = null;

  function openDB() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'key' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return dbPromise;
  }

  async function get(key /*, shared */) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(key);
      req.onsuccess = () => resolve(req.result ? { key, value: req.result.value } : null);
      req.onerror = () => reject(req.error);
    });
  }

  async function set(key, value /*, shared */) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put({ key, value });
      tx.oncomplete = () => resolve({ key, value });
      tx.onerror = () => reject(tx.error);
    });
  }

  async function del(key /*, shared */) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(key);
      tx.oncomplete = () => resolve({ key, deleted: true });
      tx.onerror = () => reject(tx.error);
    });
  }

  async function list(prefix = '' /*, shared */) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).getAllKeys();
      req.onsuccess = () => {
        const keys = req.result.filter(k => String(k).startsWith(prefix));
        resolve({ keys, prefix });
      };
      req.onerror = () => reject(req.error);
    });
  }

  window.storage = { get, set, delete: del, list };
})();
