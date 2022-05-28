---
id: build-import-data-from-live-dapps-into-dev
title: Import Data from Live dApps in to Development Environment
sidebar_label: Import Data from Live dApps in to Dev
slug: ../build-import-data-from-live-dapps-into-dev
---

Sometimes during development it might be useful to load data that is from the deployed dApp on the live network to test out how the application behaves with real data or to debug an issue with the deployment.

### Import Point Social Data from YNET into Dev Environment

First download posts json file from the live contract in YNET. You need to copy the PointSocial contract into your Hardhat folder and compile it and then run the `pointsocial-importer` task to download the posts from YNet. Below shows you how to do that:

```
cd hardhat
cp ../../social.point/contracts/PointSocial.sol contracts/.
npx hardhat compile
npx hardhat pointsocial-importer download 0x1574E97F7a60c4eE518f6d7c0Fa701eff8Ab58b3 --network ynet
```

This should download a timestamped data file into `resources/migrations/pointsocial-TIMESTAMP.json` (TIMESTAMP will be the current timestamp when you downloaded the file).

Next, start two Point Nodes - one connected to YNET and one connected to `devlocal`. Deploy a copy of Point Social to devlocal - initially this will not have any data or posts of course!

Now you can import the posts into your local dev envionment. Run the `pointsocial-importer` script below replacing the `POINT_SOCIAL_CONTRACT_ADDR` with the devlocal contract address and the `TIMESTAMP` with the timestamp Point Social json file that contains all the posts from Ynet:

```
npx hardhat pointsocial-importer upload POINT_SOCIAL_CONTRACT_ADDR --migration-file ../resources/migrations/pointsocial-TIMESTAMP.json --from-port 8666 --to-port 65501 --network development
```

After running this you should have a copy of all the data that is in Point Social Ynet running in your local environment. 

If you only want to load a subset of the data then you can modifiy the json file that is downloaded in the first step and manually remove posts.