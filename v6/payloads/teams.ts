/**
 * Types extracted from https://discord.com/developers/docs/topics/teams
 */

import type { APIUser } from './user';

/**
 * https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface APITeam {
  id: string;
  icon: string | null;
  members: APITeamMember[];
  owner_user_id: string;
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-team-members-object
 */
export interface APITeamMember {
  membership_state: TeamMemberMembershipState;
  permissions: string[];
  team_id: string;
  user: APIUser;
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
 */
export enum TeamMemberMembershipState {
  INVITED = 1,
  ACCEPTED,
}
