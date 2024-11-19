/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AchPaymentMethod,
  AchPaymentMethod$inboundSchema,
  AchPaymentMethod$Outbound,
  AchPaymentMethod$outboundSchema,
} from "./achpaymentmethod.js";
import {
  CardPaymentMethod,
  CardPaymentMethod$inboundSchema,
  CardPaymentMethod$Outbound,
  CardPaymentMethod$outboundSchema,
} from "./cardpaymentmethod.js";
import {
  LinkPaymentMethod,
  LinkPaymentMethod$inboundSchema,
  LinkPaymentMethod$Outbound,
  LinkPaymentMethod$outboundSchema,
} from "./linkpaymentmethod.js";

/**
 * Make all properties in T optional
 */
export type PaymentMethod = {
  card?: CardPaymentMethod | undefined;
  ach?: AchPaymentMethod | undefined;
  link?: LinkPaymentMethod | undefined;
};

/** @internal */
export const PaymentMethod$inboundSchema: z.ZodType<
  PaymentMethod,
  z.ZodTypeDef,
  unknown
> = z.object({
  card: CardPaymentMethod$inboundSchema.optional(),
  ach: AchPaymentMethod$inboundSchema.optional(),
  link: LinkPaymentMethod$inboundSchema.optional(),
});

/** @internal */
export type PaymentMethod$Outbound = {
  card?: CardPaymentMethod$Outbound | undefined;
  ach?: AchPaymentMethod$Outbound | undefined;
  link?: LinkPaymentMethod$Outbound | undefined;
};

/** @internal */
export const PaymentMethod$outboundSchema: z.ZodType<
  PaymentMethod$Outbound,
  z.ZodTypeDef,
  PaymentMethod
> = z.object({
  card: CardPaymentMethod$outboundSchema.optional(),
  ach: AchPaymentMethod$outboundSchema.optional(),
  link: LinkPaymentMethod$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethod$ {
  /** @deprecated use `PaymentMethod$inboundSchema` instead. */
  export const inboundSchema = PaymentMethod$inboundSchema;
  /** @deprecated use `PaymentMethod$outboundSchema` instead. */
  export const outboundSchema = PaymentMethod$outboundSchema;
  /** @deprecated use `PaymentMethod$Outbound` instead. */
  export type Outbound = PaymentMethod$Outbound;
}

export function paymentMethodToJSON(paymentMethod: PaymentMethod): string {
  return JSON.stringify(PaymentMethod$outboundSchema.parse(paymentMethod));
}

export function paymentMethodFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMethod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMethod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMethod' from JSON`,
  );
}
