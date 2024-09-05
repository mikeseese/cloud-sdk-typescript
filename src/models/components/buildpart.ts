/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BuildPart = {
    putRequestUrl: string;
    partNumber: number;
};

/** @internal */
export const BuildPart$inboundSchema: z.ZodType<BuildPart, z.ZodTypeDef, unknown> = z.object({
    putRequestUrl: z.string(),
    partNumber: z.number(),
});

/** @internal */
export type BuildPart$Outbound = {
    putRequestUrl: string;
    partNumber: number;
};

/** @internal */
export const BuildPart$outboundSchema: z.ZodType<BuildPart$Outbound, z.ZodTypeDef, BuildPart> =
    z.object({
        putRequestUrl: z.string(),
        partNumber: z.number(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuildPart$ {
    /** @deprecated use `BuildPart$inboundSchema` instead. */
    export const inboundSchema = BuildPart$inboundSchema;
    /** @deprecated use `BuildPart$outboundSchema` instead. */
    export const outboundSchema = BuildPart$outboundSchema;
    /** @deprecated use `BuildPart$Outbound` instead. */
    export type Outbound = BuildPart$Outbound;
}
