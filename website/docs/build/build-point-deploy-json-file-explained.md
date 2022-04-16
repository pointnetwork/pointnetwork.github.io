---
id: build-point-deploy-json-file-explained
title: Point Deploy Json File Explained
sidebar_label: Point Deploy Json File Explained
slug: ../build-point-deploy-json-file-explained
---
 
This document outlines the options available to you as a Zapp developer when using the point.deploy.json deployment manifest file.
 
## Overview
 
The `point.deploy.json` deployment manifest file is used as a set of config based instructions for the Point Deployer. It outlines:
 
1. The domain of the Zapp.
1. The Smart Contract dependencies to compile and deploy.
1. Any keyvalues to set in the Smart Contract during the initial deployment.
1. A boolean to indicate if the Smart Contracts are [upgradable](./build-upgradable-zapps).
1. The folder where the build static site will be rendered from
 
 
A very basic minimal `point.deploy.json` looks like this:
 
```
{
  "version": 0.1,
  "target": "hello.point",
  "keyvalue": {},
  "contracts": [
    "Hello"
  ]    
  "upgradable": true,
  "rootDir": "public"
}
```
 
Definitions:
 
* `version`: the version of the Point Deploy Manifest
* `target`: the name of the Zapp and target endpoint of the Zapp for deployment
* `keyvalue`: a set of key value pairs used to call functions in the Smart Contract immediately after deployment. See [here](https://github.com/pointnetwork/zapps/blob/main/store.point/point.deploy.json#L4) for an example of this.
* `contracts`: a list of Smart Contracts to be compiled and deployed along with the Zapp. Any contract names listed here must have a corresponding Solidity Smart Contract file located in the `Contracts` directory of the Zapp
* `upgradable`: indicates if the Smart Contract is built using the supported Open Zeppelin Upgradable Contract pattern. See [here](https://github.com/pointnetwork/social.point/blob/main/contracts/PointSocial.sol#L6) for an example of this.
* `rootDir`: the folder where the static website will be built and served from (default is `public`).
