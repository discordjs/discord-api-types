import type { Permissions, Snowflake } from '../../common/mod.ts';
import type { RESTPostAPIWebhookWithTokenJSONBody } from '../rest/mod.ts';
import type { APIGuildMember, APIUser, MessageFlags } from './mod.ts';

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
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondataoption
 */
export interface APIApplicationCommandInteractionDataOption {
	name: string;
	/**
	 * The value returned here depends on the `ApplicationCommandOptionType` type of the option with the name
	 * that matches this interface's `name`.
	 *
	 * You will need to manually cast this to the appropriate type based on the returned data
	 */
	value?: unknown;
	options?: APIApplicationCommandInteractionDataOption[];
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-response
 */
export type APIInteractionResponse =
	| APIInteractionResponsePong
	| APIInteractionResponseChannelMessageWithSource
	| APIInteractionResponseDeferredChannelMessageWithSource;

export type APIInteractionResponsePong = InteractionResponsePayload<APIInteractionResponseType.Pong>;

export type APIInteractionResponseChannelMessageWithSource = InteractionResponsePayload<
	APIInteractionResponseType.ChannelMessageWithSource,
	true
>;

export type APIInteractionResponseDeferredChannelMessageWithSource = InteractionResponsePayload<APIInteractionResponseType.DeferredChannelMessageWithSource>;

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionresponsetype
 */
export enum APIInteractionResponseType {
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
interface InteractionResponsePayload<T extends APIInteractionResponseType, D = false> {
	type: T;
	data: D extends true ? APIInteractionApplicationCommandCallbackData : never;
}
