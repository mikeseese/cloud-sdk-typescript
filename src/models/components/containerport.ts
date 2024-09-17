/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  TransportType,
  TransportType$inboundSchema,
  TransportType$outboundSchema,
} from "./transporttype.js";

/**
 * A container port object represents the transport configruations for how your server will listen.
 */
export type ContainerPort = {
  /**
   * Transport type specifies the underlying communication protocol to the exposed port.
   */
  transportType: TransportType;
  port: number;
  /**
   * Readable name for the port.
   */
  name: string;
};

/** @internal */
export const ContainerPort$inboundSchema: z.ZodType<
  ContainerPort,
  z.ZodTypeDef,
  unknown
> = z.object({
  transportType: TransportType$inboundSchema,
  port: z.number().int(),
  name: z.string(),
});

/** @internal */
export type ContainerPort$Outbound = {
  transportType: string;
  port: number;
  name: string;
};

/** @internal */
export const ContainerPort$outboundSchema: z.ZodType<
  ContainerPort$Outbound,
  z.ZodTypeDef,
  ContainerPort
> = z.object({
  transportType: TransportType$outboundSchema,
  port: z.number().int(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContainerPort$ {
  /** @deprecated use `ContainerPort$inboundSchema` instead. */
  export const inboundSchema = ContainerPort$inboundSchema;
  /** @deprecated use `ContainerPort$outboundSchema` instead. */
  export const outboundSchema = ContainerPort$outboundSchema;
  /** @deprecated use `ContainerPort$Outbound` instead. */
  export type Outbound = ContainerPort$Outbound;
}
