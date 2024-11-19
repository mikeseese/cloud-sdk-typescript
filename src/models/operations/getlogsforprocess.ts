/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetLogsForProcessGlobals = {
  appId?: string | undefined;
};

export type GetLogsForProcessRequest = {
  appId?: string | undefined;
  processId: string;
  follow?: boolean | undefined;
  tailLines?: number | undefined;
};

/** @internal */
export const GetLogsForProcessGlobals$inboundSchema: z.ZodType<
  GetLogsForProcessGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetLogsForProcessGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetLogsForProcessGlobals$outboundSchema: z.ZodType<
  GetLogsForProcessGlobals$Outbound,
  z.ZodTypeDef,
  GetLogsForProcessGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLogsForProcessGlobals$ {
  /** @deprecated use `GetLogsForProcessGlobals$inboundSchema` instead. */
  export const inboundSchema = GetLogsForProcessGlobals$inboundSchema;
  /** @deprecated use `GetLogsForProcessGlobals$outboundSchema` instead. */
  export const outboundSchema = GetLogsForProcessGlobals$outboundSchema;
  /** @deprecated use `GetLogsForProcessGlobals$Outbound` instead. */
  export type Outbound = GetLogsForProcessGlobals$Outbound;
}

export function getLogsForProcessGlobalsToJSON(
  getLogsForProcessGlobals: GetLogsForProcessGlobals,
): string {
  return JSON.stringify(
    GetLogsForProcessGlobals$outboundSchema.parse(getLogsForProcessGlobals),
  );
}

export function getLogsForProcessGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetLogsForProcessGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLogsForProcessGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLogsForProcessGlobals' from JSON`,
  );
}

/** @internal */
export const GetLogsForProcessRequest$inboundSchema: z.ZodType<
  GetLogsForProcessRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
  follow: z.boolean().optional(),
  tailLines: z.number().int().default(100),
});

/** @internal */
export type GetLogsForProcessRequest$Outbound = {
  appId?: string | undefined;
  processId: string;
  follow?: boolean | undefined;
  tailLines: number;
};

/** @internal */
export const GetLogsForProcessRequest$outboundSchema: z.ZodType<
  GetLogsForProcessRequest$Outbound,
  z.ZodTypeDef,
  GetLogsForProcessRequest
> = z.object({
  appId: z.string().optional(),
  processId: z.string(),
  follow: z.boolean().optional(),
  tailLines: z.number().int().default(100),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLogsForProcessRequest$ {
  /** @deprecated use `GetLogsForProcessRequest$inboundSchema` instead. */
  export const inboundSchema = GetLogsForProcessRequest$inboundSchema;
  /** @deprecated use `GetLogsForProcessRequest$outboundSchema` instead. */
  export const outboundSchema = GetLogsForProcessRequest$outboundSchema;
  /** @deprecated use `GetLogsForProcessRequest$Outbound` instead. */
  export type Outbound = GetLogsForProcessRequest$Outbound;
}

export function getLogsForProcessRequestToJSON(
  getLogsForProcessRequest: GetLogsForProcessRequest,
): string {
  return JSON.stringify(
    GetLogsForProcessRequest$outboundSchema.parse(getLogsForProcessRequest),
  );
}

export function getLogsForProcessRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetLogsForProcessRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLogsForProcessRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLogsForProcessRequest' from JSON`,
  );
}
