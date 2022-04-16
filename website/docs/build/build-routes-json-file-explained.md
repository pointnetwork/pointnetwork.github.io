---
id: build-routes-json-file-explained
title: Point Routes Json File Explained
sidebar_label: Point Routes Json File Explained
slug: ../build-routes-json-file-explained
---

This document outlines the Routes Json file which is a required file for all Zapps.

## Overview

The routes json file contains the mapping of the running Zapp path to the specific static page to be rendered in the Point Browser. It essentially tells the Point Node Proxy which page to fetch and render for each request based on the path of the url.

## Example

A basic example of a `routes.json` file as follows:

```
{
    "/": "index.html"
}
```

This example is all you need to provide for most Zapps. This is because most Zapps are built using React JS where the app is initialized inside the Zapps index file.

Checkout the Point Network [Example Zapps](https://github.com/pointnetwork/zapps) repo for more examples.