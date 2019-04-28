'use strict';

var version = 'v1::';
var staticCacheName = version + 'static-resources';

var offlineData = ['../css/main.css', '../index.html', '../assets/*', 'main.js'];

self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(staticCacheName).then(function (cache) {
        return cache.addAll(offlineData);
    }));
});

self.addEventListener('activate', function (event) {
    event.waitUntil(caches.keys().then(function (keys) {
        return Promise.all(keys.filter(function (key) {
            return !key.startsWith(version);
        }).map(function (key) {
            return caches.delete(key);
        }));
    })
    // THEN
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
    }).catch(function (err) {
        return console.log(err);
    }));
});
