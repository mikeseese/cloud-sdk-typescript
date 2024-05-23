/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrgPermission, OrgPermission$ } from "./orgpermission";
import * as z from "zod";

export type OrgInvitesPage = {
    invites: Array<OrgPermission>;
};

/** @internal */
export namespace OrgInvitesPage$ {
    export const inboundSchema: z.ZodType<OrgInvitesPage, z.ZodTypeDef, unknown> = z
        .object({
            invites: z.array(OrgPermission$.inboundSchema),
        })
        .transform((v) => {
            return {
                invites: v.invites,
            };
        });

    export type Outbound = {
        invites: Array<OrgPermission$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrgInvitesPage> = z
        .object({
            invites: z.array(OrgPermission$.outboundSchema),
        })
        .transform((v) => {
            return {
                invites: v.invites,
            };
        });
}