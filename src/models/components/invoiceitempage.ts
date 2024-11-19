/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InvoiceItem,
  InvoiceItem$inboundSchema,
  InvoiceItem$Outbound,
  InvoiceItem$outboundSchema,
} from "./invoiceitem.js";

export type InvoiceItemPage = {
  invoiceItems: Array<InvoiceItem>;
};

/** @internal */
export const InvoiceItemPage$inboundSchema: z.ZodType<
  InvoiceItemPage,
  z.ZodTypeDef,
  unknown
> = z.object({
  invoiceItems: z.array(InvoiceItem$inboundSchema),
});

/** @internal */
export type InvoiceItemPage$Outbound = {
  invoiceItems: Array<InvoiceItem$Outbound>;
};

/** @internal */
export const InvoiceItemPage$outboundSchema: z.ZodType<
  InvoiceItemPage$Outbound,
  z.ZodTypeDef,
  InvoiceItemPage
> = z.object({
  invoiceItems: z.array(InvoiceItem$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItemPage$ {
  /** @deprecated use `InvoiceItemPage$inboundSchema` instead. */
  export const inboundSchema = InvoiceItemPage$inboundSchema;
  /** @deprecated use `InvoiceItemPage$outboundSchema` instead. */
  export const outboundSchema = InvoiceItemPage$outboundSchema;
  /** @deprecated use `InvoiceItemPage$Outbound` instead. */
  export type Outbound = InvoiceItemPage$Outbound;
}

export function invoiceItemPageToJSON(
  invoiceItemPage: InvoiceItemPage,
): string {
  return JSON.stringify(InvoiceItemPage$outboundSchema.parse(invoiceItemPage));
}

export function invoiceItemPageFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceItemPage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceItemPage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceItemPage' from JSON`,
  );
}
