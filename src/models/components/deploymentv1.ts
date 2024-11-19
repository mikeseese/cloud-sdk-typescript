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
import {
  ContainerPort,
  ContainerPort$inboundSchema,
  ContainerPort$Outbound,
  ContainerPort$outboundSchema,
} from "./containerport.js";
import {
  PlanName,
  PlanName$inboundSchema,
  PlanName$outboundSchema,
} from "./planname.js";

export type Env = {
  value: string;
  name: string;
};

/**
 * @deprecated enum: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export const DeploymentV1TransportType = {
  Tcp: "tcp",
  Udp: "udp",
  Tls: "tls",
} as const;
/**
 * @deprecated enum: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type DeploymentV1TransportType = OpenEnum<
  typeof DeploymentV1TransportType
>;

/**
 * Deployment is a versioned configuration for a build that describes runtime behavior.
 */
export type DeploymentV1 = {
  /**
   * Option to shut down processes that have had no new connections or rooms
   *
   * @remarks
   * for five minutes.
   */
  idleTimeoutEnabled?: boolean | undefined;
  /**
   * The environment variable that our process will have access to at runtime.
   */
  env: Array<Env>;
  /**
   * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
   */
  roomsPerProcess: number;
  /**
   * A plan defines how much CPU and memory is required to run an instance of your game server.
   *
   * @remarks
   *
   * `tiny`: shared core, 1gb memory
   *
   * `small`: 1 core, 2gb memory
   *
   * `medium`: 2 core, 4gb memory
   *
   * `large`: 4 core, 8gb memory
   */
  planName: PlanName;
  /**
   * Additional ports your server listens on.
   */
  additionalContainerPorts: Array<ContainerPort>;
  /**
   * A container port object represents the transport configruations for how your server will listen.
   */
  defaultContainerPort: ContainerPort;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  transportType: DeploymentV1TransportType;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  containerPort: number;
  /**
   * When the deployment was created.
   */
  createdAt: Date;
  createdBy: string;
  /**
   * The amount of memory allocated to your process.
   */
  requestedMemoryMB: number;
  /**
   * The number of cores allocated to your process.
   */
  requestedCPU: number;
  /**
   * System generated id for a deployment. Increments by 1.
   */
  deploymentId: number;
  /**
   * System generated id for a build. Increments by 1.
   */
  buildId: number;
  /**
   * System generated unique identifier for an application.
   */
  appId: string;
};

/** @internal */
export const Env$inboundSchema: z.ZodType<Env, z.ZodTypeDef, unknown> = z
  .object({
    value: z.string(),
    name: z.string(),
  });

/** @internal */
export type Env$Outbound = {
  value: string;
  name: string;
};

/** @internal */
export const Env$outboundSchema: z.ZodType<Env$Outbound, z.ZodTypeDef, Env> = z
  .object({
    value: z.string(),
    name: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Env$ {
  /** @deprecated use `Env$inboundSchema` instead. */
  export const inboundSchema = Env$inboundSchema;
  /** @deprecated use `Env$outboundSchema` instead. */
  export const outboundSchema = Env$outboundSchema;
  /** @deprecated use `Env$Outbound` instead. */
  export type Outbound = Env$Outbound;
}

export function envToJSON(env: Env): string {
  return JSON.stringify(Env$outboundSchema.parse(env));
}

export function envFromJSON(
  jsonString: string,
): SafeParseResult<Env, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Env$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Env' from JSON`,
  );
}

/** @internal */
export const DeploymentV1TransportType$inboundSchema: z.ZodType<
  DeploymentV1TransportType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(DeploymentV1TransportType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const DeploymentV1TransportType$outboundSchema: z.ZodType<
  DeploymentV1TransportType,
  z.ZodTypeDef,
  DeploymentV1TransportType
> = z.union([
  z.nativeEnum(DeploymentV1TransportType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentV1TransportType$ {
  /** @deprecated use `DeploymentV1TransportType$inboundSchema` instead. */
  export const inboundSchema = DeploymentV1TransportType$inboundSchema;
  /** @deprecated use `DeploymentV1TransportType$outboundSchema` instead. */
  export const outboundSchema = DeploymentV1TransportType$outboundSchema;
}

/** @internal */
export const DeploymentV1$inboundSchema: z.ZodType<
  DeploymentV1,
  z.ZodTypeDef,
  unknown
> = z.object({
  idleTimeoutEnabled: z.boolean().default(true),
  env: z.array(z.lazy(() => Env$inboundSchema)),
  roomsPerProcess: z.number().int(),
  planName: PlanName$inboundSchema,
  additionalContainerPorts: z.array(ContainerPort$inboundSchema),
  defaultContainerPort: ContainerPort$inboundSchema,
  transportType: DeploymentV1TransportType$inboundSchema,
  containerPort: z.number(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  createdBy: z.string(),
  requestedMemoryMB: z.number().int(),
  requestedCPU: z.number(),
  deploymentId: z.number().int(),
  buildId: z.number().int(),
  appId: z.string(),
});

/** @internal */
export type DeploymentV1$Outbound = {
  idleTimeoutEnabled: boolean;
  env: Array<Env$Outbound>;
  roomsPerProcess: number;
  planName: string;
  additionalContainerPorts: Array<ContainerPort$Outbound>;
  defaultContainerPort: ContainerPort$Outbound;
  transportType: string;
  containerPort: number;
  createdAt: string;
  createdBy: string;
  requestedMemoryMB: number;
  requestedCPU: number;
  deploymentId: number;
  buildId: number;
  appId: string;
};

/** @internal */
export const DeploymentV1$outboundSchema: z.ZodType<
  DeploymentV1$Outbound,
  z.ZodTypeDef,
  DeploymentV1
> = z.object({
  idleTimeoutEnabled: z.boolean().default(true),
  env: z.array(z.lazy(() => Env$outboundSchema)),
  roomsPerProcess: z.number().int(),
  planName: PlanName$outboundSchema,
  additionalContainerPorts: z.array(ContainerPort$outboundSchema),
  defaultContainerPort: ContainerPort$outboundSchema,
  transportType: DeploymentV1TransportType$outboundSchema,
  containerPort: z.number(),
  createdAt: z.date().transform(v => v.toISOString()),
  createdBy: z.string(),
  requestedMemoryMB: z.number().int(),
  requestedCPU: z.number(),
  deploymentId: z.number().int(),
  buildId: z.number().int(),
  appId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentV1$ {
  /** @deprecated use `DeploymentV1$inboundSchema` instead. */
  export const inboundSchema = DeploymentV1$inboundSchema;
  /** @deprecated use `DeploymentV1$outboundSchema` instead. */
  export const outboundSchema = DeploymentV1$outboundSchema;
  /** @deprecated use `DeploymentV1$Outbound` instead. */
  export type Outbound = DeploymentV1$Outbound;
}

export function deploymentV1ToJSON(deploymentV1: DeploymentV1): string {
  return JSON.stringify(DeploymentV1$outboundSchema.parse(deploymentV1));
}

export function deploymentV1FromJSON(
  jsonString: string,
): SafeParseResult<DeploymentV1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeploymentV1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeploymentV1' from JSON`,
  );
}
