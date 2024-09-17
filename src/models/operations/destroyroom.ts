/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DestroyRoomGlobals = {
  appId?: string | undefined;
};

export type DestroyRoomRequest = {
  appId?: string | undefined;
  roomId: string;
};

/** @internal */
export const DestroyRoomGlobals$inboundSchema: z.ZodType<
  DestroyRoomGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type DestroyRoomGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const DestroyRoomGlobals$outboundSchema: z.ZodType<
  DestroyRoomGlobals$Outbound,
  z.ZodTypeDef,
  DestroyRoomGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DestroyRoomGlobals$ {
  /** @deprecated use `DestroyRoomGlobals$inboundSchema` instead. */
  export const inboundSchema = DestroyRoomGlobals$inboundSchema;
  /** @deprecated use `DestroyRoomGlobals$outboundSchema` instead. */
  export const outboundSchema = DestroyRoomGlobals$outboundSchema;
  /** @deprecated use `DestroyRoomGlobals$Outbound` instead. */
  export type Outbound = DestroyRoomGlobals$Outbound;
}

/** @internal */
export const DestroyRoomRequest$inboundSchema: z.ZodType<
  DestroyRoomRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  roomId: z.string(),
});

/** @internal */
export type DestroyRoomRequest$Outbound = {
  appId?: string | undefined;
  roomId: string;
};

/** @internal */
export const DestroyRoomRequest$outboundSchema: z.ZodType<
  DestroyRoomRequest$Outbound,
  z.ZodTypeDef,
  DestroyRoomRequest
> = z.object({
  appId: z.string().optional(),
  roomId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DestroyRoomRequest$ {
  /** @deprecated use `DestroyRoomRequest$inboundSchema` instead. */
  export const inboundSchema = DestroyRoomRequest$inboundSchema;
  /** @deprecated use `DestroyRoomRequest$outboundSchema` instead. */
  export const outboundSchema = DestroyRoomRequest$outboundSchema;
  /** @deprecated use `DestroyRoomRequest$Outbound` instead. */
  export type Outbound = DestroyRoomRequest$Outbound;
}
