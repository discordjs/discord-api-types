import type { APIApplicationCommandBasicOptions, APIApplicationCommandInteractionDataBasicOptions } from '../chatInput';
import type { APIApplicationCommandOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';

export interface APIApplicationCommandSubcommandOption
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Subcommand> {
	options?: APIApplicationCommandBasicOptions[];
}

export interface APIApplicationCommandInteractionDataSubcommandOption {
	name: string;
	type: ApplicationCommandOptionType.Subcommand;
	options?: APIApplicationCommandInteractionDataBasicOptions[];
}
