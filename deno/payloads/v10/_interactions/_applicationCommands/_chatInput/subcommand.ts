import type { APIApplicationCommandOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { APIApplicationCommandBasicOption, APIApplicationCommandInteractionDataBasicOption } from '../chatInput.ts';

export interface APIApplicationCommandSubcommandOption
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Subcommand> {
	options?: APIApplicationCommandBasicOption[];
}

export interface APIApplicationCommandInteractionDataSubcommandOption {
	name: string;
	type: ApplicationCommandOptionType.Subcommand;
	options?: APIApplicationCommandInteractionDataBasicOption[];
}
