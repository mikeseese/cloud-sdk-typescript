/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreatePublicLobbyDeprecatedRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=local" })
    local?: boolean;

    /**
     * Available regions to request a game server.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
    region?: shared.Region;
}

export class CreatePublicLobbyDeprecatedResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    createPublicLobbyDeprecated400ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPublicLobbyDeprecated401ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPublicLobbyDeprecated404ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPublicLobbyDeprecated422ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPublicLobbyDeprecated429ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPublicLobbyDeprecated500ApplicationJSONString?: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata()
    roomId?: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}