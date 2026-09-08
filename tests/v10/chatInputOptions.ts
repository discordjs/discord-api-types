import type {
	APIApplicationCommandAttachmentOption,
	APIApplicationCommandBasicOption,
	APIApplicationCommandBooleanOption,
	APIApplicationCommandChannelOption,
	APIApplicationCommandIntegerOption,
	APIApplicationCommandMentionableOption,
	APIApplicationCommandNumberOption,
	APIApplicationCommandOption,
	APIApplicationCommandRoleOption,
	APIApplicationCommandStringOption,
	APIApplicationCommandSubcommandGroupOption,
	APIApplicationCommandSubcommandOption,
	APIApplicationCommandUserOption,
} from '../../v10';
import { ApplicationCommandOptionType } from '../../v10';
import { expectAssignable } from '../__utils__/type-assertions';

const baseValues = {
	name: 'test',
	description: 'test',
};

{
	const option: APIApplicationCommandStringOption = {
		...baseValues,
		type: ApplicationCommandOptionType.String,
		autocomplete: true,
	};
}

{
	const option: APIApplicationCommandIntegerOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Integer,
		autocomplete: true,
	};
}

{
	const option: APIApplicationCommandNumberOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Number,
		autocomplete: true,
	};
}

{
	const option: APIApplicationCommandStringOption = {
		...baseValues,
		type: ApplicationCommandOptionType.String,
		choices: [],
	};
}

{
	const option: APIApplicationCommandStringOption = {
		...baseValues,
		type: ApplicationCommandOptionType.String,
		choices: [],
		autocomplete: true,
	};
}

{
	const option: APIApplicationCommandStringOption = {
		...baseValues,
		type: ApplicationCommandOptionType.String,
		choices: [],
		autocomplete: false,
	};
}

{
	const option: APIApplicationCommandNumberOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Number,
		choices: [],
	};
}

{
	const option: APIApplicationCommandOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Boolean,
		// @ts-expect-error - autocomplete is not allowed on booleans
		autocomplete: true,
	};
}

{
	const option: APIApplicationCommandAttachmentOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Attachment,
		required: true,
	};
}

{
	const option: APIApplicationCommandBooleanOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Boolean,
		required: true,
	};
}

{
	const option: APIApplicationCommandChannelOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Channel,
		required: true,
	};
}

{
	const option: APIApplicationCommandIntegerOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Integer,
		required: true,
	};
}

{
	const option: APIApplicationCommandMentionableOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Mentionable,
		required: true,
	};
}

{
	const option: APIApplicationCommandNumberOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Number,
		required: true,
	};
}

{
	const option: APIApplicationCommandRoleOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Role,
		required: true,
	};
}

{
	const option: APIApplicationCommandStringOption = {
		...baseValues,
		type: ApplicationCommandOptionType.String,
		required: true,
	};
}

{
	const option: APIApplicationCommandUserOption = {
		...baseValues,
		type: ApplicationCommandOptionType.User,
		required: true,
	};
}

{
	const option: APIApplicationCommandSubcommandOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Subcommand,
		options: [],
		// @ts-expect-error - Required is not allowed on subcommands.
		required: true,
	};
}

{
	const option: APIApplicationCommandSubcommandGroupOption = {
		...baseValues,
		type: ApplicationCommandOptionType.SubcommandGroup,
		options: [],
		// @ts-expect-error - Required is not allowed on subcommand groups.
		required: false,
	};
}

{
	const option: APIApplicationCommandOption = {
		...baseValues,
		type: ApplicationCommandOptionType.Subcommand,
		// @ts-expect-error - Required is not allowed on subcommands.
		required: true,
	};
}

{
	const option: APIApplicationCommandOption = {
		...baseValues,
		type: ApplicationCommandOptionType.SubcommandGroup,
		// @ts-expect-error - Required is not allowed on subcommand groups.
		required: true,
	};
}

expectAssignable<keyof APIApplicationCommandBasicOption>('required');
// @ts-expect-error - Required is not valid for subcommands.
expectAssignable<keyof APIApplicationCommandSubcommandOption>('required');
// @ts-expect-error - Required is not valid for subcommand groups.
expectAssignable<keyof APIApplicationCommandSubcommandGroupOption>('required');
