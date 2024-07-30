/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetActiveRoomsForProcessGlobals = {
    appId?: string | undefined;
};

export type GetActiveRoomsForProcessRequest = {
    appId?: string | undefined;
    processId: string;
};

/** @internal */
export const GetActiveRoomsForProcessGlobals$inboundSchema: z.ZodType<
    GetActiveRoomsForProcessGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetActiveRoomsForProcessGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetActiveRoomsForProcessGlobals$outboundSchema: z.ZodType<
    GetActiveRoomsForProcessGlobals$Outbound,
    z.ZodTypeDef,
    GetActiveRoomsForProcessGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActiveRoomsForProcessGlobals$ {
    /** @deprecated use `GetActiveRoomsForProcessGlobals$inboundSchema` instead. */
    export const inboundSchema = GetActiveRoomsForProcessGlobals$inboundSchema;
    /** @deprecated use `GetActiveRoomsForProcessGlobals$outboundSchema` instead. */
    export const outboundSchema = GetActiveRoomsForProcessGlobals$outboundSchema;
    /** @deprecated use `GetActiveRoomsForProcessGlobals$Outbound` instead. */
    export type Outbound = GetActiveRoomsForProcessGlobals$Outbound;
}

/** @internal */
export const GetActiveRoomsForProcessRequest$inboundSchema: z.ZodType<
    GetActiveRoomsForProcessRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
    processId: z.string(),
});

/** @internal */
export type GetActiveRoomsForProcessRequest$Outbound = {
    appId?: string | undefined;
    processId: string;
};

/** @internal */
export const GetActiveRoomsForProcessRequest$outboundSchema: z.ZodType<
    GetActiveRoomsForProcessRequest$Outbound,
    z.ZodTypeDef,
    GetActiveRoomsForProcessRequest
> = z.object({
    appId: z.string().optional(),
    processId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActiveRoomsForProcessRequest$ {
    /** @deprecated use `GetActiveRoomsForProcessRequest$inboundSchema` instead. */
    export const inboundSchema = GetActiveRoomsForProcessRequest$inboundSchema;
    /** @deprecated use `GetActiveRoomsForProcessRequest$outboundSchema` instead. */
    export const outboundSchema = GetActiveRoomsForProcessRequest$outboundSchema;
    /** @deprecated use `GetActiveRoomsForProcessRequest$Outbound` instead. */
    export type Outbound = GetActiveRoomsForProcessRequest$Outbound;
}
