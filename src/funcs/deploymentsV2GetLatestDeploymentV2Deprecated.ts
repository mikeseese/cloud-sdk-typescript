/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HathoraCloudCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
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
 * Get the latest [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an [application](https://hathora.dev/docs/concepts/hathora-entities#application).
 */
export async function deploymentsV2GetLatestDeploymentV2Deprecated(
  client$: HathoraCloudCore,
  appId?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    components.DeploymentV2,
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
  const input$: operations.GetLatestDeploymentV2DeprecatedRequest = {
    appId: appId,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.GetLatestDeploymentV2DeprecatedRequest$outboundSchema.parse(
        value$,
      ),
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
  };

  const path$ = pathToFunc("/deployments/v2/{appId}/latest")(pathParams$);

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
    operationID: "GetLatestDeploymentV2Deprecated",
    oAuth2Scopes: [],
    securitySource: client$.options$.hathoraDevToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
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
    errorCodes: ["401", "404", "422", "429", "4XX", "5XX"],
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
    components.DeploymentV2,
    | errors.ApiError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, components.DeploymentV2$inboundSchema),
    m$.jsonErr([401, 404, 422, 429], errors.ApiError$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
