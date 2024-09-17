/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsV2CreateDeploymentV2Deprecated } from "../funcs/deploymentsV2CreateDeploymentV2Deprecated.js";
import { deploymentsV2GetDeploymentInfoV2Deprecated } from "../funcs/deploymentsV2GetDeploymentInfoV2Deprecated.js";
import { deploymentsV2GetDeploymentsV2Deprecated } from "../funcs/deploymentsV2GetDeploymentsV2Deprecated.js";
import { deploymentsV2GetLatestDeploymentV2Deprecated } from "../funcs/deploymentsV2GetLatestDeploymentV2Deprecated.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DeploymentsV2 extends ClientSDK {
  /**
   * Returns an array of [deployments](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
   */
  async getDeploymentsV2Deprecated(
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.DeploymentV2>> {
    return unwrapAsync(deploymentsV2GetDeploymentsV2Deprecated(
      this,
      appId,
      options,
    ));
  }

  /**
   * Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
   */
  async getLatestDeploymentV2Deprecated(
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.DeploymentV2> {
    return unwrapAsync(deploymentsV2GetLatestDeploymentV2Deprecated(
      this,
      appId,
      options,
    ));
  }

  /**
   * Get details for a [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment).
   */
  async getDeploymentInfoV2Deprecated(
    deploymentId: number,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.DeploymentV2> {
    return unwrapAsync(deploymentsV2GetDeploymentInfoV2Deprecated(
      this,
      deploymentId,
      appId,
      options,
    ));
  }

  /**
   * Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment). Creating a new deployment means all new rooms created will use the latest deployment configuration, but existing games in progress will not be affected.
   */
  async createDeploymentV2Deprecated(
    buildId: number,
    deploymentConfigV2: components.DeploymentConfigV2,
    appId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.DeploymentV2> {
    return unwrapAsync(deploymentsV2CreateDeploymentV2Deprecated(
      this,
      buildId,
      deploymentConfigV2,
      appId,
      options,
    ));
  }
}
