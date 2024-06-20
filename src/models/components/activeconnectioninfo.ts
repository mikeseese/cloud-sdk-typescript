/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import { TransportType, TransportType$ } from "./transporttype.js";
import * as z from "zod";

export const ActiveConnectionInfoStatus = {
    Active: "active",
} as const;
export type ActiveConnectionInfoStatus = OpenEnum<typeof ActiveConnectionInfoStatus>;

export type ActiveConnectionInfo = {
    status: ActiveConnectionInfoStatus;
    /**
     * Transport type specifies the underlying communication protocol to the exposed port.
     */
    transportType: TransportType;
    port: number;
    host: string;
    /**
     * Unique identifier to a game session or match. Use the default system generated ID or overwrite it with your own.
     *
     * @remarks
     * Note: error will be returned if `roomId` is not globally unique.
     */
    roomId: string;
};

/** @internal */
export namespace ActiveConnectionInfoStatus$ {
    export const inboundSchema: z.ZodType<ActiveConnectionInfoStatus, z.ZodTypeDef, unknown> =
        z.union([
            z.nativeEnum(ActiveConnectionInfoStatus),
            z.string().transform(catchUnrecognizedEnum),
        ]);

    export const outboundSchema: z.ZodType<
        ActiveConnectionInfoStatus,
        z.ZodTypeDef,
        ActiveConnectionInfoStatus
    > = z.union([
        z.nativeEnum(ActiveConnectionInfoStatus),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace ActiveConnectionInfo$ {
    export const inboundSchema: z.ZodType<ActiveConnectionInfo, z.ZodTypeDef, unknown> = z.object({
        status: ActiveConnectionInfoStatus$.inboundSchema,
        transportType: TransportType$.inboundSchema,
        port: z.number(),
        host: z.string(),
        roomId: z.string(),
    });

    export type Outbound = {
        status: string;
        transportType: string;
        port: number;
        host: string;
        roomId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ActiveConnectionInfo> = z.object(
        {
            status: ActiveConnectionInfoStatus$.outboundSchema,
            transportType: TransportType$.outboundSchema,
            port: z.number(),
            host: z.string(),
            roomId: z.string(),
        }
    );
}
