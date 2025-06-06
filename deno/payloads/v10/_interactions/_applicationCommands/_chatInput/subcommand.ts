import type { InteractionType } from '../../responses.ts';
import type { APIApplicationCommandBasicOption, APIApplicationCommandInteractionDataBasicOption } from '../chatInput.ts';
import type { APIApplicationCommandOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandSubcommandOption
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Subcommand> {
	options?: APIApplicationCommandBasicOption[];
}

export interface APIApplicationCommandInteractionDataSubcommandOption<Type extends InteractionType = InteractionType> {
	name: string;
	type: ApplicationCommandOptionType.Subcommand;
	options?: APIApplicationCommandInteractionDataBasicOption<Type>[];
}
