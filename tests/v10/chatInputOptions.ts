import type {
	APIApplicationCommandIntegerOption,
	APIApplicationCommandNumberOption,
	APIApplicationCommandOption,
	APIApplicationCommandStringOption,
} from '../../v10';
import { ApplicationCommandOptionType } from '../../v10';

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
