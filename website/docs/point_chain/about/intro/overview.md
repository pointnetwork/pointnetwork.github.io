---
id: overview
title: Overview
sidebar_label: Overview
slug: ../overview
---

# High-level Overview

:::note
Learn about Point Chain and its primary features.
:::
## What is Point Chain

Point Chain is a scalable, high-throughput Proof-of-Stake blockchain that is fully compatible and
interoperable with Ethereum. It's built using the [Cosmos SDK](https://github.com/cosmos/cosmos-sdk/) which runs on top of [Tendermint Core](https://github.com/tendermint/tendermint) consensus engine.

Point Chain is mainly used to support [Point Network](https://pointnetwork.io/) the first ever full web3 implementation.

Point Chain allows for running vanilla Ethereum as a [Cosmos](https://cosmos.network/)
application-specific blockchain. This allows developers to have all the desired features of
Ethereum, while at the same time, benefit from Tendermint’s PoS implementation. Also, because it is
built on top of the Cosmos SDK, it will be able to exchange value with the rest of the Cosmos
Ecosystem through the Inter Blockchain Communication Protocol (IBC).

### Features

Here’s a glance at some of the key features of Point Chain:

* Web3 and EVM compatibility
* High throughput via [Tendermint Core](https://github.com/tendermint/tendermint)
* Horizontal scalability via [IBC](https://cosmos.network/ibc)
* Fast transaction finality

Point Chain enables these key features by:

* Being the blockchain layer for [Point Network](https://pointnetwork.io/)

* Implementing Tendermint Core's Application Blockchain Interface ([ABCI](https://docs.tendermint.com/master/spec/abci/)) to manage the blockchain
* Leveraging [modules](https://docs.cosmos.network/main/building-modules/intro.html) and other mechanisms implemented by the [Cosmos SDK](https://docs.cosmos.network/).
* Utilizing [`geth`](https://github.com/ethereum/go-ethereum) as a library to promote code reuse and improve maintainability.
* Exposing a fully compatible Web3 JSON-RPC layer for interacting with existing Ethereum clients and tooling ([Metamask](./../../users/wallets/metamask.md)).

The sum of these features allows developers to leverage existing Ethereum ecosystem tooling and
software to seamlessly deploy smart contracts which interact with the rest of the Cosmos
[ecosystem](https://cosmos.network/ecosystem)!

## Quick Facts Table

| Property               | Value                                                      |
| ---------------------- | ---------------------------------------------------------- |
| Point Chain Testnet          | 10731                                                |
| Point Chain Mainnet          | 10687                                                |
| Blockchain Explorer(s) | [List of Block Explorers](./../../developers/explorers.md) |
| Block Time             | `~2s`                                                      |
