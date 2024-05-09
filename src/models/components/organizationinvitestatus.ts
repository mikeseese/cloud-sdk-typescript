/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { InviteStatusAccepted, InviteStatusAccepted$ } from "./invitestatusaccepted";
import { InviteStatusPending, InviteStatusPending$ } from "./invitestatuspending";
import { InviteStatusRejected, InviteStatusRejected$ } from "./invitestatusrejected";
import { InviteStatusRescinded, InviteStatusRescinded$ } from "./invitestatusrescinded";
import * as z from "zod";

export type OrganizationInviteStatus =
    | InviteStatusPending
    | InviteStatusAccepted
    | InviteStatusRejected
    | InviteStatusRescinded;

/** @internal */
export namespace OrganizationInviteStatus$ {
    export type Inbound =
        | InviteStatusPending$.Inbound
        | InviteStatusAccepted$.Inbound
        | InviteStatusRejected$.Inbound
        | InviteStatusRescinded$.Inbound;

    export type Outbound =
        | InviteStatusPending$.Outbound
        | InviteStatusAccepted$.Outbound
        | InviteStatusRejected$.Outbound
        | InviteStatusRescinded$.Outbound;
    export const inboundSchema: z.ZodType<OrganizationInviteStatus, z.ZodTypeDef, Inbound> =
        z.union([
            InviteStatusPending$.inboundSchema,
            InviteStatusAccepted$.inboundSchema,
            InviteStatusRejected$.inboundSchema,
            InviteStatusRescinded$.inboundSchema,
        ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrganizationInviteStatus> =
        z.union([
            InviteStatusPending$.outboundSchema,
            InviteStatusAccepted$.outboundSchema,
            InviteStatusRejected$.outboundSchema,
            InviteStatusRescinded$.outboundSchema,
        ]);
}
