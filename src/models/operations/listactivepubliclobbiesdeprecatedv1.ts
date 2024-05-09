/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListActivePublicLobbiesDeprecatedV1Request = {
    appId?: string | undefined;
    local?: boolean | undefined;
    region?: components.Region | undefined;
};

/** @internal */
export namespace ListActivePublicLobbiesDeprecatedV1Request$ {
    export type Inbound = {
        appId?: string | undefined;
        local?: boolean | undefined;
        region?: components.Region | undefined;
    };

    export const inboundSchema: z.ZodType<
        ListActivePublicLobbiesDeprecatedV1Request,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            appId: z.string().optional(),
            local: z.boolean().default(false),
            region: components.Region$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                local: v.local,
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        local: boolean;
        region?: components.Region | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListActivePublicLobbiesDeprecatedV1Request
    > = z
        .object({
            appId: z.string().optional(),
            local: z.boolean().default(false),
            region: components.Region$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                local: v.local,
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });
}
