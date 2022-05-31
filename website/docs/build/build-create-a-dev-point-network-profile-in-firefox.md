---
id: build-create-a-dev-point-network-profile-in-firefox
title: Create a Dev Point Network Profile in Firefox
sidebar_label: Create a Dev Point Network Profile in Firefox
slug: ../build-create-a-dev-point-network-profile-in-firefox
---
 
1. Create a new Profile by navigating to `about:profiles` in Firefox.

| ![alt-text](../assets/1-add-new-firefox-profile.png) |
| ------------------------------------- |

2. Enter the profile name in the wizard

Note we need to create two profiles so set the name to the profile you are currently creating

* `website_owner`
* `website_visitor`

| ![alt-text](../assets/2-add-new-firefox-profile.png) |
| ------------------------------------- |

3. Configure the proxy for the specific profile

Note each profile that you are creating requires a specific proxy setting. Please configure as shown below based on the profile you are currently adding:

* Profile `website_owner` : set proxy to `localhost:65501`
* Profile `website_visitor` : set proxy to `localhost:65502`

| ![alt-text](../assets/3-config-firefox-proxy.png) |
| ------------------------------------- |

4. Import **and trust** the Point Network CA Certificate

Note the Point Network CA certificate is located in the [`resources/certs`](https://github.com/pointnetwork/pointnetwork/tree/develop/resources/certs) directory.

| ![alt-text](../assets/4-import-ca-firefox.png) |
| ------------------------------------- |