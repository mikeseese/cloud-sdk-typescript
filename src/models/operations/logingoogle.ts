/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type LoginGoogleGlobals = {
  appId?: string | undefined;
};

export type LoginGoogleRequest = {
  appId?: string | undefined;
  googleIdTokenObject: components.GoogleIdTokenObject;
};

/** @internal */
export const LoginGoogleGlobals$inboundSchema: z.ZodType<
  LoginGoogleGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type LoginGoogleGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const LoginGoogleGlobals$outboundSchema: z.ZodType<
  LoginGoogleGlobals$Outbound,
  z.ZodTypeDef,
  LoginGoogleGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginGoogleGlobals$ {
  /** @deprecated use `LoginGoogleGlobals$inboundSchema` instead. */
  export const inboundSchema = LoginGoogleGlobals$inboundSchema;
  /** @deprecated use `LoginGoogleGlobals$outboundSchema` instead. */
  export const outboundSchema = LoginGoogleGlobals$outboundSchema;
  /** @deprecated use `LoginGoogleGlobals$Outbound` instead. */
  export type Outbound = LoginGoogleGlobals$Outbound;
}

/** @internal */
export const LoginGoogleRequest$inboundSchema: z.ZodType<
  LoginGoogleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  GoogleIdTokenObject: components.GoogleIdTokenObject$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "GoogleIdTokenObject": "googleIdTokenObject",
  });
});

/** @internal */
export type LoginGoogleRequest$Outbound = {
  appId?: string | undefined;
  GoogleIdTokenObject: components.GoogleIdTokenObject$Outbound;
};

/** @internal */
export const LoginGoogleRequest$outboundSchema: z.ZodType<
  LoginGoogleRequest$Outbound,
  z.ZodTypeDef,
  LoginGoogleRequest
> = z.object({
  appId: z.string().optional(),
  googleIdTokenObject: components.GoogleIdTokenObject$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    googleIdTokenObject: "GoogleIdTokenObject",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginGoogleRequest$ {
  /** @deprecated use `LoginGoogleRequest$inboundSchema` instead. */
  export const inboundSchema = LoginGoogleRequest$inboundSchema;
  /** @deprecated use `LoginGoogleRequest$outboundSchema` instead. */
  export const outboundSchema = LoginGoogleRequest$outboundSchema;
  /** @deprecated use `LoginGoogleRequest$Outbound` instead. */
  export type Outbound = LoginGoogleRequest$Outbound;
}
