# Point Network Docs Site

## Docusaurus Docs

Full details on how to modify this site can be found on the [Docusaurus Documentation Website](https://docusaurus.io/docs/en/installation).

## Getting Started

To run this site locally, clone this repo and run:

```
cd website
npm start
```

## Editing documentation

Documentation files are stored in the [docs](./docs) directory as Markdown files. Simply edit any of these files and save to update the local site.

## Deployment

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