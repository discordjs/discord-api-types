import type { Snowflake } from '../../../../globals.ts';
import type { APIRole, APIUser } from '../../mod.ts';
import type {
	APIApplicationCommandInteractionWrapper,
	APIInteractionDataResolvedChannel,
	APIInteractionDataResolvedGuildMember,
	ApplicationCommandType,
} from '../applicationCommands.ts';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper } from '../base.ts';
import type { APIBaseApplicationCommandInteractionData } from './internals.ts';

import type {
	APIApplicationCommandStringOption,
	APIApplicationCommandInteractionDataStringOption,
} from './_chatInput/string.ts';
import type {
	APIApplicationCommandIntegerOptionBase,
	APIApplicationCommandInteractionDataIntegerOption,
} from './_chatInput/integer.ts';
import type {
	APIApplicationCommandBooleanOption,
	APIApplicationCommandInteractionDataBooleanOption,
} from './_chatInput/boolean.ts';
import type {
	APIApplicationCommandUserOption,
	APIApplicationCommandInteractionDataUserOption,
} from './_chatInput/user.ts';
import type {
	APIApplicationCommandChannelOption,
	APIApplicationCommandInteractionDataChannelOption,
} from './_chatInput/channel.ts';
import type {
	APIApplicationCommandRoleOption,
	APIApplicationCommandInteractionDataRoleOption,
} from './_chatInput/role.ts';
import type {
	APIApplicationCommandMentionableOption,
	APIApplicationCommandInteractionDataMentionableOption,
} from './_chatInput/mentionable.ts';
import type {
	APIApplicationCommandNumberOptionBase,
	APIApplicationCommandInteractionDataNumberOption,
} from './_chatInput/number.ts';
import type {
	APIApplicationCommandSubcommandOption,
	APIApplicationCommandInteractionDataSubcommandOption,
} from './_chatInput/subcommand.ts';
import type {
	APIApplicationCommandSubcommandGroupOption,
	APIApplicationCommandInteractionDataSubcommandGroupOption,
} from './_chatInput/subcommandGroup.ts';

export * from './_chatInput/string.ts';
export * from './_chatInput/integer.ts';
export * from './_chatInput/boolean.ts';
export * from './_chatInput/user.ts';
export * from './_chatInput/channel.ts';
export * from './_chatInput/role.ts';
export * from './_chatInput/mentionable.ts';
export * from './_chatInput/number.ts';
export * from './_chatInput/subcommand.ts';
export * from './_chatInput/subcommandGroup.ts';
export * from './_chatInput/shared.ts';

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandBasicOption =
	| APIApplicationCommandStringOption
	| APIApplicationCommandIntegerOptionBase
	| APIApplicationCommandBooleanOption
	| APIApplicationCommandUserOption
	| APIApplicationCommandChannelOption
	| APIApplicationCommandRoleOption
	| APIApplicationCommandMentionableOption
	| APIApplicationCommandNumberOptionBase;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type APIApplicationCommandOption =
	| APIApplicationCommandSubcommandOption
	| APIApplicationCommandSubcommandGroupOption
	| APIApplicationCommandBasicOption;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-interaction-data-option-structure
 */
export type APIApplicationCommandInteractionDataOption =
	| APIApplicationCommandInteractionDataSubcommandOption
	| APIApplicationCommandInteractionDataSubcommandGroupOption
	| APIApplicationCommandInteractionDataBasicOption;

export type APIApplicationCommandInteractionDataBasicOption =
	| APIApplicationCommandInteractionDataStringOption
	| APIApplicationCommandInteractionDataIntegerOption
	| APIApplicationCommandInteractionDataBooleanOption
	| APIApplicationCommandInteractionDataUserOption
	| APIApplicationCommandInteractionDataChannelOption
	| APIApplicationCommandInteractionDataRoleOption
	| APIApplicationCommandInteractionDataMentionableOption
	| APIApplicationCommandInteractionDataNumberOption;

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
