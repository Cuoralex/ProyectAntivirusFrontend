export default ({
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverDependenciesToBundle: ["swiper"],
  publicPath: "/build/",
  serverPlatform: "node",
  serverBuildPath: "build/server/index.js",
  serverModuleFormat: "esm",
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_singleFetch: true,
    v3_lazyRouteDiscovery: true,
  }
});
