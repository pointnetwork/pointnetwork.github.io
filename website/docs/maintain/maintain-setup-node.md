---
id: maintain-setup-node
title: Set up a Node
sidebar_label: Set up a Node
slug: ../maintain-setup-node
---

### Run Point Network using Docker

Point Network Docker setup consists of three Point Network nodes running in a separate containers, a dev blockchain node running a test network (currently the `ganache-cli` is used), and a Point Network contract deployment script running in a dedicated container.

To run Point Network, one should firstly [install `docker`](https://docs.docker.com/get-docker/) and [`docker-compose`](https://docs.docker.com/compose/install/) on their host system. To start the node, run:

```bash
docker-compose up -d
```

We will add more details as we get closer to Point Network testnet launch. Stay tuned!