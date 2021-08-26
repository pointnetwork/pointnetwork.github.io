---
id: build-build-with-point-network
title: Point Network Builders Starter's Guide
sidebar_label: Point Network Builders Starter's Guide
slug: ../build-build-with-point-network
---

Welcome to the builder's section of the Point Network Wiki.

### Develop using the docker compose

If one needs to leverage the Point Network docker-compose and still be able to make changes in the code, they can do so by starting the compose the following way:

```bash
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
```

When started this way the service has all the local folders [bind-mounted](https://docs.docker.com/storage/bind-mounts/) into each Point Network node container. Therefore all the local changes will be available inside the dockerized nodes.

If you make changes to the code while the compose is already running, you can restart the whole service or a particular container like this:

```bash
docker-compose restart storage_provider # to restart a specified container
docker-compose restart # to restart the whole compose
```
**Docker Compose Logs**

To follow the logs of *all* the containers simply run `docker-compose logs -f` in the terminal. If you want to follow the logs of a specific container, hten specify the service name as well like so: `docker-compose logs -f storage_provider` (to follow the logs of `storage_provider`)

**Docker Compose Single Site Deployment**

If you want to deploy a single example site then you can do the following:

* Enter the website owner container like this: `docker exec -it pointnetwork_website_owner /bin/bash`,
* Now inside the container terminal: `cd /app/example/store.z`.
* Run the deploy command: `./point deploy ./example/store.z --datadir $DATADIR -v --contracts`

**Docker Compose and Truffle Console**

Since the `blockchain_node` service is exposed via `http://localhost:7545` its therefore possible to use truffle console without any modification. So you can run `truffle console` and it will connect to the running Ganache blockchain in the Docker `blockchain_node` service.

### Coding style

Following coding style applies:

* Always use semicolons otherwise [dragons may bite you](https://www.freecodecamp.org/news/codebyte-why-are-explicit-semicolons-important-in-javascript-49550bea0b82/)!
* Use 4 spaces as a default indent for all files and set this in your IDE.