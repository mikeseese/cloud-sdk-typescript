# ApplicationsPage

## Example Usage

```typescript
import { ApplicationsPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: ApplicationsPage = {
  applications: [
    {
      deletedBy: "noreply@hathora.dev",
      deletedAt: new Date("2024-08-04T18:51:28.290Z"),
      createdAt: new Date("2022-05-09T19:33:28.581Z"),
      createdBy: "noreply@hathora.dev",
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
      authConfiguration: {},
      appSecret: "secret-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
      appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
      appName: "minecraft",
      deployment: {
        idleTimeoutEnabled: false,
        env: [
          {
            value: "TRUE",
            name: "EULA",
          },
        ],
        roomsPerProcess: 3,
        additionalContainerPorts: [
          {
            transportType: "tcp",
            port: 4000,
            name: "debug",
          },
        ],
        defaultContainerPort: {
          transportType: "udp",
          port: 8000,
          name: "default",
        },
        createdAt: new Date("2022-05-25T17:55:10.089Z"),
        createdBy: "noreply@hathora.dev",
        requestedMemoryMB: 1024,
        requestedCPU: 0.5,
        deploymentId: "dep-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
        buildTag: "0.1.14-14c793",
        buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
        build: {
          buildTag: "0.1.14-14c793",
          imageSize: 716860,
          status: "running",
          deletedAt: new Date("2023-09-12T16:50:31.874Z"),
          finishedAt: new Date("2022-07-20T20:59:34.122Z"),
          startedAt: new Date("2022-06-08T18:04:31.662Z"),
          createdAt: new Date("2023-06-19T21:49:56.662Z"),
          createdBy: "noreply@hathora.dev",
          buildId: "bld-6d4c6a71-2d75-4b42-94e1-f312f57f33c5",
          orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `applications`                                                                                                             | [components.ApplicationWithLatestDeploymentAndBuild](../../models/components/applicationwithlatestdeploymentandbuild.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |