const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v2';
const assets = [
  '/offline',
  '/manifest.json',
  '/buildcss/styles.css',
  '/scripts/script.js'
];

// cache size limit
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size))
      }
    })
  })
};

// install service worker
self.addEventListener('install', (event) => {
  console.log('service worker has been installed');
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets);
    }).then(() => {
      self.skipWaiting()
    })
  );
});

// activate service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      )
    })
  );
});

// fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(event.request.url, fetchRes.clone());
          limitCacheSize(dynamicCacheName, 25)
          return fetchRes;
        })
      });
    }).catch(() => {
      return caches.match('/offline');
    })
  );
});

