# Point Network Docs Site

## Docusaurus Docs

Full details on how to modify this site can be found on the [Docusaurus Documentation Website](https://docusaurus.io/docs/installation).

## Getting Started

To run this site locally, clone this repo and run:

```
cd website
npm start
```

## Editing documentation

Documentation files are stored in the [docs](./docs) directory as Markdown files. Simply edit any of these files and save to update the local site.

## Diagrams using Mermaid

Mermaid diagrams need to be added using a *markdown fence* using the identifier `mermaid` as shown below (or check out any of the markdown docs that [contain Mermaid diagrams](./docs/storage.md)).

```
  ```mermaid
  # Valid mermaid markdown
    ```
```

To preview Mermaid diagrams in VS Code, I recommend installing the [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) extension. Then you can open a preview window beside the markdown file (using the shortcut `cmd-k v`) which greatly helps when building these diagrams.

The Mermaid diagrams are automatically rendered in Docusaurus so there is no other special action required.

For the curious, the diagrams are rendered using the `mermaidjs` library that is loaded into the Docusaurus instance via the `scripts` tag in the [./website/siteConfig.js](./website/siteConfig.js) file and registered as a new markdown plugin.

For more information about Mermaid, please visit the [Mermaid Docs](https://mermaid-js.github.io/mermaid/#/)

## Deployment

This site should automatically deploy via [Github Actions](https://github.com/features/actions). If it does not then you can try deploying the site manually as follows:

To deploy, run the following command (replacing `<GIT_USER>` with your Point Network team Git username). For details, please refer to the [Docusaurus Deployment Docs](https://docusaurus.io/docs/en/publishing#deploying-to-github-pages)

```
cd website

GIT_USER=<GIT_USER> \
CURRENT_BRANCH=main \
USE_SSH=true \
npm run publish-gh-pages
```

## Live Site

The live documentation site should be published here: [https://pointnetwork.github.io](https://pointnetwork.github.io).