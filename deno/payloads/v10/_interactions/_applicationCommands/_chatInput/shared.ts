import type { LocalizationMap } from '../../../../../v10.ts';

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type}
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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure}
 */
export interface APIApplicationCommandOptionChoice<ValueType = number | string> {
	name: string;
	name_localizations?: LocalizationMap | null;
	value: ValueType;
}
