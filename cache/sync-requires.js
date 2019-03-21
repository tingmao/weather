const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/cabox/workspace/hello-world/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/cabox/workspace/hello-world/src/pages/about.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/cabox/workspace/hello-world/src/pages/index.jsx"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/home/cabox/workspace/hello-world/src/pages/about-css-modules.js")))
}

