import type { Permissions, Snowflake } from '../../globals.ts';
import type { RESTPostAPIWebhookWithTokenJSONBody } from '../../rest/v8/mod.ts';
import type { APIGuildMember, APIPartialChannel, APIRole, APIUser, MessageFlags } from './mod.ts';

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommand
 */
export interface APIApplicationCommand {
	id: Snowflake;
	application_id: Snowflake;
	name: string;
	description: string;
	options?: APIApplicationCommandOption[];
}

interface APIApplicationCommandOptionBase {
	type:
		| ApplicationCommandOptionType.BOOLEAN
		| ApplicationCommandOptionType.USER
		| ApplicationCommandOptionType.CHANNEL
		| ApplicationCommandOptionType.ROLE;
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
	type: ApplicationCommandOptionType.SUB_COMMAND | ApplicationCommandOptionType.SUB_COMMAND_GROUP;
	options?: APIApplicationCommandOption[];
}

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * In contrast to `APIApplicationCommandSubCommandOptions`, these types cannot have an `options` array,
 * but they can have a `choices` one
 */
export interface APIApplicationCommandArgumentOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
	type: ApplicationCommandOptionType.STRING | ApplicationCommandOptionType.INTEGER;
	choices?: APIApplicationCommandOptionChoice[];
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype
 */
export enum ApplicationCommandOptionType {
	SUB_COMMAND = 1,
	SUB_COMMAND_GROUP,
	STRING,
	INTEGER,
	BOOLEAN,
	USER,
	CHANNEL,
	ROLE,
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
	data?: APIApplicationCommandInteractionData;
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
 * https://discord.com/developers/docs/interactions/slash-commands#interaction
 */
export interface APIGuildInteraction extends APIBaseInteraction {
	guild_id: Snowflake;
	/**
	 * Guild member data for the invoking user, including permissions
	 */
	member: APIGuildMember & { permissions: Permissions; user: APIUser };
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction
 */
export interface APIDMInteraction extends APIBaseInteraction {
	/**
	 * The guild it was sent from
	 *
	 * In the case of an `APIDMInteraction`, this will not be present
	 */
	guild_id?: never;
	/**
	 * User object for the invoking user, if invoked in a DM
	 */
	user: APIUser;
	channel_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction
 */
export type APIInteraction = APIGuildInteraction | APIDMInteraction;

/**
 * Like APIInteraction, only with the `data` property always present
 */
export type APIApplicationCommandInteraction = Required<APIInteraction>;

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-interactiontype
 */
export enum InteractionType {
	Ping = 1,
	ApplicationCommand,
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
		members?: Record<string, Omit<APIGuildMember, 'user' | 'deaf' | 'mute'> & { permissions: Permissions }>;
		channels?: Record<string, Required<APIPartialChannel> & { permissions: Permissions }>;
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
	type: ApplicationCommandOptionType.SUB_COMMAND;
	options: APIApplicationCommandInteractionDataOptionWithValues[];
}

export interface ApplicationCommandInteractionDataOptionSubCommandGroup {
	name: string;
	type: ApplicationCommandOptionType.SUB_COMMAND_GROUP;
	options: ApplicationCommandInteractionDataOptionSubCommand[];
}

export type APIApplicationCommandInteractionDataOptionWithValues =
	| ApplicationCommandInteractionDataOptionString
	| ApplicationCommandInteractionDataOptionRole
	| ApplicationCommandInteractionDataOptionChannel
	| ApplicationCommandInteractionDataOptionUser
	| ApplicationCommandInteractionDataOptionInteger
	| ApplicationCommandInteractionDataOptionBoolean;

export type ApplicationCommandInteractionDataOptionString = InteractionDataOptionBase<
	ApplicationCommandOptionType.STRING,
	string
>;

export type ApplicationCommandInteractionDataOptionRole = InteractionDataOptionBase<
	ApplicationCommandOptionType.ROLE,
	Snowflake
>;

export type ApplicationCommandInteractionDataOptionChannel = InteractionDataOptionBase<
	ApplicationCommandOptionType.CHANNEL,
	Snowflake
>;

export type ApplicationCommandInteractionDataOptionUser = InteractionDataOptionBase<
	ApplicationCommandOptionType.USER,
	Snowflake
>;

export type ApplicationCommandInteractionDataOptionInteger = InteractionDataOptionBase<
	ApplicationCommandOptionType.INTEGER,
	number
>;

export type ApplicationCommandInteractionDataOptionBoolean = InteractionDataOptionBase<
	ApplicationCommandOptionType.BOOLEAN,
	boolean
>;

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-response
 */
export type APIInteractionResponse =
	| APIInteractionResponsePong
	| APIInteractionResponseChannelMessageWithSource
	| APIInteractionResponseDeferredChannelMessageWithSource;

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
