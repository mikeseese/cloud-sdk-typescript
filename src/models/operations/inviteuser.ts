/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type InviteUserRequest = {
  orgId: string;
  createUserInvite: components.CreateUserInvite;
};

/** @internal */
export const InviteUserRequest$inboundSchema: z.ZodType<
  InviteUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string(),
  CreateUserInvite: components.CreateUserInvite$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CreateUserInvite": "createUserInvite",
  });
});

/** @internal */
export type InviteUserRequest$Outbound = {
  orgId: string;
  CreateUserInvite: components.CreateUserInvite$Outbound;
};

/** @internal */
export const InviteUserRequest$outboundSchema: z.ZodType<
  InviteUserRequest$Outbound,
  z.ZodTypeDef,
  InviteUserRequest
> = z.object({
  orgId: z.string(),
  createUserInvite: components.CreateUserInvite$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createUserInvite: "CreateUserInvite",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteUserRequest$ {
  /** @deprecated use `InviteUserRequest$inboundSchema` instead. */
  export const inboundSchema = InviteUserRequest$inboundSchema;
  /** @deprecated use `InviteUserRequest$outboundSchema` instead. */
  export const outboundSchema = InviteUserRequest$outboundSchema;
  /** @deprecated use `InviteUserRequest$Outbound` instead. */
  export type Outbound = InviteUserRequest$Outbound;
}
