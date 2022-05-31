---
id: build-upgradable-zapps
title: Point Network Upgradable Zapps
sidebar_label: Point Network Upgradable Zapps
slug: ../build-upgradable-zapps
---
 
Welcome to the Upgradable Zapps Developers Guide!
 
## Overview
 
This document outlines developing upgradable Zapps using the Open Zeppelin Proxy Upgrade Pattern.
 
## Example
 
For an example of an existing Upgradable Zapp take a look at [social.point](https://github.com/pointnetwork/social.point).
 
## Steps
 
To ensure that your Zapp follows the Upgradable pattern you need to do the following:
 
1. Familiarize yourself with the Open Zeppelin Smart Contract Proxy Upgrade Pattern [here](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies).
2. In `point.deploy.json` set `upgradable` key to `true` like this:
 
    ```
    {
      "version": 0.1,
      "target": "mynewzapp.point",
      "keyvalue": {},
      "contracts": [
        "MyNewZapp"
      ]    
      "upgradable": true
    }
    ```
 
1. In your Smart Contract, import the required Open Zeppelin Smart Contract Proxy Upgrade Pattern libraries like so:
 
    ```
    import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
    import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
    import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
    ```
 
1. Extend your Smart Contract with the required contracts like so:
 
    ```
    contract MyNewZapp is Initializable, UUPSUpgradeable, OwnableUpgradeable
    ```
 
1. Declare a `initialize` function in your Smart Contract that calls `__Ownable_init()` and `__UUPSUpgradeable_init()` like so:
 
    ```
    function initialize() public initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();
    }
    ```
 
1. Install the dependencies:
 
    ```
    npm i @openzeppelin/contracts
    npm i @openzeppelin/contracts-upgradeable
    ```
 
1. Build and deploy your Zapp as per the instructions outlined [here](./build-zapp-dev-environment-direct-install)
