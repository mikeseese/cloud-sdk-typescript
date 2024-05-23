/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetStoppedProcessesGlobals = {
    appId?: string | undefined;
};

export type GetStoppedProcessesRequest = {
    appId?: string | undefined;
    region?: components.Region | undefined;
};

/** @internal */
export namespace GetStoppedProcessesGlobals$ {
    export const inboundSchema: z.ZodType<GetStoppedProcessesGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStoppedProcessesGlobals> = z
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
export namespace GetStoppedProcessesRequest$ {
    export const inboundSchema: z.ZodType<GetStoppedProcessesRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStoppedProcessesRequest> = z
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