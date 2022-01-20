/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3e017fa50851edfe08b5.js"
  },
  {
    "url": "framework-f5bce0c9e5b9b63c8bb1.js"
  },
  {
    "url": "styles.a3464b0401b962298b58.css"
  },
  {
    "url": "252f366e-19160097d45a2abf2e95.js"
  },
  {
    "url": "ae51ba48-3e831325eb0622ddaeed.js"
  },
  {
    "url": "app-2ec909a8c19449e9a395.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "446cd04771ef8e02131bb3767f41d290"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-4bf1e3a7e92708f4d2ee.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "eab715155d756855bd3fb40b3266dd40"
  },
  {
    "url": "page-data/sq/d/3000541721.json",
    "revision": "c5919bc3dc6d3ff96e940a0d0f8e63dc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "ebb6085549a9d860eb8a98977830890b"
  },
  {
    "url": "polyfill-f2ac07aab07b6762212e.js"
  },
  {
    "url": "d7eeaac4-440b62a13dbfd76a8836.js"
  },
  {
    "url": "0c428ae2-6032cccf858006343bd4.js"
  },
  {
    "url": "bb751e1a4b656f5a092cca80ab0f9790269cc0e4-a39eb9f227eb82d0fedb.js"
  },
  {
    "url": "053f738754685b826731600c383d5f9bd7dfb129-0d50f884a7936e24c092.js"
  },
  {
    "url": "77e6c32096bcc50573703661e098ceb7f3a4ffb7-6a56a2bd69fdcfc02212.js"
  },
  {
    "url": "component---src-pages-consumer-js-67c3550015b5139ba898.js"
  },
  {
    "url": "page-data/consumer/page-data.json",
    "revision": "c5d9ee9c647a0c275df02f22debf1c0a"
  },
  {
    "url": "page-data/sq/d/4054939390.json",
    "revision": "b544936cfa7ed4602baf7446ceabc40f"
  },
  {
    "url": "component---src-pages-industrial-js-8ddc64a513fcec8621f3.js"
  },
  {
    "url": "page-data/industrial/page-data.json",
    "revision": "1578e75502888e2acd4d18e681ecc664"
  },
  {
    "url": "page-data/sq/d/1044611109.json",
    "revision": "696b9287c0d20d80d2ab1a3cdacc14f2"
  },
  {
    "url": "page-data/sq/d/975488240.json",
    "revision": "0e54e2ab2d987da649be1c09e297b8ff"
  },
  {
    "url": "a09b44f2acf661a3d39275f7ccdba52e74c7f1fb-b2df80adf7a5aa7a4b6e.js"
  },
  {
    "url": "9fe4188ab52207a8a5f39cbe4194bbcada6e668c-22f467e0e11f1c4afcb2.js"
  },
  {
    "url": "component---src-templates-category-js-bb5bb5e741fb4ec027ba.js"
  },
  {
    "url": "page-data/category/adblue/page-data.json",
    "revision": "984ef2f48caf247a9e70c763d72aaef6"
  },
  {
    "url": "page-data/category/bearing-greases/page-data.json",
    "revision": "98c6387b133193a9c30d2e14da9ad074"
  },
  {
    "url": "page-data/category/brake-fluid/page-data.json",
    "revision": "c9cde94c0ac5162633aa7fabbc6d2663"
  },
  {
    "url": "page-data/category/cold-degreasers-and-solvents/page-data.json",
    "revision": "08945f494cc556f1cb91de75b1f8942a"
  },
  {
    "url": "page-data/category/compressor-and-air-tool-oils/page-data.json",
    "revision": "3991d2a9ee26d2d322bd28571953f2d3"
  },
  {
    "url": "page-data/category/coolants-and-washer-fluid/page-data.json",
    "revision": "45deeda8ab7ea0fc8001c44822fb7f9c"
  },
  {
    "url": "page-data/category/engine-oils-heavy-vehicles/page-data.json",
    "revision": "d156cec40a5a9f1131249dbf75a36b4d"
  },
  {
    "url": "page-data/category/engine-oils-passenger-cars-and-light-transport-vehicles/page-data.json",
    "revision": "bf56e30e80f84ede17a87f2b4c43ce94"
  },
  {
    "url": "page-data/category/food-grade-nsf-h1-greases/page-data.json",
    "revision": "b2a0395be9954f6ba65e4da9010598b8"
  },
  {
    "url": "page-data/category/form-oils/page-data.json",
    "revision": "32273ee7299196aaecf635fbfc252522"
  },
  {
    "url": "page-data/category/fuel-additive/page-data.json",
    "revision": "5ec3d1b6198b073f80df0843be8edb81"
  },
  {
    "url": "page-data/category/fuel-for-diesel-engines/page-data.json",
    "revision": "62d2d50df434d638e2b3b7982b9fc2d2"
  },
  {
    "url": "page-data/category/fuel-for-petrol-engines/page-data.json",
    "revision": "1fd0280634c79e4ef1469fb030f6d854"
  },
  {
    "url": "page-data/category/fuel-oil/page-data.json",
    "revision": "e3a2adbab5fa8c637fbe8833b4d9bfcf"
  },
  {
    "url": "page-data/category/grease-food-industry-nsf-h1/page-data.json",
    "revision": "84df2469fbcf1f603f033e951973652f"
  },
  {
    "url": "page-data/category/grease-with-synthetic-base-oil/page-data.json",
    "revision": "c9c2c831dc6fd2460005795559e5f1f9"
  },
  {
    "url": "page-data/category/guide-oils-saw-chain-oils/page-data.json",
    "revision": "62347bceb68f6fdd29a7b952e501689b"
  },
  {
    "url": "page-data/category/hydraulic-oils/page-data.json",
    "revision": "feebce5889763b12eb0d7c2aeddfc5c3"
  },
  {
    "url": "page-data/category/industrial-gear-oils/page-data.json",
    "revision": "0465d41e3a509ea1133a531ae0ce2777"
  },
  {
    "url": "page-data/category/marine-engine-oils/page-data.json",
    "revision": "eab650022229efee71fce5e7b1cad4c3"
  },
  {
    "url": "page-data/category/metalworking-rust-protection/page-data.json",
    "revision": "50c3c188533852f668c3e4c141d5c8d4"
  },
  {
    "url": "page-data/category/motorcycle-and-2-stroke-oils/page-data.json",
    "revision": "67c608a1bce1ae8045a967c5644affd7"
  },
  {
    "url": "page-data/category/process-white-transformer-and-heat-transfer-oils/page-data.json",
    "revision": "edfafde5b411331cfb6d0417da513373"
  },
  {
    "url": "page-data/category/refrigeration-compressor-oils/page-data.json",
    "revision": "704abd3261bb189209fec1296aa465c2"
  },
  {
    "url": "page-data/category/ship-fuel/page-data.json",
    "revision": "65c533604533c017e55580f4148be75f"
  },
  {
    "url": "page-data/category/sliding-surfaces-chassis-and-teeth-greases/page-data.json",
    "revision": "82616121ae154af714b891c68acc5700"
  },
  {
    "url": "page-data/category/stationary-gas-engines/page-data.json",
    "revision": "f49d60604d2c0dc7749cba3059bf157e"
  },
  {
    "url": "page-data/category/synthetic-greases/page-data.json",
    "revision": "9206c713e5435fc54077d99368508a4f"
  },
  {
    "url": "page-data/category/transmission-oils/page-data.json",
    "revision": "fcdb21ae526e566a26ad6f374b5ae383"
  },
  {
    "url": "page-data/category/turbine-and-circulation-oils/page-data.json",
    "revision": "bbb3c99263676303ca165a8493db77fd"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "012af2417ecdce2c8345ba88eff686cb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/preem-digital-catalogue`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/preem-digital-catalogue/app-2ec909a8c19449e9a395.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/preem-digital-catalogue/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
