---
id: build-use-identity-oracle-in-devlocal
title: Use Identity Twitter Handle Verification Oracle in dev
sidebar_label: Using Identity Oracle in dev
slug: ../build-use-identity-oracle-in-devlocal
---
 
By default, when starting Point Node in dev environment, the Point Node will by-pass the need to use an Oracle to verify Twitter handles. This makes it easier and smoother for the development process. 
 
However, if you want to run the node in a dev environment while also connecting to the Identity Registration Twitter Handle Vericiation Oracle you can do so by starting the node using the following alias command (which is defined in [.bash_alias](https://github.com/pointnetwork/pointnetwork/blob/develop/.bash_alias)):
 
```
point-dev-use-oracle
```
 
Now when you need to register an Identity, the Point Node will first check with the Oracle and request that you post a Tweet on the account with the same name as the Identity that you want to register.
 
Naturally, most of the time it is better and easier not to run the Point Node in the development environment with the Oracle enabled. However if you specifically want to test the Oracle or work on debugging an issue with the flow within the Point Node relating to the Oracle then you can do so as described here.
