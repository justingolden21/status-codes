const CACHE_NAME = 'cache-v1';
const ASSETS = [
	'index.html',
	'methods.html',
	'js/codes.js',
	'js/dark.js',
	'js/share.js',
	'js/install.js',
	'css/styles.css',
	'css/dark.css',
	'img/icon.png',
	'img/icon.svg',
];

// https://mobiforge.com/design-development/pwa-minimus-a-minimal-pwa-checklist
// https://simplabs.com/blog/2018/07/24/from-spa-to-pwa/

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(ASSETS);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});

self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				// delete old caches
				cacheNames.map(function (cacheName) {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
