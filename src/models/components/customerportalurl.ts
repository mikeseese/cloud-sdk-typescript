/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerPortalUrl = {
  returnUrl: string;
};

/** @internal */
export const CustomerPortalUrl$inboundSchema: z.ZodType<
  CustomerPortalUrl,
  z.ZodTypeDef,
  unknown
> = z.object({
  returnUrl: z.string(),
});

/** @internal */
export type CustomerPortalUrl$Outbound = {
  returnUrl: string;
};

/** @internal */
export const CustomerPortalUrl$outboundSchema: z.ZodType<
  CustomerPortalUrl$Outbound,
  z.ZodTypeDef,
  CustomerPortalUrl
> = z.object({
  returnUrl: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalUrl$ {
  /** @deprecated use `CustomerPortalUrl$inboundSchema` instead. */
  export const inboundSchema = CustomerPortalUrl$inboundSchema;
  /** @deprecated use `CustomerPortalUrl$outboundSchema` instead. */
  export const outboundSchema = CustomerPortalUrl$outboundSchema;
  /** @deprecated use `CustomerPortalUrl$Outbound` instead. */
  export type Outbound = CustomerPortalUrl$Outbound;
}

export function customerPortalUrlToJSON(
  customerPortalUrl: CustomerPortalUrl,
): string {
  return JSON.stringify(
    CustomerPortalUrl$outboundSchema.parse(customerPortalUrl),
  );
}

export function customerPortalUrlFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalUrl, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerPortalUrl$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalUrl' from JSON`,
  );
}
