/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type StopProcessV2DeprecatedGlobals = {
  appId?: string | undefined;
};

export type StopProcessV2DeprecatedRequest = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const StopProcessV2DeprecatedGlobals$inboundSchema: z.ZodType<
  StopProcessV2DeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type StopProcessV2DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const StopProcessV2DeprecatedGlobals$outboundSchema: z.ZodType<
  StopProcessV2DeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  StopProcessV2DeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StopProcessV2DeprecatedGlobals$ {
  /** @deprecated use `StopProcessV2DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema = StopProcessV2DeprecatedGlobals$inboundSchema;
  /** @deprecated use `StopProcessV2DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema = StopProcessV2DeprecatedGlobals$outboundSchema;
  /** @deprecated use `StopProcessV2DeprecatedGlobals$Outbound` instead. */
  export type Outbound = StopProcessV2DeprecatedGlobals$Outbound;
}

/** @internal */
export const StopProcessV2DeprecatedRequest$inboundSchema: z.ZodType<
  StopProcessV2DeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
});

/** @internal */
export type StopProcessV2DeprecatedRequest$Outbound = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const StopProcessV2DeprecatedRequest$outboundSchema: z.ZodType<
  StopProcessV2DeprecatedRequest$Outbound,
  z.ZodTypeDef,
  StopProcessV2DeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StopProcessV2DeprecatedRequest$ {
  /** @deprecated use `StopProcessV2DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema = StopProcessV2DeprecatedRequest$inboundSchema;
  /** @deprecated use `StopProcessV2DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema = StopProcessV2DeprecatedRequest$outboundSchema;
  /** @deprecated use `StopProcessV2DeprecatedRequest$Outbound` instead. */
  export type Outbound = StopProcessV2DeprecatedRequest$Outbound;
}