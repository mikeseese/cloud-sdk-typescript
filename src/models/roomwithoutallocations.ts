/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { RoomStatus } from "./roomstatus";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Metadata on an allocated instance of a room.
 */
export class RoomWithoutAllocationsCurrentAllocation extends SpeakeasyBase {
    /**
     * System generated unique identifier to a runtime instance of your game server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processId" })
    processId: string;

    /**
     * System generated unique identifier to an allocated instance of a room.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roomAllocationId" })
    roomAllocationId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scheduledAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    scheduledAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "unscheduledAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    unscheduledAt: Date;
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
export class RoomWithoutAllocations extends SpeakeasyBase {
    /**
     * System generated unique identifier for an application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currentAllocation" })
    @Type(() => RoomWithoutAllocationsCurrentAllocation)
    currentAllocation: RoomWithoutAllocationsCurrentAllocation;

    @SpeakeasyMetadata()
    @Expose({ name: "roomConfig" })
    roomConfig: string;

    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roomId" })
    roomId: string;

    /**
     * The allocation status of a room.
     *
     * @remarks
     *
     * `scheduling`: a process is not allocated yet and the room is waiting to be scheduled
     *
     * `active`: ready to accept connections
     *
     * `suspended`: room is unallocated from the process but can be rescheduled later with the same `roomId`
     *
     * `destroyed`: all associated metadata is deleted
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: RoomStatus;
}