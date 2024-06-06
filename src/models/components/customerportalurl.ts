/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CustomerPortalUrl = {
    returnUrl: string;
};

/** @internal */
export namespace CustomerPortalUrl$ {
    export const inboundSchema: z.ZodType<CustomerPortalUrl, z.ZodTypeDef, unknown> = z.object({
        returnUrl: z.string(),
    });

    export type Outbound = {
        returnUrl: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CustomerPortalUrl> = z.object({
        returnUrl: z.string(),
    });
}
