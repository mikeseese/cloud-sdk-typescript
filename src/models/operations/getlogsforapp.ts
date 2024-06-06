/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetLogsForAppGlobals = {
    appId?: string | undefined;
};

export type GetLogsForAppRequest = {
    appId?: string | undefined;
    follow?: boolean | undefined;
    tailLines?: number | undefined;
    region?: components.Region | undefined;
};

/** @internal */
export namespace GetLogsForAppGlobals$ {
    export const inboundSchema: z.ZodType<GetLogsForAppGlobals, z.ZodTypeDef, unknown> = z.object({
        appId: z.string().optional(),
    });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLogsForAppGlobals> = z.object(
        {
            appId: z.string().optional(),
        }
    );
}

/** @internal */
export namespace GetLogsForAppRequest$ {
    export const inboundSchema: z.ZodType<GetLogsForAppRequest, z.ZodTypeDef, unknown> = z.object({
        appId: z.string().optional(),
        follow: z.boolean().default(false),
        tailLines: z.number().int().default(100),
        region: components.Region$.inboundSchema.optional(),
    });

    export type Outbound = {
        appId?: string | undefined;
        follow: boolean;
        tailLines: number;
        region?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLogsForAppRequest> = z.object(
        {
            appId: z.string().optional(),
            follow: z.boolean().default(false),
            tailLines: z.number().int().default(100),
            region: components.Region$.outboundSchema.optional(),
        }
    );
}
