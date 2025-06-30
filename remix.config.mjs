/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildTarget: "node-cjs",
  server: "./api/index.ts",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  ignoredRouteFiles: ["**/.*"]
};
