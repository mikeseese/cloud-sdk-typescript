/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export const RoomReadyStatus = {
    Active: "active",
    Starting: "starting",
} as const;
export type RoomReadyStatus = OpenEnum<typeof RoomReadyStatus>;

/** @internal */
export const RoomReadyStatus$inboundSchema: z.ZodType<RoomReadyStatus, z.ZodTypeDef, unknown> =
    z.union([z.nativeEnum(RoomReadyStatus), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const RoomReadyStatus$outboundSchema: z.ZodType<
    RoomReadyStatus,
    z.ZodTypeDef,
    RoomReadyStatus
> = z.union([z.nativeEnum(RoomReadyStatus), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoomReadyStatus$ {
    /** @deprecated use `RoomReadyStatus$inboundSchema` instead. */
    export const inboundSchema = RoomReadyStatus$inboundSchema;
    /** @deprecated use `RoomReadyStatus$outboundSchema` instead. */
    export const outboundSchema = RoomReadyStatus$outboundSchema;
}
