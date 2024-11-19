/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LobbyVisibility,
  LobbyVisibility$inboundSchema,
  LobbyVisibility$outboundSchema,
} from "./lobbyvisibility.js";
import {
  Region,
  Region$inboundSchema,
  Region$outboundSchema,
} from "./region.js";

export type CreateLobbyV3Params = {
  /**
   * Types of lobbies a player can create.
   *
   * @remarks
   *
   * `private`: the player who created the room must share the roomId with their friends
   *
   * `public`: visible in the public lobby list, anyone can join
   *
   * `local`: for testing with a server running locally
   */
  visibility: LobbyVisibility;
  /**
   * Optional configuration parameters for the room. Can be any string including stringified JSON. It is accessible from the room via [`GetRoomInfo()`](https://hathora.dev/api#tag/RoomV2/operation/GetRoomInfo).
   */
  roomConfig?: string | undefined;
  region: Region;
};

/** @internal */
export const CreateLobbyV3Params$inboundSchema: z.ZodType<
  CreateLobbyV3Params,
  z.ZodTypeDef,
  unknown
> = z.object({
  visibility: LobbyVisibility$inboundSchema,
  roomConfig: z.string().optional(),
  region: Region$inboundSchema,
});

/** @internal */
export type CreateLobbyV3Params$Outbound = {
  visibility: string;
  roomConfig?: string | undefined;
  region: string;
};

/** @internal */
export const CreateLobbyV3Params$outboundSchema: z.ZodType<
  CreateLobbyV3Params$Outbound,
  z.ZodTypeDef,
  CreateLobbyV3Params
> = z.object({
  visibility: LobbyVisibility$outboundSchema,
  roomConfig: z.string().optional(),
  region: Region$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateLobbyV3Params$ {
  /** @deprecated use `CreateLobbyV3Params$inboundSchema` instead. */
  export const inboundSchema = CreateLobbyV3Params$inboundSchema;
  /** @deprecated use `CreateLobbyV3Params$outboundSchema` instead. */
  export const outboundSchema = CreateLobbyV3Params$outboundSchema;
  /** @deprecated use `CreateLobbyV3Params$Outbound` instead. */
  export type Outbound = CreateLobbyV3Params$Outbound;
}

export function createLobbyV3ParamsToJSON(
  createLobbyV3Params: CreateLobbyV3Params,
): string {
  return JSON.stringify(
    CreateLobbyV3Params$outboundSchema.parse(createLobbyV3Params),
  );
}

export function createLobbyV3ParamsFromJSON(
  jsonString: string,
): SafeParseResult<CreateLobbyV3Params, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLobbyV3Params$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLobbyV3Params' from JSON`,
  );
}
