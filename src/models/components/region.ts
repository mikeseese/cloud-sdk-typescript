/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum Region {
    Seattle = "Seattle",
    LosAngeles = "Los_Angeles",
    WashingtonDC = "Washington_DC",
    Chicago = "Chicago",
    London = "London",
    Frankfurt = "Frankfurt",
    Mumbai = "Mumbai",
    Singapore = "Singapore",
    Tokyo = "Tokyo",
    Sydney = "Sydney",
    SaoPaulo = "Sao_Paulo",
    Dallas = "Dallas",
}

/** @internal */
export namespace Region$ {
    export const inboundSchema = z.nativeEnum(Region);
    export const outboundSchema = inboundSchema;
}