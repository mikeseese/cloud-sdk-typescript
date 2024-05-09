/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type NicknameObject = {
    /**
     * An alias to represent a player.
     */
    nickname: string;
};

/** @internal */
export namespace NicknameObject$ {
    export type Inbound = {
        nickname: string;
    };

    export const inboundSchema: z.ZodType<NicknameObject, z.ZodTypeDef, Inbound> = z
        .object({
            nickname: z.string(),
        })
        .transform((v) => {
            return {
                nickname: v.nickname,
            };
        });

    export type Outbound = {
        nickname: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NicknameObject> = z
        .object({
            nickname: z.string(),
        })
        .transform((v) => {
            return {
                nickname: v.nickname,
            };
        });
}
