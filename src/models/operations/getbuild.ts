/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetBuildRequest = {
  buildId: string;
  orgId?: string | undefined;
};

/** @internal */
export const GetBuildRequest$inboundSchema: z.ZodType<
  GetBuildRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  buildId: z.string(),
  orgId: z.string().optional(),
});

/** @internal */
export type GetBuildRequest$Outbound = {
  buildId: string;
  orgId?: string | undefined;
};

/** @internal */
export const GetBuildRequest$outboundSchema: z.ZodType<
  GetBuildRequest$Outbound,
  z.ZodTypeDef,
  GetBuildRequest
> = z.object({
  buildId: z.string(),
  orgId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBuildRequest$ {
  /** @deprecated use `GetBuildRequest$inboundSchema` instead. */
  export const inboundSchema = GetBuildRequest$inboundSchema;
  /** @deprecated use `GetBuildRequest$outboundSchema` instead. */
  export const outboundSchema = GetBuildRequest$outboundSchema;
  /** @deprecated use `GetBuildRequest$Outbound` instead. */
  export type Outbound = GetBuildRequest$Outbound;
}

export function getBuildRequestToJSON(
  getBuildRequest: GetBuildRequest,
): string {
  return JSON.stringify(GetBuildRequest$outboundSchema.parse(getBuildRequest));
}

export function getBuildRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBuildRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBuildRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBuildRequest' from JSON`,
  );
}
