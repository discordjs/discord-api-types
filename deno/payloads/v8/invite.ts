/**
 * Types extracted from https://discord.com/developers/docs/resources/invite
 */

import type { APIPartialChannel } from './channel.ts';
import type { APIPartialGuild } from './guild.ts';
import type { APIApplication } from './oauth2.ts';
import type { APIUser } from './user.ts';

/**
 * https://discord.com/developers/docs/resources/invite#invite-object
 */
export interface APIInvite {
	/**
	 * The invite code (unique ID)
	 */
	code: string;
	/**
	 * The guild this invite is for
	 *
	 * See https://discord.com/developers/docs/resources/guild#guild-object
	 */
	guild?: APIPartialGuild;
	/**
	 * The channel this invite is for
	 *
	 * See https://discord.com/developers/docs/resources/channel#channel-object
	 */
	channel?: Required<APIPartialChannel>;
	/**
	 * The user who created the invite
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	inviter?: APIUser;
	/**
	 * The type of user target for this voice channel invite
	 *
	 * See https://discord.com/developers/docs/resources/invite#invite-object-target-user-types
	 */
	target_type?: InviteTargetUserType;
	/**
	 * The user whose stream to display for this voice channel stream invite
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	target_user?: APIUser;
	/**
	 * The embedded application to open for this voice channel embedded application invite
	 */
	target_application?: Partial<APIApplication>;
	/**
	 * Approximate count of online members, returned from the `GET /invites/<code>` endpoint when `with_counts` is `true`
	 */
	approximate_presence_count?: number;
	/**
	 * Approximate count of total members, returned from the `GET /invites/<code>` endpoint when `with_counts` is `true`
	 */
	approximate_member_count?: number;
}

/**
 * https://discord.com/developers/docs/resources/invite#invite-object-target-user-types
 */
export enum InviteTargetUserType {
	STREAM = 1,
	EMBEDDED_APPLICATION,
}

/**
 * https://discord.com/developers/docs/resources/invite#invite-metadata-object
 */
export interface APIExtendedInvite extends APIInvite {
	/**
	 * Number of times this invite has been used
	 */
	uses: number;
	/**
	 * Max number of times this invite can be used
	 */
	max_uses: number;
	/**
	 * Duration (in seconds) after which the invite expires
	 */
	max_age: number;
	/**
	 * Whether this invite only grants temporary membership
	 */
	temporary: boolean;
	/**
	 * When this invite was created
	 */
	created_at: string;
}
