/**
 * Types extracted from https://discord.com/developers/docs/resources/webhook
 */

import type { APIPartialChannel } from './channel.ts';
import type { APIPartialGuild } from './guild.ts';
import type { APIUser } from './user.ts';

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object
 *
 * @deprecated API and Gateway v6 are deprecated and the types will not receive further updates, please update to v8.
 */
export interface APIWebhook {
	id: string;
	type: WebhookType;
	guild_id?: string;
	channel_id: string;
	user?: APIUser;
	name: string | null;
	avatar: string | null;
	token?: string;
	source_guild?: APIPartialGuild;
	source_channel?: APIPartialChannel;
	application_id: string | null;
}

/**
 * @deprecated API and Gateway v6 are deprecated and the types will not receive further updates, please update to v8.
 */
export enum WebhookType {
	Incoming = 1,
	ChannelFollower,
}
