import type { APIGuildMember, APIUser, MessageFlags } from './mod.ts';
import type { RESTPostAPIWebhookWithTokenJSONBody } from '../rest/mod.ts';

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommand
 */
export interface APIApplicationCommand {
	id: string;
	application_id: string;
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
 * In contrast to @see APIApplicationCommandSubCommandOptions, these types cannot have an `options` array,
 * but they can have a `choices` one
 */
export interface APIApplicationCommandArgumentOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
	type: ApplicationCommandOptionType.STRING | ApplicationCommandOptionType.INTEGER;
	choices?: APIApplicationCommandOptionChoice[];
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype
 */
export const enum ApplicationCommandOptionType {
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
export interface APIInteraction {
	id: string;
	type: InteractionType;
	data?: APIApplicationCommandInteractionData;
	guild_id: string;
	channel_id: string;
	member: APIGuildMember & { permissions: string; user: APIUser };
	token: string;
	version: 1;
}

/**
 * Like See APIInteraction, only with the `data` property always present
 */
export type APIApplicationCommandInteraction = Required<APIInteraction>;

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-interactiontype
 */
export const enum InteractionType {
	Ping = 1,
	ApplicationCommand,
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondata
 */
export interface APIApplicationCommandInteractionData {
	id: string;
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
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-interaction-response
 */
export type APIInteractionResponse =
	| APIInteractionResponsePong
	| APIInteractionResponseAcknowledge
	| APIInteractionResponseAcknowledgeWithSource
	| APIInteractionResponseChannelMessage
	| APIInteractionResponseChannelMessageWithSource;

export type APIInteractionResponsePong = InteractionResponsePayload<APIInteractionResponseType.Pong>;

export type APIInteractionResponseAcknowledge = InteractionResponsePayload<APIInteractionResponseType.Acknowledge>;

export type APIInteractionResponseAcknowledgeWithSource = InteractionResponsePayload<APIInteractionResponseType.AcknowledgeWithSource>;

export type APIInteractionResponseChannelMessage = InteractionResponsePayload<
	APIInteractionResponseType.ChannelMessage,
	true
>;

export type APIInteractionResponseChannelMessageWithSource = InteractionResponsePayload<
	APIInteractionResponseType.ChannelMessageWithSource,
	true
>;

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-interactionresponsetype
 */
export const enum APIInteractionResponseType {
	Pong = 1,
	Acknowledge,
	ChannelMessage,
	ChannelMessageWithSource,
	AcknowledgeWithSource,
}

/**
 * https://discord.com/developers/docs/interactions/slash-commands#interaction-interactionapplicationcommandcallbackdata
 */
export type APIInteractionApplicationCommandCallbackData = Omit<
	RESTPostAPIWebhookWithTokenJSONBody,
	'username' | 'avatar_url'
> & { flags?: MessageFlags };

/**
 * @internal
 */
interface InteractionResponsePayload<T extends APIInteractionResponseType, D = false> {
	type: T;
	data?: D extends true ? APIInteractionApplicationCommandCallbackData : never;
}
