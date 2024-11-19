/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Status = {
  Starting: "starting",
} as const;
export type Status = OpenEnum<typeof Status>;

export type StartingConnectionInfo = {
  status: Status;
  /**
   * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
   *
   * @remarks
   * Note: error will be returned if `roomId` is not globally unique.
   */
  roomId: string;
};

/** @internal */
export const Status$inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown> = z
  .union([
    z.nativeEnum(Status),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const Status$outboundSchema: z.ZodType<Status, z.ZodTypeDef, Status> = z
  .union([
    z.nativeEnum(Status),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const StartingConnectionInfo$inboundSchema: z.ZodType<
  StartingConnectionInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: Status$inboundSchema,
  roomId: z.string(),
});

/** @internal */
export type StartingConnectionInfo$Outbound = {
  status: string;
  roomId: string;
};

/** @internal */
export const StartingConnectionInfo$outboundSchema: z.ZodType<
  StartingConnectionInfo$Outbound,
  z.ZodTypeDef,
  StartingConnectionInfo
> = z.object({
  status: Status$outboundSchema,
  roomId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartingConnectionInfo$ {
  /** @deprecated use `StartingConnectionInfo$inboundSchema` instead. */
  export const inboundSchema = StartingConnectionInfo$inboundSchema;
  /** @deprecated use `StartingConnectionInfo$outboundSchema` instead. */
  export const outboundSchema = StartingConnectionInfo$outboundSchema;
  /** @deprecated use `StartingConnectionInfo$Outbound` instead. */
  export type Outbound = StartingConnectionInfo$Outbound;
}

export function startingConnectionInfoToJSON(
  startingConnectionInfo: StartingConnectionInfo,
): string {
  return JSON.stringify(
    StartingConnectionInfo$outboundSchema.parse(startingConnectionInfo),
  );
}

export function startingConnectionInfoFromJSON(
  jsonString: string,
): SafeParseResult<StartingConnectionInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StartingConnectionInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StartingConnectionInfo' from JSON`,
  );
}
