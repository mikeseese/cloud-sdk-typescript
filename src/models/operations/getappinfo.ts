/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetAppInfoGlobals = {
    appId?: string | undefined;
};

export type GetAppInfoRequest = {
    appId?: string | undefined;
};

/** @internal */
export namespace GetAppInfoGlobals$ {
    export const inboundSchema: z.ZodType<GetAppInfoGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAppInfoGlobals> = z
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
export namespace GetAppInfoRequest$ {
    export const inboundSchema: z.ZodType<GetAppInfoRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAppInfoRequest> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}
