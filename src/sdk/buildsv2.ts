/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import { isBlobLike } from "../types/blobs.js";
import * as z from "zod";

export class BuildsV2 extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    async getBuilds(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<components.Build>> {
        const input$: operations.GetBuildsRequest = {
            appId: appId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetBuildsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v2/{appId}/list")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetBuilds",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.Build>>()
            .json(200, z.array(components.Build$inboundSchema))
            .json([401, 404], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
     */
    async getBuildInfo(
        buildId: number,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Build> {
        const input$: operations.GetBuildInfoRequest = {
            appId: appId,
            buildId: buildId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetBuildInfoRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            buildId: encodeSimple$("buildId", payload$.buildId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v2/{appId}/info/{buildId}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetBuildInfo",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Build>()
            .json(200, components.Build$inboundSchema)
            .json([401, 404], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
     */
    async createBuild(
        createBuildParams: components.CreateBuildParams,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Build> {
        const input$: operations.CreateBuildRequest = {
            appId: appId,
            createBuildParams: createBuildParams,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateBuildRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CreateBuildParams, { explode: true });

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v2/{appId}/create")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "CreateBuild",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "404", "429", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Build>()
            .json(201, components.Build$inboundSchema)
            .json([401, 404, 429, 500], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with optional `uploadUrl` that can be used to upload the build to before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
     */
    async createBuildWithUploadUrl(
        createBuildParams: components.CreateBuildParams,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.BuildWithUploadUrl> {
        const input$: operations.CreateBuildWithUploadUrlRequest = {
            appId: appId,
            createBuildParams: createBuildParams,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateBuildWithUploadUrlRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CreateBuildParams, { explode: true });

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v2/{appId}/createWithUploadUrl")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "CreateBuildWithUploadUrl",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "404", "429", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.BuildWithUploadUrl>()
            .json(201, components.BuildWithUploadUrl$inboundSchema)
            .json([401, 404, 429, 500], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.
     */
    async deleteBuild(
        buildId: number,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.DeleteBuildRequest = {
            appId: appId,
            buildId: buildId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteBuildRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            buildId: encodeSimple$("buildId", payload$.buildId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v2/{appId}/delete/{buildId}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "DeleteBuild",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "404", "422", "429", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json([401, 404, 422, 429, 500], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).
     */
    async runBuild(
        buildId: number,
        requestBody: operations.RunBuildRequestBody,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<ReadableStream<Uint8Array>> {
        const input$: operations.RunBuildRequest = {
            appId: appId,
            buildId: buildId,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RunBuildRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = new FormData();

        if (payload$.RequestBody.file !== undefined) {
            if (isBlobLike(payload$.RequestBody.file)) {
                body$.append("file", payload$.RequestBody.file);
            } else {
                body$.append(
                    "file",
                    new Blob([payload$.RequestBody.file.content], {
                        type: "application/octet-stream",
                    }),
                    payload$.RequestBody.file.fileName
                );
            }
        }

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            buildId: encodeSimple$("buildId", payload$.buildId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v2/{appId}/run/{buildId}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/octet-stream",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "RunBuild",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "404", "429", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<ReadableStream<Uint8Array>>()
            .stream(200, z.instanceof(ReadableStream<Uint8Array>))
            .json([400, 401, 404, 429, 500], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
