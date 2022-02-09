importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
);
const placeholderImageURL = "/src/images/barrel.png"; // precache this in __WB_MANIFEST file
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

workbox.routing.registerRoute(
  /\.(?:webp|png|jpg|jpeg|svg)$/,
  async ({ url, event, params }) => {
    const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();

    try {
      const response =
        (await caches.match(event.request)) ||
        (await fetch(url, { method: "GET" }));
      if (!response || response.status === 404) {
        throw new Error(response.status);
      } else {
        return await staleWhileRevalidate.handle({ event });
      }
    } catch (error) {
      console.warn(
        `\nServiceWorker: Image [${url.href}] was not found either in the network or the cache. Responding with placeholder image instead.\n`
      );
      // * get placeholder image from cache || get placeholder image from network
      return (
        (await caches.match(placeholderImageURL)) ||
        (await fetch(placeholderImageURL, { method: "GET" }))
      );
    }
  }
);
