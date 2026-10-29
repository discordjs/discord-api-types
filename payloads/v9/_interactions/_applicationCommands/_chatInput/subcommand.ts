import type { InteractionType } from '../../responses';
import type {
	APIApplicationCommandBasicOption,
	APIApplicationCommandBasicOptionResponse,
	APIApplicationCommandInteractionDataBasicOption,
} from '../chatInput';
import type { APIApplicationCommandOptionBase, APIApplicationCommandOptionBaseResponse } from './base';
import type { ApplicationCommandOptionType } from './shared';

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
