/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateAppV1DeprecatedGlobals = {
  appId?: string | undefined;
};

export type UpdateAppV1DeprecatedRequest = {
  appId?: string | undefined;
  appConfig: components.AppConfig;
};

/** @internal */
export const UpdateAppV1DeprecatedGlobals$inboundSchema: z.ZodType<
  UpdateAppV1DeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type UpdateAppV1DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const UpdateAppV1DeprecatedGlobals$outboundSchema: z.ZodType<
  UpdateAppV1DeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  UpdateAppV1DeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAppV1DeprecatedGlobals$ {
  /** @deprecated use `UpdateAppV1DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateAppV1DeprecatedGlobals$inboundSchema;
  /** @deprecated use `UpdateAppV1DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateAppV1DeprecatedGlobals$outboundSchema;
  /** @deprecated use `UpdateAppV1DeprecatedGlobals$Outbound` instead. */
  export type Outbound = UpdateAppV1DeprecatedGlobals$Outbound;
}

/** @internal */
export const UpdateAppV1DeprecatedRequest$inboundSchema: z.ZodType<
  UpdateAppV1DeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  AppConfig: components.AppConfig$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "AppConfig": "appConfig",
  });
});

/** @internal */
export type UpdateAppV1DeprecatedRequest$Outbound = {
  appId?: string | undefined;
  AppConfig: components.AppConfig$Outbound;
};

/** @internal */
export const UpdateAppV1DeprecatedRequest$outboundSchema: z.ZodType<
  UpdateAppV1DeprecatedRequest$Outbound,
  z.ZodTypeDef,
  UpdateAppV1DeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  appConfig: components.AppConfig$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    appConfig: "AppConfig",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAppV1DeprecatedRequest$ {
  /** @deprecated use `UpdateAppV1DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAppV1DeprecatedRequest$inboundSchema;
  /** @deprecated use `UpdateAppV1DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAppV1DeprecatedRequest$outboundSchema;
  /** @deprecated use `UpdateAppV1DeprecatedRequest$Outbound` instead. */
  export type Outbound = UpdateAppV1DeprecatedRequest$Outbound;
}
