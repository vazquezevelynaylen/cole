const CACHE = 'et20-v1';
const ASSETS = [
  '/', '/index.html',
  '/img/colegio1.jpg','/img/aulacompu1.jpg','/img/multi1.jpg','/img/logo1.jpg',
  '/favicon.svg','/manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return resp;
    }).catch(() => caches.match('/')))
  );
});
