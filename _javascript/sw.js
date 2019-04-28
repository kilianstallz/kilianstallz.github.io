const version = 'v1::';
const staticCacheName = `${version}static-resources`;

const offlineData = [
    '../css/main.css',
    '../index.html',
    '../assets/*',
    'main.js'
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(staticCacheName)
            .then(cache => {
                return cache.addAll(offlineData)
            })
    )
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then(keys => {
                return Promise.all(
                    keys
                        .filter(key => {
                            return !key.startsWith(version)
                        })
                        .map(key => {
                            return caches.delete(key)
                        })
                )
            })
        // THEN
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        }).catch(err => console.log(err))
    )
})
