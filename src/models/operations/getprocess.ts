/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetProcessGlobals = {
  appId?: string | undefined;
};

export type GetProcessRequest = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const GetProcessGlobals$inboundSchema: z.ZodType<
  GetProcessGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetProcessGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetProcessGlobals$outboundSchema: z.ZodType<
  GetProcessGlobals$Outbound,
  z.ZodTypeDef,
  GetProcessGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessGlobals$ {
  /** @deprecated use `GetProcessGlobals$inboundSchema` instead. */
  export const inboundSchema = GetProcessGlobals$inboundSchema;
  /** @deprecated use `GetProcessGlobals$outboundSchema` instead. */
  export const outboundSchema = GetProcessGlobals$outboundSchema;
  /** @deprecated use `GetProcessGlobals$Outbound` instead. */
  export type Outbound = GetProcessGlobals$Outbound;
}

/** @internal */
export const GetProcessRequest$inboundSchema: z.ZodType<
  GetProcessRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
});

/** @internal */
export type GetProcessRequest$Outbound = {
  appId?: string | undefined;
  processId: string;
};

/** @internal */
export const GetProcessRequest$outboundSchema: z.ZodType<
  GetProcessRequest$Outbound,
  z.ZodTypeDef,
  GetProcessRequest
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProcessRequest$ {
  /** @deprecated use `GetProcessRequest$inboundSchema` instead. */
  export const inboundSchema = GetProcessRequest$inboundSchema;
  /** @deprecated use `GetProcessRequest$outboundSchema` instead. */
  export const outboundSchema = GetProcessRequest$outboundSchema;
  /** @deprecated use `GetProcessRequest$Outbound` instead. */
  export type Outbound = GetProcessRequest$Outbound;
}
