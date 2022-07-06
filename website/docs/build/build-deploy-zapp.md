---
id: build-deploy-zapp
title: Deploy dApp to Point Network
sidebar_label: Deploy dApp to Point Network
slug: ../build-deploy-zapp
---

First follow the steps in the [dApp Developer Guide](./build-zapp-developer-guide) to get up and running.

Once you are ready to share your amazing new dApp to the world, you can deploy it to YNet You can do so as follows:
 
1. Stop all your locally running services - Point Network, Blockchain, Arlocal etc (you can use the alias `point-dev-stop`).
1. Download and install the [Point Network ALPHA](https://pointnetwork.io/download). This will step you through the process of creating your own mnemonic keys and you will also register your identity on YNet. Be sure to register the Identity that you want for your dApp name e.g. `MyNewdApp` (replace with your dApp name).
1. Now exit the Alpha application and return to your cloned pointnetwork repo
1. Start the Point Node in YNet mode from the cloned pointnetwork repo folder by running `npm run build && npm run start`
1. Open the Point Browser - which connects to the Point Node that is now connected in YNET. You can run the point browser by entering the `pointSDK` folder and running `point-browser` alias.
1. Now run the deploy script for your dApp like so (while in the pointnetwork repo directory). NOTE: if you don't have your own dapp to deploy yet then follow the steps in our[dApp Developer Guide](./build-zapp-developer-guide) first and then come back here:

    ```
    ./point deploy ../mydapps/mynewdapp.point --contracts
    ```

    Since your Point Node is connected to YNET your dApp will be deployed to YNET using your Identity that you have registered earlier.
    
1. Once the deployment is complete you can open your new dApp in YNET. You can share the dApp url (e.g. https://mynewdapp.point) to anyone you like and they can open the dApp in Point Network!