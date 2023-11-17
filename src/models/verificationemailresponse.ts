/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { Expose } from "class-transformer";

export enum VerificationEmailResponseStatus {
    Success = "success",
}

export class VerificationEmailResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: VerificationEmailResponseStatus;
}