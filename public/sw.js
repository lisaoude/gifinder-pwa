const CORE_CACHE = 1
const CORE_CACHE_NAME = `core-v${CORE_CACHE}`
const CORE_ASSETS = ["manifest.json", "/offline", "css/style.css"]

// install service worker
self.addEventListener('install', (event) => {
  console.log('service worker had been installed')
});