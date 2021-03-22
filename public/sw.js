const staticCacheName = 'site-static';
const assets = ['/', 'styles.css']

// install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
  );
});

// activate event
self.addEventListener('activate', (event) => {
  // console.log('service worker has been activated');
});

// fetch event 
self.addEventListener('fetch', (event) => {
  event.respondWith(

    // check if request already exists in the cache, else fetch it
    caches.match(event.request)
      .then(cacheRes => {
        return cacheRes || fetch(event.request);
      })
      .catch((err) => {
        return caches.open(staticCacheName)
          .then(cache => cache.match('/'))
      })
  );
});
