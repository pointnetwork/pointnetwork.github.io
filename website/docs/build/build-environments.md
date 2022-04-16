---
id: build-environments
title: Point Network Environments
sidebar_label: Point Network Environments
slug: ../build-environments
---

There are several environments in which Point Network can be run. These are:

* **YNET** this is the default live environment for the Alpha version of Point Network and can be installed by following the [Point Network Alpha Testing Guide](https://github.com/pointnetwork/pointnetwork-dashboard/blob/main/ALPHA.md)
* **e2e** this is the end to end environment which is used for simulating the YNET environment on a single local developer machine. It's started using the e2e Docker Compose file as defined [here](https://github.com/pointnetwork/pointnetwork/blob/develop/docker-compose.e2e.yaml). To start the `e2e` environment in docker simply run `docker compose -f docker-compose.e2e.yaml up -d` from your terminal.
* **zappdev** this is the development environment for building, testing, maintaining and deploying Zapps (applications that run on Point Network). To get started with this environment please follow the [Point Network Builders Starter's Guide](./build-zapp-dev-environment-direct-install.md)

### Differences between environments

You might be wondering what the differences between these environments are - particularly between **e2e** and **zappdev**. Below are the differences highlighted:

### e2e Environment

This is used as a complete isolated near to live (YNET) environment as possible running on an isolated local developer machine. It includes all the components that are used in YNET running as local docker containers. It is useful for testing deployments and running Zapps locally before deploying to the YNET environment. It also serves as a development platform for integrating and testing new services when these are required. It currently uses Ganache as a local blockchain.

### zappdev Environment

This is used for for building, testing, maintaining and deploying Zapps and is a lightweight version of the e2e environment that is using [arlocal](https://github.com/textury/arlocal) for the storage layer rather than a full Arweave node. It also loads all zapps directly from the file system which allows for more rapid development - just change the code in the zapp and its immediately available (with the exception of smart contracts which need to be redeployed if changed). Moreover the zappdev environment uses Ganache and has a second point node instance running ('website visitor') for allowing zapp developers to test interacting in Zapps using different accounts.
