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
import * as z from "zod";

export class TokensV1 extends ClientSDK {
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
     * List all organization tokens for a given org.
     */
    async getOrgTokens(orgId: string, options?: RequestOptions): Promise<components.ListOrgTokens> {
        const input$: operations.GetOrgTokensRequest = {
            orgId: orgId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOrgTokensRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/tokens/v1/orgs/{orgId}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetOrgTokens",
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
            errorCodes: ["401", "404", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.ListOrgTokens>()
            .json(200, components.ListOrgTokens$inboundSchema)
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create a new organization token.
     */
    async createOrgToken(
        orgId: string,
        createOrgToken: components.CreateOrgToken,
        options?: RequestOptions
    ): Promise<components.CreatedOrgToken> {
        const input$: operations.CreateOrgTokenRequest = {
            orgId: orgId,
            createOrgToken: createOrgToken,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateOrgTokenRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CreateOrgToken, { explode: true });

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/tokens/v1/orgs/{orgId}/create")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "CreateOrgToken",
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
            errorCodes: ["401", "404", "422", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.CreatedOrgToken>()
            .json(201, components.CreatedOrgToken$inboundSchema)
            .json([401, 404, 422, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Revoke an organization token.
     */
    async revokeOrgToken(
        orgId: string,
        orgTokenId: string,
        options?: RequestOptions
    ): Promise<boolean> {
        const input$: operations.RevokeOrgTokenRequest = {
            orgId: orgId,
            orgTokenId: orgTokenId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RevokeOrgTokenRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
            orgTokenId: encodeSimple$("orgTokenId", payload$.orgTokenId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/tokens/v1/orgs/{orgId}/tokens/{orgTokenId}/revoke"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "RevokeOrgToken",
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
            errorCodes: ["401", "404", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<boolean>()
            .json(200, z.boolean())
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
