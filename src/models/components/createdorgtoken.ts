/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    OrgToken,
    OrgToken$inboundSchema,
    OrgToken$Outbound,
    OrgToken$outboundSchema,
} from "./orgtoken.js";
import * as z from "zod";

export type CreatedOrgToken = {
    plainTextToken: string;
    orgToken: OrgToken;
};

/** @internal */
export const CreatedOrgToken$inboundSchema: z.ZodType<CreatedOrgToken, z.ZodTypeDef, unknown> =
    z.object({
        plainTextToken: z.string(),
        orgToken: OrgToken$inboundSchema,
    });

/** @internal */
export type CreatedOrgToken$Outbound = {
    plainTextToken: string;
    orgToken: OrgToken$Outbound;
};

/** @internal */
export const CreatedOrgToken$outboundSchema: z.ZodType<
    CreatedOrgToken$Outbound,
    z.ZodTypeDef,
    CreatedOrgToken
> = z.object({
    plainTextToken: z.string(),
    orgToken: OrgToken$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatedOrgToken$ {
    /** @deprecated use `CreatedOrgToken$inboundSchema` instead. */
    export const inboundSchema = CreatedOrgToken$inboundSchema;
    /** @deprecated use `CreatedOrgToken$outboundSchema` instead. */
    export const outboundSchema = CreatedOrgToken$outboundSchema;
    /** @deprecated use `CreatedOrgToken$Outbound` instead. */
    export type Outbound = CreatedOrgToken$Outbound;
}
