/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ContainerPort,
  ContainerPort$inboundSchema,
  ContainerPort$Outbound,
  ContainerPort$outboundSchema,
} from "./containerport.js";
import {
  TransportType,
  TransportType$inboundSchema,
  TransportType$outboundSchema,
} from "./transporttype.js";

export type DeploymentConfigV3Env = {
  value: string;
  name: string;
};

export type DeploymentConfigV3 = {
  /**
   * Option to shut down processes that have had no new connections or rooms
   *
   * @remarks
   * for five minutes.
   */
  idleTimeoutEnabled: boolean;
  /**
   * The environment variable that our process will have access to at runtime.
   */
  env: Array<DeploymentConfigV3Env>;
  /**
   * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
   */
  roomsPerProcess: number;
  /**
   * Additional ports your server listens on.
   */
  additionalContainerPorts?: Array<ContainerPort> | undefined;
  /**
   * Transport type specifies the underlying communication protocol to the exposed port.
   */
  transportType: TransportType;
  /**
   * Default port the server listens on.
   */
  containerPort: number;
  /**
   * The amount of memory allocated to your process.
   */
  requestedMemoryMB: number;
  /**
   * The number of cores allocated to your process.
   */
  requestedCPU: number;
  /**
   * System generated id for a build. Can also be user defined when creating a build.
   */
  buildId: string;
};

/** @internal */
export const DeploymentConfigV3Env$inboundSchema: z.ZodType<
  DeploymentConfigV3Env,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string(),
  name: z.string(),
});

/** @internal */
export type DeploymentConfigV3Env$Outbound = {
  value: string;
  name: string;
};

/** @internal */
export const DeploymentConfigV3Env$outboundSchema: z.ZodType<
  DeploymentConfigV3Env$Outbound,
  z.ZodTypeDef,
  DeploymentConfigV3Env
> = z.object({
  value: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentConfigV3Env$ {
  /** @deprecated use `DeploymentConfigV3Env$inboundSchema` instead. */
  export const inboundSchema = DeploymentConfigV3Env$inboundSchema;
  /** @deprecated use `DeploymentConfigV3Env$outboundSchema` instead. */
  export const outboundSchema = DeploymentConfigV3Env$outboundSchema;
  /** @deprecated use `DeploymentConfigV3Env$Outbound` instead. */
  export type Outbound = DeploymentConfigV3Env$Outbound;
}

/** @internal */
export const DeploymentConfigV3$inboundSchema: z.ZodType<
  DeploymentConfigV3,
  z.ZodTypeDef,
  unknown
> = z.object({
  idleTimeoutEnabled: z.boolean(),
  env: z.array(z.lazy(() => DeploymentConfigV3Env$inboundSchema)),
  roomsPerProcess: z.number().int(),
  additionalContainerPorts: z.array(ContainerPort$inboundSchema).optional(),
  transportType: TransportType$inboundSchema,
  containerPort: z.number().int(),
  requestedMemoryMB: z.number(),
  requestedCPU: z.number(),
  buildId: z.string(),
});

/** @internal */
export type DeploymentConfigV3$Outbound = {
  idleTimeoutEnabled: boolean;
  env: Array<DeploymentConfigV3Env$Outbound>;
  roomsPerProcess: number;
  additionalContainerPorts?: Array<ContainerPort$Outbound> | undefined;
  transportType: string;
  containerPort: number;
  requestedMemoryMB: number;
  requestedCPU: number;
  buildId: string;
};

/** @internal */
export const DeploymentConfigV3$outboundSchema: z.ZodType<
  DeploymentConfigV3$Outbound,
  z.ZodTypeDef,
  DeploymentConfigV3
> = z.object({
  idleTimeoutEnabled: z.boolean(),
  env: z.array(z.lazy(() => DeploymentConfigV3Env$outboundSchema)),
  roomsPerProcess: z.number().int(),
  additionalContainerPorts: z.array(ContainerPort$outboundSchema).optional(),
  transportType: TransportType$outboundSchema,
  containerPort: z.number().int(),
  requestedMemoryMB: z.number(),
  requestedCPU: z.number(),
  buildId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentConfigV3$ {
  /** @deprecated use `DeploymentConfigV3$inboundSchema` instead. */
  export const inboundSchema = DeploymentConfigV3$inboundSchema;
  /** @deprecated use `DeploymentConfigV3$outboundSchema` instead. */
  export const outboundSchema = DeploymentConfigV3$outboundSchema;
  /** @deprecated use `DeploymentConfigV3$Outbound` instead. */
  export type Outbound = DeploymentConfigV3$Outbound;
}
