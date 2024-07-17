/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    RoomAllocation,
    RoomAllocation$inboundSchema,
    RoomAllocation$Outbound,
    RoomAllocation$outboundSchema,
} from "./roomallocation.js";
import { RoomStatus, RoomStatus$inboundSchema, RoomStatus$outboundSchema } from "./roomstatus.js";
import * as z from "zod";

/**
 * Metadata on an allocated instance of a room.
 */
export type RoomCurrentAllocation = {
    unscheduledAt: Date | null;
    scheduledAt: Date;
    /**
     * System generated unique identifier to a runtime instance of your game server.
     */
    processId: string;
    /**
     * System generated unique identifier to an allocated instance of a room.
     */
    roomAllocationId: string;
};

/**
 * A room object represents a game session or match.
 */
export type Room = {
    currentAllocation: RoomCurrentAllocation | null;
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
    status: RoomStatus;
    allocations: Array<RoomAllocation>;
    roomConfig?: string | null | undefined;
    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    roomId: string;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
};

/** @internal */
export const RoomCurrentAllocation$inboundSchema: z.ZodType<
    RoomCurrentAllocation,
    z.ZodTypeDef,
    unknown
> = z.object({
    unscheduledAt: z.nullable(
        z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
    ),
    scheduledAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    processId: z.string(),
    roomAllocationId: z.string(),
});

/** @internal */
export type RoomCurrentAllocation$Outbound = {
    unscheduledAt: string | null;
    scheduledAt: string;
    processId: string;
    roomAllocationId: string;
};

/** @internal */
export const RoomCurrentAllocation$outboundSchema: z.ZodType<
    RoomCurrentAllocation$Outbound,
    z.ZodTypeDef,
    RoomCurrentAllocation
> = z.object({
    unscheduledAt: z.nullable(z.date().transform((v) => v.toISOString())),
    scheduledAt: z.date().transform((v) => v.toISOString()),
    processId: z.string(),
    roomAllocationId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoomCurrentAllocation$ {
    /** @deprecated use `RoomCurrentAllocation$inboundSchema` instead. */
    export const inboundSchema = RoomCurrentAllocation$inboundSchema;
    /** @deprecated use `RoomCurrentAllocation$outboundSchema` instead. */
    export const outboundSchema = RoomCurrentAllocation$outboundSchema;
    /** @deprecated use `RoomCurrentAllocation$Outbound` instead. */
    export type Outbound = RoomCurrentAllocation$Outbound;
}

/** @internal */
export const Room$inboundSchema: z.ZodType<Room, z.ZodTypeDef, unknown> = z.object({
    currentAllocation: z.nullable(z.lazy(() => RoomCurrentAllocation$inboundSchema)),
    status: RoomStatus$inboundSchema,
    allocations: z.array(RoomAllocation$inboundSchema),
    roomConfig: z.nullable(z.string()).optional(),
    roomId: z.string(),
    appId: z.string(),
});

/** @internal */
export type Room$Outbound = {
    currentAllocation: RoomCurrentAllocation$Outbound | null;
    status: string;
    allocations: Array<RoomAllocation$Outbound>;
    roomConfig?: string | null | undefined;
    roomId: string;
    appId: string;
};

/** @internal */
export const Room$outboundSchema: z.ZodType<Room$Outbound, z.ZodTypeDef, Room> = z.object({
    currentAllocation: z.nullable(z.lazy(() => RoomCurrentAllocation$outboundSchema)),
    status: RoomStatus$outboundSchema,
    allocations: z.array(RoomAllocation$outboundSchema),
    roomConfig: z.nullable(z.string()).optional(),
    roomId: z.string(),
    appId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Room$ {
    /** @deprecated use `Room$inboundSchema` instead. */
    export const inboundSchema = Room$inboundSchema;
    /** @deprecated use `Room$outboundSchema` instead. */
    export const outboundSchema = Room$outboundSchema;
    /** @deprecated use `Room$Outbound` instead. */
    export type Outbound = Room$Outbound;
}
