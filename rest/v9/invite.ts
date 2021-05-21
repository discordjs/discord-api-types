import type { APIInvite } from '../../payloads/v9/index';

/**
 * https://discord.com/developers/docs/resources/invite#get-invite
 */
export interface RESTGetAPIInviteQuery {
	/**
	 * Whether the invite should contain approximate member counts
	 */
	with_counts?: boolean;
	/**
	 * Whether the invite should contain the expiration date
	 */
	with_expiration?: boolean;
}

export type RESTGetAPIInviteResult = APIInvite;

/**
 * https://discord.com/developers/docs/resources/invite#delete-invite
 */
export type RESTDeleteAPIInviteResult = APIInvite;
