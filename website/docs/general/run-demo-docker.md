---
id: run-demo-docker
title: Run Demo in Docker
sidebar_label: Run Demo in Docker
slug: ../run-demo-docker
---

### Run demo in docker compose

The demo setup consists of three Point Network nodes running in a separate containers, a dev blockchain node running a test network (currently the `ganache-cli` is used), and a Point Network contract deployment script running in a dedicated container.

To run the demo, one should firstly [install `docker`](https://docs.docker.com/get-docker/) and [`docker-compose`](https://docs.docker.com/compose/install/) on their host system. To start the demo, run:

```bash
docker-compose up -d
```

Once the compose is up, the Point Network contracts deployment will start. Unless the contracts get deployed, the Point Network nodes waits for the contract addresses to appear. As soon as the addresses obtained the nodes get started. At this point you may deploy the demo websites via the following command:

```bash
./scripts/deploy-sites-docker.sh
```

Right after the sites are uploaded, one may start the **Point Browser** using [web-ext](https://github.com/pointnetwork/pointsdk#using-web-ext) and configure it to use one of the above listed `ZProxy` ports. The sites will be available at their regular addresses.

### Container names and Ports

Each Point Network node assigned to its own role in the demo. The node roles are:

* Storage Provider
  * Service Name: `storage_provider`
  * Container Name: `pointnetwork_storage_provider`
  * ZProxy port `65500`
  * API port: `24680`
* Website Owner
  * Service Name: `website_owner`
  * Container Name: `pointnetwork_website_owner`
  * ZProxy port `65501`
  * API port: `24681`
* Website Visitor
  * Service Name: `website_visitor`
  * Container Name: `pointnetwork_website_visitor`
  * ZProxy port `65502`
  * API port: `24682`