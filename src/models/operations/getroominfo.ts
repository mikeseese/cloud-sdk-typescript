/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace GetRoomInfoGlobals$ {
    export const inboundSchema: z.ZodType<GetRoomInfoGlobals, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRoomInfoGlobals> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace GetRoomInfoRequest$ {
    export const inboundSchema: z.ZodType<GetRoomInfoRequest, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
            roomId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                roomId: v.roomId,
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        roomId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRoomInfoRequest> = z
        .object({
            appId: z.string().optional(),
            roomId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                roomId: v.roomId,
            };
        });
}