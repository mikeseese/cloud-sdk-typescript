/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateRoomRequest = {
    createRoomParams: components.CreateRoomParams;
    appId?: string | undefined;
    roomId?: string | undefined;
};

/** @internal */
export namespace CreateRoomRequest$ {
    export type Inbound = {
        CreateRoomParams: components.CreateRoomParams$.Inbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateRoomRequest, z.ZodTypeDef, Inbound> = z
        .object({
            CreateRoomParams: components.CreateRoomParams$.inboundSchema,
            appId: z.string().optional(),
            roomId: z.string().optional(),
        })
        .transform((v) => {
            return {
                createRoomParams: v.CreateRoomParams,
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.roomId === undefined ? null : { roomId: v.roomId }),
            };
        });

    export type Outbound = {
        CreateRoomParams: components.CreateRoomParams$.Outbound;
        appId?: string | undefined;
        roomId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRoomRequest> = z
        .object({
            createRoomParams: components.CreateRoomParams$.outboundSchema,
            appId: z.string().optional(),
            roomId: z.string().optional(),
        })
        .transform((v) => {
            return {
                CreateRoomParams: v.createRoomParams,
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.roomId === undefined ? null : { roomId: v.roomId }),
            };
        });
}
