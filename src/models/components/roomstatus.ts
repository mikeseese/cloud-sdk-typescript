/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

/**
 * The allocation status of a room.
 *
 * @remarks
 *
 * `scheduling`: a process is not allocated yet and the room is waiting to be scheduled
 *
 * `active`: ready to accept connections
 *
 * `destroyed`: all associated metadata is deleted
 */
export const RoomStatus = {
    Scheduling: "scheduling",
    Active: "active",
    Destroyed: "destroyed",
} as const;
/**
 * The allocation status of a room.
 *
 * @remarks
 *
 * `scheduling`: a process is not allocated yet and the room is waiting to be scheduled
 *
 * `active`: ready to accept connections
 *
 * `destroyed`: all associated metadata is deleted
 */
export type RoomStatus = OpenEnum<typeof RoomStatus>;

/** @internal */
export const RoomStatus$inboundSchema: z.ZodType<RoomStatus, z.ZodTypeDef, unknown> = z.union([
    z.nativeEnum(RoomStatus),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const RoomStatus$outboundSchema: z.ZodType<RoomStatus, z.ZodTypeDef, RoomStatus> = z.union([
    z.nativeEnum(RoomStatus),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoomStatus$ {
    /** @deprecated use `RoomStatus$inboundSchema` instead. */
    export const inboundSchema = RoomStatus$inboundSchema;
    /** @deprecated use `RoomStatus$outboundSchema` instead. */
    export const outboundSchema = RoomStatus$outboundSchema;
}
