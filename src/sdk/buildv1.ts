/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";
import { isBlobLike } from "../types";
import * as z from "zod";

export class BuildV1 extends ClientSDK {
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
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getBuildsDeprecated(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<components.Build>> {
        const input$: operations.GetBuildsDeprecatedRequest = {
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetBuildsDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v1/{appId}/list")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetBuildsDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request$,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return z.array(components.Build$.inboundSchema).parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, [401, 404], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getBuildInfoDeprecated(
        buildId: number,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Build> {
        const input$: operations.GetBuildInfoDeprecatedRequest = {
            buildId: buildId,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetBuildInfoDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            buildId: enc$.encodeSimple("buildId", payload$.buildId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v1/{appId}/info/{buildId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetBuildInfoDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request$,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return components.Build$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, [401, 404], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createBuildDeprecated(
        createBuildParams: components.CreateBuildParams,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Build> {
        const input$: operations.CreateBuildDeprecatedRequest = {
            createBuildParams: createBuildParams,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateBuildDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.CreateBuildParams, { explode: true });

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v1/{appId}/create")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "CreateBuildDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "429", "4XX", "500", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request$,
            },
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return components.Build$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, [401, 404, 429, 500], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async runBuildDeprecated(
        buildId: number,
        requestBody: operations.RunBuildDeprecatedRequestBody,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<string> {
        const input$: operations.RunBuildDeprecatedRequest = {
            buildId: buildId,
            requestBody: requestBody,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "text/plain");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RunBuildDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = new FormData();

        if (isBlobLike(payload$.RequestBody.file)) {
            body$.append("file", payload$.RequestBody.file);
        } else {
            body$.append(
                "file",
                new Blob([payload$.RequestBody.file.content], { type: "application/octet-stream" }),
                payload$.RequestBody.file.fileName
            );
        }

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            buildId: enc$.encodeSimple("buildId", payload$.buildId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v1/{appId}/run/{buildId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "RunBuildDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "429", "4XX", "500", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request$,
            },
        };

        if (this.matchResponse(response, 200, "text/plain")) {
            const responseBody = await response.text();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return z.string().parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, [401, 404, 429, 500], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async deleteBuildDeprecated(
        buildId: number,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.DeleteBuildDeprecatedResponse | void> {
        const input$: operations.DeleteBuildDeprecatedRequest = {
            buildId: buildId,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteBuildDeprecatedRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            buildId: enc$.encodeSimple("buildId", payload$.buildId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/builds/v1/{appId}/delete/{buildId}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "DeleteBuildDeprecated",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "422", "4XX", "500", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request$,
            },
        };

        if (this.matchStatusCode(response, 204)) {
            return;
        } else if (this.matchResponse(response, [401, 404, 422, 500], "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.ApiError$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }
}
