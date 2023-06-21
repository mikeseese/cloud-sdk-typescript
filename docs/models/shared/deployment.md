# Deployment

Deployment is a versioned configuration for a build that describes runtime behavior.


## Fields

| Field                                                                                                                                                                                                               | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         | Example                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `additionalContainerPorts`                                                                                                                                                                                          | [ContainerPort](../../models/shared/containerport.md)[]                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                  | Additional ports your server listens on.                                                                                                                                                                            |                                                                                                                                                                                                                     |
| `appId`                                                                                                                                                                                                             | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | System generated unique identifier for an application.                                                                                                                                                              | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                                                                                                                                            |
| `buildId`                                                                                                                                                                                                           | *number*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | System generated id for a build associated with this deployment. Increments by 1.                                                                                                                                   | 1                                                                                                                                                                                                                   |
| ~~`containerPort`~~                                                                                                                                                                                                 | *number*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | :warning: **DEPRECATED**: this will be removed in a future release, please migrate away from it as soon as possible.                                                                                                |                                                                                                                                                                                                                     |
| `createdAt`                                                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                  | When the deployment was created.                                                                                                                                                                                    |                                                                                                                                                                                                                     |
| `createdBy`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | Email address for the user that created the deployment.                                                                                                                                                             | dev@hathora.dev                                                                                                                                                                                                     |
| `defaultContainerPort`                                                                                                                                                                                              | [ContainerPort](../../models/shared/containerport.md)                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                  | A container port object represents the transport configruations for how your server will listen.                                                                                                                    |                                                                                                                                                                                                                     |
| `deploymentId`                                                                                                                                                                                                      | *number*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | System generated id for a deployment. Increments by 1.                                                                                                                                                              | 1                                                                                                                                                                                                                   |
| `env`                                                                                                                                                                                                               | [DeploymentEnv](../../models/shared/deploymentenv.md)[]                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                  | The environment variable that our process will have access to at runtime.                                                                                                                                           |                                                                                                                                                                                                                     |
| `planName`                                                                                                                                                                                                          | [PlanName](../../models/shared/planname.md)                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                  | A plan defines how much CPU and memory is required to run an instance of your game server.<br/><br/>`tiny`: shared core, 1gb memory<br/><br/>`small`: 1 core, 2gb memory<br/><br/>`medium`: 2 core, 4gb memory<br/><br/>`large`: 4 core, 8gb memory | tiny                                                                                                                                                                                                                |
| `requestedCPU`                                                                                                                                                                                                      | *number*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The number of cores allocated to your process.                                                                                                                                                                      | 0.5                                                                                                                                                                                                                 |
| `requestedMemoryMB`                                                                                                                                                                                                 | *number*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | The amount of memory allocated to your process.                                                                                                                                                                     | 1024                                                                                                                                                                                                                |
| `roomsPerProcess`                                                                                                                                                                                                   | *number*                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                  | Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.                                                                                                    | 3                                                                                                                                                                                                                   |
| ~~`transportType`~~                                                                                                                                                                                                 | [DeploymentTransportType](../../models/shared/deploymenttransporttype.md)                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                  | :warning: **DEPRECATED**: this will be removed in a future release, please migrate away from it as soon as possible.                                                                                                |                                                                                                                                                                                                                     |