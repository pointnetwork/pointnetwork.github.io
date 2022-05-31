---
id: build-start-point-node-default
title: Start Point Node connecting to YNet
sidebar_label: Start Point Node in YNet
slug: ../build-start-point-node-default
---

To start a Point Node connected to Ynet you need to start the local node like so:

```
npm i
npm run build
npm run start
```

This starts the node in the `default` config mode using the [default.yaml](https://github.com/pointnetwork/pointnetwork/blob/develop/config/default.yaml) file for the configuration. This will result in the node connecting to Ynet.