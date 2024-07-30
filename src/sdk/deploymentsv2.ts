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

export class DeploymentsV2 extends ClientSDK {
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
     * Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    async getDeployments(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<components.DeploymentV2>> {
        const input$: operations.GetDeploymentsRequest = {
            appId: appId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetDeploymentsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/deployments/v2/{appId}/list")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetDeployments",
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

        const [result$] = await this.matcher<Array<components.DeploymentV2>>()
            .json(200, z.array(components.DeploymentV2$inboundSchema))
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    async getLatestDeployment(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.DeploymentV2> {
        const input$: operations.GetLatestDeploymentRequest = {
            appId: appId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetLatestDeploymentRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/deployments/v2/{appId}/latest")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetLatestDeployment",
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

        const [result$] = await this.matcher<components.DeploymentV2>()
            .json(200, components.DeploymentV2$inboundSchema)
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).
     */
    async getDeploymentInfo(
        deploymentId: number,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.DeploymentV2> {
        const input$: operations.GetDeploymentInfoRequest = {
            appId: appId,
            deploymentId: deploymentId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetDeploymentInfoRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            appId: encodeSimple$("appId", payload$.appId ?? this.options$.appId, {
                explode: false,
                charEncoding: "percent",
            }),
            deploymentId: encodeSimple$("deploymentId", payload$.deploymentId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/deployments/v2/{appId}/info/{deploymentId}")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const hathoraDevToken$ = await extractSecurity(this.options$.hathoraDevToken);
        const security$ = hathoraDevToken$ == null ? {} : { hathoraDevToken: hathoraDevToken$ };
        const context = {
            operationID: "GetDeploymentInfo",
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

        const [result$] = await this.matcher<components.DeploymentV2>()
            .json(200, components.DeploymentV2$inboundSchema)
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.
     */
    async createDeployment(
        buildId: number,
        deploymentConfigV2: components.DeploymentConfigV2,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.DeploymentV2> {
        const input$: operations.CreateDeploymentRequest = {
            appId: appId,
            buildId: buildId,
            deploymentConfigV2: deploymentConfigV2,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateDeploymentRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.DeploymentConfigV2, { explode: true });

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
        const path$ = this.templateURLComponent("/deployments/v2/{appId}/create/{buildId}")(
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
            operationID: "CreateDeployment",
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
            errorCodes: ["400", "401", "404", "422", "429", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DeploymentV2>()
            .json(201, components.DeploymentV2$inboundSchema)
            .json([400, 401, 404, 422, 429, 500], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
