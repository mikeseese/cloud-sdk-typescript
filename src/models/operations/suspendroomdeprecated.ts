/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SuspendRoomDeprecatedGlobals = {
    appId?: string | undefined;
};

export type SuspendRoomDeprecatedRequest = {
    appId?: string | undefined;
    roomId: string;
};

/** @internal */
export namespace SuspendRoomDeprecatedGlobals$ {
    export const inboundSchema: z.ZodType<SuspendRoomDeprecatedGlobals, z.ZodTypeDef, unknown> =
        z.object({
            appId: z.string().optional(),
        });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SuspendRoomDeprecatedGlobals> =
        z.object({
            appId: z.string().optional(),
        });
}

/** @internal */
export namespace SuspendRoomDeprecatedRequest$ {
    export const inboundSchema: z.ZodType<SuspendRoomDeprecatedRequest, z.ZodTypeDef, unknown> =
        z.object({
            appId: z.string().optional(),
            roomId: z.string(),
        });

    export type Outbound = {
        appId?: string | undefined;
        roomId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SuspendRoomDeprecatedRequest> =
        z.object({
            appId: z.string().optional(),
            roomId: z.string(),
        });
}
