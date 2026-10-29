import type { InteractionType } from '../../responses';
import type { APIApplicationCommandOptionBase, APIApplicationCommandOptionBaseResponse } from './base';
import type { ApplicationCommandOptionType } from './shared';
import type {
	APIApplicationCommandInteractionDataSubcommandOption,
	APIApplicationCommandSubcommandOption,
	APIApplicationCommandSubcommandOptionResponse,
} from './subcommand';

export interface APIApplicationCommandSubcommandGroupOption extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.SubcommandGroup> {
	options?: APIApplicationCommandSubcommandOption[];
}

export interface APIApplicationCommandSubcommandGroupOptionResponse extends APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.SubcommandGroup> {
	options?: APIApplicationCommandSubcommandOptionResponse[];
}

export interface APIApplicationCommandInteractionDataSubcommandGroupOption<
	Type extends InteractionType = InteractionType,
> {
	name: string;
	type: ApplicationCommandOptionType.SubcommandGroup;
	options: APIApplicationCommandInteractionDataSubcommandOption<Type>[];
}
