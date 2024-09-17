/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const OrgTokenStatus = {
  Active: "active",
  Revoked: "revoked",
} as const;
export type OrgTokenStatus = OpenEnum<typeof OrgTokenStatus>;

/** @internal */
export const OrgTokenStatus$inboundSchema: z.ZodType<
  OrgTokenStatus,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(OrgTokenStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const OrgTokenStatus$outboundSchema: z.ZodType<
  OrgTokenStatus,
  z.ZodTypeDef,
  OrgTokenStatus
> = z.union([
  z.nativeEnum(OrgTokenStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrgTokenStatus$ {
  /** @deprecated use `OrgTokenStatus$inboundSchema` instead. */
  export const inboundSchema = OrgTokenStatus$inboundSchema;
  /** @deprecated use `OrgTokenStatus$outboundSchema` instead. */
  export const outboundSchema = OrgTokenStatus$outboundSchema;
}
