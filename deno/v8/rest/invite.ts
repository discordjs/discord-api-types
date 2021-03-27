import type { APIInvite } from '../payloads/mod.ts';

/**
 * https://discord.com/developers/docs/resources/invite#get-invite
 */
export interface RESTGetAPIInviteQuery {
	/**
	 * Whether the invite should contain approximate member counts
	 */
	with_counts?: boolean;
}

export type RESTGetAPIInviteResult = APIInvite;

/**
 * https://discord.com/developers/docs/resources/invite#delete-invite
 */
export type RESTDeleteAPIInviteResult = APIInvite;
