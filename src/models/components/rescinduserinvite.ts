/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RescindUserInvite = {
    userEmail: string;
};

/** @internal */
export namespace RescindUserInvite$ {
    export const inboundSchema: z.ZodType<RescindUserInvite, z.ZodTypeDef, unknown> = z.object({
        userEmail: z.string(),
    });

    export type Outbound = {
        userEmail: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RescindUserInvite> = z.object({
        userEmail: z.string(),
    });
}
