/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListActivePublicLobbiesDeprecatedV1Globals = {
  appId?: string | undefined;
};

export type ListActivePublicLobbiesDeprecatedV1Request = {
  appId?: string | undefined;
  local?: boolean | undefined;
  region?: components.Region | undefined;
};

/** @internal */
export const ListActivePublicLobbiesDeprecatedV1Globals$inboundSchema:
  z.ZodType<ListActivePublicLobbiesDeprecatedV1Globals, z.ZodTypeDef, unknown> =
    z.object({
      appId: z.string().optional(),
    });

/** @internal */
export type ListActivePublicLobbiesDeprecatedV1Globals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const ListActivePublicLobbiesDeprecatedV1Globals$outboundSchema:
  z.ZodType<
    ListActivePublicLobbiesDeprecatedV1Globals$Outbound,
    z.ZodTypeDef,
    ListActivePublicLobbiesDeprecatedV1Globals
  > = z.object({
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListActivePublicLobbiesDeprecatedV1Globals$ {
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV1Globals$inboundSchema` instead. */
  export const inboundSchema =
    ListActivePublicLobbiesDeprecatedV1Globals$inboundSchema;
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV1Globals$outboundSchema` instead. */
  export const outboundSchema =
    ListActivePublicLobbiesDeprecatedV1Globals$outboundSchema;
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV1Globals$Outbound` instead. */
  export type Outbound = ListActivePublicLobbiesDeprecatedV1Globals$Outbound;
}

export function listActivePublicLobbiesDeprecatedV1GlobalsToJSON(
  listActivePublicLobbiesDeprecatedV1Globals:
    ListActivePublicLobbiesDeprecatedV1Globals,
): string {
  return JSON.stringify(
    ListActivePublicLobbiesDeprecatedV1Globals$outboundSchema.parse(
      listActivePublicLobbiesDeprecatedV1Globals,
    ),
  );
}

export function listActivePublicLobbiesDeprecatedV1GlobalsFromJSON(
  jsonString: string,
): SafeParseResult<
  ListActivePublicLobbiesDeprecatedV1Globals,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListActivePublicLobbiesDeprecatedV1Globals$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListActivePublicLobbiesDeprecatedV1Globals' from JSON`,
  );
}

/** @internal */
export const ListActivePublicLobbiesDeprecatedV1Request$inboundSchema:
  z.ZodType<ListActivePublicLobbiesDeprecatedV1Request, z.ZodTypeDef, unknown> =
    z.object({
      appId: z.string().optional(),
      local: z.boolean().default(false),
      region: components.Region$inboundSchema.optional(),
    });

/** @internal */
export type ListActivePublicLobbiesDeprecatedV1Request$Outbound = {
  appId?: string | undefined;
  local: boolean;
  region?: string | undefined;
};

/** @internal */
export const ListActivePublicLobbiesDeprecatedV1Request$outboundSchema:
  z.ZodType<
    ListActivePublicLobbiesDeprecatedV1Request$Outbound,
    z.ZodTypeDef,
    ListActivePublicLobbiesDeprecatedV1Request
  > = z.object({
    appId: z.string().optional(),
    local: z.boolean().default(false),
    region: components.Region$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListActivePublicLobbiesDeprecatedV1Request$ {
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV1Request$inboundSchema` instead. */
  export const inboundSchema =
    ListActivePublicLobbiesDeprecatedV1Request$inboundSchema;
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV1Request$outboundSchema` instead. */
  export const outboundSchema =
    ListActivePublicLobbiesDeprecatedV1Request$outboundSchema;
  /** @deprecated use `ListActivePublicLobbiesDeprecatedV1Request$Outbound` instead. */
  export type Outbound = ListActivePublicLobbiesDeprecatedV1Request$Outbound;
}

export function listActivePublicLobbiesDeprecatedV1RequestToJSON(
  listActivePublicLobbiesDeprecatedV1Request:
    ListActivePublicLobbiesDeprecatedV1Request,
): string {
  return JSON.stringify(
    ListActivePublicLobbiesDeprecatedV1Request$outboundSchema.parse(
      listActivePublicLobbiesDeprecatedV1Request,
    ),
  );
}

export function listActivePublicLobbiesDeprecatedV1RequestFromJSON(
  jsonString: string,
): SafeParseResult<
  ListActivePublicLobbiesDeprecatedV1Request,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListActivePublicLobbiesDeprecatedV1Request$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListActivePublicLobbiesDeprecatedV1Request' from JSON`,
  );
}
