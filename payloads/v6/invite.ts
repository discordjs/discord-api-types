/**
 * Types extracted from https://docs.discord.com/developers/resources/invite
 */

import type { APIPartialChannel } from './channel';
import type { APIPartialGuild } from './guild';
import type { APIUser } from './user';

/**
 * https://docs.discord.com/developers/resources/invite#invite-object
 *
 * @deprecated API and Gateway v6 are deprecated and the types will not receive further updates, please update to v8.
 */
export interface APIInvite {
	code: string;
	guild?: APIPartialGuild;
	channel?: Required<APIPartialChannel>;
	inviter?: APIUser;
	target_user?: APIUser;
	target_user_type?: InviteTargetUserType;
	approximate_presence_count?: number;
	approximate_member_count?: number;
}

/**
 * https://docs.discord.com/developers/resources/invite#invite-object-target-user-types
 *
 * @deprecated API and Gateway v6 are deprecated and the types will not receive further updates, please update to v8.
 */
export enum InviteTargetUserType {
	STREAM = 1,
}

/**
 * https://docs.discord.com/developers/resources/invite#invite-metadata-object
 *
 * @deprecated API and Gateway v6 are deprecated and the types will not receive further updates, please update to v8.
 */
export interface APIExtendedInvite extends APIInvite {
	uses: number;
	max_uses: number;
	max_age: number;
	temporary: boolean;
	created_at: string;
}
