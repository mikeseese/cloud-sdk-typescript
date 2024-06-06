/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Region, Region$ } from "./region";
import * as z from "zod";

export type PingEndpoints = {
    port: number;
    host: string;
    region: Region;
};

/** @internal */
export namespace PingEndpoints$ {
    export const inboundSchema: z.ZodType<PingEndpoints, z.ZodTypeDef, unknown> = z.object({
        port: z.number(),
        host: z.string(),
        region: Region$.inboundSchema,
    });

    export type Outbound = {
        port: number;
        host: string;
        region: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PingEndpoints> = z.object({
        port: z.number(),
        host: z.string(),
        region: Region$.outboundSchema,
    });
}
