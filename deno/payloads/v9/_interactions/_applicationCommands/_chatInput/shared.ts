import type { LocalizationMap } from '../../../../../v9.ts';

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
	Attachment,
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface APIApplicationCommandOptionChoice<ValueType = string | number> {
	name: string;
	name_localizations?: LocalizationMap;
	value: ValueType;
}
