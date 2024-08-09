/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { authV1LoginAnonymous } from "../funcs/authV1LoginAnonymous.js";
import { authV1LoginGoogle } from "../funcs/authV1LoginGoogle.js";
import { authV1LoginNickname } from "../funcs/authV1LoginNickname.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class AuthV1 extends ClientSDK {
    /**
     * Returns a unique player token for an anonymous user.
     */
    async loginAnonymous(
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.PlayerTokenObject> {
        return unwrapAsync(authV1LoginAnonymous(this, appId, options));
    }

    /**
     * Returns a unique player token with a specified nickname for a user.
     */
    async loginNickname(
        nicknameObject: components.NicknameObject,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.PlayerTokenObject> {
        return unwrapAsync(authV1LoginNickname(this, nicknameObject, appId, options));
    }

    /**
     * Returns a unique player token using a Google-signed OIDC `idToken`.
     */
    async loginGoogle(
        googleIdTokenObject: components.GoogleIdTokenObject,
        appId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.PlayerTokenObject> {
        return unwrapAsync(authV1LoginGoogle(this, googleIdTokenObject, appId, options));
    }
}
