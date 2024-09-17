/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetActiveRoomsForProcessDeprecatedGlobals = {
  appId?: string | undefined;
};

export type GetActiveRoomsForProcessDeprecatedRequest = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const GetActiveRoomsForProcessDeprecatedGlobals$inboundSchema: z.ZodType<
  GetActiveRoomsForProcessDeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetActiveRoomsForProcessDeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetActiveRoomsForProcessDeprecatedGlobals$outboundSchema:
  z.ZodType<
    GetActiveRoomsForProcessDeprecatedGlobals$Outbound,
    z.ZodTypeDef,
    GetActiveRoomsForProcessDeprecatedGlobals
  > = z.object({
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActiveRoomsForProcessDeprecatedGlobals$ {
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema =
    GetActiveRoomsForProcessDeprecatedGlobals$inboundSchema;
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetActiveRoomsForProcessDeprecatedGlobals$outboundSchema;
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedGlobals$Outbound` instead. */
  export type Outbound = GetActiveRoomsForProcessDeprecatedGlobals$Outbound;
}

/** @internal */
export const GetActiveRoomsForProcessDeprecatedRequest$inboundSchema: z.ZodType<
  GetActiveRoomsForProcessDeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
});

/** @internal */
export type GetActiveRoomsForProcessDeprecatedRequest$Outbound = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const GetActiveRoomsForProcessDeprecatedRequest$outboundSchema:
  z.ZodType<
    GetActiveRoomsForProcessDeprecatedRequest$Outbound,
    z.ZodTypeDef,
    GetActiveRoomsForProcessDeprecatedRequest
  > = z.object({
    appId: z.string().optional(),
    processId: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetActiveRoomsForProcessDeprecatedRequest$ {
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetActiveRoomsForProcessDeprecatedRequest$inboundSchema;
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetActiveRoomsForProcessDeprecatedRequest$outboundSchema;
  /** @deprecated use `GetActiveRoomsForProcessDeprecatedRequest$Outbound` instead. */
  export type Outbound = GetActiveRoomsForProcessDeprecatedRequest$Outbound;
}
