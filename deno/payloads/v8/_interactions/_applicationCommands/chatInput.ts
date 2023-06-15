import type { Snowflake } from '../../../../globals.ts';
import type { APIAttachment, APIRole, APIUser } from '../../mod.ts';
import type {
	APIApplicationCommandInteractionWrapper,
	APIInteractionDataResolvedChannel,
	APIInteractionDataResolvedGuildMember,
	ApplicationCommandType,
} from '../applicationCommands.ts';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper } from '../base.ts';
import type {
	APIApplicationCommandAttachmentOption,
	APIApplicationCommandInteractionDataAttachmentOption,
} from './_chatInput/attachment.ts';
import type {
	APIApplicationCommandBooleanOption,
	APIApplicationCommandInteractionDataBooleanOption,
} from './_chatInput/boolean.ts';
import type {
	APIApplicationCommandChannelOption,
	APIApplicationCommandInteractionDataChannelOption,
} from './_chatInput/channel.ts';
import type {
	APIApplicationCommandIntegerOption,
	APIApplicationCommandInteractionDataIntegerOption,
} from './_chatInput/integer.ts';
import type {
	APIApplicationCommandInteractionDataMentionableOption,
	APIApplicationCommandMentionableOption,
} from './_chatInput/mentionable.ts';
import type {
	APIApplicationCommandInteractionDataNumberOption,
	APIApplicationCommandNumberOption,
} from './_chatInput/number.ts';
import type {
	APIApplicationCommandInteractionDataRoleOption,
	APIApplicationCommandRoleOption,
} from './_chatInput/role.ts';
import type {
	APIApplicationCommandInteractionDataStringOption,
	APIApplicationCommandStringOption,
} from './_chatInput/string.ts';
import type {
	APIApplicationCommandInteractionDataSubcommandOption,
	APIApplicationCommandSubcommandOption,
} from './_chatInput/subcommand.ts';
import type {
	APIApplicationCommandInteractionDataSubcommandGroupOption,
	APIApplicationCommandSubcommandGroupOption,
} from './_chatInput/subcommandGroup.ts';
import type {
	APIApplicationCommandInteractionDataUserOption,
	APIApplicationCommandUserOption,
} from './_chatInput/user.ts';
import type { APIBaseApplicationCommandInteractionData } from './internals.ts';

export * from './_chatInput/attachment.ts';
export * from './_chatInput/boolean.ts';
export * from './_chatInput/channel.ts';
export * from './_chatInput/integer.ts';
export * from './_chatInput/mentionable.ts';
export * from './_chatInput/number.ts';
export * from './_chatInput/role.ts';
export * from './_chatInput/shared.ts';
export * from './_chatInput/string.ts';
export * from './_chatInput/subcommand.ts';
export * from './_chatInput/subcommandGroup.ts';
export * from './_chatInput/user.ts';

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandBasicOption =
	| APIApplicationCommandStringOption
	| APIApplicationCommandIntegerOption
	| APIApplicationCommandBooleanOption
	| APIApplicationCommandUserOption
	| APIApplicationCommandChannelOption
	| APIApplicationCommandRoleOption
	| APIApplicationCommandMentionableOption
	| APIApplicationCommandNumberOption
	| APIApplicationCommandAttachmentOption;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandOption =
	| APIApplicationCommandSubcommandOption
	| APIApplicationCommandSubcommandGroupOption
	| APIApplicationCommandBasicOption;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-interaction-data-option-structure
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandInteractionDataOption =
	| APIApplicationCommandInteractionDataSubcommandOption
	| APIApplicationCommandInteractionDataSubcommandGroupOption
	| APIApplicationCommandInteractionDataBasicOption;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandInteractionDataBasicOption =
	| APIApplicationCommandInteractionDataStringOption
	| APIApplicationCommandInteractionDataIntegerOption
	| APIApplicationCommandInteractionDataBooleanOption
	| APIApplicationCommandInteractionDataUserOption
	| APIApplicationCommandInteractionDataChannelOption
	| APIApplicationCommandInteractionDataRoleOption
	| APIApplicationCommandInteractionDataMentionableOption
	| APIApplicationCommandInteractionDataNumberOption
	| APIApplicationCommandInteractionDataAttachmentOption;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data-structure
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIChatInputApplicationCommandInteractionData
	extends APIBaseApplicationCommandInteractionData<ApplicationCommandType.ChatInput> {
	options?: APIApplicationCommandInteractionDataOption[];
	resolved?: APIChatInputApplicationCommandInteractionDataResolved;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIChatInputApplicationCommandInteractionDataResolved {
	users?: Record<Snowflake, APIUser>;
	roles?: Record<Snowflake, APIRole>;
	members?: Record<Snowflake, APIInteractionDataResolvedGuildMember>;
	channels?: Record<Snowflake, APIInteractionDataResolvedChannel>;
	attachments?: Record<Snowflake, APIAttachment>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIChatInputApplicationCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIChatInputApplicationCommandInteractionData>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIChatInputApplicationCommandDMInteraction =
	APIDMInteractionWrapper<APIChatInputApplicationCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIChatInputApplicationCommandGuildInteraction =
	APIGuildInteractionWrapper<APIChatInputApplicationCommandInteraction>;
