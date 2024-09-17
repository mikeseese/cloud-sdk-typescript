/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetRoomInfoGlobals = {
  appId?: string | undefined;
};

export type GetRoomInfoRequest = {
  appId?: string | undefined;
  roomId: string;
};

/** @internal */
export const GetRoomInfoGlobals$inboundSchema: z.ZodType<
  GetRoomInfoGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type GetRoomInfoGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const GetRoomInfoGlobals$outboundSchema: z.ZodType<
  GetRoomInfoGlobals$Outbound,
  z.ZodTypeDef,
  GetRoomInfoGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRoomInfoGlobals$ {
  /** @deprecated use `GetRoomInfoGlobals$inboundSchema` instead. */
  export const inboundSchema = GetRoomInfoGlobals$inboundSchema;
  /** @deprecated use `GetRoomInfoGlobals$outboundSchema` instead. */
  export const outboundSchema = GetRoomInfoGlobals$outboundSchema;
  /** @deprecated use `GetRoomInfoGlobals$Outbound` instead. */
  export type Outbound = GetRoomInfoGlobals$Outbound;
}

/** @internal */
export const GetRoomInfoRequest$inboundSchema: z.ZodType<
  GetRoomInfoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  roomId: z.string(),
});

/** @internal */
export type GetRoomInfoRequest$Outbound = {
  appId?: string | undefined;
  roomId: string;
};

/** @internal */
export const GetRoomInfoRequest$outboundSchema: z.ZodType<
  GetRoomInfoRequest$Outbound,
  z.ZodTypeDef,
  GetRoomInfoRequest
> = z.object({
  appId: z.string().optional(),
  roomId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRoomInfoRequest$ {
  /** @deprecated use `GetRoomInfoRequest$inboundSchema` instead. */
  export const inboundSchema = GetRoomInfoRequest$inboundSchema;
  /** @deprecated use `GetRoomInfoRequest$outboundSchema` instead. */
  export const outboundSchema = GetRoomInfoRequest$outboundSchema;
  /** @deprecated use `GetRoomInfoRequest$Outbound` instead. */
  export type Outbound = GetRoomInfoRequest$Outbound;
}
