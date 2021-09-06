---
id: debugging
title: Debugging
sidebar_label: Debugging
slug: ../debugging
---

### Run a Point Network Node in a VS Code Debugger

The VS Code debugger is configured using the [VS Code launch config](https://github.com/pointnetwork/pointnetwork/blob/master/.vscode/launch.json) file. Its configured to launch a test node under your `~/.point/test1` directory.

To start the VS Code debugger, click on the debugger button and at the top select `Launch Point Node` from the drop down and hit the _play_ button.

Now you can add breakpoints and run a depolyment from a separate terminal window to hit the breakpoint.

**NOTE**: The debugger may fail to start and this is usually due to the `point.pid` file still being present in the `~/.point/test1` directory. Simply delete that file (`rm ~/.point/test1/point.pid`) and run the debugger again.

**NOTE**: You might see an error when starting the debugger relating to a fastify plugin: `Error: ERR_AVVIO_PLUGIN_TIMEOUT: plugin did not start in time`. If you see this the debugger session will immediately stop. To fix this issue, you will need to comment out the `fastify-nextjs` plugin registration and `web_routes` lines in the `ApiServer` class and start the debugger again!

**NOTE**: The launch config makes use of the `$HOME` environment variable for the `--datadir` param. If you do not have this environment variable set, then you will need to do so and run the debugger again.

### Attaching to a Point Network Node using Point Network console

To attach to a node use the following (for example use the `--datadir` flag to specify `Test 2`):

```
./point attach --datadir ~/.point/test2
```

In the console REPL you can now issue commands to the node. For example, the command `api ping` will call the `PingController#ping` API endpoint:

```
> api ping
Querying http://localhost:2469/api/ping?
{ ping: 'pong' }
```

To run a deployment via the Console you need to specify the absolute path of the site you want to deploy. For example, to deploy the `example/hello.z` site run the following command in the attached Point Network console (**NOTE**: change `<ABSOLUTEPATHTO>` to your absolute path):

```
> api deploy deploy_path=/<ABSOLUTEPATHTO>/pointnetwork/example/hello.z
Querying http://localhost:2469/api/deploy?deploy_path=/<ABSOLUTEPATHTO>/pointnetwork/example/hello.z
{ status: 'success' }
```

### Using the Point Network LevelDB Playground

Under `scripts/db` there is a js file `playground.js` that can be used to test out interacting with the local LevelDB of one of the nodes.

To run this file, first stop the node you want to connect to (since LevelDB has a limitation of allowing only one connection at a time) and then run the script using `node scripts/db/playground.js`.

To change which Node LevelDB the script connects to, simply modify the `const nodeid` in the `scripts/db/init.js` and then run the `playground.js` script again.

The intention here is to be able to test out different LevelDB models that are available in the node using this 'playground'. So its possible to load any of the `db/models` and interact with the LevelDB.

For example, to use the `File` model:

```
require('./init')
const File = require('../../db/models/file');
... use the File model ...
```