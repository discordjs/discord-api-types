import type { Permissions, Snowflake } from '../../globals.ts';
import type {
	APIAllowedMentions,
	APIChannel,
	APIEmbed,
	APIExtendedInvite,
	APIFollowedChannel,
	APIMessage,
	APIMessageReference,
	APIOverwrite,
	APIUser,
	ChannelType,
	InviteTargetUserType,
	MessageFlags,
	OverwriteType,
	VideoQualityMode,
} from '../../payloads/v8/mod.ts';

/**
 * https://discord.com/developers/docs/resources/channel#get-channel
 */
export type RESTGetAPIChannelResult = APIChannel;

/**
 * https://discord.com/developers/docs/resources/channel#modify-channel
 */
export interface RESTPatchAPIChannelJSONBody {
	/**
	 * 2-100 character channel name
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
	type?: ChannelType.GUILD_NEWS | ChannelType.GUILD_TEXT;
	/**
	 * The position of the channel in the left-hand listing
	 *
	 * Channel types: all
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
	 * Channel types: text
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
	 * Channel types: all
	 */
	permission_overwrites?: APIOverwrite[] | null;
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
}

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
export type APIMessageReferenceSend = Partial<APIMessageReference> &
	Required<Pick<APIMessageReference, 'message_id'>> & {
		/**
		 * Whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message
		 *
		 * @default true
		 */
		fail_if_not_exists?: boolean;
	};

/**
 * https://discord.com/developers/docs/resources/channel#create-message
 */
export interface RESTPostAPIChannelMessageJSONBody {
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
	 * Embedded `rich` content
	 *
	 * See https://discord.com/developers/docs/resources/channel#embed-object
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
}

/**
 * https://discord.com/developers/docs/resources/channel#create-message
 */
export type RESTPostAPIChannelMessageFormDataBody =
	| {
			/**
			 * JSON stringified message body
			 */
			payload_json?: string;
			/**
			 * The file contents
			 */
			file: unknown;
	  }
	| (RESTPostAPIChannelMessageJSONBody & {
			/**
			 * The file contents
			 */
			file: unknown;
	  });

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
	 * Get users before this user ID
	 */
	before?: Snowflake;
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
export interface RESTPatchAPIChannelMessageJSONBody {
	/**
	 * The new message contents (up to 2000 characters)
	 */
	content?: string | null;
	/**
	 * Embedded `rich` content
	 */
	embed?: APIEmbed | null;
	/**
	 * Edit the flags of a message (only `SUPPRESS_EMBEDS` can currently be set/unset)
	 *
	 * When specifying flags, ensure to include all previously set flags/bits
	 * in addition to ones that you are modifying
	 */
	flags?: MessageFlags | null;
	/**
	 * Allowed mentions for the message
	 */
	allowed_mentions?: APIAllowedMentions | null;
}

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
	 */
	allow: Permissions;
	/**
	 * The bitwise value of all disallowed permissions
	 *
	 * See https://en.wikipedia.org/wiki/Bit_field
	 */
	deny: Permissions;
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
export interface RESTPostAPIChannelInviteJSONBody {
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
	 * The type of target user for this voice channel invite
	 */
	target_type?: InviteTargetUserType;
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
}

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
export interface RESTPutAPIChannelRecipientJSONBody {
	/**
	 * Access token of a user that has granted your app the `gdm.join` scope
	 */
	access_token: string;
	/**
	 * Nickname of the user being added
	 */
	nick?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#group-dm-add-recipient
 */
export type RESTPutAPIChannelRecipientResult = unknown;

/**
 * https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient
 */
export type RESTDeleteAPIChannelRecipientResult = unknown;
