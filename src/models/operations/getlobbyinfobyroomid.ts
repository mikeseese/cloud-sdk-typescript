/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetLobbyInfoByRoomIdGlobals = {
    appId?: string | undefined;
};

export type GetLobbyInfoByRoomIdRequest = {
    appId?: string | undefined;
    roomId: string;
};

/** @internal */
export const GetLobbyInfoByRoomIdGlobals$inboundSchema: z.ZodType<
    GetLobbyInfoByRoomIdGlobals,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
});

/** @internal */
export type GetLobbyInfoByRoomIdGlobals$Outbound = {
    appId?: string | undefined;
};

/** @internal */
export const GetLobbyInfoByRoomIdGlobals$outboundSchema: z.ZodType<
    GetLobbyInfoByRoomIdGlobals$Outbound,
    z.ZodTypeDef,
    GetLobbyInfoByRoomIdGlobals
> = z.object({
    appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLobbyInfoByRoomIdGlobals$ {
    /** @deprecated use `GetLobbyInfoByRoomIdGlobals$inboundSchema` instead. */
    export const inboundSchema = GetLobbyInfoByRoomIdGlobals$inboundSchema;
    /** @deprecated use `GetLobbyInfoByRoomIdGlobals$outboundSchema` instead. */
    export const outboundSchema = GetLobbyInfoByRoomIdGlobals$outboundSchema;
    /** @deprecated use `GetLobbyInfoByRoomIdGlobals$Outbound` instead. */
    export type Outbound = GetLobbyInfoByRoomIdGlobals$Outbound;
}

/** @internal */
export const GetLobbyInfoByRoomIdRequest$inboundSchema: z.ZodType<
    GetLobbyInfoByRoomIdRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    appId: z.string().optional(),
    roomId: z.string(),
});

/** @internal */
export type GetLobbyInfoByRoomIdRequest$Outbound = {
    appId?: string | undefined;
    roomId: string;
};

/** @internal */
export const GetLobbyInfoByRoomIdRequest$outboundSchema: z.ZodType<
    GetLobbyInfoByRoomIdRequest$Outbound,
    z.ZodTypeDef,
    GetLobbyInfoByRoomIdRequest
> = z.object({
    appId: z.string().optional(),
    roomId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLobbyInfoByRoomIdRequest$ {
    /** @deprecated use `GetLobbyInfoByRoomIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetLobbyInfoByRoomIdRequest$inboundSchema;
    /** @deprecated use `GetLobbyInfoByRoomIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetLobbyInfoByRoomIdRequest$outboundSchema;
    /** @deprecated use `GetLobbyInfoByRoomIdRequest$Outbound` instead. */
    export type Outbound = GetLobbyInfoByRoomIdRequest$Outbound;
}
