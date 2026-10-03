import type { LocalizationMap } from '../../../../../v10.ts';
import type { APIApplicationCommandOptionChoice, ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandOptionBase<Type extends ApplicationCommandOptionType> {
	type: Type;
	name: string;
	name_localizations?: LocalizationMap | null;
	description: string;
	description_localizations?: LocalizationMap | null;
}

export interface APIApplicationCommandBasicOptionBase<
	Type extends ApplicationCommandOptionType,
> extends APIApplicationCommandOptionBase<Type> {
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
			choices?: [];
	  })
	| (Base & {
			autocomplete?: false;
			choices?: ChoiceType[];
	  });
