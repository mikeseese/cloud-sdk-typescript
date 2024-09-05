/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsV3CreateDeployment } from "../funcs/deploymentsV3CreateDeployment.js";
import { deploymentsV3GetDeployment } from "../funcs/deploymentsV3GetDeployment.js";
import { deploymentsV3GetDeployments } from "../funcs/deploymentsV3GetDeployments.js";
import { deploymentsV3GetLatestDeployment } from "../funcs/deploymentsV3GetLatestDeployment.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DeploymentsV3 extends ClientSDK {
    /**
     * Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    async getDeployments(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.DeploymentsV3Page> {
        return unwrapAsync(deploymentsV3GetDeployments(this, appId, options));
    }

    /**
     * Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.
     */
    async createDeployment(
        deploymentConfigV3: components.DeploymentConfigV3,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.DeploymentV3> {
        return unwrapAsync(deploymentsV3CreateDeployment(this, deploymentConfigV3, appId, options));
    }

    /**
     * Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     */
    async getLatestDeployment(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.DeploymentV3> {
        return unwrapAsync(deploymentsV3GetLatestDeployment(this, appId, options));
    }

    /**
     * Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).
     */
    async getDeployment(
        deploymentId: string,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.DeploymentV3> {
        return unwrapAsync(deploymentsV3GetDeployment(this, deploymentId, appId, options));
    }
}
