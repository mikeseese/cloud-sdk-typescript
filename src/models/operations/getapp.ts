/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAppGlobals = {
  appId?: string | undefined;
};

export type GetAppRequest = {
  appId?: string | undefined;
};

/** @internal */
export const GetAppGlobals$inboundSchema: z.ZodType<
  GetAppGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetAppGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetAppGlobals$outboundSchema: z.ZodType<
  GetAppGlobals$Outbound,
  z.ZodTypeDef,
  GetAppGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAppGlobals$ {
  /** @deprecated use `GetAppGlobals$inboundSchema` instead. */
  export const inboundSchema = GetAppGlobals$inboundSchema;
  /** @deprecated use `GetAppGlobals$outboundSchema` instead. */
  export const outboundSchema = GetAppGlobals$outboundSchema;
  /** @deprecated use `GetAppGlobals$Outbound` instead. */
  export type Outbound = GetAppGlobals$Outbound;
}

export function getAppGlobalsToJSON(getAppGlobals: GetAppGlobals): string {
  return JSON.stringify(GetAppGlobals$outboundSchema.parse(getAppGlobals));
}

export function getAppGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetAppGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAppGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAppGlobals' from JSON`,
  );
}

/** @internal */
export const GetAppRequest$inboundSchema: z.ZodType<
  GetAppRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetAppRequest$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetAppRequest$outboundSchema: z.ZodType<
  GetAppRequest$Outbound,
  z.ZodTypeDef,
  GetAppRequest
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAppRequest$ {
  /** @deprecated use `GetAppRequest$inboundSchema` instead. */
  export const inboundSchema = GetAppRequest$inboundSchema;
  /** @deprecated use `GetAppRequest$outboundSchema` instead. */
  export const outboundSchema = GetAppRequest$outboundSchema;
  /** @deprecated use `GetAppRequest$Outbound` instead. */
  export type Outbound = GetAppRequest$Outbound;
}

export function getAppRequestToJSON(getAppRequest: GetAppRequest): string {
  return JSON.stringify(GetAppRequest$outboundSchema.parse(getAppRequest));
}

export function getAppRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAppRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAppRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAppRequest' from JSON`,
  );
}
