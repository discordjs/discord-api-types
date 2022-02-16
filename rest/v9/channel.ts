import type { Permissions, Snowflake } from '../../globals';
import type {
	APIActionRowComponent,
	APIAllowedMentions,
	APIAttachment,
	APIChannel,
	APIEmbed,
	APIExtendedInvite,
	APIFollowedChannel,
	APIMessage,
	APIMessageActionRowComponent,
	APIMessageReference,
	APIThreadList,
	APIThreadMember,
	APIUser,
	ChannelType,
	InviteTargetType,
	MessageFlags,
	OverwriteType,
	ThreadAutoArchiveDuration,
	VideoQualityMode,
} from '../../payloads/v9/index';
import type { AddUndefinedToPossiblyUndefinedPropertiesOfInterface, StrictPartial } from '../../utils/internals';

export interface APIChannelPatchOverwrite extends RESTPutAPIChannelPermissionJSONBody {
	id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/channel#get-channel
 */
export type RESTGetAPIChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/channel#modify-channel
 */
export type RESTPatchAPIChannelJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * 1-100 character channel name
	 *
	 * Channel types: all
	 */
	name?: string;

	/**
	 * The type of channel; only conversion between `text` and `news`
	 * is supported and only in guilds with the "NEWS" feature
	 *
	 * Channel types: text, news
	 */
	type?: ChannelType.GuildNews | ChannelType.GuildText;
	/**
	 * The position of the channel in the left-hand listing
	 *
	 * Channel types: all excluding newsThread, publicThread, privateThread
	 */
	position?: number | null;
	/**
	 * 0-1024 character channel topic
	 *
	 * Channel types: text, news
	 */
	topic?: string | null;
	/**
	 * Whether the channel is nsfw
	 *
	 * Channel types: text, news, store
	 */
	nsfw?: boolean | null;
	/**
	 * Amount of seconds a user has to wait before sending another message (0-21600);
	 * bots, as well as users with the permission `MANAGE_MESSAGES` or `MANAGE_CHANNELS`,
	 * are unaffected
	 *
	 * Channel types: text, newsThread, publicThread, privateThread
	 */
	rate_limit_per_user?: number | null;
	/**
	 * The bitrate (in bits) of the voice channel; 8000 to 96000 (128000 for VIP servers)
	 *
	 * Channel types: voice
	 */
	bitrate?: number | null;
	/**
	 * The user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit
	 *
	 * Channel types: voice
	 */
	user_limit?: number | null;
	/**
	 * Channel or category-specific permissions
	 *
	 * Channel types: all excluding newsThread, publicThread, privateThread
	 */
	permission_overwrites?: APIChannelPatchOverwrite[] | null;
	/**
	 * ID of the new parent category for a channel
	 *
	 * Channel types: text, news, store, voice
	 */
	parent_id?: Snowflake | null;
	/**
	 * Voice region id for the voice or stage channel, automatic when set to `null`
	 *
	 * See https://discord.com/developers/docs/resources/voice#voice-region-object
	 */
	rtc_region?: string | null;
	/**
	 * The camera video quality mode of the voice channel
	 *
	 * See https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
	 */
	video_quality_mode?: VideoQualityMode | null;
	/**
	 * Whether the thread should be archived
	 *
	 * Channel types: newsThread, publicThread, privateThread
	 */
	archived?: boolean;
	/**
	 * The amount of time in minutes to wait before automatically archiving the thread
	 *
	 * Channel types: newsThread, publicThread, privateThread
	 */
	auto_archive_duration?: ThreadAutoArchiveDuration;
	/**
	 * Whether the thread should be locked
	 *
	 * Channel types: newsThread, publicThread, privateThread
	 */
	locked?: boolean;
	/**
	 * Default duration for newly created threads, in minutes, to automatically archive the thread after recent activity
	 *
	 * Channel types: text, news
	 */
	default_auto_archive_duration?: ThreadAutoArchiveDuration;
	/**
	 * Whether non-moderators can add other non-moderators to the thread
	 *
	 * Channel types: privateThread
	 */
	invitable?: boolean;
}>;

/**
 * https://discord.com/developers/docs/resources/channel#modify-channel
 */
export type RESTPatchAPIChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/channel#deleteclose-channel
 */
export type RESTDeleteAPIChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/channel#get-channel-messages
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
 * https://discord.com/developers/docs/resources/channel#get-channel-messages
 */
export type RESTGetAPIChannelMessagesResult = APIMessage[];

/**
 * https://discord.com/developers/docs/resources/channel#get-channel-message
 */
export type RESTGetAPIChannelMessageResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure
 */
export type APIMessageReferenceSend = StrictPartial<APIMessageReference> &
	Required<Pick<APIMessageReference, 'message_id'>> &
	AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
		/**
		 * Whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message
		 *
		 * @default true
		 */
		fail_if_not_exists?: boolean;
	}>;

/**
 * https://discord.com/developers/docs/resources/channel#create-message
 */
export type RESTPostAPIChannelMessageJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * The message contents (up to 2000 characters)
	 */
	content?: string;
	/**
	 * A nonce that can be used for optimistic message sending
	 */
	nonce?: number | string;
	/**
	 * `true` if this is a TTS message
	 */
	tts?: boolean;
	/**
	 * Embedded `rich` content (up to 6000 characters)
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object
	 */
	embeds?: APIEmbed[];
	/**
	 * Embedded `rich` content
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object
	 * @deprecated Use `embeds` instead
	 */
	embed?: APIEmbed;
	/**
	 * Allowed mentions for a message
	 *
	 * See https://discord.com/developers/docs/resources/channel#allowed-mentions-object
	 */
	allowed_mentions?: APIAllowedMentions;
	/**
	 * Include to make your message a reply
	 *
	 * See https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure
	 */
	message_reference?: APIMessageReferenceSend;
	/**
	 * The components to include with the message
	 *
	 * See https://discord.com/developers/docs/interactions/message-components#component-object
	 */
	components?: APIActionRowComponent<APIMessageActionRowComponent>[];
	/**
	 * IDs of up to 3 stickers in the server to send in the message
	 *
	 * See https://discord.com/developers/docs/resources/sticker#sticker-object
	 */
	sticker_ids?: [Snowflake] | [Snowflake, Snowflake] | [Snowflake, Snowflake, Snowflake];
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
 * https://discord.com/developers/docs/resources/channel#create-message
 */
export type RESTPostAPIChannelMessageFormDataBody =
	| ({
			/**
			 * JSON stringified message body
			 */
			payload_json?: string;
	  } & Record<`files[${bigint}]`, unknown>)
	| (RESTPostAPIChannelMessageJSONBody & Record<`files[${bigint}]`, unknown>);

/**
 * https://discord.com/developers/docs/resources/channel#create-message
 */
export type RESTPostAPIChannelMessageResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/channel#crosspost-message
 */
export type RESTPostAPIChannelMessageCrosspostResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/channel#create-reaction
 */
export type RESTPutAPIChannelMessageReactionResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#delete-own-reaction
 */
export type RESTDeleteAPIChannelMessageOwnReaction = never;

/**
 * https://discord.com/developers/docs/resources/channel#delete-user-reaction
 */
export type RESTDeleteAPIChannelMessageUserReactionResult = never;

/*
 * https://discord.com/developers/docs/resources/channel#get-reactions
 */
export interface RESTGetAPIChannelMessageReactionUsersQuery {
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
 * https://discord.com/developers/docs/resources/channel#get-reactions
 */
export type RESTGetAPIChannelMessageReactionUsersResult = APIUser[];

/**
 * https://discord.com/developers/docs/resources/channel#delete-all-reactions
 */
export type RESTDeleteAPIChannelAllMessageReactionsResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji
 */
export type RESTDeleteAPIChannelMessageReactionResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#edit-message
 */
export type RESTPatchAPIChannelMessageJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * The new message contents (up to 2000 characters)
	 */
	content?: string | null;
	/**
	 * Embedded `rich` content (up to 6000 characters)
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object
	 */
	embeds?: APIEmbed[] | null;
	/**
	 * Embedded `rich` content
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object
	 * @deprecated Use `embeds` instead
	 */
	embed?: APIEmbed | null;
	/**
	 * Edit the flags of a message (only `SUPPRESS_EMBEDS` can currently be set/unset)
	 *
	 * When specifying flags, ensure to include all previously set flags/bits
	 * in addition to ones that you are modifying
	 *
	 * See https://discord.com/developers/docs/resources/channel#message-object-message-flags
	 */
	flags?: MessageFlags | null;
	/**
	 * Allowed mentions for the message
	 *
	 * See https://discord.com/developers/docs/resources/channel#allowed-mentions-object
	 */
	allowed_mentions?: APIAllowedMentions | null;
	/**
	 * Attached files to keep
	 *
	 * Starting with API v10, the `attachments` array must contain all attachments that should be present after edit, including **retained and new** attachments provided in the request body.
	 *
	 * See https://discord.com/developers/docs/resources/channel#attachment-object
	 */
	attachments?: (Pick<APIAttachment, 'id'> & Partial<Pick<APIAttachment, 'filename' | 'description'>>)[];
	/**
	 * The components to include with the message
	 *
	 * See https://discord.com/developers/docs/interactions/message-components#component-object
	 */
	components?: APIActionRowComponent<APIMessageActionRowComponent>[] | null;
}>;

/**
 * https://discord.com/developers/docs/resources/channel#edit-message
 */
export type RESTPatchAPIChannelMessageFormDataBody =
	| ({
			/**
			 * JSON stringified message body
			 */
			payload_json?: string;
	  } & Record<`files[${bigint}]`, unknown>)
	| (RESTPatchAPIChannelMessageJSONBody & Record<`files[${bigint}]`, unknown>);

/**
 * https://discord.com/developers/docs/resources/channel#edit-message
 */
export type RESTPatchAPIChannelMessageResult = APIMessage;

/**
 * https://discord.com/developers/docs/resources/channel#delete-message
 */
export type RESTDeleteAPIChannelMessageResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#bulk-delete-messages
 */
export interface RESTPostAPIChannelMessagesBulkDeleteJSONBody {
	/**
	 * An array of message ids to delete (2-100)
	 */
	messages: Snowflake[];
}

/**
 * https://discord.com/developers/docs/resources/channel#bulk-delete-messages
 */
export type RESTPostAPIChannelMessagesBulkDeleteResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#edit-channel-permissions
 */
export interface RESTPutAPIChannelPermissionJSONBody {
	/**
	 * The bitwise value of all allowed permissions
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 *
	 * @default "0"
	 */
	allow?: Permissions | null;
	/**
	 * The bitwise value of all disallowed permissions
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 *
	 * @default "0"
	 */
	deny?: Permissions | null;
	/**
	 * `0` for a role or `1` for a member
	 */
	type: OverwriteType;
}

/**
 * https://discord.com/developers/docs/resources/channel#edit-channel-permissions
 */
export type RESTPutAPIChannelPermissionResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#get-channel-invites
 */
export type RESTGetAPIChannelInvitesResult = APIExtendedInvite[];

/**
 * https://discord.com/developers/docs/resources/channel#create-channel-invite
 */
export type RESTPostAPIChannelInviteJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * Duration of invite in seconds before expiry, or 0 for never
	 *
	 * @default 86400 (24 hours)
	 */
	max_age?: number;
	/**
	 * Max number of uses or 0 for unlimited
	 *
	 * @default 0
	 */
	max_uses?: number;
	/**
	 * Whether this invite only grants temporary membership
	 *
	 * @default false
	 */
	temporary?: boolean;
	/**
	 * If true, don't try to reuse a similar invite
	 * (useful for creating many unique one time use invites)
	 *
	 * @default false
	 */
	unique?: boolean;
	/**
	 * The type of target for this voice channel invite
	 *
	 * See https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
	 */
	target_type?: InviteTargetType;
	/**
	 * The id of the user whose stream to display for this invite
	 * - Required if `target_type` is 1
	 * - The user must be streaming in the channel
	 */
	target_user_id?: Snowflake;
	/**
	 * The id of the embedded application to open for this invite
	 * - Required if `target_type` is 2
	 * - The application must have the `EMBEDDED` flag
	 */
	target_application_id?: Snowflake;
}>;

/**
 * https://discord.com/developers/docs/resources/channel#create-channel-invite
 */
export type RESTPostAPIChannelInviteResult = APIExtendedInvite;

/**
 * https://discord.com/developers/docs/resources/channel#delete-channel-permission
 */
export type RESTDeleteAPIChannelPermissionResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#follow-news-channel
 */
export interface RESTPostAPIChannelFollowersJSONBody {
	/**
	 * ID of target channel
	 */
	webhook_channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/channel#follow-news-channel
 */
export type RESTPostAPIChannelFollowersResult = APIFollowedChannel;

/**
 * https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
 */
export type RESTPostAPIChannelTypingResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#get-pinned-messages
 */
export type RESTGetAPIChannelPinsResult = APIMessage[];

/**
 * https://discord.com/developers/docs/resources/channel#add-pinned-channel-message
 */
export type RESTPutAPIChannelPinResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#delete-pinned-channel-message
 */
export type RESTDeleteAPIChannelPinResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
 */
export type RESTPutAPIChannelRecipientJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * Access token of a user that has granted your app the `gdm.join` scope
	 */
	access_token: string;
	/**
	 * Nickname of the user being added
	 */
	nick?: string;
}>;

/**
 * https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
 */
export type RESTPutAPIChannelRecipientResult = unknown;

/**
 * https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient
 */
export type RESTDeleteAPIChannelRecipientResult = unknown;

/**
 * https://discord.com/developers/docs/resources/channel#start-thread-with-message
 */
export type RESTPostAPIChannelMessagesThreadsJSONBody = AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
	/**
	 * 1-100 character thread name
	 */
	name: string;
	/**
	 * The amount of time in minutes to wait before automatically archiving the thread
	 *
	 * The 3 day and 7 day archive durations require the server to be boosted. The [guild features](https://discord.com/developers/docs/resources/guild#guild-object-guild-features) will indicate if a server is able to use those settings.
	 */
	auto_archive_duration: ThreadAutoArchiveDuration;
	/**
	 * Amount of seconds a user has to wait before sending another message (0-21600)
	 */
	rate_limit_per_user?: number;
}>;

/**
 * https://discord.com/developers/docs/resources/channel#start-thread-with-message
 */
export type RESTPostAPIChannelMessagesThreadsResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/channel#start-thread-without-message
 */
export type RESTPostAPIChannelThreadsJSONBody = RESTPostAPIChannelMessagesThreadsJSONBody &
	AddUndefinedToPossiblyUndefinedPropertiesOfInterface<{
		/**
		 * The type of thread to create
		 *
		 * In API v9, `type` defaults to `PRIVATE_THREAD`.
		 * In a future API version this will be changed to be a required field, with no default.
		 *
		 * See https://discord.com/developers/docs/resources/channel#channel-object-channel-types
		 *
		 * @default ChannelType.GuildPrivateThread
		 */
		type?: ChannelType.GuildNewsThread | ChannelType.GuildPublicThread | ChannelType.GuildPrivateThread;
		/**
		 * Whether non-moderators can add other non-moderators to the thread; only available when creating a private thread
		 */
		invitable?: boolean;
	}>;

/**
 * https://discord.com/developers/docs/resources/channel#start-thread-without-message
 */
export type RESTPostAPIChannelThreadsResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/channel#join-thread
 */
export type RESTPutAPIChannelThreadMembersResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#leave-thread
 */
export type RESTDeleteAPIChannelThreadMembersResult = never;

/**
 * https://discord.com/developers/docs/resources/channel#list-thread-members
 */
export type RESTGetAPIChannelThreadMembersResult = APIThreadMember[];

/*
 * https://discord.com/developers/docs/resources/channel#list-public-archived-threads
 */
export interface RESTGetAPIChannelThreadsArchivedQuery {
	/**
	 * Get threads before this id or ISO8601 timestamp
	 */
	before?: Snowflake | string;
	/**
	 * Max number of thread to return
	 */
	limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#list-active-threads
 *
 * @deprecated Removed in API v10, use [List Active Guild Threads](https://discord.com/developers/docs/resources/guild#list-active-threads) instead.
 */
export type RESTGetAPIChannelThreadsResult = APIThreadList;

/**
 * https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads
 */
export type RESTGetAPIChannelUsersThreadsArchivedResult = APIThreadList;
