/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildTarget: "vercel",
  server: "./api/index.ts",
  serverBuildPath: "build/server/index.js",
  publicPath: "/build/",
  ignoredRouteFiles: ["**/.*"]
};
