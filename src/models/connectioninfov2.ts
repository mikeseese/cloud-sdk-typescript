/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { ExposedPort } from "./exposedport";
import { Expose, Type } from "class-transformer";

/**
 * `exposedPort` will only be available when the `status` of a room is "active".
 */
export enum ConnectionInfoV2Status {
    Starting = "starting",
    Active = "active",
}

/**
 * Connection information for the default and additional ports.
 */
export class ConnectionInfoV2 extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ExposedPort })
    @Expose({ name: "additionalExposedPorts" })
    @Type(() => ExposedPort)
    additionalExposedPorts: ExposedPort[];

    /**
     * Connection details for an active process.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exposedPort" })
    @Type(() => ExposedPort)
    exposedPort?: ExposedPort;

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
     * `exposedPort` will only be available when the `status` of a room is "active".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: ConnectionInfoV2Status;
}