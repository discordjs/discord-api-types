import type { Permissions, Snowflake } from '../../globals.ts';
import type { RESTPostAPIWebhookWithTokenJSONBody } from '../../rest/v8/mod.ts';
import { APIMessage, ComponentType } from './channel.ts';
import type { APIGuildMember, APIPartialChannel, APIRole, APIUser, MessageFlags } from './mod.ts';

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommand
 */
export interface APIApplicationCommand {
	/**
	 * Unique id of the command
	 */
	id: Snowflake;
	/**
	 * Unique id of the parent application
	 */
	application_id: Snowflake;
	/**
	 * 1-32 character name matching `^[\w-]{1,32}$`
	 */
	name: string;
	/**
	 * 1-100 character description
	 */
	description: string;
	/**
	 * The parameters for the command
	 */
	options?: APIApplicationCommandOption[];
	/**
	 * Whether the command is enabled by default when the app is added to a guild
	 *
	 * If missing, this property should be assumed as `true`
	 */
	default_permission?: boolean;
}

interface APIApplicationCommandOptionBase {
	type:
		| ApplicationCommandOptionType.Boolean
		| ApplicationCommandOptionType.User
		| ApplicationCommandOptionType.Channel
		| ApplicationCommandOptionType.Role
		| ApplicationCommandOptionType.Mentionable;
	name: string;
	description: string;
	default?: boolean;
	required?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoption
 */
export type APIApplicationCommandOption =
	| APIApplicationCommandArgumentOptions
	| APIApplicationCommandSubCommandOptions
	| APIApplicationCommandOptionBase;

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * If the option is a `SUB_COMMAND` or `SUB_COMMAND_GROUP` type, this nested options will be the parameters
 */
export interface APIApplicationCommandSubCommandOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
	type: ApplicationCommandOptionType.SubCommand | ApplicationCommandOptionType.SubCommandGroup;
	options?: APIApplicationCommandOption[];
}

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * In contrast to `APIApplicationCommandSubCommandOptions`, these types cannot have an `options` array,
 * but they can have a `choices` one
 */
export interface APIApplicationCommandArgumentOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
	type: ApplicationCommandOptionType.String | ApplicationCommandOptionType.Integer;
	choices?: APIApplicationCommandOptionChoice[];
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype
 */
export enum ApplicationCommandOptionType {
	SubCommand = 1,
	SubCommandGroup,
	String,
	Integer,
	Boolean,
	User,
	Channel,
	Role,
	Mentionable,
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptionchoice
 */
export interface APIApplicationCommandOptionChoice {
	name: string;
	value: string | number;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction
 */
export interface APIBaseInteraction {
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
	type: InteractionType;
	/**
	 * The command data payload
	 */
	data?: APIApplicationCommandInteractionData | APIMessageComponentInteractionData;
	/**
	 * The channel it was sent from
	 */
	channel_id?: Snowflake;
	/**
	 * A continuation token for responding to the interaction
	 */
	token: string;
	/**
	 * Read-only property, always `1`
	 */
	version: 1;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIInteractionGuildMember extends APIGuildMember {
	permissions: Permissions;
	user: APIUser;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction
 */
export interface APIGuildInteraction extends APIBaseInteraction {
	/**
	 * The guild it was sent from
	 *
	 * In the case of an `APIDMInteraction`, this will not be present
	 */
	guild_id: Snowflake;
	/**
	 * Guild member data for the invoking user, including permissions
	 */
	member: APIInteractionGuildMember;
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction
 */
export interface APIDMInteraction extends APIBaseInteraction {
	/**
	 * User object for the invoking user, if invoked in a DM
	 */
	user: APIUser;
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#buttons-button-interaction
 */
export interface APIMessageComponentInteraction extends APIBaseInteraction {
	/**
	 * Message object to which the button was attached
	 */
	message: APIMessage;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction
 */
export type APIInteraction = APIGuildInteraction | APIDMInteraction | APIMessageComponentInteraction;

/**
 * Like APIGuildInteraction, only with the `data` property always present
 *
 * @see APIGuildInteraction
 */
export type APIApplicationCommandGuildInteraction = Required<APIGuildInteraction>;

/**
 * Like APIDMInteraction, only with the `data` property always present
 *
 * @see APIDMInteraction
 */
export type APIApplicationCommandDMInteraction = Required<APIDMInteraction>;

/**
 * Like APIInteraction, only with the `data` property always present
 *
 * @see APIInteraction
 */
export type APIApplicationCommandInteraction =
	| APIApplicationCommandGuildInteraction
	| APIApplicationCommandDMInteraction;

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-interactiontype
 */
export enum InteractionType {
	Ping = 1,
	ApplicationCommand,
	MessageComponent,
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#guildapplicationcommandpermissions
 */
export interface APIGuildApplicationCommandPermissions {
	/**
	 * The id of the command
	 */
	id: Snowflake;
	/**
	 * The id of the application the command belongs to
	 */
	application_id: Snowflake;
	/**
	 * The id of the guild
	 */
	guild_id: Snowflake;
	/**
	 * The permissions for the command in the guild
	 */
	permissions: APIApplicationCommandPermission[];
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommandpermissions
 */
export interface APIApplicationCommandPermission {
	/**
	 * The id of the role or user
	 */
	id: Snowflake;
	/**
	 * Role or user
	 */
	type: ApplicationCommandPermissionType;
	/**
	 * `true` to allow, `false`, to disallow
	 */
	permission: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommandpermissiontype
 */
export enum ApplicationCommandPermissionType {
	Role = 1,
	User,
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object
 */
export interface APIInteractionDataResolvedChannel extends Required<APIPartialChannel> {
	permissions: Permissions;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIInteractionDataResolvedGuildMember extends Omit<APIGuildMember, 'user' | 'deaf' | 'mute'> {
	permissions: Permissions;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondata
 */
export interface APIApplicationCommandInteractionData {
	id: Snowflake;
	name: string;
	options?: APIApplicationCommandInteractionDataOption[];
	resolved?: {
		users?: Record<string, APIUser>;
		roles?: Record<string, APIRole>;
		members?: Record<string, APIInteractionDataResolvedGuildMember>;
		channels?: Record<string, APIInteractionDataResolvedChannel>;
	};
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondataoption
 */
export type APIApplicationCommandInteractionDataOption =
	| ApplicationCommandInteractionDataOptionSubCommand
	| ApplicationCommandInteractionDataOptionSubCommandGroup
	| APIApplicationCommandInteractionDataOptionWithValues;

export interface ApplicationCommandInteractionDataOptionSubCommand {
	name: string;
	type: ApplicationCommandOptionType.SubCommand;
	options: APIApplicationCommandInteractionDataOptionWithValues[];
}

export interface ApplicationCommandInteractionDataOptionSubCommandGroup {
	name: string;
	type: ApplicationCommandOptionType.SubCommandGroup;
	options: ApplicationCommandInteractionDataOptionSubCommand[];
}

export type APIApplicationCommandInteractionDataOptionWithValues =
	| ApplicationCommandInteractionDataOptionString
	| ApplicationCommandInteractionDataOptionRole
	| ApplicationCommandInteractionDataOptionChannel
	| ApplicationCommandInteractionDataOptionUser
	| ApplicationCommandInteractionDataOptionMentionable
	| ApplicationCommandInteractionDataOptionInteger
	| ApplicationCommandInteractionDataOptionBoolean;

export type ApplicationCommandInteractionDataOptionString = InteractionDataOptionBase<
	ApplicationCommandOptionType.String,
	string
>;

export type ApplicationCommandInteractionDataOptionRole = InteractionDataOptionBase<
	ApplicationCommandOptionType.Role,
	Snowflake
>;

export type ApplicationCommandInteractionDataOptionChannel = InteractionDataOptionBase<
	ApplicationCommandOptionType.Channel,
	Snowflake
>;

export type ApplicationCommandInteractionDataOptionUser = InteractionDataOptionBase<
	ApplicationCommandOptionType.User,
	Snowflake
>;

export type ApplicationCommandInteractionDataOptionMentionable = InteractionDataOptionBase<
	ApplicationCommandOptionType.Mentionable,
	Snowflake
>;

export type ApplicationCommandInteractionDataOptionInteger = InteractionDataOptionBase<
	ApplicationCommandOptionType.Integer,
	number
>;

export type ApplicationCommandInteractionDataOptionBoolean = InteractionDataOptionBase<
	ApplicationCommandOptionType.Boolean,
	boolean
>;

export interface APIMessageButtonInteractionData {
	custom_id: string;
	component_type: ComponentType.Button;
}

export interface APIMessageSelectMenuInteractionData {
	custom_id: string;
	component_type: ComponentType.SelectMenu;
	values: string[];
}

export type APIMessageComponentInteractionData = APIMessageButtonInteractionData | APIMessageSelectMenuInteractionData;

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-response
 */
export type APIInteractionResponse =
	| APIInteractionResponsePong
	| APIInteractionResponseChannelMessageWithSource
	| APIInteractionResponseDeferredChannelMessageWithSource
	| APIInteractionResponseDeferredMessageUpdate
	| APIInteractionResponseUpdateMessage;

export interface APIInteractionResponsePong {
	type: InteractionResponseType.Pong;
}

export interface APIInteractionResponseChannelMessageWithSource {
	type: InteractionResponseType.ChannelMessageWithSource;
	data: APIInteractionApplicationCommandCallbackData;
}

export interface APIInteractionResponseDeferredChannelMessageWithSource {
	type: InteractionResponseType.DeferredChannelMessageWithSource;
	data?: Pick<APIInteractionApplicationCommandCallbackData, 'flags'>;
}

export interface APIInteractionResponseDeferredMessageUpdate {
	type: InteractionResponseType.DeferredMessageUpdate;
}

export interface APIInteractionResponseUpdateMessage {
	type: InteractionResponseType.UpdateMessage;
	data?: APIInteractionApplicationCommandCallbackData;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionresponsetype
 */
export enum InteractionResponseType {
	/**
	 * ACK a `Ping`
	 */
	Pong = 1,
	/**
	 * Respond to an interaction with a message
	 */
	ChannelMessageWithSource = 4,
	/**
	 * ACK an interaction and edit to a response later, the user sees a loading state
	 */
	DeferredChannelMessageWithSource,
	/**
	 * ACK a button interaction and update it to a loading state
	 */
	DeferredMessageUpdate,
	/**
	 * ACK a button interaction and edit the message to which the button was attached
	 */
	UpdateMessage,
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionapplicationcommandcallbackdata
 */
export type APIInteractionApplicationCommandCallbackData = Omit<
	RESTPostAPIWebhookWithTokenJSONBody,
	'username' | 'avatar_url'
> & { flags?: MessageFlags };

/**
 * https://discord.com/developers/docs/interactions/slash-commands#messageinteraction
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
	 * The name of the ApplicationCommand
	 */
	name: string;
	/**
	 * The user who invoked the interaction
	 */
	user: APIUser;
}

/**
 * @internal
 */
interface InteractionDataOptionBase<T extends ApplicationCommandOptionType, D = unknown> {
	name: string;
	type: T;
	value: D;
}
