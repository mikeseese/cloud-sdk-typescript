/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RejectInviteRequest = {
  orgId: string;
};

/** @internal */
export const RejectInviteRequest$inboundSchema: z.ZodType<
  RejectInviteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  orgId: z.string(),
});

/** @internal */
export type RejectInviteRequest$Outbound = {
  orgId: string;
};

/** @internal */
export const RejectInviteRequest$outboundSchema: z.ZodType<
  RejectInviteRequest$Outbound,
  z.ZodTypeDef,
  RejectInviteRequest
> = z.object({
  orgId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RejectInviteRequest$ {
  /** @deprecated use `RejectInviteRequest$inboundSchema` instead. */
  export const inboundSchema = RejectInviteRequest$inboundSchema;
  /** @deprecated use `RejectInviteRequest$outboundSchema` instead. */
  export const outboundSchema = RejectInviteRequest$outboundSchema;
  /** @deprecated use `RejectInviteRequest$Outbound` instead. */
  export type Outbound = RejectInviteRequest$Outbound;
}
