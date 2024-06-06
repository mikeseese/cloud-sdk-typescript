/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type StopProcessGlobals = {
    appId?: string | undefined;
};

export type StopProcessRequest = {
    appId?: string | undefined;
    processId: string;
};

/** @internal */
export namespace StopProcessGlobals$ {
    export const inboundSchema: z.ZodType<StopProcessGlobals, z.ZodTypeDef, unknown> = z.object({
        appId: z.string().optional(),
    });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StopProcessGlobals> = z.object({
        appId: z.string().optional(),
    });
}

/** @internal */
export namespace StopProcessRequest$ {
    export const inboundSchema: z.ZodType<StopProcessRequest, z.ZodTypeDef, unknown> = z.object({
        appId: z.string().optional(),
        processId: z.string(),
    });

    export type Outbound = {
        appId?: string | undefined;
        processId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StopProcessRequest> = z.object({
        appId: z.string().optional(),
        processId: z.string(),
    });
}
