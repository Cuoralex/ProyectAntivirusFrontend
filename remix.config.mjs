// remix.config.mjs
export default {
  appDirectory: "app",
  server: "./netlify/functions/server.js",
  serverBuildPath: "netlify/functions/server.js",
  serverModuleFormat: "esm",
  serverPlatform: "node",
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_singleFetch: true,
    v3_lazyRouteDiscovery: true
  }
};
