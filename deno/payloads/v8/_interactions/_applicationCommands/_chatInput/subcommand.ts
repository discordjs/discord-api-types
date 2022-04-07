import type { APIApplicationCommandOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { APIApplicationCommandBasicOption, APIApplicationCommandInteractionDataBasicOption } from '../chatInput.ts';

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandSubcommandOption
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Subcommand> {
	options?: APIApplicationCommandBasicOption[];
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandInteractionDataSubcommandOption {
	name: string;
	type: ApplicationCommandOptionType.Subcommand;
	options?: APIApplicationCommandInteractionDataBasicOption[];
}
