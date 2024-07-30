/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteBuildDeprecatedGlobals = {
    appId?: string | undefined;
};

export type DeleteBuildDeprecatedRequest = {
    appId?: string | undefined;
    buildId: number;
};

/** @internal */
export const DeleteBuildDeprecatedGlobals$inboundSchema: z.ZodType<
    DeleteBuildDeprecatedGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type DeleteBuildDeprecatedGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const DeleteBuildDeprecatedGlobals$outboundSchema: z.ZodType<
    DeleteBuildDeprecatedGlobals$Outbound,
    z.ZodTypeDef,
    DeleteBuildDeprecatedGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBuildDeprecatedGlobals$ {
    /** @deprecated use `DeleteBuildDeprecatedGlobals$inboundSchema` instead. */
    export const inboundSchema = DeleteBuildDeprecatedGlobals$inboundSchema;
    /** @deprecated use `DeleteBuildDeprecatedGlobals$outboundSchema` instead. */
    export const outboundSchema = DeleteBuildDeprecatedGlobals$outboundSchema;
    /** @deprecated use `DeleteBuildDeprecatedGlobals$Outbound` instead. */
    export type Outbound = DeleteBuildDeprecatedGlobals$Outbound;
}

/** @internal */
export const DeleteBuildDeprecatedRequest$inboundSchema: z.ZodType<
    DeleteBuildDeprecatedRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
    buildId: z.number().int(),
});

/** @internal */
export type DeleteBuildDeprecatedRequest$Outbound = {
    appId?: string | undefined;
    buildId: number;
};

/** @internal */
export const DeleteBuildDeprecatedRequest$outboundSchema: z.ZodType<
    DeleteBuildDeprecatedRequest$Outbound,
    z.ZodTypeDef,
    DeleteBuildDeprecatedRequest
> = z.object({
    appId: z.string().optional(),
    buildId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBuildDeprecatedRequest$ {
    /** @deprecated use `DeleteBuildDeprecatedRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteBuildDeprecatedRequest$inboundSchema;
    /** @deprecated use `DeleteBuildDeprecatedRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteBuildDeprecatedRequest$outboundSchema;
    /** @deprecated use `DeleteBuildDeprecatedRequest$Outbound` instead. */
    export type Outbound = DeleteBuildDeprecatedRequest$Outbound;
}
