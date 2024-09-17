/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateDeploymentV1DeprecatedGlobals = {
  appId?: string | undefined;
};

export type CreateDeploymentV1DeprecatedRequest = {
  appId?: string | undefined;
  buildId: number;
  deploymentConfig: components.DeploymentConfig;
};

/** @internal */
export const CreateDeploymentV1DeprecatedGlobals$inboundSchema: z.ZodType<
  CreateDeploymentV1DeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type CreateDeploymentV1DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const CreateDeploymentV1DeprecatedGlobals$outboundSchema: z.ZodType<
  CreateDeploymentV1DeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  CreateDeploymentV1DeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDeploymentV1DeprecatedGlobals$ {
  /** @deprecated use `CreateDeploymentV1DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema =
    CreateDeploymentV1DeprecatedGlobals$inboundSchema;
  /** @deprecated use `CreateDeploymentV1DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema =
    CreateDeploymentV1DeprecatedGlobals$outboundSchema;
  /** @deprecated use `CreateDeploymentV1DeprecatedGlobals$Outbound` instead. */
  export type Outbound = CreateDeploymentV1DeprecatedGlobals$Outbound;
}

/** @internal */
export const CreateDeploymentV1DeprecatedRequest$inboundSchema: z.ZodType<
  CreateDeploymentV1DeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  buildId: z.number().int(),
  DeploymentConfig: components.DeploymentConfig$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "DeploymentConfig": "deploymentConfig",
  });
});

/** @internal */
export type CreateDeploymentV1DeprecatedRequest$Outbound = {
  appId?: string | undefined;
  buildId: number;
  DeploymentConfig: components.DeploymentConfig$Outbound;
};

/** @internal */
export const CreateDeploymentV1DeprecatedRequest$outboundSchema: z.ZodType<
  CreateDeploymentV1DeprecatedRequest$Outbound,
  z.ZodTypeDef,
  CreateDeploymentV1DeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  buildId: z.number().int(),
  deploymentConfig: components.DeploymentConfig$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    deploymentConfig: "DeploymentConfig",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDeploymentV1DeprecatedRequest$ {
  /** @deprecated use `CreateDeploymentV1DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateDeploymentV1DeprecatedRequest$inboundSchema;
  /** @deprecated use `CreateDeploymentV1DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateDeploymentV1DeprecatedRequest$outboundSchema;
  /** @deprecated use `CreateDeploymentV1DeprecatedRequest$Outbound` instead. */
  export type Outbound = CreateDeploymentV1DeprecatedRequest$Outbound;
}
