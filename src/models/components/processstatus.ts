/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const ProcessStatus = {
  Starting: "starting",
  Running: "running",
  Draining: "draining",
  Stopping: "stopping",
  Stopped: "stopped",
  Failed: "failed",
} as const;
export type ProcessStatus = OpenEnum<typeof ProcessStatus>;

/** @internal */
export const ProcessStatus$inboundSchema: z.ZodType<
  ProcessStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(ProcessStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const ProcessStatus$outboundSchema: z.ZodType<
  ProcessStatus,
  z.ZodTypeDef,
  ProcessStatus
> = z.union([
  z.nativeEnum(ProcessStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProcessStatus$ {
  /** @deprecated use `ProcessStatus$inboundSchema` instead. */
  export const inboundSchema = ProcessStatus$inboundSchema;
  /** @deprecated use `ProcessStatus$outboundSchema` instead. */
  export const outboundSchema = ProcessStatus$outboundSchema;
}
