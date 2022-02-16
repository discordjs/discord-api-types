import type { APIApplicationCommandOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type {
	APIApplicationCommandInteractionDataSubcommandOption,
	APIApplicationCommandSubcommandOption,
} from './subcommand.ts';

export interface APIApplicationCommandSubcommandGroupOption
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.SubcommandGroup> {
	options?: APIApplicationCommandSubcommandOption[];
}

export interface APIApplicationCommandInteractionDataSubcommandGroupOption {
	name: string;
	type: ApplicationCommandOptionType.SubcommandGroup;
	options: APIApplicationCommandInteractionDataSubcommandOption[];
}
