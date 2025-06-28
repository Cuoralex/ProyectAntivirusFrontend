// netlify/functions/server.js
var server_default = {
  serverBuildDirectory: "build",
  server: "./netlify/functions/server.js",
  // ← muy importante
  ignoredRouteFiles: ["**/.*"],
  future: {
    v3_fetcherPersist: !0,
    v3_relativeSplatPath: !0,
    v3_throwAbortReason: !0,
    v3_singleFetch: !0,
    v3_lazyRouteDiscovery: !0
  }
};
export {
  server_default as default
};
