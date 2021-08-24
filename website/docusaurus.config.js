const path = require('path');

module.exports = {
  "title": "Point Network",
  "tagline": "Web 3.0 Implementation",
  "url": "https://pointnetwork.github.io",
  "baseUrl": "/",
  "organizationName": "pointnetwork",
  "projectName": "docs",
  "favicon": "img/favicon.ico",
  "customFields": {
    "markdownPlugins": [
      null
    ],
    "repoUrl": "https://github.com/pointnetwork"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "docs",
          routeBasePath: "docs",
          "sidebarPath": require.resolve("./sidebars.js"),
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
        "specs": [
          {
            "spec": 'openapi/pointnetwork.yml',
            "routePath": '/api/',
          },
        ]
      }
    ],
  ],
  "themeConfig": {
    "navbar": {
      "title": "Point Network",
      "logo": {
        "alt": 'Point Network',
        "src": "img/pointlogo.png",
        "srcDark": 'img/pointlogowhite.png',
        "href": '/',
        "target": '_self'
      },
      "items": [
        {
          "to": "docs/getting-started",
          "label": "Getting Started",
          "position": "left"
        },
        {
          "to": "docs/learn-architecture",
          "label": "Learn",
          "position": "left"
        },
        {
          "to": "docs/build-index",
          "label": "Build",
          "position": "left"
        },
        {
          "to": "docs/maintain-index",
          "label": "Maintain",
          "position": "left"
        },
        {
          "to": "api/",
          "label": "API",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Point Network Limited",
      "logo": {
        "src": "img/pointlogo.png",
        "srcDark": 'img/pointlogowhite.png',
      },
    }
  }
}