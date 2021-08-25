const path = require('path');

module.exports = {
  title: "Point Network",
  tagline: "Web 3.0 Implementation",
  url: "https://pointnetwork.github.io",
  baseUrl: "/",
  organizationName: "pointnetwork",
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.js",
    "https://unpkg.com/aos@next/dist/aos.js",
    {
      src: "https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js",
      onload: "addBackToTop()",
      defer: true,
    },
    {
      src: "https://apisa.web3.foundation/latest.js",
      async: true,
      defer: true,
    },
    "../js/custom.js"
  ],
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
    "https://fonts.googleapis.com/css?family=Work+Sans:400,700&display=swap",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    "https://unpkg.com/aos@next/dist/aos.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
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
    navbar: {
      title: "Point Network",
      logo: {
        alt: 'Point Network',
        src: "img/pointlogo.png",
        srcDark: 'img/pointlogowhite.png',
        href: '/',
        target: '_self'
      },
      items: [
        {
          to: "docs/getting-started",
          label: "Getting Started",
          position: "left"
        },
        {
          to: "docs/learn-architecture",
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
          to: "api/",
          label: "API",
          position: "left"
        }
      ]
    },
    footer: {
      links: [],
      copyright: "Copyright © 2021 Point Network Limited",
      logo: {
        src: "img/pointlogo.png",
        srcDark: 'img/pointlogowhite.png',
      },
    }
  }
}