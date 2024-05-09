/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TransportType, TransportType$ } from "./transporttype";
import * as z from "zod";

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
export namespace ContainerPort$ {
    export type Inbound = {
        transportType: TransportType;
        port: number;
        name: string;
    };

    export const inboundSchema: z.ZodType<ContainerPort, z.ZodTypeDef, Inbound> = z
        .object({
            transportType: TransportType$,
            port: z.number().int(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                transportType: v.transportType,
                port: v.port,
                name: v.name,
            };
        });

    export type Outbound = {
        transportType: TransportType;
        port: number;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContainerPort> = z
        .object({
            transportType: TransportType$,
            port: z.number().int(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                transportType: v.transportType,
                port: v.port,
                name: v.name,
            };
        });
}
