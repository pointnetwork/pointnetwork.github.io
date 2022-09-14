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
    "https://unpkg.com/aos@next/dist/aos.js",
    "../js/custom.js"
  ],
  stylesheets: [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    "https://fonts.googleapis.com/css?family=Work+Sans:400,700&display=swap",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://unpkg.com/aos@next/dist/aos.css",
  ],
  projectName: "docs",
  favicon: "img/favicon.png",
  customFields: {
    markdownPlugins: [
      null
    ],
    repoUrl: "https://github.com/pointnetwork"
  },
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          editUrl: ({ docPath }) =>
            `https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/${docPath}`,
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
    algolia: {
      // Note this is a 'search only' API key https://www.algolia.com/doc/guides/security/api-keys/#search-only-api-key
      apiKey: '879987fdceac8b907f6dc7384e234e77',
      indexName: 'pointnetwork'
    },
    navbar: {
      title: "Point Network",
      logo: {
        alt: 'Point Network',
        src: "img/point-logo.svg",
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
          to: "docs/use-index",
          label: "Use",
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
          to: "api/",
          label: "API",
          position: "left"
        },
        {
          to: "docs/point_chain/about/overview",
          label: "Point Chain",
          position: "left"
        },
        {
          type: "search",
          position: "right",
        },
        {
          to: "docs/contributing",
          label: "Contribute",
          position: "right",
        }
      ]
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Point Network Limited`,
      logo: {
        src: "img/point-logo.svg",
        srcDark: 'img/point-logo-white.svg',
      },
    }
  }
}