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
import * as z from "zod";

export class ProcessesV2 extends ClientSDK {
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
     * Get details for a [process](https://hathora.dev/docs/concepts/hathora-entities#process).
     */
    async getProcessInfo(
        processId: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.ProcessV2> {
        const input$: operations.GetProcessInfoRequest = {
            processId: processId,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetProcessInfoRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            processId: enc$.encodeSimple("processId", payload$.processId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/processes/v2/{appId}/info/{processId}")(
            pathParams$
        );

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
            operationID: "GetProcessInfo",
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
                    return components.ProcessV2$.inboundSchema.parse(val$);
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
     * Retrieve the 10 most recent [processes](https://hathora.dev/docs/concepts/hathora-entities#process) objects for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `status` or `region`.
     */
    async getLatestProcesses(
        appId?: string | undefined,
        status?: Array<components.ProcessStatus> | undefined,
        region?: Array<components.Region> | undefined,
        options?: RequestOptions
    ): Promise<Array<components.ProcessV2>> {
        const input$: operations.GetLatestProcessesRequest = {
            appId: appId,
            status: status,
            region: region,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetLatestProcessesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/processes/v2/{appId}/list/latest")(pathParams$);

        const query$ = [
            enc$.encodeForm("region", payload$.region, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("status", payload$.status, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetLatestProcesses",
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
                    return z.array(components.ProcessV2$.inboundSchema).parse(val$);
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
     * Stops a [process](https://hathora.dev/docs/concepts/hathora-entities#process) immediately.
     */
    async stopProcess(
        processId: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.StopProcessResponse | void> {
        const input$: operations.StopProcessRequest = {
            processId: processId,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.StopProcessRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            processId: enc$.encodeSimple("processId", payload$.processId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/processes/v2/{appId}/stop/{processId}")(
            pathParams$
        );

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
            operationID: "StopProcess",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "404", "4XX", "500", "5XX"] };
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

        if (this.matchStatusCode(response, 204)) {
            return;
        } else if (this.matchResponse(response, [401, 404, 500], "application/json")) {
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
     * Creates a [process](https://hathora.dev/docs/concepts/hathora-entities#process) without a room. Use this to pre-allocate processes ahead of time so that subsequent room assignment via [CreateRoom()](https://hathora.dev/api#tag/RoomV2/operation/CreateRoom) can be instant.
     */
    async createProcess(
        region: components.Region,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.ProcessV2> {
        const input$: operations.CreateProcessRequest = {
            region: region,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateProcessRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            region: enc$.encodeSimple("region", payload$.region, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/processes/v2/{appId}/create/{region}")(
            pathParams$
        );

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
            operationID: "CreateProcess",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["401", "402", "404", "4XX", "500", "5XX"] };
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
                    return components.ProcessV2$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, [401, 402, 404, 500], "application/json")) {
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
