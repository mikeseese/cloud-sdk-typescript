/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetDeploymentsV2DeprecatedGlobals = {
  appId?: string | undefined;
};

export type GetDeploymentsV2DeprecatedRequest = {
  appId?: string | undefined;
};

/** @internal */
export const GetDeploymentsV2DeprecatedGlobals$inboundSchema: z.ZodType<
  GetDeploymentsV2DeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetDeploymentsV2DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetDeploymentsV2DeprecatedGlobals$outboundSchema: z.ZodType<
  GetDeploymentsV2DeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  GetDeploymentsV2DeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDeploymentsV2DeprecatedGlobals$ {
  /** @deprecated use `GetDeploymentsV2DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema = GetDeploymentsV2DeprecatedGlobals$inboundSchema;
  /** @deprecated use `GetDeploymentsV2DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetDeploymentsV2DeprecatedGlobals$outboundSchema;
  /** @deprecated use `GetDeploymentsV2DeprecatedGlobals$Outbound` instead. */
  export type Outbound = GetDeploymentsV2DeprecatedGlobals$Outbound;
}

/** @internal */
export const GetDeploymentsV2DeprecatedRequest$inboundSchema: z.ZodType<
  GetDeploymentsV2DeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetDeploymentsV2DeprecatedRequest$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetDeploymentsV2DeprecatedRequest$outboundSchema: z.ZodType<
  GetDeploymentsV2DeprecatedRequest$Outbound,
  z.ZodTypeDef,
  GetDeploymentsV2DeprecatedRequest
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDeploymentsV2DeprecatedRequest$ {
  /** @deprecated use `GetDeploymentsV2DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema = GetDeploymentsV2DeprecatedRequest$inboundSchema;
  /** @deprecated use `GetDeploymentsV2DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetDeploymentsV2DeprecatedRequest$outboundSchema;
  /** @deprecated use `GetDeploymentsV2DeprecatedRequest$Outbound` instead. */
  export type Outbound = GetDeploymentsV2DeprecatedRequest$Outbound;
}