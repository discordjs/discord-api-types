import type { LocalizationMap } from '../../../../../v9.ts';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandOptionBase<Type extends ApplicationCommandOptionType> {
	type: Type;
	name: string;
	name_localizations?: LocalizationMap;
	description: string;
	description_localizations?: LocalizationMap;
	required?: boolean;
}

export interface APIInteractionDataOptionBase<T extends ApplicationCommandOptionType, D> {
	name: string;
	type: T;
	value: D;
}

export type APIApplicationCommandOptionWithAutocompleteOrChoicesWrapper<
	Base extends APIApplicationCommandOptionBase<ApplicationCommandOptionType>,
	ChoiceType extends APIApplicationCommandOptionChoice,
> =
	| (Base & {
			autocomplete: true;
	  })
	| (Base & {
			autocomplete?: false;
			choices?: ChoiceType[];
	  });
