/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LoginAnonymousGlobals = {
    appId?: string | undefined;
};

export type LoginAnonymousRequest = {
    appId?: string | undefined;
};

/** @internal */
export const LoginAnonymousGlobals$inboundSchema: z.ZodType<
    LoginAnonymousGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type LoginAnonymousGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const LoginAnonymousGlobals$outboundSchema: z.ZodType<
    LoginAnonymousGlobals$Outbound,
    z.ZodTypeDef,
    LoginAnonymousGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginAnonymousGlobals$ {
    /** @deprecated use `LoginAnonymousGlobals$inboundSchema` instead. */
    export const inboundSchema = LoginAnonymousGlobals$inboundSchema;
    /** @deprecated use `LoginAnonymousGlobals$outboundSchema` instead. */
    export const outboundSchema = LoginAnonymousGlobals$outboundSchema;
    /** @deprecated use `LoginAnonymousGlobals$Outbound` instead. */
    export type Outbound = LoginAnonymousGlobals$Outbound;
}

/** @internal */
export const LoginAnonymousRequest$inboundSchema: z.ZodType<
    LoginAnonymousRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type LoginAnonymousRequest$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const LoginAnonymousRequest$outboundSchema: z.ZodType<
    LoginAnonymousRequest$Outbound,
    z.ZodTypeDef,
    LoginAnonymousRequest
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginAnonymousRequest$ {
    /** @deprecated use `LoginAnonymousRequest$inboundSchema` instead. */
    export const inboundSchema = LoginAnonymousRequest$inboundSchema;
    /** @deprecated use `LoginAnonymousRequest$outboundSchema` instead. */
    export const outboundSchema = LoginAnonymousRequest$outboundSchema;
    /** @deprecated use `LoginAnonymousRequest$Outbound` instead. */
    export type Outbound = LoginAnonymousRequest$Outbound;
}
