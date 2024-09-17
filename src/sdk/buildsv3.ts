/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { buildsV3CreateBuild } from "../funcs/buildsV3CreateBuild.js";
import { buildsV3DeleteBuild } from "../funcs/buildsV3DeleteBuild.js";
import { buildsV3GetBuild } from "../funcs/buildsV3GetBuild.js";
import { buildsV3GetBuilds } from "../funcs/buildsV3GetBuilds.js";
import { buildsV3RunBuild } from "../funcs/buildsV3RunBuild.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class BuildsV3 extends ClientSDK {
  /**
   * Returns an array of [builds](https://hathora.dev/docs/concepts/hathora-entities#build) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
   */
  async getBuilds(
    orgId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.BuildsV3Page> {
    return unwrapAsync(buildsV3GetBuilds(
      this,
      orgId,
      options,
    ));
  }

  /**
   * Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build) with optional `multipartUploadUrls` that can be used to upload larger builds in parts before calling `runBuild`. Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
   */
  async createBuild(
    createMultipartBuildParams: components.CreateMultipartBuildParams,
    orgId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.CreatedBuildV3WithMultipartUrls> {
    return unwrapAsync(buildsV3CreateBuild(
      this,
      createMultipartBuildParams,
      orgId,
      options,
    ));
  }

  /**
   * Get details for a [build](https://hathora.dev/docs/concepts/hathora-entities#build).
   */
  async getBuild(
    buildId: string,
    orgId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.BuildV3> {
    return unwrapAsync(buildsV3GetBuild(
      this,
      buildId,
      orgId,
      options,
    ));
  }

  /**
   * Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.
   * Be careful which builds you delete. This endpoint does not prevent you from deleting actively used builds.
   * Deleting a build that is actively build used by an app's deployment will cause failures when creating rooms.
   */
  async deleteBuild(
    buildId: string,
    orgId?: string | undefined,
    options?: RequestOptions,
  ): Promise<components.DeletedBuild> {
    return unwrapAsync(buildsV3DeleteBuild(
      this,
      buildId,
      orgId,
      options,
    ));
  }

  /**
   * Builds a game server artifact from a tarball you provide. Pass in the `buildId` generated from [`CreateBuild()`](https://hathora.dev/api#tag/BuildV1/operation/CreateBuild).
   */
  async runBuild(
    buildId: string,
    orgId?: string | undefined,
    options?: RequestOptions,
  ): Promise<ReadableStream<Uint8Array>> {
    return unwrapAsync(buildsV3RunBuild(
      this,
      buildId,
      orgId,
      options,
    ));
  }
}
