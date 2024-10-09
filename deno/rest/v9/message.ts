import type { Snowflake } from '../../globals.ts';
import type {
	APIActionRowComponent,
	APIAllowedMentions,
	APIAttachment,
	APIEmbed,
	APIMessage,
	APIMessageActionRowComponent,
	APIMessageReference,
	APIUser,
	MessageFlags,
} from '../../payloads/v9/mod.ts';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface, StrictPartial } from '../../utils/internals.ts';
import type { RESTAPIPoll } from './poll.ts';

/**
 * https://discord.com/developers/docs/resources/message#get-channel-messages
 */
export interface RESTGetAPIChannelMessagesQuery {
	/**
	 * Get messages around this message ID
	 */
	around?: Snowflake;
	/**
	 * Get messages before this message ID
	 */
	before?: Snowflake;
	/**
	 * Get messages after this message ID
	 */
	after?: Snowflake;
	/**
	 * Max number of messages to return (1-100)
	 *
	 * @default 50
	 */
	limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/message#get-channel-messages
 */
export type RESTGetAPIChannelMessagesResult = APIMessage[];

/**
 * https://discord.com/developers/docs/resources/message#get-channel-message
 */
export type RESTGetAPIChannelMessageResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/message#message-reference-structure
 */
export type RESTAPIMessageReference = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<
	Required<Pick<APIMessageReference, 'message_id'>>
> &
	StrictPartial<APIMessageReference> & {
		/**
		 * Whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message
		 *
		 * @default true
		 */
		fail_if_not_exists?: boolean | undefined;
	};

/**
 * @deprecated Use {@link RESTAPIMessageReference} instead
 */
export type APIMessageReferenceSend = RESTAPIMessageReference;

/**
 * https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
 */
export type RESTAPIAttachment = Partial<
	Pick<APIAttachment, 'description' | 'duration_secs' | 'filename' | 'title' | 'waveform'>
> & {
	/**
	 * Attachment id or a number that matches `n` in `files[n]`
	 */
	id: Snowflake | number;
};

/**
 * https://discord.com/developers/docs/resources/message#create-message
 */
export interface RESTPostAPIChannelMessageJSONBody {
	/**
	 * The message contents (up to 2000 characters)
	 */
	content?: string | undefined;
	/**
	 * A nonce that can be used for optimistic message sending
	 */
	nonce?: number | string | undefined;
	/**
	 * `true` if this is a TTS message
	 */
	tts?: boolean | undefined;
	/**
	 * Embedded `rich` content (up to 6000 characters)
	 *
	 * See https://discord.com/developers/docs/resources/message#embed-object
	 */
	embeds?: APIEmbed[] | undefined;
	/**
	 * Embedded `rich` content
	 *
	 * See https://discord.com/developers/docs/resources/message#embed-object
	 *
	 * @deprecated Use `embeds` instead
	 */
	embed?: APIEmbed | undefined;
	/**
	 * Allowed mentions for a message
	 *
	 * See https://discord.com/developers/docs/resources/message#allowed-mentions-object
	 */
	allowed_mentions?: APIAllowedMentions | undefined;
	/**
	 * Include to make your message a reply
	 *
	 * See https://discord.com/developers/docs/resources/message#message-reference-structure
	 */
	message_reference?: RESTAPIMessageReference | undefined;
	/**
	 * The components to include with the message
	 *
	 * See https://discord.com/developers/docs/interactions/message-components#component-object
	 */
	components?: APIActionRowComponent<APIMessageActionRowComponent>[] | undefined;
	/**
	 * IDs of up to 3 stickers in the server to send in the message
	 *
	 * See https://discord.com/developers/docs/resources/sticker#sticker-object
	 */
	sticker_ids?: [Snowflake, Snowflake, Snowflake] | [Snowflake, Snowflake] | [Snowflake] | undefined;
	/**
	 * Attachment objects with filename and description
	 */
	attachments?: RESTAPIAttachment[] | undefined;
	/**
	 * Message flags combined as a bitfield
	 */
	flags?: MessageFlags | undefined;
	/**
	 * If `true` and nonce is present, it will be checked for uniqueness in the past few minutes.
	 * If another message was created by the same author with the same nonce, that message will be returned and no new message will be created.
	 */
	enforce_nonce?: boolean | undefined;
	/**
	 * A poll!
	 */
	poll?: RESTAPIPoll | undefined;
}

/**
 * https://discord.com/developers/docs/resources/message#create-message
 */
export type RESTPostAPIChannelMessageFormDataBody =
	| (Record<`files[${bigint}]`, unknown> & {
			/**
			 * JSON stringified message body
			 */
			payload_json?: string | undefined;
	  })
	| (Record<`files[${bigint}]`, unknown> & RESTPostAPIChannelMessageJSONBody);

/**
 * https://discord.com/developers/docs/resources/message#create-message
 */
export type RESTPostAPIChannelMessageResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/message#crosspost-message
 */
export type RESTPostAPIChannelMessageCrosspostResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/message#create-reaction
 */
export type RESTPutAPIChannelMessageReactionResult = never;

/**
 * https://discord.com/developers/docs/resources/message#delete-own-reaction
 */
export type RESTDeleteAPIChannelMessageOwnReactionResult = never;

/**
 * @deprecated Use {@link RESTDeleteAPIChannelMessageOwnReactionResult} instead
 */
export type RESTDeleteAPIChannelMessageOwnReaction = RESTDeleteAPIChannelMessageOwnReactionResult;

/**
 * https://discord.com/developers/docs/resources/message#delete-user-reaction
 */
export type RESTDeleteAPIChannelMessageUserReactionResult = never;

/**
 * https://discord.com/developers/docs/resources/message#get-reactions
 */
export interface RESTGetAPIChannelMessageReactionUsersQuery {
	/**
	 * The reaction type
	 */
	type?: ReactionType;
	/**
	 * Get users after this user ID
	 */
	after?: Snowflake;
	/**
	 * Max number of users to return (1-100)
	 *
	 * @default 25
	 */
	limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/message#get-reactions-reaction-types
 */
export enum ReactionType {
	Normal,
	Super,
}

/**
 * https://discord.com/developers/docs/resources/message#get-reactions
 */
export type RESTGetAPIChannelMessageReactionUsersResult = APIUser[];

/**
 * https://discord.com/developers/docs/resources/message#delete-all-reactions
 */
export type RESTDeleteAPIChannelAllMessageReactionsResult = never;

/**
 * https://discord.com/developers/docs/resources/message#delete-all-reactions-for-emoji
 */
export type RESTDeleteAPIChannelMessageReactionResult = never;

/**
 * https://discord.com/developers/docs/resources/message#edit-message
 */
export interface RESTPatchAPIChannelMessageJSONBody {
	/**
	 * The new message contents (up to 2000 characters)
	 */
	content?: string | null | undefined;
	/**
	 * Embedded `rich` content (up to 6000 characters)
	 *
	 * See https://discord.com/developers/docs/resources/message#embed-object
	 */
	embeds?: APIEmbed[] | null | undefined;
	/**
	 * Embedded `rich` content
	 *
	 * See https://discord.com/developers/docs/resources/message#embed-object
	 *
	 * @deprecated Use `embeds` instead
	 */
	embed?: APIEmbed | null | undefined;
	/**
	 * Edit the flags of a message (only `SUPPRESS_EMBEDS` can currently be set/unset)
	 *
	 * When specifying flags, ensure to include all previously set flags/bits
	 * in addition to ones that you are modifying
	 *
	 * See https://discord.com/developers/docs/resources/message#message-object-message-flags
	 */
	flags?: MessageFlags | null | undefined;
	/**
	 * Allowed mentions for the message
	 *
	 * See https://discord.com/developers/docs/resources/message#allowed-mentions-object
	 */
	allowed_mentions?: APIAllowedMentions | null | undefined;
	/**
	 * Attached files to keep
	 *
	 * Starting with API v10, the `attachments` array must contain all attachments that should be present after edit, including **retained and new** attachments provided in the request body.
	 *
	 * See https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure
	 */
	attachments?: RESTAPIAttachment[] | undefined;
	/**
	 * The components to include with the message
	 *
	 * See https://discord.com/developers/docs/interactions/message-components#component-object
	 */
	components?: APIActionRowComponent<APIMessageActionRowComponent>[] | null | undefined;
}

/**
 * https://discord.com/developers/docs/resources/message#edit-message
 */
export type RESTPatchAPIChannelMessageFormDataBody =
	| (Record<`files[${bigint}]`, unknown> & {
			/**
			 * JSON stringified message body
			 */
			payload_json?: string | undefined;
	  })
	| (Record<`files[${bigint}]`, unknown> & RESTPatchAPIChannelMessageJSONBody);

/**
 * https://discord.com/developers/docs/resources/message#edit-message
 */
export type RESTPatchAPIChannelMessageResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/message#delete-message
 */
export type RESTDeleteAPIChannelMessageResult = never;

/**
 * https://discord.com/developers/docs/resources/message#bulk-delete-messages
 */
export interface RESTPostAPIChannelMessagesBulkDeleteJSONBody {
	/**
	 * An array of message ids to delete (2-100)
	 */
	messages: Snowflake[];
}

/**
 * https://discord.com/developers/docs/resources/message#bulk-delete-messages
 */
export type RESTPostAPIChannelMessagesBulkDeleteResult = never;
