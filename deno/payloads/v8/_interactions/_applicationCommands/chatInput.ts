import type { APIRole, APIUser, ChannelType } from '../../mod.ts';
import type { Snowflake } from '../../../../globals.ts';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper } from '../base.ts';
import type {
	APIApplicationCommandInteractionWrapper,
	APIInteractionDataResolvedChannel,
	APIInteractionDataResolvedGuildMember,
	ApplicationCommandType,
} from '../applicationCommands.ts';
import type { APIBaseApplicationCommandInteractionData } from './internals.ts';

interface APIApplicationCommandOptionBase {
	type:
		| ApplicationCommandOptionType.Boolean
		| ApplicationCommandOptionType.User
		| ApplicationCommandOptionType.Role
		| ApplicationCommandOptionType.Mentionable;
	name: string;
	description: string;
	required?: boolean;
	autocomplete?: never;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandOption =
	| APIApplicationCommandStringArgumentOptions
	| APIApplicationCommandSubCommandOptions
	| APIApplicationCommandOptionBase
	| APIApplicationCommandChannelOptions
	| APIApplicationCommandOptionBase
	| APIApplicationCommandNumberArgumentOptions
	| APIApplicationCommandStringAutocompleteOptions
	| APIApplicationCommandNumericAutocompleteOptions;

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * If the option is a `SUB_COMMAND` or `SUB_COMMAND_GROUP` type, this nested options will be the parameters
 */
export interface APIApplicationCommandSubCommandOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
	type: ApplicationCommandOptionType.Subcommand | ApplicationCommandOptionType.SubcommandGroup;
	options?: APIApplicationCommandOption[];
}

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * In contrast to `APIApplicationCommandSubCommandOptions`, these types cannot have an `options` array,
 * but they can have a `choices` one
 */
export interface APIApplicationCommandStringArgumentOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
	type: ApplicationCommandOptionType.String;
	choices?: APIApplicationCommandOptionChoice[];
}

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * In contrast to `APIApplicationCommandSubCommandOptions`, these types cannot have an `options` array,
 * but they can have a `choices`, a `min_value` and `max_value` field
 */
export interface APIApplicationCommandNumberArgumentOptions
	extends Omit<APIApplicationCommandOptionBase, 'type' | 'autocomplete'> {
	type: ApplicationCommandOptionType.Integer | ApplicationCommandOptionType.Number;
	choices?: APIApplicationCommandOptionChoice[];
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	min_value?: number;
	/**
	 * if the option is an `INTEGER` or `NUMBER` type, the maximum value permitted
	 */
	max_value?: number;
	autocomplete?: false;
}
export interface APIApplicationCommandArgumentOptions
	extends Omit<APIApplicationCommandOptionBase, 'type' | 'autocomplete'> {
	type:
		| ApplicationCommandOptionType.String
		| ApplicationCommandOptionType.Integer
		| ApplicationCommandOptionType.Number;
	choices?: APIApplicationCommandOptionChoice[];
	autocomplete?: false;
}

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * In contrast to `APIApplicationCommandArgumentOptions`, these types cannot have an `choices` array,
 * but they can a `autocomplete` field where it's set to `true`
 */
export interface APIApplicationCommandStringAutocompleteOptions
	extends Omit<APIApplicationCommandOptionBase, 'type' | 'autocomplete'> {
	type: ApplicationCommandOptionType.String;
	autocomplete: true;
}

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * In contrast to `APIApplicationCommandArgumentOptions`, these types cannot have an `choices` array,
 * but they can a `autocomplete` field where it's set to `true`
 */
export interface APIApplicationCommandNumericAutocompleteOptions
	extends Omit<APIApplicationCommandOptionBase, 'type' | 'autocomplete'> {
	type: ApplicationCommandOptionType.Integer | ApplicationCommandOptionType.Number;
	autocomplete: true;
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	min_value?: number;
	/**
	 * If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted.
	 */
	max_value?: number;
}

/**
 * This type is exported as a way to make it stricter for you when you're writing your commands
 *
 * In contrast to `APIApplicationCommandSubCommandOptions` and `APIApplicationCommandArgumentOptions`,
 *  these types cannot have an `options` array, or a `choices` array, but they can have a `channel_types` one.
 */
export interface APIApplicationCommandChannelOptions extends Omit<APIApplicationCommandOptionBase, 'type'> {
	type: ApplicationCommandOptionType.Channel;
	channel_types?: Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM>[];
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
export enum ApplicationCommandOptionType {
	Subcommand = 1,
	SubcommandGroup,
	String,
	Integer,
	Boolean,
	User,
	Channel,
	Role,
	Mentionable,
	Number,
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface APIApplicationCommandOptionChoice {
	name: string;
	value: string | number;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-interaction-data-option-structure
 */
export type APIApplicationCommandInteractionDataOption =
	| ApplicationCommandInteractionDataOptionSubCommand
	| ApplicationCommandInteractionDataOptionSubCommandGroup
	| APIApplicationCommandInteractionDataOptionWithValues;

export interface ApplicationCommandInteractionDataOptionSubCommand {
	name: string;
	type: ApplicationCommandOptionType.Subcommand;
	options?: APIApplicationCommandInteractionDataOptionWithValues[];
}

export interface ApplicationCommandInteractionDataOptionSubCommandGroup {
	name: string;
	type: ApplicationCommandOptionType.SubcommandGroup;
	options: ApplicationCommandInteractionDataOptionSubCommand[];
}

export type APIApplicationCommandInteractionDataOptionWithValues =
	| ApplicationCommandInteractionDataOptionString
	| ApplicationCommandInteractionDataOptionRole
	| ApplicationCommandInteractionDataOptionChannel
	| ApplicationCommandInteractionDataOptionUser
	| ApplicationCommandInteractionDataOptionMentionable
	| ApplicationCommandInteractionDataOptionInteger
	| ApplicationCommandInteractionDataOptionNumber
	| ApplicationCommandInteractionDataOptionBoolean;

export interface ApplicationCommandInteractionDataOptionString
	extends InteractionDataOptionBase<ApplicationCommandOptionType.String, string> {
	focused?: boolean;
}

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

export interface ApplicationCommandInteractionDataOptionInteger
	extends InteractionDataOptionBase<ApplicationCommandOptionType.Integer, number> {
	focused?: boolean;
}

export interface ApplicationCommandInteractionDataOptionNumber
	extends InteractionDataOptionBase<ApplicationCommandOptionType.Number, number> {
	focused?: boolean;
}

export type ApplicationCommandInteractionDataOptionBoolean = InteractionDataOptionBase<
	ApplicationCommandOptionType.Boolean,
	boolean
>;

interface InteractionDataOptionBase<T extends ApplicationCommandOptionType, D = unknown> {
	name: string;
	type: T;
	value: D;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data-structure
 */
export interface APIChatInputApplicationCommandInteractionData
	extends APIBaseApplicationCommandInteractionData<ApplicationCommandType.ChatInput> {
	options?: APIApplicationCommandInteractionDataOption[];
	resolved?: APIChatInputApplicationCommandInteractionDataResolved;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export interface APIChatInputApplicationCommandInteractionDataResolved {
	users?: Record<Snowflake, APIUser>;
	roles?: Record<Snowflake, APIRole>;
	members?: Record<Snowflake, APIInteractionDataResolvedGuildMember>;
	channels?: Record<Snowflake, APIInteractionDataResolvedChannel>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIChatInputApplicationCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIChatInputApplicationCommandInteractionData>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIChatInputApplicationCommandDMInteraction =
	APIDMInteractionWrapper<APIChatInputApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIChatInputApplicationCommandGuildInteraction =
	APIGuildInteractionWrapper<APIChatInputApplicationCommandInteraction>;
