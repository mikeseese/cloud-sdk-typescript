/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HathoraCloudCore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
  encodeJSON as encodeJSON$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity, SecurityInput } from "../lib/security.js";
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
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export async function lobbiesV2CreatePrivateLobby(
  client$: HathoraCloudCore,
  security: operations.CreatePrivateLobbySecurity,
  requestBody: operations.CreatePrivateLobbyRequestBody,
  appId?: string | undefined,
  roomId?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    components.Lobby,
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
  const input$: operations.CreatePrivateLobbyRequest = {
    appId: appId,
    roomId: roomId,
    requestBody: requestBody,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.CreatePrivateLobbyRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

  const pathParams$ = {
    appId: encodeSimple$("appId", payload$.appId ?? client$.options$.appId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/lobby/v2/{appId}/create/private")(pathParams$);

  const query$ = encodeFormQuery$({
    "roomId": payload$.roomId,
  });

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const security$: SecurityInput[][] = [
    [
      {
        fieldName: "Authorization",
        type: "http:bearer",
        value: security?.playerAuth,
      },
    ],
  ];
  const securitySettings$ = resolveSecurity(...security$);
  const context = {
    operationID: "CreatePrivateLobby",
    oAuth2Scopes: [],
    securitySource: security,
  };

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["400", "401", "402", "404", "422", "429", "4XX", "500", "5XX"],
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
    components.Lobby,
    | errors.ApiError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(201, components.Lobby$inboundSchema),
    m$.jsonErr(
      [400, 401, 402, 404, 422, 429, 500],
      errors.ApiError$inboundSchema,
    ),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
