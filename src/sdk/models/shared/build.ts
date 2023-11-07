/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Region } from "./region";
import { Expose, Transform, Type } from "class-transformer";

export class RegionalContainerTags extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "containerTag" })
    containerTag: string;

    /**
     * Available regions to request a game server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: Region;
}

/**
 * Status of creating a build.
 *
 * @remarks
 *
 * `created`: a new `buildId` was generated
 *
 * `running`: the container image is being built
 *
 * `succeeded`: the container image was successfully built and stored in our registry
 *
 * `failed`: there was an issue creating and storing the container image in our container registry
 */
export enum Status {
    Created = "created",
    Running = "running",
    Succeeded = "succeeded",
    Failed = "failed",
}

/**
 * Build is a versioned artifact for a game server's container image and its data.
 */
export class Build extends SpeakeasyBase {
    /**
     * System generated unique identifier for an application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId: string;

    /**
     * System generated id for a build. Increments by 1.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "buildId" })
    buildId: number;

    /**
     * When a new `buildId` is generated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Email address for the user that created the build.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdBy" })
    createdBy: string;

    /**
     * When the container image was deleted.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt: Date;

    /**
     * When the container image finished being built.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "finishedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    finishedAt: Date;

    /**
     * Image size in MB.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "imageSize" })
    imageSize: number;

    /**
     * An alias for the container image in our regional registries.
     */
    @SpeakeasyMetadata({ elemType: RegionalContainerTags })
    @Expose({ name: "regionalContainerTags" })
    @Type(() => RegionalContainerTags)
    regionalContainerTags: RegionalContainerTags[];

    /**
     * When the container image starts getting built.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startedAt: Date;

    /**
     * Status of creating a build.
     *
     * @remarks
     *
     * `created`: a new `buildId` was generated
     *
     * `running`: the container image is being built
     *
     * `succeeded`: the container image was successfully built and stored in our registry
     *
     * `failed`: there was an issue creating and storing the container image in our container registry
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: Status;
}
