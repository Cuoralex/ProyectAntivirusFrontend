/** @type {import('@remix-run/dev').AppConfig} */
export default {
  future: {
    v2_routeConvention: true
  },
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'netlify/functions/server/build',
  server: './netlify/server.js',
  serverModuleFormat: 'esm',
};
