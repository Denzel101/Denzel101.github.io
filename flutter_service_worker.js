'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "59fc4dfb3098d84c4fea3d92c707dab3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c2681cfa42956ce7a17674061d0c7b1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df457bc7bdf3100b3f1e52e500019bb7",
".git/logs/refs/heads/main": "9b9ffb2918b25ebccffe7af251ccb2fb",
".git/logs/refs/remotes/origin/main": "aea828db452580ace1048f07946a8ad6",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/02/cb6bf486d56004d5335c2cd39dcb82c8457491": "e7b0cd7ad79aea82b7dacc44747abb1c",
".git/objects/0f/1ac36155eb193703d8d4f3a30d380f15cb6bfc": "d49f2b46a64fc54a317098002617d21b",
".git/objects/12/58eb42b1f5d08a21a3e37dc6f0a78749f1efc3": "f6f686605c82763cf943be25e970a542",
".git/objects/15/903f9a8167e82a5ece47b1d634b8780b65323b": "534d55b40d6291db9409a8069f6a00e8",
".git/objects/16/34caccd1dfe17a6dc818db8ee6ca3f9ec68195": "37109879a043caacc737d6f2ab7ce256",
".git/objects/1d/4e14e2a9c4cf15ac1d72ebe5750fc5914e463c": "b269ef3cde5d257fd238987fd0db236e",
".git/objects/21/2c7163ffaeff482f900a7f4d254d12fec7fe49": "9d300767c239b1f4bf4a6d187441bf9e",
".git/objects/24/1a35fef26b7411aa2e5cfb233dde58c1fcbf51": "fab4bd668784a6eb610aef1f6b63a7b3",
".git/objects/24/4acd18776b25bb1032461cdaf2c2aa431a4054": "091777e612d4fd41881ea1b2821f46f2",
".git/objects/24/d3491b52c1180f89e10d27c01104ded42240ef": "9f73d4b41fd74c2a739ec0e9be434f1b",
".git/objects/26/d245f4a17f57e4acd5856426391b1310b65b02": "64e8f4c066381e01ff8640bb791bfd1f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/4c29b45347e4cdfa8fab12d624cb480ba62046": "a8e61fe9f452b0edf255fc8345672bdb",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/42/40b15f7a3d626131d1a0ec9abad65ed4c25969": "ceabc7c6e84398be05ace4ff2750dcd9",
".git/objects/42/641261d49baf13dffae2a77c9cb879a3d88b75": "b94db320ab820af9fb615654200359fe",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/dd3c1db22ed31aed26f77e9665af454761a8f5": "a8e0a255fd1d0cfec300039b1e79a7aa",
".git/objects/4c/5f77c3e82ae1a915183a47db3d59ca4a82e69f": "5ba1d597a1ec000c0a4ccf3c98dad8c9",
".git/objects/56/41959d65b22e4571f5c51f9a623ea5c00dbb84": "89716a4beb77ad0377f2482493517a51",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/8faf0a01ce89e9d88d24e254ad4a71a7b8fb13": "c8a508e2eccf1fe5e411ec76724b9e63",
".git/objects/5d/333d3fc98f6bfce6c73773717b87c615fe7d3e": "48336892caf8eee439ab4b343d76f76c",
".git/objects/62/b888008a745b9465d9cfaad821fc49671344c6": "1235b625a4ab0d518090224c612753e8",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/c6fc6d8abfbe6871c6c0d6676602315dfd0fb0": "90760be1870438adcf1aa7d3be55e112",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/0ddc32fa4878aab629d7e3043d1afda81a3860": "1f2e5a29ebdabbc3278388b89983140f",
".git/objects/8b/13fd5ba37df509e8a3735b2fb5ef606be7a662": "be68d00920429214bae8ff60b754b4f5",
".git/objects/8c/99d67288d7f98ae50e8b1e91af888edf54a8d9": "44d1de9b4724e0f0c575d933ab7da073",
".git/objects/9a/fe3a0014aacbc2a7d6117c4427000e4cec7c86": "1594b4d9eb917ee25a086cc5214a4aba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/3bf31084fbcb86d5889e0a239c4c6dcaf46f77": "76f6b6d2ea9450ccd4d4126f83acd971",
".git/objects/b3/d2eea87b0bc60db6334602006c2a21cf20bdf1": "a90ec6305c5a31e19cd06e43c8999a4b",
".git/objects/bd/67cf75ea2e7b4c9943ac232bf0fedc4377ea46": "467758162ebe66d4922078f413a4ebaf",
".git/objects/c9/1ea4691114a92235a77bc476665ba8f3653eed": "845718904d783062a05f6d8565c0c713",
".git/objects/ca/06505b67f97a2fa7fe7717975a1884e91ee57e": "ea61f79060759568d592882a14090824",
".git/objects/cc/3828c4ce02dc716ac647539407d61a52a3a1a6": "f1afcb9511e04832daf01fe80c2ef28d",
".git/objects/cf/03c0c7984e9d9fa4e872f93684235e14c6b6e6": "16835e7df77ee76e3c7fc0db6e40d964",
".git/objects/d4/f9c055253575ab8b90d7fce319845081a985d5": "36f14a7d823e0ad9d1026a9bcb431425",
".git/objects/d6/3beb7a7a5e2a1adb045060d2bca4ad17a7fe45": "2c513768f63c9dbe9f1320e1f6f85b51",
".git/objects/d8/127a5ce4dd7fea28bdf7ade8e142607e293c45": "aec93aef711c9e3d3c92a830affb927c",
".git/objects/d9/1e12042c85ed0575be9e8ad6b1f00baee8ef9d": "bb5e1d48fd9ff8ea9b603829bc96f8ef",
".git/objects/de/09ffe9f345b4865e5961096a7337bc32fed4d5": "8998b2fb2e85e1d1b1be201346cb585b",
".git/objects/de/54a30a724f841845097ab634f903b17232277d": "566d84579cb7d0ed2282419c82c0a6da",
".git/objects/e4/dc7bffe8445503f68fec5132f3400b397beb1c": "cbe613b1feded101d49f309641043ba5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f0/d8aebae2c19331fca3863f6eb51352e5069469": "a22866013214a199795cbfe1751d174b",
".git/objects/f1/defc71b7d1f8987d7927bcca7674644ce077eb": "15a0aa9a4b5e25678798beb8a6b3d03c",
".git/objects/f4/16fd3c3939e18ceb799bd9aa900b805208dc51": "a028d9216fa5eb8c60dbec9a65e0d21b",
".git/objects/f5/63f7ca89d562ee4662d44c65f477cd5c0cfe49": "ffd0e0a970aec387bc49751f8a39f4fc",
".git/objects/fc/c798d2e36a344c8595143fcd14363aa19cfd46": "d45ef781d6858af3d1437777843c83f0",
".git/refs/heads/main": "41ed06fbc5d18a1610ff3fa22828edde",
".git/refs/remotes/origin/main": "41ed06fbc5d18a1610ff3fa22828edde",
"assets/AssetManifest.json": "094b7a50c3ec71001b9560437356bac1",
"assets/assets/images/backend.png": "0ebc182c1d9edd588d260e8a19d50f42",
"assets/assets/images/backend_icon.png": "a9f40c5e289f8a24b377154ee3f61af9",
"assets/assets/images/ci-cd.png": "117fcd136431f2c36ad67eadee7046de",
"assets/assets/images/facebook.png": "1c131dbd08b8636ada8dbd9758b57ddb",
"assets/assets/images/flutter.png": "7a48d7c8f2d7f65d904aaa538e7252ca",
"assets/assets/images/flutter_circle.png": "59abe6cc666a648c33f9488e53663858",
"assets/assets/images/Geass.jpg": "affd81d620cedaa341017efbc464a62f",
"assets/assets/images/github.png": "b17444f181dfac9004b1138776afc162",
"assets/assets/images/java.png": "8f7e4cc176298fd0724a1fe3b1c3f18e",
"assets/assets/images/java_circle.png": "cb18683cd0bb39f5ea863c4fe9ee2b2c",
"assets/assets/images/khalid.png": "d844bf2982bc466a968c2107542a0489",
"assets/assets/images/laravel.png": "5b9bab3d502a1df96a32c7498d246f3f",
"assets/assets/images/linkedIn.png": "539e826d2e9efd907a4a487e3fd4c27a",
"assets/assets/images/logo.png": "3d0c2946c5e1fce21b3eae19ee964705",
"assets/assets/images/logo.svg": "d48ab55fde19b1856c4f526bb9455e4f",
"assets/assets/images/php.png": "500fc576154831f4f31269e523b6c452",
"assets/assets/images/python.png": "64aeac68d191109b6041934d98b8847c",
"assets/assets/images/python_circle.png": "b85d209d9c34e721a8f420175edf1a04",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fa4158b4295f184402e2f627ed13d61d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.ico": "f55fc14a5aacfc43e10d62eae5df16a6",
"icons/icon-192.png": "10cb611203171b17d7a112813f8e4260",
"icons/icon-512.png": "be0be3ac9d719bed147c786242ebef4d",
"index.html": "86fca770d42d3dd4b899a7ff46fe4884",
"/": "86fca770d42d3dd4b899a7ff46fe4884",
"main.dart.js": "c958766b581120ef45b40243ae96e7ba",
"manifest.json": "8c50695e47c9e03bdd5dd02c8b3077fc",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
