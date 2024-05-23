/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64";
import { blobLikeSchema } from "../../types";
import * as z from "zod";

export type RunBuildGlobals = {
    appId?: string | undefined;
};

export type RunBuildFile = {
    fileName: string;
    content: Uint8Array | string;
};

export type RunBuildRequestBody = {
    file: RunBuildFile | Blob;
};

export type RunBuildRequest = {
    appId?: string | undefined;
    buildId: number;
    requestBody: RunBuildRequestBody;
};

/** @internal */
export namespace RunBuildGlobals$ {
    export const inboundSchema: z.ZodType<RunBuildGlobals, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildGlobals> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace RunBuildFile$ {
    export const inboundSchema: z.ZodType<RunBuildFile, z.ZodTypeDef, unknown> = z
        .object({
            fileName: z.string(),
            content: b64$.zodInbound,
        })
        .transform((v) => {
            return {
                fileName: v.fileName,
                content: v.content,
            };
        });

    export type Outbound = {
        fileName: string;
        content: Uint8Array;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildFile> = z
        .object({
            fileName: z.string(),
            content: b64$.zodOutbound,
        })
        .transform((v) => {
            return {
                fileName: v.fileName,
                content: v.content,
            };
        });
}

/** @internal */
export namespace RunBuildRequestBody$ {
    export const inboundSchema: z.ZodType<RunBuildRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            file: z.lazy(() => RunBuildFile$.inboundSchema),
        })
        .transform((v) => {
            return {
                file: v.file,
            };
        });

    export type Outbound = {
        file: RunBuildFile$.Outbound | Blob;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildRequestBody> = z
        .object({
            file: z.lazy(() => RunBuildFile$.outboundSchema).or(blobLikeSchema),
        })
        .transform((v) => {
            return {
                file: v.file,
            };
        });
}

/** @internal */
export namespace RunBuildRequest$ {
    export const inboundSchema: z.ZodType<RunBuildRequest, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
            buildId: z.number().int(),
            RequestBody: z.lazy(() => RunBuildRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                buildId: v.buildId,
                requestBody: v.RequestBody,
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        buildId: number;
        RequestBody: RunBuildRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunBuildRequest> = z
        .object({
            appId: z.string().optional(),
            buildId: z.number().int(),
            requestBody: z.lazy(() => RunBuildRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                buildId: v.buildId,
                RequestBody: v.requestBody,
            };
        });
}
