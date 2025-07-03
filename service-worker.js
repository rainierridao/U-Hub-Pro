self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('your-cache-name').then((cache) => {
            return cache.addAll([
                '/', // Cache the root (index.html)
        '/index.html', // Cache the main HTML file
        '/styles.css', // Cache the CSS file
        '/script.js', // Cache the JavaScript file
        '/manifest.json', // Cache the manifest file
        '/icons/icon-192x192.png', // Cache icons
        '/icons/icon-512x512.png', // Cache icons            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
