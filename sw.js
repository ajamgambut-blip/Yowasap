self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Lina & Anam';
  const options = {
    body: data.body || 'Ada pesan baru 💌',
    icon: 'icon-192.png',
    badge: 'icon-152.png',
    tag: 'chat-lina-anam'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
