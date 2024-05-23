/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { InvoiceStatus, InvoiceStatus$ } from "./invoicestatus";
import * as z from "zod";

export type Invoice = {
    status: InvoiceStatus;
    amountDue: number;
    pdfUrl: string;
    dueDate: Date;
    year: number;
    month: number;
    id: string;
};

/** @internal */
export namespace Invoice$ {
    export const inboundSchema: z.ZodType<Invoice, z.ZodTypeDef, unknown> = z
        .object({
            status: InvoiceStatus$.inboundSchema,
            amountDue: z.number(),
            pdfUrl: z.string(),
            dueDate: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            year: z.number(),
            month: z.number(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                status: v.status,
                amountDue: v.amountDue,
                pdfUrl: v.pdfUrl,
                dueDate: v.dueDate,
                year: v.year,
                month: v.month,
                id: v.id,
            };
        });

    export type Outbound = {
        status: string;
        amountDue: number;
        pdfUrl: string;
        dueDate: string;
        year: number;
        month: number;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Invoice> = z
        .object({
            status: InvoiceStatus$.outboundSchema,
            amountDue: z.number(),
            pdfUrl: z.string(),
            dueDate: z.date().transform((v) => v.toISOString()),
            year: z.number(),
            month: z.number(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                status: v.status,
                amountDue: v.amountDue,
                pdfUrl: v.pdfUrl,
                dueDate: v.dueDate,
                year: v.year,
                month: v.month,
                id: v.id,
            };
        });
}