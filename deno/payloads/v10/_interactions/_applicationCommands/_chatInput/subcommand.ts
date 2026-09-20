import type { InteractionType } from '../../responses.ts';
import type {
	APIApplicationCommandBasicOption,
	APIApplicationCommandBasicOptionResponse,
	APIApplicationCommandInteractionDataBasicOption,
} from '../chatInput.ts';
import type { APIApplicationCommandOptionBase, APIApplicationCommandOptionBaseResponse } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandSubcommandOption extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Subcommand> {
	options?: APIApplicationCommandBasicOption[];
}

export interface APIApplicationCommandSubcommandOptionResponse extends APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Subcommand> {
	options?: APIApplicationCommandBasicOptionResponse[];
}

export interface APIApplicationCommandInteractionDataSubcommandOption<Type extends InteractionType = InteractionType> {
	name: string;
	type: ApplicationCommandOptionType.Subcommand;
	options?: APIApplicationCommandInteractionDataBasicOption<Type>[];
}
