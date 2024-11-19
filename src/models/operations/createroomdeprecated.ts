/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateRoomDeprecatedGlobals = {
  appId?: string | undefined;
};

export type CreateRoomDeprecatedRequest = {
  appId?: string | undefined;
  roomId?: string | undefined;
  createRoomParams: components.CreateRoomParams;
};

/** @internal */
export const CreateRoomDeprecatedGlobals$inboundSchema: z.ZodType<
  CreateRoomDeprecatedGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type CreateRoomDeprecatedGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const CreateRoomDeprecatedGlobals$outboundSchema: z.ZodType<
  CreateRoomDeprecatedGlobals$Outbound,
  z.ZodTypeDef,
  CreateRoomDeprecatedGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRoomDeprecatedGlobals$ {
  /** @deprecated use `CreateRoomDeprecatedGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateRoomDeprecatedGlobals$inboundSchema;
  /** @deprecated use `CreateRoomDeprecatedGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateRoomDeprecatedGlobals$outboundSchema;
  /** @deprecated use `CreateRoomDeprecatedGlobals$Outbound` instead. */
  export type Outbound = CreateRoomDeprecatedGlobals$Outbound;
}

export function createRoomDeprecatedGlobalsToJSON(
  createRoomDeprecatedGlobals: CreateRoomDeprecatedGlobals,
): string {
  return JSON.stringify(
    CreateRoomDeprecatedGlobals$outboundSchema.parse(
      createRoomDeprecatedGlobals,
    ),
  );
}

export function createRoomDeprecatedGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateRoomDeprecatedGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateRoomDeprecatedGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateRoomDeprecatedGlobals' from JSON`,
  );
}

/** @internal */
export const CreateRoomDeprecatedRequest$inboundSchema: z.ZodType<
  CreateRoomDeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  roomId: z.string().optional(),
  CreateRoomParams: components.CreateRoomParams$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CreateRoomParams": "createRoomParams",
  });
});

/** @internal */
export type CreateRoomDeprecatedRequest$Outbound = {
  appId?: string | undefined;
  roomId?: string | undefined;
  CreateRoomParams: components.CreateRoomParams$Outbound;
};

/** @internal */
export const CreateRoomDeprecatedRequest$outboundSchema: z.ZodType<
  CreateRoomDeprecatedRequest$Outbound,
  z.ZodTypeDef,
  CreateRoomDeprecatedRequest
> = z.object({
  appId: z.string().optional(),
  roomId: z.string().optional(),
  createRoomParams: components.CreateRoomParams$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createRoomParams: "CreateRoomParams",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRoomDeprecatedRequest$ {
  /** @deprecated use `CreateRoomDeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema = CreateRoomDeprecatedRequest$inboundSchema;
  /** @deprecated use `CreateRoomDeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema = CreateRoomDeprecatedRequest$outboundSchema;
  /** @deprecated use `CreateRoomDeprecatedRequest$Outbound` instead. */
  export type Outbound = CreateRoomDeprecatedRequest$Outbound;
}

export function createRoomDeprecatedRequestToJSON(
  createRoomDeprecatedRequest: CreateRoomDeprecatedRequest,
): string {
  return JSON.stringify(
    CreateRoomDeprecatedRequest$outboundSchema.parse(
      createRoomDeprecatedRequest,
    ),
  );
}

export function createRoomDeprecatedRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateRoomDeprecatedRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateRoomDeprecatedRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateRoomDeprecatedRequest' from JSON`,
  );
}
