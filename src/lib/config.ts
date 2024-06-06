/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { Params, pathToFunc } from "./url";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.hathora.dev", "https:///"] as const;

export type SDKOptions = {
    hathoraDevToken?: string | (() => Promise<string>);

    /**
     * Allows setting the appId parameter for all supported operations
     */
    appId?: string | undefined;

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const params: Params = {};

    if (!serverURL) {
        const serverIdx = options.serverIdx ?? 0;
        if (serverIdx < 0 || serverIdx >= ServerList.length) {
            throw new Error(`Invalid server index ${serverIdx}`);
        }
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "0.0.1",
    sdkVersion: "2.3.0",
    genVersion: "2.338.14",
    userAgent: "speakeasy-sdk/typescript 2.3.0 2.338.14 0.0.1 @hathora/cloud-sdk-typescript",
} as const;
