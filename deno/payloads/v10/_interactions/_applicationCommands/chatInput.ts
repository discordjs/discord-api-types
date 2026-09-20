import type { APIInteractionDataResolved, InteractionType } from '../../mod.ts';
import type { APIApplicationCommandInteractionWrapper, ApplicationCommandType } from '../applicationCommands.ts';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper } from '../base.ts';
import type {
	APIApplicationCommandAttachmentOption,
	APIApplicationCommandAttachmentOptionResponse,
	APIApplicationCommandInteractionDataAttachmentOption,
} from './_chatInput/attachment.ts';
import type {
	APIApplicationCommandBooleanOption,
	APIApplicationCommandBooleanOptionResponse,
	APIApplicationCommandInteractionDataBooleanOption,
} from './_chatInput/boolean.ts';
import type {
	APIApplicationCommandChannelOption,
	APIApplicationCommandChannelOptionResponse,
	APIApplicationCommandInteractionDataChannelOption,
} from './_chatInput/channel.ts';
import type {
	APIApplicationCommandIntegerOption,
	APIApplicationCommandIntegerOptionResponse,
	APIApplicationCommandInteractionDataIntegerOption,
} from './_chatInput/integer.ts';
import type {
	APIApplicationCommandInteractionDataMentionableOption,
	APIApplicationCommandMentionableOption,
	APIApplicationCommandMentionableOptionResponse,
} from './_chatInput/mentionable.ts';
import type {
	APIApplicationCommandInteractionDataNumberOption,
	APIApplicationCommandNumberOption,
	APIApplicationCommandNumberOptionResponse,
} from './_chatInput/number.ts';
import type {
	APIApplicationCommandInteractionDataRoleOption,
	APIApplicationCommandRoleOption,
	APIApplicationCommandRoleOptionResponse,
} from './_chatInput/role.ts';
import type {
	APIApplicationCommandInteractionDataStringOption,
	APIApplicationCommandStringOption,
	APIApplicationCommandStringOptionResponse,
} from './_chatInput/string.ts';
import type {
	APIApplicationCommandInteractionDataSubcommandOption,
	APIApplicationCommandSubcommandOption,
	APIApplicationCommandSubcommandOptionResponse,
} from './_chatInput/subcommand.ts';
import type {
	APIApplicationCommandInteractionDataSubcommandGroupOption,
	APIApplicationCommandSubcommandGroupOption,
	APIApplicationCommandSubcommandGroupOptionResponse,
} from './_chatInput/subcommandGroup.ts';
import type {
	APIApplicationCommandInteractionDataUserOption,
	APIApplicationCommandUserOption,
	APIApplicationCommandUserOptionResponse,
} from './_chatInput/user.ts';
import type { APIBaseApplicationCommandInteractionData } from './internals.ts';

export type * from './_chatInput/attachment.ts';
export type * from './_chatInput/base.ts';
export type * from './_chatInput/boolean.ts';
export type * from './_chatInput/channel.ts';
export type * from './_chatInput/integer.ts';
export type * from './_chatInput/mentionable.ts';
export type * from './_chatInput/number.ts';
export type * from './_chatInput/role.ts';
export * from './_chatInput/shared.ts';
export type * from './_chatInput/string.ts';
export type * from './_chatInput/subcommand.ts';
export type * from './_chatInput/subcommandGroup.ts';
export type * from './_chatInput/user.ts';

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure}
 */
export type APIApplicationCommandBasicOption =
	| APIApplicationCommandAttachmentOption
	| APIApplicationCommandBooleanOption
	| APIApplicationCommandChannelOption
	| APIApplicationCommandIntegerOption
	| APIApplicationCommandMentionableOption
	| APIApplicationCommandNumberOption
	| APIApplicationCommandRoleOption
	| APIApplicationCommandStringOption
	| APIApplicationCommandUserOption;

/**
 * @see {@link https://docs.discord.com/developers/interactions/application-commands#application-command-object-application-command-option-structure}
 */
export type APIApplicationCommandBasicOptionResponse =
	| APIApplicationCommandAttachmentOptionResponse
	| APIApplicationCommandBooleanOptionResponse
	| APIApplicationCommandChannelOptionResponse
	| APIApplicationCommandIntegerOptionResponse
	| APIApplicationCommandMentionableOptionResponse
	| APIApplicationCommandNumberOptionResponse
	| APIApplicationCommandRoleOptionResponse
	| APIApplicationCommandStringOptionResponse
	| APIApplicationCommandUserOptionResponse;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure}
 */
export type APIApplicationCommandOption =
	| APIApplicationCommandBasicOption
	| APIApplicationCommandSubcommandGroupOption
	| APIApplicationCommandSubcommandOption;

/**
 * @see {@link https://docs.discord.com/developers/interactions/application-commands#application-command-object-application-command-option-structure}
 */
export type APIApplicationCommandOptionResponse =
	| APIApplicationCommandBasicOptionResponse
	| APIApplicationCommandSubcommandGroupOptionResponse
	| APIApplicationCommandSubcommandOptionResponse;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-interaction-data-option-structure}
 */
export type APIApplicationCommandInteractionDataOption<Type extends InteractionType = InteractionType> =
	| APIApplicationCommandInteractionDataBasicOption<Type>
	| APIApplicationCommandInteractionDataSubcommandGroupOption<Type>
	| APIApplicationCommandInteractionDataSubcommandOption<Type>;

export type APIApplicationCommandInteractionDataBasicOption<Type extends InteractionType = InteractionType> =
	| APIApplicationCommandInteractionDataAttachmentOption
	| APIApplicationCommandInteractionDataBooleanOption
	| APIApplicationCommandInteractionDataChannelOption
	| APIApplicationCommandInteractionDataIntegerOption<Type>
	| APIApplicationCommandInteractionDataMentionableOption
	| APIApplicationCommandInteractionDataNumberOption<Type>
	| APIApplicationCommandInteractionDataRoleOption
	| APIApplicationCommandInteractionDataStringOption
	| APIApplicationCommandInteractionDataUserOption;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data}
 */
export interface APIChatInputApplicationCommandInteractionData extends APIBaseApplicationCommandInteractionData<ApplicationCommandType.ChatInput> {
	options?: APIApplicationCommandInteractionDataOption<InteractionType.ApplicationCommand>[];
	resolved?: APIInteractionDataResolved;
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data}
 */
export interface APIAutocompleteApplicationCommandInteractionData extends APIBaseApplicationCommandInteractionData<ApplicationCommandType.ChatInput> {
	options?: APIApplicationCommandInteractionDataOption<InteractionType.ApplicationCommandAutocomplete>[];
	resolved?: APIInteractionDataResolved;
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIChatInputApplicationCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIChatInputApplicationCommandInteractionData>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIChatInputApplicationCommandDMInteraction =
	APIDMInteractionWrapper<APIChatInputApplicationCommandInteraction>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIChatInputApplicationCommandGuildInteraction =
	APIGuildInteractionWrapper<APIChatInputApplicationCommandInteraction>;
