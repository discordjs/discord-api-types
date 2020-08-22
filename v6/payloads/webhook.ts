/**
 * Types extracted from https://discord.com/developers/docs/resources/webhook
 */

import type { APIPartialChannel } from './channel';
import type { APIPartialGuild } from './guild';
import type { APIUser } from './user';

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object
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
}

export enum WebhookType {
	Incoming = 1,
	ChannelFollower,
}
