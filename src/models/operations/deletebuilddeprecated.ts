/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteBuildDeprecatedGlobals = {
    appId?: string | undefined;
};

export type DeleteBuildDeprecatedRequest = {
    appId?: string | undefined;
    buildId: number;
};

/** @internal */
export namespace DeleteBuildDeprecatedGlobals$ {
    export const inboundSchema: z.ZodType<DeleteBuildDeprecatedGlobals, z.ZodTypeDef, unknown> =
        z.object({
            appId: z.string().optional(),
        });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteBuildDeprecatedGlobals> =
        z.object({
            appId: z.string().optional(),
        });
}

/** @internal */
export namespace DeleteBuildDeprecatedRequest$ {
    export const inboundSchema: z.ZodType<DeleteBuildDeprecatedRequest, z.ZodTypeDef, unknown> =
        z.object({
            appId: z.string().optional(),
            buildId: z.number().int(),
        });

    export type Outbound = {
        appId?: string | undefined;
        buildId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteBuildDeprecatedRequest> =
        z.object({
            appId: z.string().optional(),
            buildId: z.number().int(),
        });
}
