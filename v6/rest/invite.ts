import type { APIInvite } from '../payloads';

/**
 * https://discord.com/developers/docs/resources/invite#get-invite
 */
export interface RESTGetAPIInviteQuery {
  with_counts?: boolean;
}

export type RESTGetAPIInviteResult = APIInvite;

/**
 * https://discord.com/developers/docs/resources/invite#delete-invite
 */
export type RESTDeleteAPIInviteResult = APIInvite;
