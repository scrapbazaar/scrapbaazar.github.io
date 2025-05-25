'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7806bb88dbcfd06ec2cdbb6e7cbc885a",
"assets/AssetManifest.bin.json": "85c2dd47fa21ca679c0f8bcda2e52852",
"assets/AssetManifest.json": "5386bd24d9a267448fc945638a5cf2e6",
"assets/assets/appliances.json": "4561bd27b8722d39e345c9a1f7cc690f",
"assets/assets/image/1.webp": "5c89a4c65ee32507fe06b2da40be1278",
"assets/assets/image/1024.png": "48d77a78b4560641913cd361ce3e73bc",
"assets/assets/image/2.webp": "4cb6af7157f92e5197e662a74e74738a",
"assets/assets/image/3.webp": "f08642f555c802802f25bd2636f9a413",
"assets/assets/image/4.webp": "b8e5ca59e1987f499519715eb12823b4",
"assets/assets/image/5.webp": "c63a116618a0f1859f72245307fe96b9",
"assets/assets/image/6.webp": "fc853f3d0d1844b52b70b40e93117597",
"assets/assets/image/7.webp": "471888eadef46db1ff068a24f7d6a4aa",
"assets/assets/image/8.webp": "0fd3d6573e5371fa4ba53580b948bc16",
"assets/assets/image/9.jpeg": "3fdedc37f12790353d24d08404fa7b7a",
"assets/assets/image/contact.jpeg": "dd6c0fff797c3eb50b6a53091e551b3c",
"assets/assets/image/dispose.webp": "da1dd7ad1afad1050e9860efc29a63f2",
"assets/assets/image/home_1.webp": "1138c648d679778869ed0d138dc2f392",
"assets/assets/image/home_2.webp": "a006ff588914dc043c6e5f75b79a2ccd",
"assets/assets/image/home_3.webp": "044169e1bb2dc088ff58de52d61bcc1f",
"assets/assets/image/home_4.webp": "871895260dc715dbd62412f616e5490a",
"assets/assets/image/home_5.webp": "eefef0a5c78bfce3c6cce676fb4b6408",
"assets/assets/image/home_6.webp": "f8e8dfe3bcbdfa5d946b0551753393d9",
"assets/assets/image/payment.webp": "365aabfca50175d5760a36ab8a374fdf",
"assets/assets/image/pickup.webp": "ec3d5be5badb2d48f2e98690bb0bf327",
"assets/assets/image/preview.png": "48d77a78b4560641913cd361ce3e73bc",
"assets/assets/image/request.webp": "2532b3cd8c05a03edf494c9527783ac5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1885dced724730ab4fd329018ccd9f70",
"assets/NOTICES": "dececc0d3990fcdd91afba82a720ca00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a53baa14911df76a48506ba22ea66b91",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "86b36cedc72428a9577e5327aa30508a",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "b14731d89ca38b3b629553a20bad37bb",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "b8be61249953a1b4a80941ca9d1df901",
"icons/Icon-192.png": "58cf5eaaa4aa7c0168d134b079843755",
"icons/Icon-512.png": "ffc95840f74e5a815cf8a9fd80f98995",
"icons/Icon-maskable-192.png": "58cf5eaaa4aa7c0168d134b079843755",
"icons/Icon-maskable-512.png": "ffc95840f74e5a815cf8a9fd80f98995",
"index.html": "c3b6c0fbb859a8334e647048aedddf46",
"/": "c3b6c0fbb859a8334e647048aedddf46",
"main.dart.js": "2b3b6b5bdb9af7e1cbf779c5acc3550f",
"manifest.json": "b4436a35256f0068b6230d1de13b284a",
"version.json": "eb3d61bea60b08128749d2aea8e0185b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
