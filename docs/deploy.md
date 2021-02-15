---
id: deploy
title: Deploy
---

# File Deployment Process

This document outlines a high level overview of the process of deploying files to Point Network via the `point cli`. This document follows the journey of a file as it is uploaded, parsed and finally passed onto the Point Network storage layer for distributed among Point Network nodes.

## Step 1: Initialization

1. At least one Point Network node must already be running. The config file of the desired data directory (set using the `--datadir` cli option) is used to load the config of that running node.

1. The point CLI will wrap an instance of a `Console` class and make an API call to the Point Network API `/deploy` endpoint as defined in the loaded config file of the previous step. The call will include the `deploy_path` query string parameter that will be used by the deployer to locate the files to deploy. The API call may look something like this: http://localhost:2469/deploy?deploy_path=/my/path/to/example/example.z

1. The call to the Point Network API endpoint will hit the `DeployController` which passes the call onto the `ZWeb Deployer` class, `deploy` function. Now we move to the next step: Parsing files.

## Step 2: Process Routes and Smart Contracts

1. The `ZWeb Deployer` class `deploy` function is primarily responsible for parsing the template files that are part of the deployment. Once the template is parsed, it's handed off to the storage layer for persistence (which is covered in detail in the next Step).

1. The `deploy` function first reads the `point.deploy.json` file that must be available in the `deploy_path`. The `target` property of the `point.deploy.json` file is then used as the `Identity` that the deployed resources will be bound to in the Identity Smart Contract (essentially its the domain name, and therefore the owner, that the resources belong to).

1. Deployment of new Smart Contracts (if any) are then deployed. The list of Smart Contracts to deploy is provided in the `contracts` key in the  `point.deploy.json` file. A separate `deployContract` function is used to deploy the Contracts. Essentially the `deployContract`  function compiles and deploys the Smart Contract in a standard way using `Web3` and the `@truffle/contract` libraries. The interesting thing to note is that the Contract Artifacts are stored in the Point Network Storage layer with the contract address and contract artifacts storage id being persisted in the Identity Smart Contract as key / value pairs as follows:

    * `zweb/contracts/address/contractName -> address`
    * `zweb/contracts/abi/contractName -> artifactsStorageId `

1. The `routes.json` file is a core part of a ZWeb deployment. It essentially acts as a DNS for the deployed files on the Point Network. When loaded initially, the file will contain human readable references to each of the files in the domain (for example, it may contain an entry like `"/welcome": "welcome.zhtml"`).  The `deploy` function will iterate each entry in the routes file and pass that to the `processTemplate` function for parsing (discussed in the next Step).

    The interesting part is that the `processTemplate` function returns the new file id of the file just parsed and the key in the routes file is replaced with this new id. So for example the value for the key `“/welcome”` will be updated to the file id `"d1f4740f49adfad36e2a5fe4193b334b76d8ecf6"`. NOTE: the file id is the randomly generated id of the file record in the LevelDB which has another mapping to the actual filename stored on disk (which might be `6251fc539f02c6f2e3669a47c21dbc072e59a38b`). The actual file is stored under the Point Network nodes data/deployer_cache directory.

    Once the function has parsed all the files referenced in the `routes.json` then the routes file (containing the file ids now - not the human readable names) is persisted to the storage layer. Moreover, the ZDNS record is updated in the Identity Smart Contract against the target (which is the Identity as mentioned earlier) with a key `zdns/routes` and value is the randomly generated file id for the `routes.json` file.

## Step 3: Parsing Content

1. Optionally the `point.deploy.json` file may contain a `keyvalue` option. This contains the content for the site being deployed. The function `updateKeyValue` recursively loops the values until the value is either a string, Array or Object that can be ultimately represented as a JSON string. Each key / value pair is stored against the target in the Idently smart contract.

## Step 4: Parsing Templates

1. The main part of the `deploy` function  is the calls to the  ``processTemplate`` function.

1. The simplest case is when the template file being processed is not a ‘zhtml’ template file. In this case the file is hashed and this is used as the filename which is persisted in the nodes `data/deployer_cache` directory. Examples would be stylesheet CSS files which do not require parsing by the ZWeb deployment process.

1. The parser then checks for any `extends` references (e.g. `{% extends 'layout.html' %}` ) and will extract that filename used (i.e. layout.zhtml) and then simply recursively calls the `processTemplate` function with that filename.

    The interesting part is that the returned file id from the sub `processTemplate` call is used to replace the human readable filename with that file id like so: `{% extends '51c78cf25d8b32ab6d426ab7f2f70943f3bb5344' %}`.

1. Next any `link` and `img` tags in the template are processed recursively so that all these are also replaced with the file id reference in the parsed template. Again the result is that the human readable referenced filename with parsed file id but this time referencing the storage table in the LevelDB and including the file extension. So one example of a parsed img tag might look like this:` <img src="/_storage/7de460700a2b69c8241e76593165e76ca29bc3ef.png"> `

1. Finally, once the template has been fully parsed, it is sent to the Point Network Storage Layer for persistence across the network.
