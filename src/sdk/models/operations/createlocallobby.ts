/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreateLocalLobbyRequestBody extends SpeakeasyBase {
    /**
     * User input to initialize the game state. Object must be smaller than 64KB.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "initialConfig" })
    @Type(() => shared.LobbyInitialConfig)
    initialConfig: shared.LobbyInitialConfig;

    /**
     * Available regions to request a game server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: shared.Region;
}

export class CreateLocalLobbyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: CreateLocalLobbyRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roomId" })
    roomId?: string;
}

export class CreateLocalLobbyResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    lobby?: shared.Lobby;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
