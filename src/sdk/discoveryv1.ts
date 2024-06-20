/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as z from "zod";

export class DiscoveryV1 extends ClientSDK {
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
     * Returns an array of V1 regions with a host and port that a client can directly ping. Open a websocket connection to `wss://<host>:<port>/ws` and send a packet. To calculate ping, measure the time it takes to get an echo packet back.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getPingServiceEndpointsDeprecated(
        options?: RequestOptions
    ): Promise<Array<components.PingEndpoints>> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/discovery/v1/ping")();

        const query$ = "";

        const context = {
            operationID: "GetPingServiceEndpointsDeprecated",
            oAuth2Scopes: [],
            securitySource: null,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            { method: "GET", path: path$, headers: headers$, query: query$ },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<Array<components.PingEndpoints>>()
            .json(200, z.array(components.PingEndpoints$.inboundSchema))
            .fail(["4XX", "5XX"])
            .match(response);

        return result$;
    }
}
