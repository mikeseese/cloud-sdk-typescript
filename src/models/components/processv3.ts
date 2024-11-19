/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ExposedPort,
  ExposedPort$inboundSchema,
  ExposedPort$Outbound,
  ExposedPort$outboundSchema,
} from "./exposedport.js";
import {
  ProcessStatus,
  ProcessStatus$inboundSchema,
  ProcessStatus$outboundSchema,
} from "./processstatus.js";
import {
  Region,
  Region$inboundSchema,
  Region$outboundSchema,
} from "./region.js";
import {
  TransportType,
  TransportType$inboundSchema,
  TransportType$outboundSchema,
} from "./transporttype.js";

/**
 * Connection details for an active process.
 */
export type ProcessV3ExposedPort = {
  /**
   * Transport type specifies the underlying communication protocol to the exposed port.
   */
  transportType: TransportType;
  port: number;
  host: string;
  name: string;
};

export type ProcessV3 = {
  status: ProcessStatus;
  /**
   * Tracks the number of rooms that have been allocated to the process.
   */
  roomsAllocated: number;
  /**
   * When the process has been terminated.
   */
  terminatedAt: Date | null;
  /**
   * When the process is issued to stop. We use this to determine when we should stop billing.
   */
  stoppingAt: Date | null;
  /**
   * When the process bound to the specified port. We use this to determine when we should start billing.
   */
  startedAt: Date | null;
  /**
   * When the process started being provisioned.
   */
  createdAt: Date;
  /**
   * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
   */
  roomsPerProcess: number;
  additionalExposedPorts: Array<ExposedPort>;
  exposedPort: ProcessV3ExposedPort | null;
  region: Region;
  /**
   * System generated unique identifier to a runtime instance of your game server.
   */
  processId: string;
  /**
   * System generated id for a deployment.
   */
  deploymentId: string;
  /**
   * System generated unique identifier for an application.
   */
  appId: string;
};

/** @internal */
export const ProcessV3ExposedPort$inboundSchema: z.ZodType<
  ProcessV3ExposedPort,
  z.ZodTypeDef,
  unknown
> = z.object({
  transportType: TransportType$inboundSchema,
  port: z.number().int(),
  host: z.string(),
  name: z.string(),
});

/** @internal */
export type ProcessV3ExposedPort$Outbound = {
  transportType: string;
  port: number;
  host: string;
  name: string;
};

/** @internal */
export const ProcessV3ExposedPort$outboundSchema: z.ZodType<
  ProcessV3ExposedPort$Outbound,
  z.ZodTypeDef,
  ProcessV3ExposedPort
> = z.object({
  transportType: TransportType$outboundSchema,
  port: z.number().int(),
  host: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProcessV3ExposedPort$ {
  /** @deprecated use `ProcessV3ExposedPort$inboundSchema` instead. */
  export const inboundSchema = ProcessV3ExposedPort$inboundSchema;
  /** @deprecated use `ProcessV3ExposedPort$outboundSchema` instead. */
  export const outboundSchema = ProcessV3ExposedPort$outboundSchema;
  /** @deprecated use `ProcessV3ExposedPort$Outbound` instead. */
  export type Outbound = ProcessV3ExposedPort$Outbound;
}

export function processV3ExposedPortToJSON(
  processV3ExposedPort: ProcessV3ExposedPort,
): string {
  return JSON.stringify(
    ProcessV3ExposedPort$outboundSchema.parse(processV3ExposedPort),
  );
}

export function processV3ExposedPortFromJSON(
  jsonString: string,
): SafeParseResult<ProcessV3ExposedPort, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProcessV3ExposedPort$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProcessV3ExposedPort' from JSON`,
  );
}

/** @internal */
export const ProcessV3$inboundSchema: z.ZodType<
  ProcessV3,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: ProcessStatus$inboundSchema,
  roomsAllocated: z.number().int(),
  terminatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  stoppingAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  startedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  roomsPerProcess: z.number().int(),
  additionalExposedPorts: z.array(ExposedPort$inboundSchema),
  exposedPort: z.nullable(z.lazy(() => ProcessV3ExposedPort$inboundSchema)),
  region: Region$inboundSchema,
  processId: z.string(),
  deploymentId: z.string(),
  appId: z.string(),
});

/** @internal */
export type ProcessV3$Outbound = {
  status: string;
  roomsAllocated: number;
  terminatedAt: string | null;
  stoppingAt: string | null;
  startedAt: string | null;
  createdAt: string;
  roomsPerProcess: number;
  additionalExposedPorts: Array<ExposedPort$Outbound>;
  exposedPort: ProcessV3ExposedPort$Outbound | null;
  region: string;
  processId: string;
  deploymentId: string;
  appId: string;
};

/** @internal */
export const ProcessV3$outboundSchema: z.ZodType<
  ProcessV3$Outbound,
  z.ZodTypeDef,
  ProcessV3
> = z.object({
  status: ProcessStatus$outboundSchema,
  roomsAllocated: z.number().int(),
  terminatedAt: z.nullable(z.date().transform(v => v.toISOString())),
  stoppingAt: z.nullable(z.date().transform(v => v.toISOString())),
  startedAt: z.nullable(z.date().transform(v => v.toISOString())),
  createdAt: z.date().transform(v => v.toISOString()),
  roomsPerProcess: z.number().int(),
  additionalExposedPorts: z.array(ExposedPort$outboundSchema),
  exposedPort: z.nullable(z.lazy(() => ProcessV3ExposedPort$outboundSchema)),
  region: Region$outboundSchema,
  processId: z.string(),
  deploymentId: z.string(),
  appId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProcessV3$ {
  /** @deprecated use `ProcessV3$inboundSchema` instead. */
  export const inboundSchema = ProcessV3$inboundSchema;
  /** @deprecated use `ProcessV3$outboundSchema` instead. */
  export const outboundSchema = ProcessV3$outboundSchema;
  /** @deprecated use `ProcessV3$Outbound` instead. */
  export type Outbound = ProcessV3$Outbound;
}

export function processV3ToJSON(processV3: ProcessV3): string {
  return JSON.stringify(ProcessV3$outboundSchema.parse(processV3));
}

export function processV3FromJSON(
  jsonString: string,
): SafeParseResult<ProcessV3, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProcessV3$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProcessV3' from JSON`,
  );
}
