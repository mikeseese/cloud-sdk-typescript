/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BuildPart,
  BuildPart$inboundSchema,
  BuildPart$Outbound,
  BuildPart$outboundSchema,
} from "./buildpart.js";
import {
  BuildStatus,
  BuildStatus$inboundSchema,
  BuildStatus$outboundSchema,
} from "./buildstatus.js";
import {
  Region,
  Region$inboundSchema,
  Region$outboundSchema,
} from "./region.js";

export type BuildWithMultipartUrlsRegionalContainerTags = {
  containerTag: string;
  region: Region;
};

/**
 * A build represents a game server artifact and its associated metadata.
 */
export type BuildWithMultipartUrls = {
  buildTag?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  regionalContainerTags: Array<BuildWithMultipartUrlsRegionalContainerTags>;
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
  createdBy: string;
  /**
   * System generated id for a build. Increments by 1.
   */
  buildId: number;
  /**
   * System generated unique identifier for an application.
   */
  appId: string;
  completeUploadPostRequestUrl: string;
  maxChunkSize: number;
  uploadParts: Array<BuildPart>;
};

/** @internal */
export const BuildWithMultipartUrlsRegionalContainerTags$inboundSchema:
  z.ZodType<
    BuildWithMultipartUrlsRegionalContainerTags,
    z.ZodTypeDef,
    unknown
  > = z.object({
    containerTag: z.string(),
    region: Region$inboundSchema,
  });

/** @internal */
export type BuildWithMultipartUrlsRegionalContainerTags$Outbound = {
  containerTag: string;
  region: string;
};

/** @internal */
export const BuildWithMultipartUrlsRegionalContainerTags$outboundSchema:
  z.ZodType<
    BuildWithMultipartUrlsRegionalContainerTags$Outbound,
    z.ZodTypeDef,
    BuildWithMultipartUrlsRegionalContainerTags
  > = z.object({
    containerTag: z.string(),
    region: Region$outboundSchema,
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuildWithMultipartUrlsRegionalContainerTags$ {
  /** @deprecated use `BuildWithMultipartUrlsRegionalContainerTags$inboundSchema` instead. */
  export const inboundSchema =
    BuildWithMultipartUrlsRegionalContainerTags$inboundSchema;
  /** @deprecated use `BuildWithMultipartUrlsRegionalContainerTags$outboundSchema` instead. */
  export const outboundSchema =
    BuildWithMultipartUrlsRegionalContainerTags$outboundSchema;
  /** @deprecated use `BuildWithMultipartUrlsRegionalContainerTags$Outbound` instead. */
  export type Outbound = BuildWithMultipartUrlsRegionalContainerTags$Outbound;
}

/** @internal */
export const BuildWithMultipartUrls$inboundSchema: z.ZodType<
  BuildWithMultipartUrls,
  z.ZodTypeDef,
  unknown
> = z.object({
  buildTag: z.nullable(z.string()).optional(),
  regionalContainerTags: z.array(
    z.lazy(() => BuildWithMultipartUrlsRegionalContainerTags$inboundSchema),
  ),
  imageSize: z.number().int(),
  status: BuildStatus$inboundSchema,
  deletedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  finishedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  startedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  createdBy: z.string(),
  buildId: z.number().int(),
  appId: z.string(),
  completeUploadPostRequestUrl: z.string(),
  maxChunkSize: z.number(),
  uploadParts: z.array(BuildPart$inboundSchema),
});

/** @internal */
export type BuildWithMultipartUrls$Outbound = {
  buildTag?: string | null | undefined;
  regionalContainerTags: Array<
    BuildWithMultipartUrlsRegionalContainerTags$Outbound
  >;
  imageSize: number;
  status: string;
  deletedAt: string | null;
  finishedAt: string | null;
  startedAt: string | null;
  createdAt: string;
  createdBy: string;
  buildId: number;
  appId: string;
  completeUploadPostRequestUrl: string;
  maxChunkSize: number;
  uploadParts: Array<BuildPart$Outbound>;
};

/** @internal */
export const BuildWithMultipartUrls$outboundSchema: z.ZodType<
  BuildWithMultipartUrls$Outbound,
  z.ZodTypeDef,
  BuildWithMultipartUrls
> = z.object({
  buildTag: z.nullable(z.string()).optional(),
  regionalContainerTags: z.array(
    z.lazy(() => BuildWithMultipartUrlsRegionalContainerTags$outboundSchema),
  ),
  imageSize: z.number().int(),
  status: BuildStatus$outboundSchema,
  deletedAt: z.nullable(z.date().transform(v => v.toISOString())),
  finishedAt: z.nullable(z.date().transform(v => v.toISOString())),
  startedAt: z.nullable(z.date().transform(v => v.toISOString())),
  createdAt: z.date().transform(v => v.toISOString()),
  createdBy: z.string(),
  buildId: z.number().int(),
  appId: z.string(),
  completeUploadPostRequestUrl: z.string(),
  maxChunkSize: z.number(),
  uploadParts: z.array(BuildPart$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuildWithMultipartUrls$ {
  /** @deprecated use `BuildWithMultipartUrls$inboundSchema` instead. */
  export const inboundSchema = BuildWithMultipartUrls$inboundSchema;
  /** @deprecated use `BuildWithMultipartUrls$outboundSchema` instead. */
  export const outboundSchema = BuildWithMultipartUrls$outboundSchema;
  /** @deprecated use `BuildWithMultipartUrls$Outbound` instead. */
  export type Outbound = BuildWithMultipartUrls$Outbound;
}
