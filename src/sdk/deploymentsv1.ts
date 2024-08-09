/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsV1CreateDeploymentDeprecated } from "../funcs/deploymentsV1CreateDeploymentDeprecated.js";
import { deploymentsV1GetDeploymentInfoDeprecated } from "../funcs/deploymentsV1GetDeploymentInfoDeprecated.js";
import { deploymentsV1GetDeploymentsDeprecated } from "../funcs/deploymentsV1GetDeploymentsDeprecated.js";
import { deploymentsV1GetLatestDeploymentDeprecated } from "../funcs/deploymentsV1GetLatestDeploymentDeprecated.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DeploymentsV1 extends ClientSDK {
    /**
     * Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getDeploymentsDeprecated(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<components.Deployment>> {
        return unwrapAsync(deploymentsV1GetDeploymentsDeprecated(this, appId, options));
    }

    /**
     * Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getLatestDeploymentDeprecated(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Deployment> {
        return unwrapAsync(deploymentsV1GetLatestDeploymentDeprecated(this, appId, options));
    }

    /**
     * Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async getDeploymentInfoDeprecated(
        deploymentId: number,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Deployment> {
        return unwrapAsync(
            deploymentsV1GetDeploymentInfoDeprecated(this, deploymentId, appId, options)
        );
    }

    /**
     * Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.
     *
     * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    async createDeploymentDeprecated(
        buildId: number,
        deploymentConfig: components.DeploymentConfig,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.Deployment> {
        return unwrapAsync(
            deploymentsV1CreateDeploymentDeprecated(this, buildId, deploymentConfig, appId, options)
        );
    }
}
