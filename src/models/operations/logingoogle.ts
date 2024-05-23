/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type LoginGoogleGlobals = {
    appId?: string | undefined;
};

export type LoginGoogleRequest = {
    appId?: string | undefined;
    googleIdTokenObject: components.GoogleIdTokenObject;
};

/** @internal */
export namespace LoginGoogleGlobals$ {
    export const inboundSchema: z.ZodType<LoginGoogleGlobals, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginGoogleGlobals> = z
        .object({
            appId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
            };
        });
}

/** @internal */
export namespace LoginGoogleRequest$ {
    export const inboundSchema: z.ZodType<LoginGoogleRequest, z.ZodTypeDef, unknown> = z
        .object({
            appId: z.string().optional(),
            GoogleIdTokenObject: components.GoogleIdTokenObject$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                googleIdTokenObject: v.GoogleIdTokenObject,
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        GoogleIdTokenObject: components.GoogleIdTokenObject$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginGoogleRequest> = z
        .object({
            appId: z.string().optional(),
            googleIdTokenObject: components.GoogleIdTokenObject$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                GoogleIdTokenObject: v.googleIdTokenObject,
            };
        });
}
