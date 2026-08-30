import type { InteractionType } from '../../responses';
import type { APIApplicationCommandOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';
import type {
	APIApplicationCommandInteractionDataSubcommandOption,
	APIApplicationCommandSubcommandOption,
} from './subcommand';

export interface APIApplicationCommandSubcommandGroupOption extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.SubcommandGroup> {
	options?: APIApplicationCommandSubcommandOption[];
	required?: never;
}

export interface APIApplicationCommandInteractionDataSubcommandGroupOption<
	Type extends InteractionType = InteractionType,
> {
	name: string;
	type: ApplicationCommandOptionType.SubcommandGroup;
	options: APIApplicationCommandInteractionDataSubcommandOption<Type>[];
}
