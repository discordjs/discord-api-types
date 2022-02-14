/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
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
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandOptionChoice<ValueType = string | number> {
	name: string;
	value: ValueType;
}
