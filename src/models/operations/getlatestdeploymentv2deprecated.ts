/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLatestDeploymentV2DeprecatedGlobals = {
  appId?: string | undefined;
};

export type GetLatestDeploymentV2DeprecatedRequest = {
  appId?: string | undefined;
};

/** @internal */
export const GetLatestDeploymentV2DeprecatedGlobals$inboundSchema: z.ZodType<
  GetLatestDeploymentV2DeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetLatestDeploymentV2DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetLatestDeploymentV2DeprecatedGlobals$outboundSchema: z.ZodType<
  GetLatestDeploymentV2DeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  GetLatestDeploymentV2DeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestDeploymentV2DeprecatedGlobals$ {
  /** @deprecated use `GetLatestDeploymentV2DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema =
    GetLatestDeploymentV2DeprecatedGlobals$inboundSchema;
  /** @deprecated use `GetLatestDeploymentV2DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetLatestDeploymentV2DeprecatedGlobals$outboundSchema;
  /** @deprecated use `GetLatestDeploymentV2DeprecatedGlobals$Outbound` instead. */
  export type Outbound = GetLatestDeploymentV2DeprecatedGlobals$Outbound;
}

export function getLatestDeploymentV2DeprecatedGlobalsToJSON(
  getLatestDeploymentV2DeprecatedGlobals:
    GetLatestDeploymentV2DeprecatedGlobals,
): string {
  return JSON.stringify(
    GetLatestDeploymentV2DeprecatedGlobals$outboundSchema.parse(
      getLatestDeploymentV2DeprecatedGlobals,
    ),
  );
}

export function getLatestDeploymentV2DeprecatedGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetLatestDeploymentV2DeprecatedGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetLatestDeploymentV2DeprecatedGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLatestDeploymentV2DeprecatedGlobals' from JSON`,
  );
}

/** @internal */
export const GetLatestDeploymentV2DeprecatedRequest$inboundSchema: z.ZodType<
  GetLatestDeploymentV2DeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetLatestDeploymentV2DeprecatedRequest$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetLatestDeploymentV2DeprecatedRequest$outboundSchema: z.ZodType<
  GetLatestDeploymentV2DeprecatedRequest$Outbound,
  z.ZodTypeDef,
  GetLatestDeploymentV2DeprecatedRequest
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestDeploymentV2DeprecatedRequest$ {
  /** @deprecated use `GetLatestDeploymentV2DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetLatestDeploymentV2DeprecatedRequest$inboundSchema;
  /** @deprecated use `GetLatestDeploymentV2DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetLatestDeploymentV2DeprecatedRequest$outboundSchema;
  /** @deprecated use `GetLatestDeploymentV2DeprecatedRequest$Outbound` instead. */
  export type Outbound = GetLatestDeploymentV2DeprecatedRequest$Outbound;
}

export function getLatestDeploymentV2DeprecatedRequestToJSON(
  getLatestDeploymentV2DeprecatedRequest:
    GetLatestDeploymentV2DeprecatedRequest,
): string {
  return JSON.stringify(
    GetLatestDeploymentV2DeprecatedRequest$outboundSchema.parse(
      getLatestDeploymentV2DeprecatedRequest,
    ),
  );
}

export function getLatestDeploymentV2DeprecatedRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLatestDeploymentV2DeprecatedRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetLatestDeploymentV2DeprecatedRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLatestDeploymentV2DeprecatedRequest' from JSON`,
  );
}
