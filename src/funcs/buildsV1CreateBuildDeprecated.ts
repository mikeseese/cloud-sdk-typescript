/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HathoraCloudCore } from "../core.js";
import {
  encodeJSON as encodeJSON$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
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
 * Creates a new [build](https://hathora.dev/docs/concepts/hathora-entities#build). Responds with a `buildId` that you must pass to [`RunBuild()`](https://hathora.dev/api#tag/BuildV1/operation/RunBuild) to build the game server artifact. You can optionally pass in a `buildTag` to associate an external version with a build.
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export async function buildsV1CreateBuildDeprecated(
  client$: HathoraCloudCore,
  createBuildParams: components.CreateBuildParams,
  appId?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    components.Build,
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
  const input$: operations.CreateBuildDeprecatedRequest = {
    appId: appId,
    createBuildParams: createBuildParams,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.CreateBuildDeprecatedRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.CreateBuildParams, {
    explode: true,
  });

  const pathParams$ = {
    appId: encodeSimple$("appId", payload$.appId ?? client$.options$.appId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/builds/v1/{appId}/create")(pathParams$);

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const hathoraDevToken$ = await extractSecurity(
    client$.options$.hathoraDevToken,
  );
  const security$ = hathoraDevToken$ == null
    ? {}
    : { hathoraDevToken: hathoraDevToken$ };
  const context = {
    operationID: "CreateBuildDeprecated",
    oAuth2Scopes: [],
    securitySource: client$.options$.hathoraDevToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
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
    errorCodes: ["401", "404", "429", "4XX", "500", "5XX"],
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
    components.Build,
    | errors.ApiError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(201, components.Build$inboundSchema),
    m$.jsonErr([401, 404, 429, 500], errors.ApiError$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
