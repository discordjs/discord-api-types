import type { Permissions, Snowflake } from '../../../globals.ts';
import type { APIRole, ApplicationIntegrationType, InteractionContextType, LocaleString } from '../../../v10.ts';
import type {
	APIAttachment,
	APIChannel,
	APIMessage,
	APIPartialChannel,
	APIThreadChannel,
	ChannelType,
	ThreadChannelType,
} from '../channel.ts';
import type { APIGuildMember } from '../guild.ts';
import type { APIEntitlement } from '../monetization.ts';
import type { APIUser } from '../user.ts';
import type { InteractionType } from './responses.ts';

/**
 * https://discord.com/developers/docs/resources/channel#message-interaction-metadata-object
 */
export interface APIMessageInteractionMetadata {
	/**
	 * ID of the interaction
	 */
	id: Snowflake;
	/**
	 * Type of interaction
	 */
	type: InteractionType;
	/**
	 * User who triggered the interaction
	 */
	user: APIUser;
	/**
	 * IDs for installation context(s) related to an interaction. Details in Authorizing Integration Owners Object
	 */
	authorizing_integration_owners: APIAuthorizingIntegrationOwnersMap;
	/**
	 * ID of the original response message, present only on follow-up messages
	 */
	original_response_message_id?: Snowflake;
	/**
	 * ID of the message that contained interactive component, present only on messages created from component interactions
	 */
	interacted_message_id?: Snowflake;
	/**
	 * Metadata for the interaction that was used to open the modal, present only on modal submit interactions
	 */
	triggering_interaction_metadata?: APIMessageInteractionMetadata;
}

export type PartialAPIMessageInteractionGuildMember = Pick<
	APIGuildMember,
	| 'avatar'
	| 'communication_disabled_until'
	| 'deaf'
	| 'joined_at'
	| 'mute'
	| 'nick'
	| 'pending'
	| 'premium_since'
	| 'roles'
>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object
 */
export interface APIMessageInteraction {
	/**
	 * ID of the interaction
	 */
	id: Snowflake;
	/**
	 * The type of interaction
	 */
	type: InteractionType;
	/**
	 * The name of the application command, including subcommands and subcommand groups
	 */
	name: string;
	/**
	 * The user who invoked the interaction
	 */
	user: APIUser;
	/**
	 * The guild member who invoked the interaction, only sent in MESSAGE_CREATE events
	 */
	member?: PartialAPIMessageInteractionGuildMember;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIInteractionGuildMember extends APIGuildMember {
	permissions: Permissions;
	user: APIUser;
}

// INTERACTIONS RECEIVED

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export interface APIBaseInteraction<Type extends InteractionType, Data> {
	/**
	 * ID of the interaction
	 */
	id: Snowflake;
	/**
	 * ID of the application this interaction is for
	 */
	application_id: Snowflake;
	/**
	 * The type of interaction
	 */
	type: Type;
	/**
	 * The command data payload
	 */
	data?: Data;
	/**
	 * The guild it was sent from
	 */
	guild_id?: Snowflake;
	/**
	 * The channel it was sent from
	 */
	channel?: Partial<APIChannel> & Pick<APIChannel, 'id' | 'type'>;
	/**
	 * The id of the channel it was sent from
	 *
	 * @deprecated Use {@apilink APIBaseInteraction#channel} instead
	 */
	channel_id?: Snowflake;
	/**
	 * Guild member data for the invoking user, including permissions
	 *
	 * **This is only sent when an interaction is invoked in a guild**
	 */
	member?: APIInteractionGuildMember;
	/**
	 * User object for the invoking user, if invoked in a DM
	 */
	user?: APIUser;
	/**
	 * A continuation token for responding to the interaction
	 */
	token: string;
	/**
	 * Read-only property, always `1`
	 */
	version: 1;
	/**
	 * For components, the message they were attached to
	 */
	message?: APIMessage;
	/**
	 * Bitwise set of permissions the app or bot has within the channel the interaction was sent from
	 */
	app_permissions: Permissions;
	/**
	 * The selected language of the invoking user
	 */
	locale: LocaleString;
	/**
	 * The guild's preferred locale, if invoked in a guild
	 */
	guild_locale?: LocaleString;
	/**
	 * For monetized apps, any entitlements for the invoking user, representing access to premium SKUs
	 */
	entitlements: APIEntitlement[];
	/**
	 * Mapping of installation contexts that the interaction was authorized for to related user or guild IDs.
	 */
	authorizing_integration_owners: APIAuthorizingIntegrationOwnersMap;
	/**
	 * Context where the interaction was triggered from
	 */
	context?: InteractionContextType;
}

export type APIAuthorizingIntegrationOwnersMap = {
	[key in ApplicationIntegrationType]?: Snowflake;
};

export type APIDMInteractionWrapper<Original extends APIBaseInteraction<InteractionType, unknown>> = Omit<
	Original,
	'guild_id' | 'member'
> &
	Required<Pick<Original, 'user'>>;

export type APIGuildInteractionWrapper<Original extends APIBaseInteraction<InteractionType, unknown>> = Omit<
	Original,
	'user'
> &
	Required<Pick<Original, 'guild_id' | 'member'>>;

export interface APIInteractionDataResolvedChannelBase<T extends ChannelType> extends Required<APIPartialChannel> {
	type: T;
	permissions: Permissions;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object
 */
export type APIInteractionDataResolvedChannel =
	| APIInteractionDataResolvedChannelBase<Exclude<ChannelType, ThreadChannelType>>
	| (APIInteractionDataResolvedChannelBase<ThreadChannelType> &
			Pick<APIThreadChannel, 'parent_id' | 'thread_metadata'>);

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIInteractionDataResolvedGuildMember extends Omit<APIGuildMember, 'deaf' | 'mute' | 'user'> {
	permissions: Permissions;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIInteractionDataResolved {
	users?: Record<Snowflake, APIUser>;
	roles?: Record<Snowflake, APIRole>;
	members?: Record<Snowflake, APIInteractionDataResolvedGuildMember>;
	channels?: Record<Snowflake, APIInteractionDataResolvedChannel>;
	attachments?: Record<Snowflake, APIAttachment>;
}

/**
 * @deprecated Renamed to `APIInteractionDataResolved`
 */
export type APIChatInputApplicationCommandInteractionDataResolved = APIInteractionDataResolved;

/**
 * `users` and optional `members` from APIInteractionDataResolved, for user commands and user selects
 */
export type APIUserInteractionDataResolved = Pick<APIInteractionDataResolved, 'members'> &
	Required<Pick<APIInteractionDataResolved, 'users'>>;

/**
 * @deprecated Renamed to `APIUserInteractionDataResolved`
 */
export type APIUserApplicationCommandInteractionDataResolved = APIUserInteractionDataResolved;
