# Point Network Docs Site

## Docusaurus Docs

Full details on how to modify this site can be found on the [Docusaurus Documentation Website](https://docusaurus.io/docs/installation).

## Quick Start

* Clone the [this repo](https://github.com/pointnetwork/pointnetwork.github.io).
* Install dependencies under website folder `cd website && npm i`
* Run the site locally from website folder `npm start` which will open the development site in a browser.
* Open an editor and add, edit or remove any of the Markdown files in the [`/website/docs`](./website//docs) directory
* Open an editor and edit the OpenAPI specifications in the  [`/website/openapi`](./website/openapi) directory
* Commit and push the changes. [Github Actions](https://github.com/pointnetwork/pointnetwork.github.io/actions) will take care of the deployment automatically.
* Live site will be updated [here](https://pointnetwork.github.io/) once Github Actions completes the build.

## Editing Docs

Documentation files are stored in the [docs](./website//docs) directory as Markdown files. Simply edit any of these files and save to update the local site.

## Editing OpenAPI Docs

Please refer to the [README](./website/openapi/) in the OpenAPI Docs folder.

## Diagrams using Mermaid

Mermaid diagrams can to be added using React Component style as shown below (or check out any of the markdown docs that [contain Mermaid diagrams](./website//docs/storage.md)).

```
  import Mermaid from '@theme/mermaid';

  <Mermaid chart={`
    graph LR
      id1(Start)-->id2(Stop)
  `}/>
```

To preview Mermaid diagrams in VS Code, I recommend installing the [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) extension. Then you can open a preview window beside the markdown file (using the shortcut `cmd-k v`) which greatly helps when building these diagrams.

You can also use the [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/) if you want to quickly and easily explore all the options available with Mermaid.

The Mermaid diagrams are automatically rendered in Docusaurus so there is no other special action required.

For more information about Mermaid, please visit the [Mermaid Docs](https://mermaid-js.github.io/mermaid/#/)

## Deployment

This site should automatically deploy via [Github Actions](https://github.com/features/actions) so all you need to do is commit your changes and the site will be built and deployed automatically. This includes all docs, all mermaid charts and all OpenAPI specifications.

## Live Site

The live documentation site should be published here: [https://pointnetwork.github.io](https://pointnetwork.github.io).