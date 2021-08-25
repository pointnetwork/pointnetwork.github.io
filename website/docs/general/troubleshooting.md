---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
slug: ../troubleshooting
---

## Troubleshooting

To completely reset the nodes, clear all the cache data and redeploy your config files simply run the following script from the project root folder:

```
./scripts/clear-node.sh
```

If the nodes do not appear to cache all the data then ensure that `client.storage.default_redundancy` setting is set to the number of nodes you have running (3).

If the expected node is not responding with the data requests then ensure that `service_provider.enabled` is set to `false` for that node. Typically for the demo we want to have `Node 1` set to true and the others set to false.

### Troubleshooting examining the files / chunks cache in the node disk

Let’s assume that you have deployed the hello.z website from Node 2 (the site owner node) to Node 1. Then when you open a browser and load the site from either Node 1 or Node 2 you will see the page load in the browser window and you will see the same log output in the Node console window. In particular you will see this in the Node console:

```
rootDirId for host hello.z found: b9e32bc06a0b33ba9d3b75bdac7fd1c5ec13381d5fe815f97f3d2028b3593c31
```

What you can do is take the `rootDirId` and use that to output the file contents on either Node 1 or Node 2 using the `cat` command like so (note `test1` in the path is the folder of Node 1):

```
cat ~/.point/test1/data/client_storage_cache/chunk_b9e32bc06a0b33ba9d3b75bdac7fd1c5ec13381d5fe815f97f3d2028b3593c31 | json_pp
```

You should see this output on all nodes:

```json
{
   "type" : "file",
   "merkle" : [
      "8f3a18043933176bd71c8987a227eee8cf6afdcc8110f1adf875827d815c1576",
      "33b489e12fa57c29348b11199076491eaab321bee1f7d88638dae2ee97839752"
   ],
   "filesize" : 146,
   "chunks" : [
      "8f3a18043933176bd71c8987a227eee8cf6afdcc8110f1adf875827d815c1576"
   ],
   "hash" : "keccak256"
}
```

Now take the first chunk id (`8f3a18043933176bd71c8987a227eee8cf6afdcc8110f1adf875827d815c1576`) and run the `cat` command again for both nodes:

```
cat ~/.point/test1/data/client_storage_cache/chunk_8f3a18043933176bd71c8987a227eee8cf6afdcc8110f1adf875827d815c1576 | json_pp
```

You should see this output on all nodes. Notice this is of type `dir` and contains the file list within.

```json
{
   "type" : "dir",
   "files" : [
      {
         "name" : "index.html",
         "id" : "45c1cc29130796f083425310aad7c10ed9c2a4cf7031e69dd40cd8551af65af2",
         "type" : "fileptr",
         "size" : 192
      }
   ]
}
```

Now take the id of the `fileptr` from the last output and use `cat` command to load the file from the storage layer. This should yield the hello.z index.zhtml template.

```
cat ~/.point/test1/data/client_storage_cache/file_45c1cc29130796f083425310aad7c10ed9c2a4cf7031e69dd40cd8551af65af2
```

Retuns:

```
<html>
  <head>
    <title>Hello World from Point Network!</title>
  </head>
  <body>
    <div>
      <p>Hello World Example for testing Storage Layer features NODE111</p>
    </div>
  </body>
</html>
```

### Troubleshooting view File / Chunk meta data from nodes Level DB via the Node API

Its possible to view all File / Chunk metadata on a nodes Level DB store by using the Node Storege API.

The Node has endpoints for both Files and Chunks as follows:

* `/api/storage/files` - Returns all Files metadata from nodes Level DB
* `/api/storage/file/:id` - Returns a single File by :id metadata from nodes Level DB
* `/api/storage/chunks` - Returns all Chunks metadata from nodes Level DB
* `/api/storage/chunk/:id`  - Returns a single Chunk by :id metadata from nodes Level DB

You can any client to access these APIs. The easiest way to get data from these APIs is to use `curl` command line tool like so (**NOTE** examples below pipe to the `json_pp` command to pretty print the response JSON )

```
curl http://localhost:2468/api/storage/files | json_pp
curl http://localhost:2468/api/storage/files/45c1cc29130796f083425310aad7c10ed9c2a4cf7031e69dd40cd8551af65af2 | json_pp
curl http://localhost:2468/api/storage/chunks | json_pp
curl http://localhost:2468/api/storage/chunks/0f1a97888f3c63318bceedd0461c8efe2778a3e1a49934045ee8314d94e335be | json_pp
```

If you take the `fileptr` id of the hello.z index.zhtml site (as shown in the above example this id is `45c1cc29130796f083425310aad7c10ed9c2a4cf7031e69dd40cd8551af65af2`) and plug that into the /api/files/:id API endpoint, you will see the file meta data for this file id loaded from the Nodes level DB.

So for example (using `curl` piped to `json_pp`):

```
curl http://localhost:2468/api/storage/files/45c1cc29130796f083425310aad7c10ed9c2a4cf7031e69dd40cd8551af65af2 | json_pp
```

Should return the following result:

```json
{
   "file": {
       "originalPath": "/Users/developer/.point/test1/data/client_storage_cache/file_45c1cc29130796f083425310aad7c10ed9c2a4cf7031e69dd40cd8551af65af2",
       "dl_status": "ds99",
       "id": "45c1cc29130796f083425310aad7c10ed9c2a4cf7031e69dd40cd8551af65af2",
       "chunkIds": [
           "e939b8d3da28653ef9ce0713641173f999d1f3489905e6a07f694e603e781f99"
       ],
       "size": 192
   }
}
```

### Troubleshooting installing TOR browser during NPM install

There are dependencies installed that require the TOR browser. These dependencies attempt to download and install TOR. If you have issues during this step then you can set an environment variable and run the installation again which will skip downloading TOR like so:

```
export GRANAX_USE_SYSTEM_TOR=1
npm i
```

Now when you run the installation, the script will not attempt to download TOR but will instead output:

```
...
> @pointnetwork/granax@3.2.5 postinstall ~/pointnetwork/node_modules/@pointnetwork/granax
> node script/download-tbb.js

Skipping automatic Tor installation...
Be sure to install Tor using your package manager!
...
```