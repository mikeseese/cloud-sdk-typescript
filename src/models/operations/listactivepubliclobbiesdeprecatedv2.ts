/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListActivePublicLobbiesDeprecatedV2Globals = {
    appId?: string | undefined;
};

export type ListActivePublicLobbiesDeprecatedV2Request = {
    appId?: string | undefined;
    /**
     * Region to filter by. If omitted, active public lobbies in all regions will be returned.
     */
    region?: components.Region | undefined;
};

/** @internal */
export namespace ListActivePublicLobbiesDeprecatedV2Globals$ {
    export const inboundSchema: z.ZodType<
        ListActivePublicLobbiesDeprecatedV2Globals,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListActivePublicLobbiesDeprecatedV2Globals
    > = z
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
export namespace ListActivePublicLobbiesDeprecatedV2Request$ {
    export const inboundSchema: z.ZodType<
        ListActivePublicLobbiesDeprecatedV2Request,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            appId: z.string().optional(),
            region: components.Region$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        region?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListActivePublicLobbiesDeprecatedV2Request
    > = z
        .object({
            appId: z.string().optional(),
            region: components.Region$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.region === undefined ? null : { region: v.region }),
            };
        });
}