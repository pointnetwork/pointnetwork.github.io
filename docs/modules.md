---
id: modules
title: Modules
---

# Point Network Modules

Below is a list of modules that are used for the Point Network Node prototype implementation.

## API

### Type

REST API Module

### Functionality

Used as a 1 to 1 endpoint for a Point Network client to communicate with a single node. In the prototype the available routes are a ping route for checking the API is up and running and a deploy route that is for deployment of ZWeb website content templates.

In the prototype each demo node has this API running on different ports as follows:

* **Demo 1**: Port 2468 (http://localhost:2468/ping)
* **Demo 2**: Port 2469 (http://localhost:2469/ping)
* **Demo 3**: Port 24469 (http://localhost:24469/ping)

### Input Sources

* Console Module
* Point CLI (which calls the API Module through a Console Module wrapper)

### Output Destinations

* JSON Response Payloads specific to each request returned to caller

### Libraries

The prototype uses [Fastify JS](https://www.fastify.io/).

### Modifications

Fastify is a great choice for the Prototype. It's similar to most API based frameworks in the actual functionality and configuration / api that it provides as a framework. Equivalents would be that of [Express JS](https://expressjs.com/) or [Hapi](https://hapi.dev/).

There is no obvious reason or benefit at this point to change from using Fastify JS.

## Client ZProxy

### Type

ZWeb Proxy Server

### Functionality

Provides ZDNS lookups for ZWeb domain names (.z) and applies the appropriate routing based on loading the routes, loading a file, sending a contract or key/value append.

When the request enters the ZProxy server with a ZWeb domain (ending in .z) the route file for that domain is loaded via a lookup function getZRouteIdFromDomain. This function looks up the ZRouteId from the Identity Smart Contract which is then used to load the routes.json file from the storage layer using that id.

In the prototype each demo node has the ZProxy server running on different ports as follows:

* **Demo 1**: Port 8666 (http://localhost:8666/)
* **Demo 2**: Port 65500 (http://localhost:65500/)
* **Demo 3**: Port 65501 (http://localhost:65501/)

### Input Sources

* Point Network Browser HTTP requests to proxy such that .z domains will be routed to the ZProxy endpoint. This makes the *host* of the .z domain the Point Network Identity that is used. So *example.z* will have the identity lookup of  ‘example’.

### Output Destinations

* The (sanitized) rendered HTML.

### Libraries

The module uses the Node http package for request / response. The *sanitize-html* library is also used. Sanitizing is an option (for the demo). There is a config (sanitizing-config.js) which defines the allowed tags, attributes etc.

### Modifications

It might be suitable to use the Fastify JS library as the API module does.s

## Client Storage

### Type

Storage Layer Module

### Functionality

Provides uploading, chunking, encrypting, storing and caching of files. Mostly for the demo these are files used for ZWeb sites.

### Input Sources

* Point CLI deploy command

### Output Destinations

* Once uploaded successfully a JSON response *{ status: 'success' }* is returned.
* Stored file chunks are saved in a local [LevelDB](https://github.com/google/leveldb) via the DB Module

### Libraries

Makes indirect use (via the DB Module) of [LevelJS](https://github.com/Level/level).

### Modifications

Code could be broken down into various sub modules for maintainability.

## Client Deployer

### Type

ZWeb Deployment

### Functionality

Uploads templates, parses each template for sub templates recursively, deploys the ZWeb Smart Contract (if any) and updates the ZDNS.

### Input Sources

* Via the Point Network CLI deploy command

### Output Destinations

* Lots of output relating to the chunking of files as well as updates to the blockchain, transaction receipts and so on.

### Libraries

Truffle for deployment and interaction of Smart Contracts on the blockchain.

### Modifications

Maybe ways to simplify, use existing parsing libraries, avoid parsing html using regex, parallelization of parsing and so on.

## Client Renderer

### Type

ZHTML rendering Module

### Functionality

Renders ZHTML templates into HTML output for returning to the browser.

### Input Sources

* The ZHTML template

### Output Destinations

* HTML content

### Libraries

[Twig JS](https://github.com/twigjs/twig.js/)

### Modifications

None at the moment.

## Console

### Type

A REPL terminal for interacting with a Point Network node.

### Functionality

Provides a way to interact with a Point Network node via a REPL terminal.

### Input Sources

* Start the Console (./point attach) and interact with a node via commands (api ping).

### Output Destinations

* Output from calls to the API Module (when the command is prefixed with ‘api’ - see example input above).

### Libraries

[Readline JS](https://nodejs.org/api/readline.html) and [Axios JS](https://github.com/axios/axios).

### Modifications

None at the moment.

## Core

### Type

A core set of entrypoint, wrapper and utils code for Point Network.

### Functionality

Provides wrappers to main libraries for deployment as well as initialization of services required for the node.

### Input Sources

* Point Executable

### Output Destinations

* Various based on the libraries and modules called.

### Libraries

See all other modules for the libraries used.

### Modifications

None at the moment.

## DB

### Type

Database Module

### Functionality

Provides database schema, persistence logic using LevelDB wrapper.

### Input Sources

* Client Storage Module

### Output Destinations

* Any module that needs to fetch stored files.

### Libraries

Level JS is used as a wrapper for LevelDB

### Modifications

None at the moment.

## Network

### Type

Network Module

### Functionality

Includes DHT network (kademlia js), key value management and a bridge to the blockchain. Essentially it is for Point Network node discovery and communication establishment between peers.

### Input Sources

* Kademlia peer nodes, ZWeb Client.

### Output Destinations

* Ethereum Blockchain, LevelDB and other Kademlia peer nodes using RPC.

### Libraries

Kademlia JS, BSON parser (good-bson), @deadcanaries/kadence

### Modifications

Improvements are noted in the source code ‘todo’ comments.

## Threads

### Type

Encryption Module

### Functionality

For encryption / decryption process

### Input Sources

* Encrypted files from the storage layer

### Output Destinations

* Decrypted files

### Libraries

[Crypto JS](https://www.npmjs.com/package/crypto-js)

### Modifications

Module could be renamed to Encryption.

## Truffle / Smart Contracts

### Type

Solidity Smart Contracts for Point Network applications.

### Functionality

Provides Blockchain layer data for Point Network such as Identity, File Hashes, Ownership and so on.

### Input Sources

* Storage Layer, Client

### Output Destinations

* Hashes back to the Point Network Node.

### Libraries

Truffle

### Modifications

Utility / helper methods such as _isValidHandle and _toLower can be imported from utility libraries of which OpenZeppelin being a very popular solution to use for example [Utilities](https://docs.openzeppelin.com/contracts/3.x/utilities)