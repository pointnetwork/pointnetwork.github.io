## Point Network Swagger Docs

Point Network API is defined using `OpenAPI 2.0` Specifications using Swagger.

### Editing Point Network OpenAPI Docs

#### Using OpenAPI Editor VS Code Plugin

The easiest way is to install the [OpenAPI Editor VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi) and use that as follows:

* Install the OpenAPI Editor VS Code Plugin (link above)
* Open the [OpenAPI spec file](./api/pointnetwork.yml) for the Point Network API into VS Code.
* Open the VS Code context menu (`CMD + SHIFT + P ` on a Mac) and select __"OpenAPI: show preview using Swagger UI"__

This will open the Swagger UI preview in a side window. As you edit the file in place the preview will update in real time.

#### Using Swagger Editor Docker Container

To edit the Point Network OpenAPI Docs, open the Swagger Editor using the following `Docker` command from the root of this project:

```
docker run -p 80:8080 -e SWAGGER_FILE=/api/pointnetwork.yaml -v $(pwd)/swagger/api:/api swaggerapi/swagger-editor
```

1. Now edit the file to make the changes that you want.
1. When you are finished, make sure to export yaml file and save the updated version back to [./swagger/api](./swagger/api) folder.

**WARNING** the Swagger Editor tool does **not auto save** the yaml file to the local drive. Make sure to always save this manually using the `File` -> `Save as YAML` option!

NOTE: You can [open any valid OpenAPI document](https://github.com/swagger-api/swagger-editor/blob/master/docs/import.md) into this editor.

### Publishing Point Network API Docs

To publish Point Network API Docs you will first need to export the documentation as JSON using the Swagger Editor tool (above).

Once you have exported the JSON file, for example if you save the file `./swagger/api/pointnetwork.json`, then its possible to use the Swagger UI tool using the following `Docker` command from the root of this project to publish this JSON file:

```
docker run -p 80:8080 -e SWAGGER_JSON=/api/pointnetwork.json -v $(pwd)/swagger/api:/api swaggerapi/swagger-ui
```