import type { APIApplicationCommandInteractionWrapper, ApplicationCommandType } from '../applicationCommands.ts';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper } from '../base.ts';
import type { APIBaseApplicationCommandInteractionData } from './internals.ts';

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data}
 */
export type APIPrimaryEntryPointCommandInteractionData =
	APIBaseApplicationCommandInteractionData<ApplicationCommandType.PrimaryEntryPoint>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIPrimaryEntryPointCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIPrimaryEntryPointCommandInteractionData>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIPrimaryEntryPointCommandDMInteraction = APIDMInteractionWrapper<APIPrimaryEntryPointCommandInteraction>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIPrimaryEntryPointCommandGuildInteraction =
	APIGuildInteractionWrapper<APIPrimaryEntryPointCommandInteraction>;
