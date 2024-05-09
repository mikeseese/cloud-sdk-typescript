/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type LoginGoogleRequest = {
    googleIdTokenObject: components.GoogleIdTokenObject;
    appId?: string | undefined;
};

/** @internal */
export namespace LoginGoogleRequest$ {
    export type Inbound = {
        GoogleIdTokenObject: components.GoogleIdTokenObject$.Inbound;
        appId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<LoginGoogleRequest, z.ZodTypeDef, Inbound> = z
        .object({
            GoogleIdTokenObject: components.GoogleIdTokenObject$.inboundSchema,
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                googleIdTokenObject: v.GoogleIdTokenObject,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        GoogleIdTokenObject: components.GoogleIdTokenObject$.Outbound;
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginGoogleRequest> = z
        .object({
            googleIdTokenObject: components.GoogleIdTokenObject$.outboundSchema,
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                GoogleIdTokenObject: v.googleIdTokenObject,
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}
