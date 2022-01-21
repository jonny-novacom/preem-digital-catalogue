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
    "url": "webpack-runtime-ac518d01097b2869ef44.js"
  },
  {
    "url": "framework-f5bce0c9e5b9b63c8bb1.js"
  },
  {
    "url": "styles.3763d4d4f1c8c26d4e78.css"
  },
  {
    "url": "252f366e-19160097d45a2abf2e95.js"
  },
  {
    "url": "ae51ba48-3e831325eb0622ddaeed.js"
  },
  {
    "url": "app-e105a2dd2f6633acba66.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "824b53122134002ab5f3f2367c7909a3"
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
    "revision": "a7c5a3da14ba619e6ca7632d39001356"
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
    "url": "component---src-pages-consumer-js-a62690c38c96598daaf1.js"
  },
  {
    "url": "page-data/consumer/page-data.json",
    "revision": "325d787009eb3b993aef9d3e6d2cd293"
  },
  {
    "url": "page-data/sq/d/4054939390.json",
    "revision": "b544936cfa7ed4602baf7446ceabc40f"
  },
  {
    "url": "component---src-pages-industrial-js-edae182c607e2e851cd2.js"
  },
  {
    "url": "page-data/industrial/page-data.json",
    "revision": "35f198f70d9f14c6391201bcee753225"
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
    "revision": "0e135d454e6defedb0e5e9fb32442456"
  },
  {
    "url": "page-data/category/bearing-greases/page-data.json",
    "revision": "b351cab6f4b506d9277b889abfad5216"
  },
  {
    "url": "page-data/category/brake-fluid/page-data.json",
    "revision": "cf1ea650667bf93ccba4b659a7e3cb23"
  },
  {
    "url": "page-data/category/cold-degreasers-and-solvents/page-data.json",
    "revision": "1721b93bde5bf44afabc2a8cb60f3e64"
  },
  {
    "url": "page-data/category/compressor-and-air-tool-oils/page-data.json",
    "revision": "c261caa7e8d1b39ce0071f4d97684b60"
  },
  {
    "url": "page-data/category/coolants-and-washer-fluid/page-data.json",
    "revision": "fd44cd484038cd0fe0c4ac5f07126763"
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
    "revision": "e158d6c76aab631df78e71e308d3ded1"
  },
  {
    "url": "page-data/category/form-oils/page-data.json",
    "revision": "32273ee7299196aaecf635fbfc252522"
  },
  {
    "url": "page-data/category/fuel-additive/page-data.json",
    "revision": "13728d0bb58ea67971006c33a342a27d"
  },
  {
    "url": "page-data/category/fuel-for-diesel-engines/page-data.json",
    "revision": "5db7c229f1d4a7c2af9afcbd65d3fb2c"
  },
  {
    "url": "page-data/category/fuel-for-petrol-engines/page-data.json",
    "revision": "1539d08fc95caa85fcd64f686937d899"
  },
  {
    "url": "page-data/category/fuel-oil/page-data.json",
    "revision": "e887046a42f978058ba06aa54a24505c"
  },
  {
    "url": "page-data/category/grease-food-industry-nsf-h1/page-data.json",
    "revision": "1c6bfcf028be7892ba539083df4a8b2d"
  },
  {
    "url": "page-data/category/grease-with-synthetic-base-oil/page-data.json",
    "revision": "b465d5d909eb95e462a97f353769bfa1"
  },
  {
    "url": "page-data/category/guide-oils-saw-chain-oils/page-data.json",
    "revision": "3e616cbc111935bef1e8fab963d6d052"
  },
  {
    "url": "page-data/category/hydraulic-oils/page-data.json",
    "revision": "feebce5889763b12eb0d7c2aeddfc5c3"
  },
  {
    "url": "page-data/category/industrial-gear-oils/page-data.json",
    "revision": "a5696d86b866eae839cd26e97a83bd5a"
  },
  {
    "url": "page-data/category/marine-engine-oils/page-data.json",
    "revision": "0138f24de92e64335af57071a8b575fe"
  },
  {
    "url": "page-data/category/metalworking-rust-protection/page-data.json",
    "revision": "71896e9c6259b676a170eafb2a8a23e3"
  },
  {
    "url": "page-data/category/motorcycle-and-2-stroke-oils/page-data.json",
    "revision": "9a8ddd5e24293439dd0e999a63f633bf"
  },
  {
    "url": "page-data/category/process-white-transformer-and-heat-transfer-oils/page-data.json",
    "revision": "d213b14dcf99688d45d9535928699a0a"
  },
  {
    "url": "page-data/category/refrigeration-compressor-oils/page-data.json",
    "revision": "704abd3261bb189209fec1296aa465c2"
  },
  {
    "url": "page-data/category/ship-fuel/page-data.json",
    "revision": "8f57afe02be2d70f1a9055a9a3bb61b5"
  },
  {
    "url": "page-data/category/sliding-surfaces-chassis-and-teeth-greases/page-data.json",
    "revision": "4a3606ea9ba63d7a9c4db867d8956dd5"
  },
  {
    "url": "page-data/category/stationary-gas-engines/page-data.json",
    "revision": "43e258ae5adff580ae045183b95ac630"
  },
  {
    "url": "page-data/category/synthetic-greases/page-data.json",
    "revision": "8c25ecf29d418f2b49f43e9d09578666"
  },
  {
    "url": "page-data/category/transmission-oils/page-data.json",
    "revision": "fcdb21ae526e566a26ad6f374b5ae383"
  },
  {
    "url": "page-data/category/turbine-and-circulation-oils/page-data.json",
    "revision": "95b63e13eb86b8ca36f6d993c71117bb"
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
  if (!resources || !(await caches.match(`/preem-digital-catalogue/app-e105a2dd2f6633acba66.js`))) {
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
