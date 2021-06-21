# Point Network Docs Site

## Docusaurus Docs

Full details on how to modify this site can be found on the [Docusaurus Documentation Website](https://docusaurus.io/docs/installation).

## Swagger Docs

Please refer to the [README](./swagger/) in the Swagger folder.

## Quick Start

* Clone the [this repo](https://github.com/pointnetwork/pointnetwork.github.io).
* Run the site locally `cd website && npm start`
* Open an editor and add, edit or remove any of the Markdown files in the [`/docs`](./docs) directory
* Commit and push the changes. [Github Actions](https://github.com/pointnetwork/pointnetwork.github.io/actions) will take care of the deployment automatically.
* Live site will be updated [here](https://pointnetwork.github.io/docs/welcome.html) once Github Actions completes the build.

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

This site should automatically deploy via [Github Actions](https://github.com/features/actions) so all you need to do is commit your changes and the site will be built and deployed automatically.

## Live Site

The live documentation site should be published here: [https://pointnetwork.github.io](https://pointnetwork.github.io).