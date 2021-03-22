// client side js

// calling sw to run in the background when opening web app in browser
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker NOT registered', err));
}