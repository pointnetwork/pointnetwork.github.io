module.exports={
  "title": "Point Network",
  "tagline": "Web 3.0 Implementation",
  "url": "https://pointnetwork.github.io",
  "baseUrl": "/",
  "organizationName": "pointnetwork",
  "projectName": "docs",
  "scripts": [
    "https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.9.0/mermaid.min.js",
    "/init.js"
  ],
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
          "homePageId": "welcome",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Point Network",
      "logo": {
        "src": "img/favicon.ico"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Getting Started",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Point Network Limited",
      "logo": {
        "src": "img/favicon.ico"
      }
    }
  }
}