---
title: Installation
sidebar_label: Installation
---

# Installation

Build and install the Point Chain binaries from source or using Docker.

## Pre-requisites

- [Install Go 1.18.5+](https://golang.org/dl/)
- [Install jq](https://stedolan.github.io/jq/download/)

## Install Go

:::warning
Point Chain is built using [Go](https://golang.org/dl/) version `1.18+`
:::

```bash
go version
```

:::tip
If the `pointd: command not found` error message is returned, confirm that your [`GOPATH`](https://golang.org/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

:::

### GitHub

Clone and build Point Chain using `git`:

```bash
git clone https://github.com/pointnetwork/point-chain.git
cd point-chain
make install
```

Check that the `pointd` binaries have been successfully installed:

```bash
pointd version
```
