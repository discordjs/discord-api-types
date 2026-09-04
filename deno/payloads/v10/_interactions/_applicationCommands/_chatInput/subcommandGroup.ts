import type { InteractionType } from '../../responses.ts';
import type { APIApplicationCommandOptionBase, APIApplicationCommandOptionBaseResponse } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type {
	APIApplicationCommandInteractionDataSubcommandOption,
	APIApplicationCommandSubcommandOption,
	APIApplicationCommandSubcommandOptionResponse,
} from './subcommand.ts';

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
