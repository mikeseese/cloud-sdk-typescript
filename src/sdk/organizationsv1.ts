/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { organizationsV1AcceptInvite } from "../funcs/organizationsV1AcceptInvite.js";
import { organizationsV1GetOrgMembers } from "../funcs/organizationsV1GetOrgMembers.js";
import { organizationsV1GetOrgPendingInvites } from "../funcs/organizationsV1GetOrgPendingInvites.js";
import { organizationsV1GetOrgs } from "../funcs/organizationsV1GetOrgs.js";
import { organizationsV1GetUserPendingInvites } from "../funcs/organizationsV1GetUserPendingInvites.js";
import { organizationsV1InviteUser } from "../funcs/organizationsV1InviteUser.js";
import { organizationsV1RejectInvite } from "../funcs/organizationsV1RejectInvite.js";
import { organizationsV1RescindInvite } from "../funcs/organizationsV1RescindInvite.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class OrganizationsV1 extends ClientSDK {
  /**
   * Returns an unsorted list of all organizations that you are a member of (an accepted membership invite). An organization is uniquely identified by an `orgId`.
   */
  async getOrgs(
    options?: RequestOptions,
  ): Promise<components.OrgsPage> {
    return unwrapAsync(organizationsV1GetOrgs(
      this,
      options,
    ));
  }

  async getUserPendingInvites(
    options?: RequestOptions,
  ): Promise<components.PendingOrgInvitesPage> {
    return unwrapAsync(organizationsV1GetUserPendingInvites(
      this,
      options,
    ));
  }

  async getOrgMembers(
    orgId: string,
    options?: RequestOptions,
  ): Promise<components.OrgMembersPage> {
    return unwrapAsync(organizationsV1GetOrgMembers(
      this,
      orgId,
      options,
    ));
  }

  async inviteUser(
    orgId: string,
    createUserInvite: components.CreateUserInvite,
    options?: RequestOptions,
  ): Promise<components.PendingOrgInvite> {
    return unwrapAsync(organizationsV1InviteUser(
      this,
      orgId,
      createUserInvite,
      options,
    ));
  }

  async rescindInvite(
    orgId: string,
    rescindUserInvite: components.RescindUserInvite,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(organizationsV1RescindInvite(
      this,
      orgId,
      rescindUserInvite,
      options,
    ));
  }

  async getOrgPendingInvites(
    orgId: string,
    options?: RequestOptions,
  ): Promise<components.PendingOrgInvitesPage> {
    return unwrapAsync(organizationsV1GetOrgPendingInvites(
      this,
      orgId,
      options,
    ));
  }

  async acceptInvite(
    orgId: string,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(organizationsV1AcceptInvite(
      this,
      orgId,
      options,
    ));
  }

  async rejectInvite(
    orgId: string,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(organizationsV1RejectInvite(
      this,
      orgId,
      options,
    ));
  }
}
