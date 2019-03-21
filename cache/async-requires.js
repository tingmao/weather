// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/cabox/workspace/hello-world/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("/home/cabox/workspace/hello-world/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-jsx": () => import("/home/cabox/workspace/hello-world/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-about-css-modules-js": () => import("/home/cabox/workspace/hello-world/src/pages/about-css-modules.js" /* webpackChunkName: "component---src-pages-about-css-modules-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/cabox/workspace/hello-world/.cache/data.json")

