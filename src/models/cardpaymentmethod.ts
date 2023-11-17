/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { CardBrand } from "./cardbrand";
import { Expose } from "class-transformer";

export class CardPaymentMethod extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "brand" })
    brand: CardBrand;

    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4: string;
}