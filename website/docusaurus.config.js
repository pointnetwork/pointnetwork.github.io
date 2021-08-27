const path = require('path');

module.exports = {
  title: "Point Network",
  tagline: "Web 3.0 Implementation",
  url: "https://pointnetwork.github.io",
  baseUrl: "/",
  organizationName: "pointnetwork",
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
        srcDark: 'img/pointlogowhite.png'
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
        }
      ]
    },
    footer: {
      links: [
        {
          title: 'General',
          items: [
            {
              label: 'About',
              href: 'https://pointnetwork.io/page/about',
            },
            {
              label: 'FAQ',
              href: 'https://pointnetwork.io/',
            },
            {
              label: 'Contact',
              href: 'https://pointnetwork.io/page/social',
            },
            {
              label: 'Careers',
              href: 'https://pointnetwork.io/page/support',
            },
            {
              label: 'Build',
              href: 'https://pointnetwork.io/page/build',
            },
          ],
        },
        {
          title: 'Technology',
          items: [
            {
              label: 'Technology',
              href: 'https://pointnetwork.io/',
            },
            {
              label: 'Whitepaper',
              href: 'https://docs.google.com/document/d/16bcqsnezTKnPyYI7g32gEkrmJE35z8U4Zj0lUUXXQDY/edit',
            },
            {
              label: 'Lightpaper',
              href: 'https://pointnetwork.io/files/PointNetworkBrochure-c003.pdf',
            },
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'Documentation',
              href: 'https://pointnetwork.github.io/docs/',
            },
            {
              label: 'Blog',
              href: 'https://pointnetwork.io/page/blog',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pointnetwork',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCWZkr5qbQhmMtD4Zt374-FA',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/pointnetworkchat',
            },
            {
              label: 'Github',
              href: 'https://github.com/pointnetwork',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/pointnetwork/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Point Network Limited`,
      logo: {
        src: "img/pointlogo.png",
        srcDark: 'img/pointlogowhite.png',
      },
    }
  }
}