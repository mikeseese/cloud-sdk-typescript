/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Construct a type with a set of properties K of type T
 */
export type RecordStringNever = {};

/** @internal */
export namespace RecordStringNever$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<RecordStringNever, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecordStringNever> = z.object(
        {}
    );
}
