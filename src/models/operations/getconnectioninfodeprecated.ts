/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetConnectionInfoDeprecatedGlobals = {
    appId?: string | undefined;
};

export type GetConnectionInfoDeprecatedRequest = {
    appId?: string | undefined;
    roomId: string;
};

/** @internal */
export const GetConnectionInfoDeprecatedGlobals$inboundSchema: z.ZodType<
    GetConnectionInfoDeprecatedGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetConnectionInfoDeprecatedGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetConnectionInfoDeprecatedGlobals$outboundSchema: z.ZodType<
    GetConnectionInfoDeprecatedGlobals$Outbound,
    z.ZodTypeDef,
    GetConnectionInfoDeprecatedGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionInfoDeprecatedGlobals$ {
    /** @deprecated use `GetConnectionInfoDeprecatedGlobals$inboundSchema` instead. */
    export const inboundSchema = GetConnectionInfoDeprecatedGlobals$inboundSchema;
    /** @deprecated use `GetConnectionInfoDeprecatedGlobals$outboundSchema` instead. */
    export const outboundSchema = GetConnectionInfoDeprecatedGlobals$outboundSchema;
    /** @deprecated use `GetConnectionInfoDeprecatedGlobals$Outbound` instead. */
    export type Outbound = GetConnectionInfoDeprecatedGlobals$Outbound;
}

/** @internal */
export const GetConnectionInfoDeprecatedRequest$inboundSchema: z.ZodType<
    GetConnectionInfoDeprecatedRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
    roomId: z.string(),
});

/** @internal */
export type GetConnectionInfoDeprecatedRequest$Outbound = {
    appId?: string | undefined;
    roomId: string;
};

/** @internal */
export const GetConnectionInfoDeprecatedRequest$outboundSchema: z.ZodType<
    GetConnectionInfoDeprecatedRequest$Outbound,
    z.ZodTypeDef,
    GetConnectionInfoDeprecatedRequest
> = z.object({
    appId: z.string().optional(),
    roomId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionInfoDeprecatedRequest$ {
    /** @deprecated use `GetConnectionInfoDeprecatedRequest$inboundSchema` instead. */
    export const inboundSchema = GetConnectionInfoDeprecatedRequest$inboundSchema;
    /** @deprecated use `GetConnectionInfoDeprecatedRequest$outboundSchema` instead. */
    export const outboundSchema = GetConnectionInfoDeprecatedRequest$outboundSchema;
    /** @deprecated use `GetConnectionInfoDeprecatedRequest$Outbound` instead. */
    export type Outbound = GetConnectionInfoDeprecatedRequest$Outbound;
}
