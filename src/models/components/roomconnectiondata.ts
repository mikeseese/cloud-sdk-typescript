/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ExposedPort, ExposedPort$ } from "./exposedport";
import { RoomReadyStatus, RoomReadyStatus$ } from "./roomreadystatus";
import * as z from "zod";

/**
 * Connection information for the default and additional ports.
 */
export type RoomConnectionData = {
    additionalExposedPorts: Array<ExposedPort>;
    /**
     * Connection details for an active process.
     */
    exposedPort?: ExposedPort | undefined;
    status: RoomReadyStatus;
    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    roomId: string;
    /**
     * System generated unique identifier to a runtime instance of your game server.
     */
    processId: string;
};

/** @internal */
export namespace RoomConnectionData$ {
    export type Inbound = {
        additionalExposedPorts: Array<ExposedPort$.Inbound>;
        exposedPort?: ExposedPort$.Inbound | undefined;
        status: RoomReadyStatus;
        roomId: string;
        processId: string;
    };

    export const inboundSchema: z.ZodType<RoomConnectionData, z.ZodTypeDef, Inbound> = z
        .object({
            additionalExposedPorts: z.array(ExposedPort$.inboundSchema),
            exposedPort: ExposedPort$.inboundSchema.optional(),
            status: RoomReadyStatus$,
            roomId: z.string(),
            processId: z.string(),
        })
        .transform((v) => {
            return {
                additionalExposedPorts: v.additionalExposedPorts,
                ...(v.exposedPort === undefined ? null : { exposedPort: v.exposedPort }),
                status: v.status,
                roomId: v.roomId,
                processId: v.processId,
            };
        });

    export type Outbound = {
        additionalExposedPorts: Array<ExposedPort$.Outbound>;
        exposedPort?: ExposedPort$.Outbound | undefined;
        status: RoomReadyStatus;
        roomId: string;
        processId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RoomConnectionData> = z
        .object({
            additionalExposedPorts: z.array(ExposedPort$.outboundSchema),
            exposedPort: ExposedPort$.outboundSchema.optional(),
            status: RoomReadyStatus$,
            roomId: z.string(),
            processId: z.string(),
        })
        .transform((v) => {
            return {
                additionalExposedPorts: v.additionalExposedPorts,
                ...(v.exposedPort === undefined ? null : { exposedPort: v.exposedPort }),
                status: v.status,
                roomId: v.roomId,
                processId: v.processId,
            };
        });
}
