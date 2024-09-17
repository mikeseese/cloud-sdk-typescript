/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateBuildWithUploadUrlV2DeprecatedGlobals = {
  appId?: string | undefined;
};

export type CreateBuildWithUploadUrlV2DeprecatedRequest = {
  appId?: string | undefined;
  createBuildParams: components.CreateBuildParams;
};

/** @internal */
export const CreateBuildWithUploadUrlV2DeprecatedGlobals$inboundSchema:
  z.ZodType<
    CreateBuildWithUploadUrlV2DeprecatedGlobals,
    z.ZodTypeDef,
    unknown
  > = z.object({
    appId: z.string().optional(),
  });

/** @internal */
export type CreateBuildWithUploadUrlV2DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const CreateBuildWithUploadUrlV2DeprecatedGlobals$outboundSchema:
  z.ZodType<
    CreateBuildWithUploadUrlV2DeprecatedGlobals$Outbound,
    z.ZodTypeDef,
    CreateBuildWithUploadUrlV2DeprecatedGlobals
  > = z.object({
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBuildWithUploadUrlV2DeprecatedGlobals$ {
  /** @deprecated use `CreateBuildWithUploadUrlV2DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema =
    CreateBuildWithUploadUrlV2DeprecatedGlobals$inboundSchema;
  /** @deprecated use `CreateBuildWithUploadUrlV2DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema =
    CreateBuildWithUploadUrlV2DeprecatedGlobals$outboundSchema;
  /** @deprecated use `CreateBuildWithUploadUrlV2DeprecatedGlobals$Outbound` instead. */
  export type Outbound = CreateBuildWithUploadUrlV2DeprecatedGlobals$Outbound;
}

/** @internal */
export const CreateBuildWithUploadUrlV2DeprecatedRequest$inboundSchema:
  z.ZodType<
    CreateBuildWithUploadUrlV2DeprecatedRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    appId: z.string().optional(),
    CreateBuildParams: components.CreateBuildParams$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "CreateBuildParams": "createBuildParams",
    });
  });

/** @internal */
export type CreateBuildWithUploadUrlV2DeprecatedRequest$Outbound = {
  appId?: string | undefined;
  CreateBuildParams: components.CreateBuildParams$Outbound;
};

/** @internal */
export const CreateBuildWithUploadUrlV2DeprecatedRequest$outboundSchema:
  z.ZodType<
    CreateBuildWithUploadUrlV2DeprecatedRequest$Outbound,
    z.ZodTypeDef,
    CreateBuildWithUploadUrlV2DeprecatedRequest
  > = z.object({
    appId: z.string().optional(),
    createBuildParams: components.CreateBuildParams$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      createBuildParams: "CreateBuildParams",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBuildWithUploadUrlV2DeprecatedRequest$ {
  /** @deprecated use `CreateBuildWithUploadUrlV2DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateBuildWithUploadUrlV2DeprecatedRequest$inboundSchema;
  /** @deprecated use `CreateBuildWithUploadUrlV2DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateBuildWithUploadUrlV2DeprecatedRequest$outboundSchema;
  /** @deprecated use `CreateBuildWithUploadUrlV2DeprecatedRequest$Outbound` instead. */
  export type Outbound = CreateBuildWithUploadUrlV2DeprecatedRequest$Outbound;
}
