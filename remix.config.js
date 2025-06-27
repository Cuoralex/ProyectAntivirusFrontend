/** @type {import('@remix-run/dev').AppConfig} */
export default {
  future: {
    v2_meta: true,
    v2_routeConvention: true,
  },
  serverBuildTarget: "netlify",
  server: "./server.ts",
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "netlify/functions/server.js",
  devServerPort: 8002,
};
