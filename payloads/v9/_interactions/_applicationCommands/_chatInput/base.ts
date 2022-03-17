import type { LocaleString } from '../../../../../v9';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared';

export interface APIApplicationCommandOptionBase<Type extends ApplicationCommandOptionType> {
	type: Type;
	name: string;
	name_localizations?: Record<LocaleString, string>;
	description: string;
	description_localizations?: Record<LocaleString, string>;
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
