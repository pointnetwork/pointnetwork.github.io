---
id: build-deploy-zapp
title: Deploy Zapp to Point Network
sidebar_label: Deploy Zapp to Point Network
slug: ../build-deploy-zapp
---

First follow the steps in teh [Zapp Developer Guide](./build-zapp-developer-guide) to get up and running.

Once you are ready to share your amazing new Zapp to the world, you can deploy it to YNet You can do so as follows:
 
1. Stop all your locally running services - Point Network, Blockchain, Arlocal etc.
1. Download and install the [Point Network ALPHA](https://pointnetwork.io/download). This will step you through the process of creating your own mnemonic keys and you will also register your identity on YNet. Be sure to register the Identity that you want for your Zapp name e.g. `MyNewZapp` (replace with your Zapp name).
1. Now exit the Alpha application and return to your cloned pointnetwork repo
1. Start the Point Node in YNet mode from the cloned pointnetwork repo folder by running `npm run build && npm run start`
1. Open the Point Browser - which connects to the Point Node that is now connected in YNET
1. Now run the deploy script for your Zapp like so (while in the pointnetwork repo directory):

    ```
    ./point deploy ../myzapps/mynewzapp.point --contracts
    ```

    Since your Point Node is connected to YNET your Zapp will be deployed to YNET using your Identity that you have registered earlier.
    
1. Once the deployment is complete you can open your new Zapp in YNET. You can share the Zapp url (e.g. https://mynewzapp.point) to anyone you like and they can open the Zapp in Point Network!