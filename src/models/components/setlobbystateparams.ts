/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SetLobbyStateParams = {
  /**
   * JSON blob to store metadata for a room. Must be smaller than 1MB.
   */
  state?: any | undefined;
};

/** @internal */
export const SetLobbyStateParams$inboundSchema: z.ZodType<
  SetLobbyStateParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  state: z.any().optional(),
});

/** @internal */
export type SetLobbyStateParams$Outbound = {
  state?: any | undefined;
};

/** @internal */
export const SetLobbyStateParams$outboundSchema: z.ZodType<
  SetLobbyStateParams$Outbound,
  z.ZodTypeDef,
  SetLobbyStateParams
> = z.object({
  state: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetLobbyStateParams$ {
  /** @deprecated use `SetLobbyStateParams$inboundSchema` instead. */
  export const inboundSchema = SetLobbyStateParams$inboundSchema;
  /** @deprecated use `SetLobbyStateParams$outboundSchema` instead. */
  export const outboundSchema = SetLobbyStateParams$outboundSchema;
  /** @deprecated use `SetLobbyStateParams$Outbound` instead. */
  export type Outbound = SetLobbyStateParams$Outbound;
}

export function setLobbyStateParamsToJSON(
  setLobbyStateParams: SetLobbyStateParams,
): string {
  return JSON.stringify(
    SetLobbyStateParams$outboundSchema.parse(setLobbyStateParams),
  );
}

export function setLobbyStateParamsFromJSON(
  jsonString: string,
): SafeParseResult<SetLobbyStateParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SetLobbyStateParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SetLobbyStateParams' from JSON`,
  );
}
