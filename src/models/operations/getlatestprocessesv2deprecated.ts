/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLatestProcessesV2DeprecatedGlobals = {
  appId?: string | undefined;
};

export type GetLatestProcessesV2DeprecatedRequest = {
  appId?: string | undefined;
  status?: Array<components.ProcessStatus> | undefined;
  region?: Array<components.Region> | undefined;
};

/** @internal */
export const GetLatestProcessesV2DeprecatedGlobals$inboundSchema: z.ZodType<
  GetLatestProcessesV2DeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetLatestProcessesV2DeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetLatestProcessesV2DeprecatedGlobals$outboundSchema: z.ZodType<
  GetLatestProcessesV2DeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  GetLatestProcessesV2DeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestProcessesV2DeprecatedGlobals$ {
  /** @deprecated use `GetLatestProcessesV2DeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema =
    GetLatestProcessesV2DeprecatedGlobals$inboundSchema;
  /** @deprecated use `GetLatestProcessesV2DeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema =
    GetLatestProcessesV2DeprecatedGlobals$outboundSchema;
  /** @deprecated use `GetLatestProcessesV2DeprecatedGlobals$Outbound` instead. */
  export type Outbound = GetLatestProcessesV2DeprecatedGlobals$Outbound;
}

export function getLatestProcessesV2DeprecatedGlobalsToJSON(
  getLatestProcessesV2DeprecatedGlobals: GetLatestProcessesV2DeprecatedGlobals,
): string {
  return JSON.stringify(
    GetLatestProcessesV2DeprecatedGlobals$outboundSchema.parse(
      getLatestProcessesV2DeprecatedGlobals,
    ),
  );
}

export function getLatestProcessesV2DeprecatedGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetLatestProcessesV2DeprecatedGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetLatestProcessesV2DeprecatedGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLatestProcessesV2DeprecatedGlobals' from JSON`,
  );
}

/** @internal */
export const GetLatestProcessesV2DeprecatedRequest$inboundSchema: z.ZodType<
  GetLatestProcessesV2DeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  status: z.array(components.ProcessStatus$inboundSchema).optional(),
  region: z.array(components.Region$inboundSchema).optional(),
});

/** @internal */
export type GetLatestProcessesV2DeprecatedRequest$Outbound = {
  appId?: string | undefined;
  status?: Array<string> | undefined;
  region?: Array<string> | undefined;
};

/** @internal */
export const GetLatestProcessesV2DeprecatedRequest$outboundSchema: z.ZodType<
  GetLatestProcessesV2DeprecatedRequest$Outbound,
  z.ZodTypeDef,
  GetLatestProcessesV2DeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  status: z.array(components.ProcessStatus$outboundSchema).optional(),
  region: z.array(components.Region$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLatestProcessesV2DeprecatedRequest$ {
  /** @deprecated use `GetLatestProcessesV2DeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetLatestProcessesV2DeprecatedRequest$inboundSchema;
  /** @deprecated use `GetLatestProcessesV2DeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetLatestProcessesV2DeprecatedRequest$outboundSchema;
  /** @deprecated use `GetLatestProcessesV2DeprecatedRequest$Outbound` instead. */
  export type Outbound = GetLatestProcessesV2DeprecatedRequest$Outbound;
}

export function getLatestProcessesV2DeprecatedRequestToJSON(
  getLatestProcessesV2DeprecatedRequest: GetLatestProcessesV2DeprecatedRequest,
): string {
  return JSON.stringify(
    GetLatestProcessesV2DeprecatedRequest$outboundSchema.parse(
      getLatestProcessesV2DeprecatedRequest,
    ),
  );
}

export function getLatestProcessesV2DeprecatedRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLatestProcessesV2DeprecatedRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetLatestProcessesV2DeprecatedRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLatestProcessesV2DeprecatedRequest' from JSON`,
  );
}
