/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { HathoraCloudCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Delete a [build](https://hathora.dev/docs/concepts/hathora-entities#build). All associated metadata is deleted.
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export async function buildsV2DeleteBuildV2Deprecated(
  client$: HathoraCloudCore,
  buildId: number,
  appId?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    void,
    | errors.ApiError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.DeleteBuildV2DeprecatedRequest = {
    appId: appId,
    buildId: buildId,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.DeleteBuildV2DeprecatedRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    appId: encodeSimple$("appId", payload$.appId ?? client$.options$.appId, {
      explode: false,
      charEncoding: "percent",
    }),
    buildId: encodeSimple$("buildId", payload$.buildId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/builds/v2/{appId}/delete/{buildId}")(pathParams$);

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const hathoraDevToken$ = await extractSecurity(
    client$.options$.hathoraDevToken,
  );
  const security$ = hathoraDevToken$ == null
    ? {}
    : { hathoraDevToken: hathoraDevToken$ };
  const context = {
    operationID: "DeleteBuildV2Deprecated",
    oAuth2Scopes: [],
    securitySource: client$.options$.hathoraDevToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "DELETE",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["401", "404", "422", "429", "4XX", "500", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    HttpMeta: { Response: response, Request: request$ },
  };

  const [result$] = await m$.match<
    void,
    | errors.ApiError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.nil(204, z.void()),
    m$.jsonErr([401, 404, 422, 429, 500], errors.ApiError$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
