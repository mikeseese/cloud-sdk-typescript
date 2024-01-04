/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContainerPort } from "./containerport";
import { PlanName } from "./planname";
import { TransportType } from "./transporttype";
import { Expose, Type } from "class-transformer";

export class DeploymentConfigEnv extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

/**
 * User specified deployment configuration for your application at runtime.
 */
export class DeploymentConfig extends SpeakeasyBase {
    /**
     * Additional ports your server listens on.
     */
    @SpeakeasyMetadata({ elemType: ContainerPort })
    @Expose({ name: "additionalContainerPorts" })
    @Type(() => ContainerPort)
    additionalContainerPorts?: ContainerPort[];

    /**
     * Default port the server listens on.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "containerPort" })
    containerPort: number;

    /**
     * The environment variable that our process will have access to at runtime.
     */
    @SpeakeasyMetadata({ elemType: DeploymentConfigEnv })
    @Expose({ name: "env" })
    @Type(() => DeploymentConfigEnv)
    env: DeploymentConfigEnv[];

    /**
     * A plan defines how much CPU and memory is required to run an instance of your game server.
     *
     * @remarks
     *
     * `tiny`: shared core, 1gb memory
     *
     * `small`: 1 core, 2gb memory
     *
     * `medium`: 2 core, 4gb memory
     *
     * `large`: 4 core, 8gb memory
     */
    @SpeakeasyMetadata()
    @Expose({ name: "planName" })
    planName: PlanName;

    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roomsPerProcess" })
    roomsPerProcess: number;

    /**
     * Transport type specifies the underlying communication protocol to the exposed port.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transportType" })
    transportType: TransportType;
}