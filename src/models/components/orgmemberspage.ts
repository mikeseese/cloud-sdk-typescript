/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrgMember, OrgMember$ } from "./orgmember.js";
import * as z from "zod";

export type OrgMembersPage = {
    members: Array<OrgMember>;
};

/** @internal */
export namespace OrgMembersPage$ {
    export const inboundSchema: z.ZodType<OrgMembersPage, z.ZodTypeDef, unknown> = z.object({
        members: z.array(OrgMember$.inboundSchema),
    });

    export type Outbound = {
        members: Array<OrgMember$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrgMembersPage> = z.object({
        members: z.array(OrgMember$.outboundSchema),
    });
}