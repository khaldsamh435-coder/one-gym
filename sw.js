
const CACHE_NAME = "one-gym-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
});
