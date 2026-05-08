const CACHE_NAME = 'minimum-french-v1';
const urlsToCache = [
  '/interfaces/shop.html',
  '/interfaces/manifest.json',
  '/interfaces/icon-192.png',
  '/interfaces/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
