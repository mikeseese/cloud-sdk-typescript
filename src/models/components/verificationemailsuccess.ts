/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum VerificationEmailSuccess {
    Success = "success",
}

/** @internal */
export namespace VerificationEmailSuccess$ {
    export const inboundSchema = z.nativeEnum(VerificationEmailSuccess);
    export const outboundSchema = inboundSchema;
}
