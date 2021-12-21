import { expectAssignable, expectNotAssignable, expectNotType } from 'tsd';
import {
	APIApplicationCommandNumericAutocompleteOptions,
	APIApplicationCommandOption,
	APIApplicationCommandStringAutocompleteOptions,
	ApplicationCommandOptionType,
} from '../../v9';

const baseValues = {
	name: 'test',
	description: 'test',
};

expectAssignable<APIApplicationCommandStringAutocompleteOptions>({
	...baseValues,
	type: ApplicationCommandOptionType.String,
	autocomplete: true,
});

expectAssignable<APIApplicationCommandNumericAutocompleteOptions>({
	...baseValues,
	type: ApplicationCommandOptionType.Integer,
	autocomplete: true,
});

expectAssignable<APIApplicationCommandNumericAutocompleteOptions>({
	...baseValues,
	type: ApplicationCommandOptionType.Number,
	autocomplete: true,
});

expectNotType<APIApplicationCommandStringAutocompleteOptions>({
	...baseValues,
	type: ApplicationCommandOptionType.String,
	choices: [],
});

expectNotAssignable<APIApplicationCommandStringAutocompleteOptions>({
	...baseValues,
	type: ApplicationCommandOptionType.String,
	choices: [],
	autocomplete: true,
});

expectNotAssignable<APIApplicationCommandStringAutocompleteOptions>({
	...baseValues,
	type: ApplicationCommandOptionType.String,
	choices: [],
	autocomplete: false,
});

expectNotAssignable<APIApplicationCommandNumericAutocompleteOptions>({
	...baseValues,
	type: ApplicationCommandOptionType.Number,
	choices: [],
});

expectNotAssignable<APIApplicationCommandOption>({
	...baseValues,
	type: ApplicationCommandOptionType.Boolean,
	autocomplete: true,
});
