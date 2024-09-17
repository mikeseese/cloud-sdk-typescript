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
  PlanName,
  PlanName$inboundSchema,
  PlanName$outboundSchema,
} from "./planname.js";
import {
  TransportType,
  TransportType$inboundSchema,
  TransportType$outboundSchema,
} from "./transporttype.js";

export type DeploymentConfigEnv = {
  value: string;
  name: string;
};

/**
 * User specified deployment configuration for your application at runtime.
 */
export type DeploymentConfig = {
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
  env: Array<DeploymentConfigEnv>;
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
  additionalContainerPorts?: Array<ContainerPort> | undefined;
  /**
   * Transport type specifies the underlying communication protocol to the exposed port.
   */
  transportType: TransportType;
  /**
   * Default port the server listens on.
   */
  containerPort: number;
};

/** @internal */
export const DeploymentConfigEnv$inboundSchema: z.ZodType<
  DeploymentConfigEnv,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string(),
  name: z.string(),
});

/** @internal */
export type DeploymentConfigEnv$Outbound = {
  value: string;
  name: string;
};

/** @internal */
export const DeploymentConfigEnv$outboundSchema: z.ZodType<
  DeploymentConfigEnv$Outbound,
  z.ZodTypeDef,
  DeploymentConfigEnv
> = z.object({
  value: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentConfigEnv$ {
  /** @deprecated use `DeploymentConfigEnv$inboundSchema` instead. */
  export const inboundSchema = DeploymentConfigEnv$inboundSchema;
  /** @deprecated use `DeploymentConfigEnv$outboundSchema` instead. */
  export const outboundSchema = DeploymentConfigEnv$outboundSchema;
  /** @deprecated use `DeploymentConfigEnv$Outbound` instead. */
  export type Outbound = DeploymentConfigEnv$Outbound;
}

/** @internal */
export const DeploymentConfig$inboundSchema: z.ZodType<
  DeploymentConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  idleTimeoutEnabled: z.boolean().default(true),
  env: z.array(z.lazy(() => DeploymentConfigEnv$inboundSchema)),
  roomsPerProcess: z.number().int(),
  planName: PlanName$inboundSchema,
  additionalContainerPorts: z.array(ContainerPort$inboundSchema).optional(),
  transportType: TransportType$inboundSchema,
  containerPort: z.number().int(),
});

/** @internal */
export type DeploymentConfig$Outbound = {
  idleTimeoutEnabled: boolean;
  env: Array<DeploymentConfigEnv$Outbound>;
  roomsPerProcess: number;
  planName: string;
  additionalContainerPorts?: Array<ContainerPort$Outbound> | undefined;
  transportType: string;
  containerPort: number;
};

/** @internal */
export const DeploymentConfig$outboundSchema: z.ZodType<
  DeploymentConfig$Outbound,
  z.ZodTypeDef,
  DeploymentConfig
> = z.object({
  idleTimeoutEnabled: z.boolean().default(true),
  env: z.array(z.lazy(() => DeploymentConfigEnv$outboundSchema)),
  roomsPerProcess: z.number().int(),
  planName: PlanName$outboundSchema,
  additionalContainerPorts: z.array(ContainerPort$outboundSchema).optional(),
  transportType: TransportType$outboundSchema,
  containerPort: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentConfig$ {
  /** @deprecated use `DeploymentConfig$inboundSchema` instead. */
  export const inboundSchema = DeploymentConfig$inboundSchema;
  /** @deprecated use `DeploymentConfig$outboundSchema` instead. */
  export const outboundSchema = DeploymentConfig$outboundSchema;
  /** @deprecated use `DeploymentConfig$Outbound` instead. */
  export type Outbound = DeploymentConfig$Outbound;
}
