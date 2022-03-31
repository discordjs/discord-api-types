import type { Permissions, Snowflake } from '../../../globals.ts';
import type { LocalizationMap } from '../../../v10.ts';
import type { APIPartialChannel, APIThreadMetadata } from '../channel.ts';
import type { APIGuildMember } from '../guild.ts';
import type { APIBaseInteraction } from './base.ts';
import type { InteractionType } from './responses.ts';
import type {
	APIApplicationCommandOption,
	APIChatInputApplicationCommandDMInteraction,
	APIChatInputApplicationCommandGuildInteraction,
	APIChatInputApplicationCommandInteraction,
	APIChatInputApplicationCommandInteractionData,
} from './_applicationCommands/chatInput.ts';
import type {
	APIContextMenuDMInteraction,
	APIContextMenuGuildInteraction,
	APIContextMenuInteraction,
	APIContextMenuInteractionData,
} from './_applicationCommands/contextMenu.ts';

export * from './_applicationCommands/chatInput.ts';
export * from './_applicationCommands/contextMenu.ts';
export * from './_applicationCommands/permissions.ts';

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export interface APIApplicationCommand {
	/**
	 * Unique id of the command
	 */
	id: Snowflake;
	/**
	 * Type of the command
	 */
	type: ApplicationCommandType;
	/**
	 * Unique id of the parent application
	 */
	application_id: Snowflake;
	/**
	 * Guild id of the command, if not global
	 */
	guild_id?: Snowflake;
	/**
	 * 1-32 character name; `CHAT_INPUT` command names must be all lowercase matching `^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$`
	 */
	name: string;
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations?: LocalizationMap | null;
	/**
	 * The localized name
	 */
	name_localized?: string;
	/**
	 * 1-100 character description for `CHAT_INPUT` commands, empty string for `USER` and `MESSAGE` commands
	 */
	description: string;
	/**
	 * Localization dictionary for the description field. Values follow the same restrictions as description
	 */
	description_localizations?: LocalizationMap | null;
	/**
	 * The localized description
	 */
	description_localized?: string;
	/**
	 * The parameters for the `CHAT_INPUT` command, max 25
	 */
	options?: APIApplicationCommandOption[];
	/**
	 * Whether the command is enabled by default when the app is added to a guild
	 *
	 * If missing, this property should be assumed as `true`
	 */
	default_permission?: boolean;
	/**
	 * Autoincrementing version identifier updated during substantial record changes
	 */
	version: Snowflake;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export enum ApplicationCommandType {
	ChatInput = 1,
	User,
	Message,
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data-structure
 */
export type APIApplicationCommandInteractionData =
	| APIChatInputApplicationCommandInteractionData
	| APIContextMenuInteractionData;

/**
 * https://discord.com/developers/docs/resources/channel#channel-object
 */
export interface APIInteractionDataResolvedChannel extends Required<APIPartialChannel> {
	thread_metadata?: APIThreadMetadata | null;
	permissions: Permissions;
	parent_id?: string | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface APIInteractionDataResolvedGuildMember extends Omit<APIGuildMember, 'user' | 'deaf' | 'mute'> {
	permissions: Permissions;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIApplicationCommandInteractionWrapper<Data extends APIApplicationCommandInteractionData> =
	APIBaseInteraction<InteractionType.ApplicationCommand, Data> &
		Required<Pick<APIBaseInteraction<InteractionType.ApplicationCommand, Data>, 'channel_id' | 'data'>>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIApplicationCommandInteraction = APIChatInputApplicationCommandInteraction | APIContextMenuInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIApplicationCommandDMInteraction =
	| APIChatInputApplicationCommandDMInteraction
	| APIContextMenuDMInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIApplicationCommandGuildInteraction =
	| APIChatInputApplicationCommandGuildInteraction
	| APIContextMenuGuildInteraction;
