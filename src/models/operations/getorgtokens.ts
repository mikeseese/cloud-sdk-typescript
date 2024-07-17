/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetOrgTokensRequest = {
    orgId: string;
};

/** @internal */
export const GetOrgTokensRequest$inboundSchema: z.ZodType<
    GetOrgTokensRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    orgId: z.string(),
});

/** @internal */
export type GetOrgTokensRequest$Outbound = {
    orgId: string;
};

/** @internal */
export const GetOrgTokensRequest$outboundSchema: z.ZodType<
    GetOrgTokensRequest$Outbound,
    z.ZodTypeDef,
    GetOrgTokensRequest
> = z.object({
    orgId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrgTokensRequest$ {
    /** @deprecated use `GetOrgTokensRequest$inboundSchema` instead. */
    export const inboundSchema = GetOrgTokensRequest$inboundSchema;
    /** @deprecated use `GetOrgTokensRequest$outboundSchema` instead. */
    export const outboundSchema = GetOrgTokensRequest$outboundSchema;
    /** @deprecated use `GetOrgTokensRequest$Outbound` instead. */
    export type Outbound = GetOrgTokensRequest$Outbound;
}
