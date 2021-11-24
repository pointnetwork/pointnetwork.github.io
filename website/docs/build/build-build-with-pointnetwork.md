---
id: build-build-with-point-network
title: Point Network Builders Starter's Guide
sidebar_label: Point Network Builders Starter's Guide
slug: ../build-build-with-point-network
---

Welcome to the builder's section of the Point Network Wiki.

### Develop using docker compose

First add some alias and functions to your local bash environment (only needs be done once). So in your `~/.bash_profile` file add:

```
alias point-e2e="docker-compose --env-file .env.e2e -f docker-compose.e2e.yaml -f docker-compose.dev.yaml "
alias point-browser-docker-1="web-ext run --firefox-profile=storage_provider_docker --keep-profile-changes --source-dir dist/prod --url https://point/"
alias point-browser-docker-2="web-ext run --firefox-profile=website_owner_docker --keep-profile-changes --source-dir dist/prod --url https://point/"
alias point-browser-docker-3="web-ext run --firefox-profile=website_visitor_docker --keep-profile-changes --source-dir dist/prod --url https://point/"

dexec() { docker exec -it "$1" bash; }
dclean() { docker stop $(docker ps -a -q); docker rm -f $(docker ps -a -q); docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}"); docker system prune -f; docker system prune --volumes -f; }
```

Now update your terminal session  with the changes made to bash_profile earler: `source ~/.bash_profile`.

Clone the pointnetwork repo, cd into and instll deps like so:

```
git clone git@github.com:pointnetwork/pointnetwork.git
cd pointnetwork
npm i
```

Next, copy the *.env.e2e.example* file to *.env.e2e*:

```
cp .env.e2e.example .env.e2e
```

and set `DEV_ZAPP_HOST` envrionment variable in .env.e2e with the zapp domain that you are working with (e.g. pointsocial.z it would be set like this:

```
DEV_ZAPP_HOST=pointsocial.z
```

With the above out of the way, run the following:

NOTE: Since PointSocial Zapp uses React JS we need to make sure that the site is built locally first. For sites that are build using Twig (like twitter.z, blog.z etc) you can skip this step as they do not require building locally.

```
cd example/pointsocial.z
npm i
npm run build
```

In one terminal start all the services and watch the `website_owner` logs (NOTE: run these commands *from the root* of the cloned pointnetwork repo!)

```
dclean
point-e2e up -d
point-e2e logs -f website_owner
```

In another terminal (to connect to the `website_owner` node and deploy the site )

```
dexec pointnetwork_website_owner
./scripts/deploy-sites.sh pointsocial.z --contracts
```

The site should deploy sucessefully after a few minutes.

### Open the deployed site in Point Browser

First create three profiles in Firefox to be able to test connecting to the different nodes quickly and easily. I suggest creating 3 profiles matching the names of the profiles set in your bash alias as mentioned above (these profiles only need to be created once):

* Profile `storage_provider_docker` : set proxy to 'localhost:65500'
* Profile `website_owner_docker` : set proxy to 'localhost:65501'
* Profile `website_visitor_docker` : set proxy to 'localhost:65502'

Now clone the PointSDK repo, cd into it and run the browser alias command like so:

```
git clone git@github.com:pointnetwork/pointsdk.git
cd pointsdk
point-browser-docker-2
```

This should open the Point Browser with the `website_owner_docker` profile already configured to connect to the `website_owner` node and open [https://point](https://point). Now you can navigate to [https://point/identities](https://point/identities) and you should see the deployed pointsocial.z zapp listed, You can open it from there.

### Open the deployed site in a second Point Browser

To test out interacting between different Point Network identities we can open another Point Browser, for example the `website_visitor` like so (from the root of the pointsdk repo):

```
point-browser-docker-3
```

If you have added the above command as an alias and you have setup the Firefox profile you should see a new browser open that is connected to the `website_visitor` node. You can now post messages between each other on pointsocial!

### Next steps

Try to deploy the `store.z` app. To do so its just a matter of:

1. Install the deps in store.z `cd example/store.z && npm i`
1. Build the store.z site `cd example/store.z && npm run build`
1. Updating the 'DEV_ZAPP_HOST' environment variable in *.env.e2e* to `DEV_ZAPP_HOST=store.z`
1. Tear down all the services (from the project root) `point-e2e down`
1. Bring up all the services (from the project root) `point-e2e up -d`
1. Connect back into the `website_owner` running container: `dexec pointnetwork_website_owner`
1. Deploy store.z: `./scripts/deploy-sites.sh store.z --contracts`
1. Open a Point Browser instance to [https://store.z](https://store.z)

**Docker Compose Logs**

To follow the logs of *all* the containers simply run `point-e2e logs -f` in the terminal. If you want to follow the logs of a specific container, hten specify the service name as well like so: `point-e2e logs -f storage_provider` (to follow the logs of `storage_provider`)

**Docker Compose and Truffle Console**

Since the `blockchain_node` service is exposed via `http://localhost:7545` its therefore possible to use truffle console without any modification.

Therefore, *from the root* of the cloned pointnetwork repo, you can run:

 ```
 cd truffle
 truffle console
 ```

 The above will connect to the running Ganache blockchain in the Docker `blockchain_node` service.

 **Docker complete database reset**

 There is a simple command in the alias list above that will tear down all services, remove orphen containers and remove all volumes. *Only run this command if you are ok with it clearing out your Docker volumes etc*. Check the alias for its exact functionality. The command run is:

 ```
 dclean()
 ```

### Coding style

Following coding style applies:

* Always use semicolons otherwise [dragons may bite you](https://www.freecodecamp.org/news/codebyte-why-are-explicit-semicolons-important-in-javascript-49550bea0b82/)!
* Use 4 spaces as a default indent for all files and set this in your IDE.