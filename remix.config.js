import { defineConfig } from "@remix-run/dev";

export default defineConfig({
  appDirectory: "app",
  server: "./server.js",
  serverBuildPath: ".netlify/functions-internal/server.js",
  serverModuleFormat: "esm",
  serverPlatform: "node",
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_singleFetch: true,
    v3_lazyRouteDiscovery: true,
  }
});
