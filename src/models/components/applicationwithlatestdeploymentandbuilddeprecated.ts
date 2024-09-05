/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AuthConfiguration,
    AuthConfiguration$inboundSchema,
    AuthConfiguration$Outbound,
    AuthConfiguration$outboundSchema,
} from "./authconfiguration.js";
import { Build, Build$inboundSchema, Build$Outbound, Build$outboundSchema } from "./build.js";
import {
    ContainerPort,
    ContainerPort$inboundSchema,
    ContainerPort$Outbound,
    ContainerPort$outboundSchema,
} from "./containerport.js";
import * as z from "zod";

export type ApplicationWithLatestDeploymentAndBuildDeprecatedEnv = {
    value: string;
    name: string;
};

export type Deployment = {
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
    env: Array<ApplicationWithLatestDeploymentAndBuildDeprecatedEnv>;
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
     * System generated id for a deployment. Increments by 1.
     */
    deploymentId: number;
    /**
     * System generated id for a build. Increments by 1.
     */
    buildId: number;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
    /**
     * A build represents a game server artifact and its associated metadata.
     */
    build: Build;
};

/**
 * An application object is the top level namespace for the game server.
 */
export type ApplicationWithLatestDeploymentAndBuildDeprecated = {
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
    deployment?: Deployment | undefined;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$inboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuildDeprecatedEnv,
    z.ZodTypeDef,
    unknown
> = z.object({
    value: z.string(),
    name: z.string(),
});

/** @internal */
export type ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$Outbound = {
    value: string;
    name: string;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$outboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$Outbound,
    z.ZodTypeDef,
    ApplicationWithLatestDeploymentAndBuildDeprecatedEnv
> = z.object({
    value: z.string(),
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$ {
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$inboundSchema` instead. */
    export const inboundSchema = ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$inboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$outboundSchema` instead. */
    export const outboundSchema =
        ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$outboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$Outbound` instead. */
    export type Outbound = ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$Outbound;
}

/** @internal */
export const Deployment$inboundSchema: z.ZodType<Deployment, z.ZodTypeDef, unknown> = z.object({
    idleTimeoutEnabled: z.boolean(),
    env: z.array(z.lazy(() => ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$inboundSchema)),
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
    deploymentId: z.number().int(),
    buildId: z.number().int(),
    appId: z.string(),
    build: Build$inboundSchema,
});

/** @internal */
export type Deployment$Outbound = {
    idleTimeoutEnabled: boolean;
    env: Array<ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$Outbound>;
    roomsPerProcess: number;
    additionalContainerPorts: Array<ContainerPort$Outbound>;
    defaultContainerPort: ContainerPort$Outbound;
    createdAt: string;
    createdBy: string;
    requestedMemoryMB: number;
    requestedCPU: number;
    deploymentId: number;
    buildId: number;
    appId: string;
    build: Build$Outbound;
};

/** @internal */
export const Deployment$outboundSchema: z.ZodType<Deployment$Outbound, z.ZodTypeDef, Deployment> =
    z.object({
        idleTimeoutEnabled: z.boolean(),
        env: z.array(
            z.lazy(() => ApplicationWithLatestDeploymentAndBuildDeprecatedEnv$outboundSchema)
        ),
        roomsPerProcess: z.number().int(),
        additionalContainerPorts: z.array(ContainerPort$outboundSchema),
        defaultContainerPort: ContainerPort$outboundSchema,
        createdAt: z.date().transform((v) => v.toISOString()),
        createdBy: z.string(),
        requestedMemoryMB: z.number(),
        requestedCPU: z.number(),
        deploymentId: z.number().int(),
        buildId: z.number().int(),
        appId: z.string(),
        build: Build$outboundSchema,
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Deployment$ {
    /** @deprecated use `Deployment$inboundSchema` instead. */
    export const inboundSchema = Deployment$inboundSchema;
    /** @deprecated use `Deployment$outboundSchema` instead. */
    export const outboundSchema = Deployment$outboundSchema;
    /** @deprecated use `Deployment$Outbound` instead. */
    export type Outbound = Deployment$Outbound;
}

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildDeprecated$inboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuildDeprecated,
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
    deployment: z.lazy(() => Deployment$inboundSchema).optional(),
});

/** @internal */
export type ApplicationWithLatestDeploymentAndBuildDeprecated$Outbound = {
    deletedBy: string | null;
    deletedAt: string | null;
    createdAt: string;
    createdBy: string;
    orgId: string;
    authConfiguration: AuthConfiguration$Outbound;
    appSecret: string;
    appId: string;
    appName: string;
    deployment?: Deployment$Outbound | undefined;
};

/** @internal */
export const ApplicationWithLatestDeploymentAndBuildDeprecated$outboundSchema: z.ZodType<
    ApplicationWithLatestDeploymentAndBuildDeprecated$Outbound,
    z.ZodTypeDef,
    ApplicationWithLatestDeploymentAndBuildDeprecated
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
    deployment: z.lazy(() => Deployment$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationWithLatestDeploymentAndBuildDeprecated$ {
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeprecated$inboundSchema` instead. */
    export const inboundSchema = ApplicationWithLatestDeploymentAndBuildDeprecated$inboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeprecated$outboundSchema` instead. */
    export const outboundSchema = ApplicationWithLatestDeploymentAndBuildDeprecated$outboundSchema;
    /** @deprecated use `ApplicationWithLatestDeploymentAndBuildDeprecated$Outbound` instead. */
    export type Outbound = ApplicationWithLatestDeploymentAndBuildDeprecated$Outbound;
}
