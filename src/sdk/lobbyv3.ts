/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import { SecurityInput } from "../lib/security";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";
import * as z from "zod";

export class LobbyV3 extends ClientSDK {
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
     * Create a new lobby for an [application](https://hathora.dev/docs/concepts/hathora-entities#application). A lobby object is a wrapper around a [room](https://hathora.dev/docs/concepts/hathora-entities#room) object. With a lobby, you get additional functionality like configuring the visibility of the room, managing the state of a match, and retrieving a list of public lobbies to display to players.
     */
    async createLobby(
        security: operations.CreateLobbySecurity,
        createLobbyV3Params: components.CreateLobbyV3Params,
        appId?: string | undefined,
        shortCode?: string | undefined,
        roomId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.LobbyV3> {
        const input$: operations.CreateLobbyRequest = {
            createLobbyV3Params: createLobbyV3Params,
            appId: appId,
            shortCode: shortCode,
            roomId: roomId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateLobbyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.CreateLobbyV3Params, { explode: true });

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/lobby/v3/{appId}/create")(pathParams$);

        const query$ = [
            enc$.encodeForm("roomId", payload$.roomId, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("shortCode", payload$.shortCode, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "Authorization",
                    type: "http:bearer",
                    value: security?.playerAuth,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = { operationID: "CreateLobby", oAuth2Scopes: [], securitySource: security$ };

        const doOptions = {
            context,
            errorCodes: ["400", "401", "402", "404", "422", "429", "4XX", "500", "5XX"],
        };
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
                    return components.LobbyV3$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else if (
            this.matchResponse(response, [400, 401, 402, 404, 422, 429, 500], "application/json")
        ) {
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
     * Get all active lobbies for a given [application](https://hathora.dev/docs/concepts/hathora-entities#application). Filter the array by optionally passing in a `region`. Use this endpoint to display all public lobbies that a player can join in the game client.
     */
    async listActivePublicLobbies(
        appId?: string | undefined,
        region?: components.Region | undefined,
        options?: RequestOptions
    ): Promise<Array<components.LobbyV3>> {
        const input$: operations.ListActivePublicLobbiesRequest = {
            appId: appId,
            region: region,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListActivePublicLobbiesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/lobby/v3/{appId}/list/public")(pathParams$);

        const query$ = [
            enc$.encodeForm("region", payload$.region, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const context = {
            operationID: "ListActivePublicLobbies",
            oAuth2Scopes: [],
            securitySource: null,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
            options
        );

        const response = await this.do$(request$, doOptions);

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return z.array(components.LobbyV3$.inboundSchema).parse(val$);
                },
                "Response validation failed"
            );
            return result;
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
     * Get details for a lobby.
     */
    async getLobbyInfoByRoomId(
        roomId: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.LobbyV3> {
        const input$: operations.GetLobbyInfoByRoomIdRequest = {
            roomId: roomId,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetLobbyInfoByRoomIdRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            roomId: enc$.encodeSimple("roomId", payload$.roomId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/lobby/v3/{appId}/info/roomid/{roomId}")(
            pathParams$
        );

        const query$ = "";

        const context = {
            operationID: "GetLobbyInfoByRoomId",
            oAuth2Scopes: [],
            securitySource: null,
        };

        const doOptions = { context, errorCodes: ["404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return components.LobbyV3$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 404, "application/json")) {
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
     * Get details for a lobby. If 2 or more lobbies have the same `shortCode`, then the most recently created lobby will be returned.
     */
    async getLobbyInfoByShortCode(
        shortCode: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.LobbyV3> {
        const input$: operations.GetLobbyInfoByShortCodeRequest = {
            shortCode: shortCode,
            appId: appId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetLobbyInfoByShortCodeRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: enc$.encodeSimple("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            shortCode: enc$.encodeSimple("shortCode", payload$.shortCode, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/lobby/v3/{appId}/info/shortcode/{shortCode}")(
            pathParams$
        );

        const query$ = "";

        const context = {
            operationID: "GetLobbyInfoByShortCode",
            oAuth2Scopes: [],
            securitySource: null,
        };

        const doOptions = { context, errorCodes: ["404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return components.LobbyV3$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 404, "application/json")) {
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
