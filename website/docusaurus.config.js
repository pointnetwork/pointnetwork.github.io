const path = require('path');
const isPub = process.env.PUBLISHING === "true";

module.exports = {
  title: "Point Network",
  tagline: "Web 3.0 Implementation",
  url: "https://pointnetwork.github.io",
  baseUrl: "/",
  organizationName: "pointnetwork",
  trailingSlash: false,
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://unpkg.com/aos@next/dist/aos.js",
    "../js/custom.js"
  ],
  stylesheets: [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://unpkg.com/aos@next/dist/aos.css",
  ],
  projectName: "docs",
  favicon: "img/favicon.ico",
  customFields: {
    markdownPlugins: [
      null
    ],
    repoUrl: "https://github.com/pointnetwork"
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [
            require.resolve("./static/css/custom.css"),
            require.resolve("./static/css/socicon.css"),
          ],
        },
      }
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi/pointnetwork.yml',
            routePath: '/api/',
          },
        ]
      }
    ],
  ],
  themeConfig: {
    // can't allow dark theme - currently its broken :(
    colorMode: {
      disableSwitch: true,
      defaultMode: 'light',
    },
    navbar: {
      title: "Point Network",
      logo: {
        alt: 'Point Network',
        src: "img/pointlogo.png",
        href: `${isPub? 'http://pointnetwork.github.io/' : '/'}` ,
        target: '_self'
      },
      items: [
        {
          to: "docs/getting-started",
          label: "Getting Started",
          position: "left"
        },
        {
          to: "docs/learn-index",
          label: "Learn",
          position: "left"
        },
        {
          to: "docs/build-index",
          label: "Build",
          position: "left"
        },
        {
          to: "docs/maintain-index",
          label: "Maintain",
          position: "left"
        },
        {
          to: "docs/use-index",
          label: "Use",
          position: "left"
        },
        {
          to: "api/",
          label: "API",
          position: "left"
        },
        {
          to: "docs/contributing",
          label: "Contribute",
          position: "right",
        },
      ]
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Point Network Limited`,
      logo: {
        src: "img/pointlogo.png",
        srcDark: 'img/pointlogowhite.png',
      },
    }
  }
}