/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DestroyRoomRequest = {
    roomId: string;
    appId?: string | undefined;
};

export type DestroyRoomResponse = {};

/** @internal */
export namespace DestroyRoomRequest$ {
    export type Inbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DestroyRoomRequest, z.ZodTypeDef, Inbound> = z
        .object({
            roomId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                roomId: v.roomId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        roomId: string;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DestroyRoomRequest> = z
        .object({
            roomId: z.string(),
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                roomId: v.roomId,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace DestroyRoomResponse$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DestroyRoomResponse, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DestroyRoomResponse> = z.object(
        {}
    );
}
