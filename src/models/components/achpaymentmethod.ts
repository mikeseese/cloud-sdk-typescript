/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AchPaymentMethod = {
  last4?: string | undefined;
  bankName?: string | undefined;
};

/** @internal */
export const AchPaymentMethod$inboundSchema: z.ZodType<
  AchPaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.object({
  last4: z.string().optional(),
  bankName: z.string().optional(),
});

/** @internal */
export type AchPaymentMethod$Outbound = {
  last4?: string | undefined;
  bankName?: string | undefined;
};

/** @internal */
export const AchPaymentMethod$outboundSchema: z.ZodType<
  AchPaymentMethod$Outbound,
  z.ZodTypeDef,
  AchPaymentMethod
> = z.object({
  last4: z.string().optional(),
  bankName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchPaymentMethod$ {
  /** @deprecated use `AchPaymentMethod$inboundSchema` instead. */
  export const inboundSchema = AchPaymentMethod$inboundSchema;
  /** @deprecated use `AchPaymentMethod$outboundSchema` instead. */
  export const outboundSchema = AchPaymentMethod$outboundSchema;
  /** @deprecated use `AchPaymentMethod$Outbound` instead. */
  export type Outbound = AchPaymentMethod$Outbound;
}
