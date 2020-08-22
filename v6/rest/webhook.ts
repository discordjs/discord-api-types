import type { APIEmbed, APIMessage, APIWebhook } from '../payloads';
import type { APIAllowedMentionsSend } from './channel';

/**
 * https://discord.com/developers/docs/resources/webhook#create-webhook
 */
export interface RESTPostAPIChannelWebhookJSONBody {
	name: string;
	avatar?: string | null;
}

export type RESTPostAPIChannelWebhookResult = APIWebhook;

/**
 * https://discord.com/developers/docs/resources/webhook#get-channel-webhooks
 */
export type RESTGetAPIChannelWebhooksResult = APIWebhook[];

/**
 * https://discord.com/developers/docs/resources/webhook#get-guild-webhooks
 */
export type RESTGetAPIGuildWebhooksResult = APIWebhook[];

/**
 * https://discord.com/developers/docs/resources/webhook#get-webhook
 */
export type RESTGetAPIWebhookResult = APIWebhook;

/**
 * https://discord.com/developers/docs/resources/webhook#get-webhook-with-token
 */
export type RESTGetAPIWebhookWithTokenResult = Omit<APIWebhook, 'user'>;

/**
 * https://discord.com/developers/docs/resources/webhook#modify-webhook
 */
export interface RESTPatchAPIWebhookJSONBody {
	name?: string;
	avatar?: string | null;
	channel_id?: string;
}

export type RESTPatchAPIWebhookResult = APIWebhook;

/**
 * https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token
 */
export type RESTPatchAPIWebhookWithTokenJSONBody = Omit<RESTPatchAPIWebhookJSONBody, 'channel_id'>;

export type RESTPatchAPIWebhookWithTokenResult = Omit<APIWebhook, 'user'>;

/**
 * https://discord.com/developers/docs/resources/webhook#delete-webhook
 */
export type RESTDeleteAPIWebhookResult = never;
export type RESTDeleteAPIWebhookWithTokenResult = never;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
export interface RESTPostAPIWebhookWithTokenJSONBody {
	content?: string;
	username?: string;
	avatar_url?: string;
	tts?: boolean;
	embeds?: APIEmbed[];
	allowed_mentions?: APIAllowedMentionsSend;
}

/**
 * https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
export type RESTPostAPIWebhookWithTokenFormDataBody = {
	/**
	 * JSON stringified message body
	 */
	payload_json?: string;
	/**
	 * The file contents
	 */
	file: unknown;
} | (RESTPostAPIWebhookWithTokenJSONBody & {
	/**
	 * The file contents
	 */
	file: unknown;
});

/**
 * https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params
 */
export interface RESTPostAPIWebhookWithTokenQuery {
	wait?: boolean;
}

export type RESTPostAPIWebhookWithTokenResult = never;

/**
 * Received when a call to POST `/webhooks/{webhook.id}/{webhook.token}` receives
 * the `wait` query parameter set to `true`
 *
 * @see https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params
 */
export type RESTPostAPIWebhookWithTokenWaitResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook-querystring-params
 */
export type RESTPostAPIWebhookWithTokenSlackQuery = RESTPostAPIWebhookWithTokenQuery;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook-querystring-params
 */
export type RESTPostAPIWebhookWithTokenGitHubQuery = RESTPostAPIWebhookWithTokenQuery;
