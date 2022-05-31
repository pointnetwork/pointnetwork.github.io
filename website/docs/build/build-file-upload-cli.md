---
id: build-file-upload-cli
title: Point CLI File Upload
sidebar_label: File Upload using Point CLI
slug: ../build-file-upload-cli
---

## Upload a file to storage using the Point CLI

To upload any file to the distributed file storage of Point Network, simply run the following (replace `testfile.txt` with your file)

```
./point upload testfile.txt
```

This will upload the file to YNet and return a file hash that you can use to reference that file later.

## Download the file using CURL

To download the file you can use the following CURL command.

Note you need to start the Point Node conected to Ynet and replace `e0bc2350c29534631ddd856bfbb65b41b2cf80795592b7227acaf82d1a743dbc` with your file id.

```bash
curl --proxy "127.0.0.1:8666" https://point/_storage/e0bc2350c29534631ddd856bfbb65b41b2cf80795592b7227acaf82d1a743dbc --cacert ../pointnetwork/resources/certs/ca.crt 
```

You will see the contents of the file you uploaded in the previos step appear in the console.