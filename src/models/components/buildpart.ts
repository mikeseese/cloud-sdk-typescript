/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BuildPart = {
  putRequestUrl: string;
  partNumber: number;
};

/** @internal */
export const BuildPart$inboundSchema: z.ZodType<
  BuildPart,
  z.ZodTypeDef,
  unknown
> = z.object({
  putRequestUrl: z.string(),
  partNumber: z.number(),
});

/** @internal */
export type BuildPart$Outbound = {
  putRequestUrl: string;
  partNumber: number;
};

/** @internal */
export const BuildPart$outboundSchema: z.ZodType<
  BuildPart$Outbound,
  z.ZodTypeDef,
  BuildPart
> = z.object({
  putRequestUrl: z.string(),
  partNumber: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuildPart$ {
  /** @deprecated use `BuildPart$inboundSchema` instead. */
  export const inboundSchema = BuildPart$inboundSchema;
  /** @deprecated use `BuildPart$outboundSchema` instead. */
  export const outboundSchema = BuildPart$outboundSchema;
  /** @deprecated use `BuildPart$Outbound` instead. */
  export type Outbound = BuildPart$Outbound;
}

export function buildPartToJSON(buildPart: BuildPart): string {
  return JSON.stringify(BuildPart$outboundSchema.parse(buildPart));
}

export function buildPartFromJSON(
  jsonString: string,
): SafeParseResult<BuildPart, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BuildPart$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BuildPart' from JSON`,
  );
}
