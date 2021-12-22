import { expectAssignable, expectNotAssignable, expectNotType } from 'tsd';
import {
	APIApplicationCommandIntegerOption,
	APIApplicationCommandNumberOption,
	APIApplicationCommandOption,
	APIApplicationCommandStringOption,
	ApplicationCommandOptionType,
} from '../../v9';

const baseValues = {
	name: 'test',
	description: 'test',
};

expectAssignable<APIApplicationCommandStringOption>({
	...baseValues,
	type: ApplicationCommandOptionType.String,
	autocomplete: true,
});

expectAssignable<APIApplicationCommandIntegerOption>({
	...baseValues,
	type: ApplicationCommandOptionType.Integer,
	autocomplete: true,
});

expectAssignable<APIApplicationCommandNumberOption>({
	...baseValues,
	type: ApplicationCommandOptionType.Number,
	autocomplete: true,
});

expectNotType<APIApplicationCommandStringOption>({
	...baseValues,
	type: ApplicationCommandOptionType.String,
	choices: [],
});

expectNotAssignable<APIApplicationCommandStringOption>({
	...baseValues,
	type: ApplicationCommandOptionType.String,
	choices: [],
	autocomplete: true,
});

expectAssignable<APIApplicationCommandStringOption>({
	...baseValues,
	type: ApplicationCommandOptionType.String,
	choices: [],
	autocomplete: false,
});

expectAssignable<APIApplicationCommandNumberOption>({
	...baseValues,
	type: ApplicationCommandOptionType.Number,
	choices: [],
});

expectNotAssignable<APIApplicationCommandOption>({
	...baseValues,
	type: ApplicationCommandOptionType.Boolean,
	autocomplete: true,
});
