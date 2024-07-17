/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetLogsForDeploymentGlobals = {
    appId?: string | undefined;
};

export type GetLogsForDeploymentRequest = {
    appId?: string | undefined;
    deploymentId: number;
    follow?: boolean | undefined;
    tailLines?: number | undefined;
};

/** @internal */
export const GetLogsForDeploymentGlobals$inboundSchema: z.ZodType<
    GetLogsForDeploymentGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetLogsForDeploymentGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetLogsForDeploymentGlobals$outboundSchema: z.ZodType<
    GetLogsForDeploymentGlobals$Outbound,
    z.ZodTypeDef,
    GetLogsForDeploymentGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLogsForDeploymentGlobals$ {
    /** @deprecated use `GetLogsForDeploymentGlobals$inboundSchema` instead. */
    export const inboundSchema = GetLogsForDeploymentGlobals$inboundSchema;
    /** @deprecated use `GetLogsForDeploymentGlobals$outboundSchema` instead. */
    export const outboundSchema = GetLogsForDeploymentGlobals$outboundSchema;
    /** @deprecated use `GetLogsForDeploymentGlobals$Outbound` instead. */
    export type Outbound = GetLogsForDeploymentGlobals$Outbound;
}

/** @internal */
export const GetLogsForDeploymentRequest$inboundSchema: z.ZodType<
    GetLogsForDeploymentRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
    deploymentId: z.number().int(),
    follow: z.boolean().default(false),
    tailLines: z.number().int().default(100),
});

/** @internal */
export type GetLogsForDeploymentRequest$Outbound = {
    appId?: string | undefined;
    deploymentId: number;
    follow: boolean;
    tailLines: number;
};

/** @internal */
export const GetLogsForDeploymentRequest$outboundSchema: z.ZodType<
    GetLogsForDeploymentRequest$Outbound,
    z.ZodTypeDef,
    GetLogsForDeploymentRequest
> = z.object({
    appId: z.string().optional(),
    deploymentId: z.number().int(),
    follow: z.boolean().default(false),
    tailLines: z.number().int().default(100),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLogsForDeploymentRequest$ {
    /** @deprecated use `GetLogsForDeploymentRequest$inboundSchema` instead. */
    export const inboundSchema = GetLogsForDeploymentRequest$inboundSchema;
    /** @deprecated use `GetLogsForDeploymentRequest$outboundSchema` instead. */
    export const outboundSchema = GetLogsForDeploymentRequest$outboundSchema;
    /** @deprecated use `GetLogsForDeploymentRequest$Outbound` instead. */
    export type Outbound = GetLogsForDeploymentRequest$Outbound;
}
