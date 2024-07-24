/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class OrganizationsV1 extends ClientSDK {
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
     * Returns an unsorted list of all organizations that you are a member of (an accepted membership invite). An organization is uniquely identified by an `orgId`.
     */
    async getOrgs(options?: RequestOptions): Promise<components.OrgsPage> {
        const path$ = this.templateURLComponent("/orgs/v1")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetOrgs",
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

        const [result$] = await this.matcher<components.OrgsPage>()
            .json(200, components.OrgsPage$inboundSchema)
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async getUserPendingInvites(
        options?: RequestOptions
    ): Promise<components.PendingOrgInvitesPage> {
        const path$ = this.templateURLComponent("/orgs/v1/user/invites/pending")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetUserPendingInvites",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.PendingOrgInvitesPage>()
            .json(200, components.PendingOrgInvitesPage$inboundSchema)
            .json([401, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async getOrgMembers(
        orgId: string,
        options?: RequestOptions
    ): Promise<components.OrgMembersPage> {
        const input$: operations.GetOrgMembersRequest = {
            orgId: orgId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOrgMembersRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/orgs/v1/{orgId}/members")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetOrgMembers",
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
            errorCodes: ["401", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.OrgMembersPage>()
            .json(200, components.OrgMembersPage$inboundSchema)
            .json([401, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async inviteUser(
        orgId: string,
        createUserInvite: components.CreateUserInvite,
        options?: RequestOptions
    ): Promise<components.PendingOrgInvite> {
        const input$: operations.InviteUserRequest = {
            orgId: orgId,
            createUserInvite: createUserInvite,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.InviteUserRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CreateUserInvite, { explode: true });

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/orgs/v1/{orgId}/invites")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "InviteUser",
            oAuth2Scopes: [],
            securitySource: this.options$.hathoraDevToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
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
            errorCodes: ["401", "422", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.PendingOrgInvite>()
            .json(200, components.PendingOrgInvite$inboundSchema)
            .json([401, 422, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async rescindInvite(
        orgId: string,
        rescindUserInvite: components.RescindUserInvite,
        options?: RequestOptions
    ): Promise<void> {
        const input$: operations.RescindInviteRequest = {
            orgId: orgId,
            rescindUserInvite: rescindUserInvite,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RescindInviteRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RescindUserInvite, { explode: true });

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/orgs/v1/{orgId}/invites/rescind")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "RescindInvite",
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

    async getOrgPendingInvites(
        orgId: string,
        options?: RequestOptions
    ): Promise<components.PendingOrgInvitesPage> {
        const input$: operations.GetOrgPendingInvitesRequest = {
            orgId: orgId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOrgPendingInvitesRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/orgs/v1/{orgId}/invites/pending")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetOrgPendingInvites",
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
            errorCodes: ["401", "429", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.PendingOrgInvitesPage>()
            .json(200, components.PendingOrgInvitesPage$inboundSchema)
            .json([401, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async acceptInvite(orgId: string, options?: RequestOptions): Promise<void> {
        const input$: operations.AcceptInviteRequest = {
            orgId: orgId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AcceptInviteRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/orgs/v1/{orgId}/invites/accept")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "AcceptInvite",
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

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    async rejectInvite(orgId: string, options?: RequestOptions): Promise<void> {
        const input$: operations.RejectInviteRequest = {
            orgId: orgId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RejectInviteRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            orgId: encodeSimple$("orgId", payload$.orgId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/orgs/v1/{orgId}/invites/reject")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.hathoraDevToken === "function") {
            security$ = { hathoraDevToken: await this.options$.hathoraDevToken() };
        } else if (this.options$.hathoraDevToken) {
            security$ = { hathoraDevToken: this.options$.hathoraDevToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "RejectInvite",
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

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .json([401, 404, 429], errors.ApiError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
