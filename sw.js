self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dropnow-cache-v1').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.webmanifest',
      './logo.jpg'
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
