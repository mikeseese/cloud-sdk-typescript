/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AuthConfiguration,
    AuthConfiguration$inboundSchema,
    AuthConfiguration$Outbound,
    AuthConfiguration$outboundSchema,
} from "./authconfiguration.js";
import {
    BuildV3,
    BuildV3$inboundSchema,
    BuildV3$Outbound,
    BuildV3$outboundSchema,
} from "./buildv3.js";
import {
    ContainerPort,
    ContainerPort$inboundSchema,
    ContainerPort$Outbound,
    ContainerPort$outboundSchema,
} from "./containerport.js";
import * as z from "zod";

export type ApplicationWithLatestDeploymentAndBuildEnv = {
    value: string;
    name: string;
};

export type ApplicationWithLatestDeploymentAndBuildDeployment = {
    /**
     * Option to shut down processes that have had no new connections or rooms
     *
     * @remarks
     * for five minutes.
     */
    idleTimeoutEnabled: boolean;
    /**
     * The environment variable that our process will have access to at runtime.
     */
    env: Array<ApplicationWithLatestDeploymentAndBuildEnv>;
    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    roomsPerProcess: number;
    /**
     * Additional ports your server listens on.
     */
    additionalContainerPorts: Array<ContainerPort>;
    /**
     * A container port object represents the transport configruations for how your server will listen.
     */
    defaultContainerPort: ContainerPort;
    /**
     * When the deployment was created.
     */
    createdAt: Date;
    createdBy: string;
    /**
     * The amount of memory allocated to your process.
     */
    requestedMemoryMB: number;
    /**
     * The number of cores allocated to your process.
     */
    requestedCPU: number;
    /**
     * System generated id for a deployment.
     */
    deploymentId: string;
    /**
     * Tag to associate an external version with a build. It is accessible via [`GetBuildInfo()`](https://hathora.dev/api#tag/BuildV2/operation/GetBuildInfo).
     */
    buildTag?: string | undefined;
    /**
     * System generated id for a build. Can also be user defined when creating a build.
     */
    buildId: string;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
    /**
     * A build represents a game server artifact and its associated metadata.
     */
    build: BuildV3;
};

/**
 * An application object is the top level namespace for the game server.
 */
export type ApplicationWithLatestDeploymentAndBuild = {
    /**
     * The email address or token id for the user that deleted the application.
     */
    deletedBy: string | null;
    /**
     * When the application was deleted.
     */
    deletedAt: Date | null;
    /**
     * When the application was created.
     */
    createdAt: Date;
    createdBy: string;
    /**
     * System generated unique identifier for an organization. Not guaranteed to have a specific format.
     */
    orgId: string;
    /**
     * Configure [player authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service) for your application. Use Hathora's built-in auth providers or use your own [custom authentication](https://hathora.dev/docs/lobbies-and-matchmaking/auth-service#custom-auth-provider).
     */
    authConfiguration: AuthConfiguration;
    /**
     * Secret that is used for identity and access management.
     */
    appSecret: string;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
    /**
     * Readable name for an application. Must be unique within an organization.
     */
    appName: string;
    deployment?: ApplicationWithLatestDeploymentAndBuildDeployment | undefined;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuildEnv,
    z.ZodTypeDef,
    unknown
> = z.object({
    value: z.string(),
    name: z.string(),
});

/** @internal */
export type ApplicationWithLatestDeploymentAndBuildEnv$Outbound = {
    value: string;
    name: string;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuildEnv$Outbound,
    z.ZodTypeDef,
    ApplicationWithLatestDeploymentAndBuildEnv
> = z.object({
    value: z.string(),
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuildEnv$ {
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema` instead. */
    export const inboundSchema = ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema` instead. */
    export const outboundSchema = ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildEnv$Outbound` instead. */
    export type Outbound = ApplicationWithLatestDeploymentAndBuildEnv$Outbound;
}

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuildDeployment,
    z.ZodTypeDef,
    unknown
> = z.object({
    idleTimeoutEnabled: z.boolean(),
    env: z.array(z.lazy(() => ApplicationWithLatestDeploymentAndBuildEnv$inboundSchema)),
    roomsPerProcess: z.number().int(),
    additionalContainerPorts: z.array(ContainerPort$inboundSchema),
    defaultContainerPort: ContainerPort$inboundSchema,
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    createdBy: z.string(),
    requestedMemoryMB: z.number(),
    requestedCPU: z.number(),
    deploymentId: z.string(),
    buildTag: z.string().optional(),
    buildId: z.string(),
    appId: z.string(),
    build: BuildV3$inboundSchema,
});

/** @internal */
export type ApplicationWithLatestDeploymentAndBuildDeployment$Outbound = {
    idleTimeoutEnabled: boolean;
    env: Array<ApplicationWithLatestDeploymentAndBuildEnv$Outbound>;
    roomsPerProcess: number;
    additionalContainerPorts: Array<ContainerPort$Outbound>;
    defaultContainerPort: ContainerPort$Outbound;
    createdAt: string;
    createdBy: string;
    requestedMemoryMB: number;
    requestedCPU: number;
    deploymentId: string;
    buildTag?: string | undefined;
    buildId: string;
    appId: string;
    build: BuildV3$Outbound;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuildDeployment$Outbound,
    z.ZodTypeDef,
    ApplicationWithLatestDeploymentAndBuildDeployment
> = z.object({
    idleTimeoutEnabled: z.boolean(),
    env: z.array(z.lazy(() => ApplicationWithLatestDeploymentAndBuildEnv$outboundSchema)),
    roomsPerProcess: z.number().int(),
    additionalContainerPorts: z.array(ContainerPort$outboundSchema),
    defaultContainerPort: ContainerPort$outboundSchema,
    createdAt: z.date().transform((v) => v.toISOString()),
    createdBy: z.string(),
    requestedMemoryMB: z.number(),
    requestedCPU: z.number(),
    deploymentId: z.string(),
    buildTag: z.string().optional(),
    buildId: z.string(),
    appId: z.string(),
    build: BuildV3$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuildDeployment$ {
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema` instead. */
    export const inboundSchema = ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema` instead. */
    export const outboundSchema = ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeployment$Outbound` instead. */
    export type Outbound = ApplicationWithLatestDeploymentAndBuildDeployment$Outbound;
}

/** @internal */
export const ApplicationWithLatestDeploymentAndBuild$inboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuild,
    z.ZodTypeDef,
    unknown
> = z.object({
    deletedBy: z.nullable(z.string()),
    deletedAt: z.nullable(
        z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
    ),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    createdBy: z.string(),
    orgId: z.string(),
    authConfiguration: AuthConfiguration$inboundSchema,
    appSecret: z.string(),
    appId: z.string(),
    appName: z.string(),
    deployment: z
        .lazy(() => ApplicationWithLatestDeploymentAndBuildDeployment$inboundSchema)
        .optional(),
});

/** @internal */
export type ApplicationWithLatestDeploymentAndBuild$Outbound = {
    deletedBy: string | null;
    deletedAt: string | null;
    createdAt: string;
    createdBy: string;
    orgId: string;
    authConfiguration: AuthConfiguration$Outbound;
    appSecret: string;
    appId: string;
    appName: string;
    deployment?: ApplicationWithLatestDeploymentAndBuildDeployment$Outbound | undefined;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuild$outboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuild$Outbound,
    z.ZodTypeDef,
    ApplicationWithLatestDeploymentAndBuild
> = z.object({
    deletedBy: z.nullable(z.string()),
    deletedAt: z.nullable(z.date().transform((v) => v.toISOString())),
    createdAt: z.date().transform((v) => v.toISOString()),
    createdBy: z.string(),
    orgId: z.string(),
    authConfiguration: AuthConfiguration$outboundSchema,
    appSecret: z.string(),
    appId: z.string(),
    appName: z.string(),
    deployment: z
        .lazy(() => ApplicationWithLatestDeploymentAndBuildDeployment$outboundSchema)
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuild$ {
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuild$inboundSchema` instead. */
    export const inboundSchema = ApplicationWithLatestDeploymentAndBuild$inboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuild$outboundSchema` instead. */
    export const outboundSchema = ApplicationWithLatestDeploymentAndBuild$outboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuild$Outbound` instead. */
    export type Outbound = ApplicationWithLatestDeploymentAndBuild$Outbound;
}
