/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetRunningProcessesGlobals = {
    appId?: string | undefined;
};

export type GetRunningProcessesRequest = {
    appId?: string | undefined;
    region?: components.Region | undefined;
};

/** @internal */
export namespace GetRunningProcessesGlobals$ {
    export const inboundSchema: z.ZodType<GetRunningProcessesGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRunningProcessesGlobals> = z
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
export namespace GetRunningProcessesRequest$ {
    export const inboundSchema: z.ZodType<GetRunningProcessesRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRunningProcessesRequest> = z
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
