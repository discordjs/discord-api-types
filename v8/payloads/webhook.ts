/**
 * Types extracted from https://discord.com/developers/docs/resources/webhook
 */

import type { Snowflake } from '../../common/index';
import type { APIPartialChannel, APIPartialGuild, APIUser } from './index';

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object
 */
export interface APIWebhook {
	/**
	 * The id of the webhook
	 */
	id: Snowflake;
	/**
	 * The type of the webhook
	 *
	 * See https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
	 */
	type: WebhookType;
	/**
	 * The guild id this webhook is for
	 */
	guild_id?: Snowflake;
	/**
	 * The channel id this webhook is for
	 */
	channel_id: Snowflake;
	/**
	 * The user this webhook was created by (not returned when getting a webhook with its token)
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	user?: APIUser;
	/**
	 * The default name of the webhook
	 */
	name: string | null;
	/**
	 * The default avatar of the webhook
	 */
	avatar: string | null;
	/**
	 * The secure token of the webhook (returned for Incoming Webhooks)
	 */
	token?: string;
	/**
	 * The bot/OAuth2 application that created this webhook
	 */
	application_id: Snowflake | null;
	source_guild?: APIPartialGuild;
	source_channel?: APIPartialChannel;
}

export const enum WebhookType {
	/**
	 * Incoming Webhooks can post messages to channels with a generated token
	 */
	Incoming = 1,
	/**
	 * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels
	 */
	ChannelFollower,
}
