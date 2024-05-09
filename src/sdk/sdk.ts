/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { AppV1 } from "./appv1";
import { AuthV1 } from "./authv1";
import { BillingV1 } from "./billingv1";
import { BuildV1 } from "./buildv1";
import { BuildV2 } from "./buildv2";
import { DeploymentV1 } from "./deploymentv1";
import { DeploymentV2 } from "./deploymentv2";
import { DiscoveryV1 } from "./discoveryv1";
import { LobbyV1 } from "./lobbyv1";
import { LobbyV2 } from "./lobbyv2";
import { LobbyV3 } from "./lobbyv3";
import { LogV1 } from "./logv1";
import { ManagementV1 } from "./managementv1";
import { MetricsV1 } from "./metricsv1";
import { OrganizationsV1 } from "./organizationsv1";
import { OrgTokensV1 } from "./orgtokensv1";
import { ProcessesV1 } from "./processesv1";
import { ProcessesV2 } from "./processesv2";
import { RoomV1 } from "./roomv1";
import { RoomV2 } from "./roomv2";

export class HathoraCloud extends ClientSDK {
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

    private _appV1?: AppV1;
    get appV1(): AppV1 {
        return (this._appV1 ??= new AppV1(this.options$));
    }

    private _authV1?: AuthV1;
    get authV1(): AuthV1 {
        return (this._authV1 ??= new AuthV1(this.options$));
    }

    private _billingV1?: BillingV1;
    get billingV1(): BillingV1 {
        return (this._billingV1 ??= new BillingV1(this.options$));
    }

    private _buildV1?: BuildV1;
    get buildV1(): BuildV1 {
        return (this._buildV1 ??= new BuildV1(this.options$));
    }

    private _buildV2?: BuildV2;
    get buildV2(): BuildV2 {
        return (this._buildV2 ??= new BuildV2(this.options$));
    }

    private _deploymentV1?: DeploymentV1;
    get deploymentV1(): DeploymentV1 {
        return (this._deploymentV1 ??= new DeploymentV1(this.options$));
    }

    private _deploymentV2?: DeploymentV2;
    get deploymentV2(): DeploymentV2 {
        return (this._deploymentV2 ??= new DeploymentV2(this.options$));
    }

    private _discoveryV1?: DiscoveryV1;
    get discoveryV1(): DiscoveryV1 {
        return (this._discoveryV1 ??= new DiscoveryV1(this.options$));
    }

    private _lobbyV1?: LobbyV1;
    get lobbyV1(): LobbyV1 {
        return (this._lobbyV1 ??= new LobbyV1(this.options$));
    }

    private _lobbyV2?: LobbyV2;
    get lobbyV2(): LobbyV2 {
        return (this._lobbyV2 ??= new LobbyV2(this.options$));
    }

    private _lobbyV3?: LobbyV3;
    get lobbyV3(): LobbyV3 {
        return (this._lobbyV3 ??= new LobbyV3(this.options$));
    }

    private _logV1?: LogV1;
    get logV1(): LogV1 {
        return (this._logV1 ??= new LogV1(this.options$));
    }

    private _managementV1?: ManagementV1;
    get managementV1(): ManagementV1 {
        return (this._managementV1 ??= new ManagementV1(this.options$));
    }

    private _metricsV1?: MetricsV1;
    get metricsV1(): MetricsV1 {
        return (this._metricsV1 ??= new MetricsV1(this.options$));
    }

    private _organizationsV1?: OrganizationsV1;
    get organizationsV1(): OrganizationsV1 {
        return (this._organizationsV1 ??= new OrganizationsV1(this.options$));
    }

    private _processesV1?: ProcessesV1;
    get processesV1(): ProcessesV1 {
        return (this._processesV1 ??= new ProcessesV1(this.options$));
    }

    private _processesV2?: ProcessesV2;
    get processesV2(): ProcessesV2 {
        return (this._processesV2 ??= new ProcessesV2(this.options$));
    }

    private _roomV1?: RoomV1;
    get roomV1(): RoomV1 {
        return (this._roomV1 ??= new RoomV1(this.options$));
    }

    private _roomV2?: RoomV2;
    get roomV2(): RoomV2 {
        return (this._roomV2 ??= new RoomV2(this.options$));
    }

    private _orgTokensV1?: OrgTokensV1;
    get orgTokensV1(): OrgTokensV1 {
        return (this._orgTokensV1 ??= new OrgTokensV1(this.options$));
    }
}
