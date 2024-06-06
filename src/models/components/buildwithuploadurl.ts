/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BuildStatus, BuildStatus$ } from "./buildstatus";
import { Region, Region$ } from "./region";
import * as z from "zod";

export type BuildWithUploadUrlRegionalContainerTags = {
    containerTag: string;
    region: Region;
};

export type UploadBodyParams = {
    value: string;
    key: string;
};

/**
 * A build represents a game server artifact and its associated metadata.
 */
export type BuildWithUploadUrl = {
    buildTag?: string | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    regionalContainerTags: Array<BuildWithUploadUrlRegionalContainerTags>;
    /**
     * The size (in bytes) of the Docker image built by Hathora.
     */
    imageSize: number;
    status: BuildStatus;
    /**
     * When the build was deleted.
     */
    deletedAt: Date | null;
    /**
     * When [`RunBuild()`](https://hathora.dev/api#tag/BuildV2/operation/RunBuild) finished executing.
     */
    finishedAt: Date | null;
    /**
     * When [`RunBuild()`](https://hathora.dev/api#tag/BuildV2/operation/RunBuild) is called.
     */
    startedAt: Date | null;
    /**
     * When [`CreateBuild()`](https://hathora.dev/api#tag/BuildV2/operation/CreateBuild) is called.
     */
    createdAt: Date;
    /**
     * UserId or email address for the user that created the build.
     */
    createdBy: string;
    /**
     * System generated id for a build. Increments by 1.
     */
    buildId: number;
    /**
     * System generated unique identifier for an application.
     */
    appId: string;
    uploadBodyParams: Array<UploadBodyParams>;
    uploadUrl: string;
};

/** @internal */
export namespace BuildWithUploadUrlRegionalContainerTags$ {
    export const inboundSchema: z.ZodType<
        BuildWithUploadUrlRegionalContainerTags,
        z.ZodTypeDef,
        unknown
    > = z.object({
        containerTag: z.string(),
        region: Region$.inboundSchema,
    });

    export type Outbound = {
        containerTag: string;
        region: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        BuildWithUploadUrlRegionalContainerTags
    > = z.object({
        containerTag: z.string(),
        region: Region$.outboundSchema,
    });
}

/** @internal */
export namespace UploadBodyParams$ {
    export const inboundSchema: z.ZodType<UploadBodyParams, z.ZodTypeDef, unknown> = z.object({
        value: z.string(),
        key: z.string(),
    });

    export type Outbound = {
        value: string;
        key: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadBodyParams> = z.object({
        value: z.string(),
        key: z.string(),
    });
}

/** @internal */
export namespace BuildWithUploadUrl$ {
    export const inboundSchema: z.ZodType<BuildWithUploadUrl, z.ZodTypeDef, unknown> = z.object({
        buildTag: z.nullable(z.string()).optional(),
        regionalContainerTags: z.array(
            z.lazy(() => BuildWithUploadUrlRegionalContainerTags$.inboundSchema)
        ),
        imageSize: z.number().int(),
        status: BuildStatus$.inboundSchema,
        deletedAt: z.nullable(
            z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
        ),
        finishedAt: z.nullable(
            z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
        ),
        startedAt: z.nullable(
            z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
        ),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        createdBy: z.string(),
        buildId: z.number().int(),
        appId: z.string(),
        uploadBodyParams: z.array(z.lazy(() => UploadBodyParams$.inboundSchema)),
        uploadUrl: z.string(),
    });

    export type Outbound = {
        buildTag?: string | null | undefined;
        regionalContainerTags: Array<BuildWithUploadUrlRegionalContainerTags$.Outbound>;
        imageSize: number;
        status: string;
        deletedAt: string | null;
        finishedAt: string | null;
        startedAt: string | null;
        createdAt: string;
        createdBy: string;
        buildId: number;
        appId: string;
        uploadBodyParams: Array<UploadBodyParams$.Outbound>;
        uploadUrl: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BuildWithUploadUrl> = z.object({
        buildTag: z.nullable(z.string()).optional(),
        regionalContainerTags: z.array(
            z.lazy(() => BuildWithUploadUrlRegionalContainerTags$.outboundSchema)
        ),
        imageSize: z.number().int(),
        status: BuildStatus$.outboundSchema,
        deletedAt: z.nullable(z.date().transform((v) => v.toISOString())),
        finishedAt: z.nullable(z.date().transform((v) => v.toISOString())),
        startedAt: z.nullable(z.date().transform((v) => v.toISOString())),
        createdAt: z.date().transform((v) => v.toISOString()),
        createdBy: z.string(),
        buildId: z.number().int(),
        appId: z.string(),
        uploadBodyParams: z.array(z.lazy(() => UploadBodyParams$.outboundSchema)),
        uploadUrl: z.string(),
    });
}
