import type { Snowflake } from '../../globals';
import type {
	APIAllowedMentions,
	APIActionRowComponent,
	APIEmbed,
	APIMessage,
	APIWebhook,
	APIAttachment,
	MessageFlags,
	APIMessageActionRowComponent,
} from '../../payloads/v9/index';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface, Nullable } from '../../utils/internals';
/**
 * https://discord.com/developers/docs/resources/webhook#create-webhook
 */
export type RESTPostAPIChannelWebhookJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * Name of the webhook (1-80 characters)
	 */
	name: string;
	/**
	 * Image for the default webhook avatar
	 *
	 * See https://discord.com/developers/docs/reference#image-data
	 */
	avatar?: string | null;
}>;

/**
 * https://discord.com/developers/docs/resources/webhook#create-webhook
 */
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
export type RESTPatchAPIWebhookJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * The default name of the webhook
	 */
	name?: string;
	/**
	 * Image for the default webhook avatar
	 *
	 * See https://discord.com/developers/docs/reference#image-data
	 */
	avatar?: string | null;
	/**
	 * The new channel id this webhook should be moved to
	 */
	channel_id?: Snowflake;
}>;

/**
 * https://discord.com/developers/docs/resources/webhook#modify-webhook
 */
export type RESTPatchAPIWebhookResult = APIWebhook;

/**
 * https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token
 */
export type RESTPatchAPIWebhookWithTokenJSONBody = Omit<RESTPatchAPIWebhookJSONBody, 'channel_id'>;

/**
 * https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token
 */
export type RESTPatchAPIWebhookWithTokenResult = RESTGetAPIWebhookWithTokenResult;

/**
 * https://discord.com/developers/docs/resources/webhook#delete-webhook
 */
export type RESTDeleteAPIWebhookResult = never;

/**
 * https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token
 */
export type RESTDeleteAPIWebhookWithTokenResult = never;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
export type RESTPostAPIWebhookWithTokenJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * The message contents (up to 2000 characters)
	 */
	content?: string;
	/**
	 * Override the default username of the webhook
	 */
	username?: string;
	/**
	 * Override the default avatar of the webhook
	 */
	avatar_url?: string;
	/**
	 * `true` if this is a TTS message
	 */
	tts?: boolean;
	/**
	 * Embedded `rich` content
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object
	 */
	embeds?: APIEmbed[];
	/**
	 * Allowed mentions for the message
	 *
	 * See https://discord.com/developers/docs/resources/channel#allowed-mentions-object
	 */
	allowed_mentions?: APIAllowedMentions;
	/**
	 * The components to include with the message
	 *
	 * Requires an application-owned webhook
	 *
	 * See https://discord.com/developers/docs/interactions/message-components#component-object
	 */
	components?: APIActionRowComponent<APIMessageActionRowComponent>[];
	/**
	 * Attachment objects with filename and description
	 */
	attachments?: (Pick<APIAttachment, 'id' | 'description'> & Partial<Pick<APIAttachment, 'filename'>>)[];
	/**
	 * Message flags combined as a bitfield
	 */
	flags?: MessageFlags;
}>;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
export type RESTPostAPIWebhookWithTokenFormDataBody =
	| ({
			/**
			 * JSON stringified message body
			 */
			payload_json?: string;
	  } & Record<`files[${bigint}]`, unknown>)
	| (RESTPostAPIWebhookWithTokenJSONBody & Record<`files[${bigint}]`, unknown>);

/**
 * https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params
 */
export interface RESTPostAPIWebhookWithTokenQuery {
	/**
	 * Waits for server confirmation of message send before response, and returns the created message body
	 * (defaults to `false`; when `false` a message that is not saved does not return an error)
	 *
	 * @default false
	 */
	wait?: boolean;
	/**
	 * Send a message to the specified thread within a webhook's channel. The thread will automatically be unarchived.
	 */
	thread_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
export type RESTPostAPIWebhookWithTokenResult = never;

/**
 * Received when a call to https://discord.com/developers/docs/resources/webhook#execute-webhook receives
 * the `wait` query parameter set to `true`
 *
 * See https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params
 */
export type RESTPostAPIWebhookWithTokenWaitResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook-querystring-params
 */
export type RESTPostAPIWebhookWithTokenSlackQuery = RESTPostAPIWebhookWithTokenQuery;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook
 */
export type RESTPostAPIWebhookWithTokenSlackResult = never;

/**
 * Received when a call to https://discord.com/developers/docs/resources/webhook#execute-webhook receives
 * the `wait` query parameter set to `true`
 *
 * See https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook-querystring-params
 */
export type RESTPostAPIWebhookWithTokenSlackWaitResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook-querystring-params
 */
export type RESTPostAPIWebhookWithTokenGitHubQuery = RESTPostAPIWebhookWithTokenQuery;

/**
 * https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook
 */
export type RESTPostAPIWebhookWithTokenGitHubResult = never;

/**
 * Received when a call to https://discord.com/developers/docs/resources/webhook#execute-webhook receives
 * the `wait` query parameter set to `true`
 *
 * See https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook-querystring-params
 */
export type RESTPostAPIWebhookWithTokenGitHubWaitResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/webhook#get-webhook-message
 */
export type RESTGetAPIWebhookWithTokenMessageResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/webhook#edit-webhook-message
 */
export type RESTPatchAPIWebhookWithTokenMessageJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<
	Nullable<Pick<RESTPostAPIWebhookWithTokenJSONBody, 'content' | 'embeds' | 'allowed_mentions' | 'components'>> & {
		/**
		 * Attached files to keep
		 *
		 * Starting with API v10, the `attachments` array must contain all attachments that should be present after edit, including **retained and new** attachments provided in the request body.
		 *
		 * See https://discord.com/developers/docs/resources/channel#attachment-object
		 */
		attachments?: (Pick<APIAttachment, 'id'> & Partial<Pick<APIAttachment, 'filename' | 'description'>>)[];
	}
>;

/**
 * https://discord.com/developers/docs/resources/webhook#edit-webhook-message
 */
export type RESTPatchAPIWebhookWithTokenMessageFormDataBody =
	| ({
			/**
			 * JSON stringified message body
			 */
			payload_json?: string;
	  } & Record<`files[${bigint}]`, unknown>)
	| (RESTPatchAPIWebhookWithTokenMessageJSONBody & Record<`files[${bigint}]`, unknown>);

/**
 * https://discord.com/developers/docs/resources/webhook#edit-webhook-message
 */
export type RESTPatchAPIWebhookWithTokenMessageResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/webhook#delete-webhook-message
 */
export type RESTDeleteAPIWebhookWithTokenMessageResult = never;
