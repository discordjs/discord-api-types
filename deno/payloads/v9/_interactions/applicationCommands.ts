import type { Permissions, Snowflake } from '../../../globals.ts';
import type { LocalizationMap } from '../../../v9.ts';
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
import type { APIBaseInteraction } from './base.ts';
import type { InteractionType } from './responses.ts';

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
	 * Set of permissions represented as a bitset
	 */
	default_member_permissions: Permissions | null;
	/**
	 * Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible
	 *
	 * @deprecated Use `contexts` instead
	 */
	dm_permission?: boolean;
	/**
	 * Whether the command is enabled by default when the app is added to a guild
	 *
	 * If missing, this property should be assumed as `true`
	 *
	 * @deprecated Use `dm_permission` and/or `default_member_permissions` instead
	 */
	default_permission?: boolean;
	/**
	 * Indicates whether the command is age-restricted, defaults to `false`
	 */
	nsfw?: boolean;
	/**
	 * Installation context(s) where the command is available, only for globally-scoped commands. Defaults to `GUILD_INSTALL ([0])`
	 */
	integration_types?: ApplicationIntegrationType[];
	/**
	 * Interaction context(s) where the command can be used, only for globally-scoped commands. By default, all interaction context types included for new commands `[0,1,2]`.
	 */
	contexts?: InteractionContextType[] | null;
	/**
	 * Autoincrementing version identifier updated during substantial record changes
	 */
	version: Snowflake;
	/**
	 * Determines whether the interaction is handled by the app's interactions handler or by Discord
	 *
	 * @remarks
	 * This is only available for {@link ApplicationCommandType.PrimaryEntryPoint} commands
	 */
	handler?: EntryPointCommandHandlerType;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export enum ApplicationCommandType {
	/**
	 * Slash commands; a text-based command that shows up when a user types `/`
	 */
	ChatInput = 1,
	/**
	 * A UI-based command that shows up when you right click or tap on a user
	 */
	User,
	/**
	 * A UI-based command that shows up when you right click or tap on a message
	 */
	Message,
	/**
	 * A UI-based command that represents the primary way to invoke an app's Activity
	 */
	PrimaryEntryPoint,
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-integration-types
 */
export enum ApplicationIntegrationType {
	/**
	 * App is installable to servers
	 */
	GuildInstall,
	/**
	 * App is installable to users
	 */
	UserInstall,
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types
 */
export enum InteractionContextType {
	/**
	 * Interaction can be used within servers
	 */
	Guild,
	/**
	 * Interaction can be used within DMs with the app's bot user
	 */
	BotDM,
	/**
	 * Interaction can be used within Group DMs and DMs other than the app's bot user
	 */
	PrivateChannel,
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-entry-point-command-handler-types
 */
export enum EntryPointCommandHandlerType {
	/**
	 * The app handles the interaction using an interaction token
	 */
	AppHandler = 1,
	/**
	 * Discord handles the interaction by launching an Activity and sending a follow-up message without coordinating with
	 * the app
	 */
	DiscordLaunchActivity,
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type APIApplicationCommandInteractionData =
	| APIChatInputApplicationCommandInteractionData
	| APIContextMenuInteractionData;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIApplicationCommandInteractionWrapper<Data extends APIApplicationCommandInteractionData> =
	APIBaseInteraction<InteractionType.ApplicationCommand, Data> &
		Required<
			Pick<
				APIBaseInteraction<InteractionType.ApplicationCommand, Data>,
				'app_permissions' | 'channel_id' | 'channel' | 'data'
			>
		>;

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
