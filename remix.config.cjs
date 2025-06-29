/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "vercel",
  server: "./api/index.ts",
  serverBuildPath: "build/server/index.js",
  ignoredRouteFiles: ["**/.*"]
};
