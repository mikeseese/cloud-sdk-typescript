/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { LobbyVisibility, LobbyVisibility$ } from "./lobbyvisibility";
import { Region, Region$ } from "./region";
import * as z from "zod";

export type CreateLobbyV3Params = {
    /**
     * Types of lobbies a player can create.
     *
     * @remarks
     *
     * `private`: the player who created the room must share the roomId with their friends
     *
     * `public`: visible in the public lobby list, anyone can join
     *
     * `local`: for testing with a server running locally
     */
    visibility: LobbyVisibility;
    /**
     * Optional configuration parameters for the room. Can be any string including stringified JSON. It is accessible from the room via [`GetRoomInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetRoomInfo).
     */
    roomConfig?: string | undefined;
    region: Region;
};

/** @internal */
export namespace CreateLobbyV3Params$ {
    export const inboundSchema: z.ZodType<CreateLobbyV3Params, z.ZodTypeDef, unknown> = z
        .object({
            visibility: LobbyVisibility$.inboundSchema,
            roomConfig: z.string().optional(),
            region: Region$.inboundSchema,
        })
        .transform((v) => {
            return {
                visibility: v.visibility,
                ...(v.roomConfig === undefined ? null : { roomConfig: v.roomConfig }),
                region: v.region,
            };
        });

    export type Outbound = {
        visibility: string;
        roomConfig?: string | undefined;
        region: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateLobbyV3Params> = z
        .object({
            visibility: LobbyVisibility$.outboundSchema,
            roomConfig: z.string().optional(),
            region: Region$.outboundSchema,
        })
        .transform((v) => {
            return {
                visibility: v.visibility,
                ...(v.roomConfig === undefined ? null : { roomConfig: v.roomConfig }),
                region: v.region,
            };
        });
}
