import type { APIApplicationCommandInteractionWrapper } from '../applicationCommands.ts';
import type { APIDMInteractionWrapper, APIGuildInteractionWrapper } from '../base.ts';

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data
 */
export type APIPrimaryEntryPointCommandInteractionData = never;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIPrimaryEntryPointCommandInteraction =
	APIApplicationCommandInteractionWrapper<APIPrimaryEntryPointCommandInteractionData>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIPrimaryEntryPointCommandDMInteraction = APIDMInteractionWrapper<APIPrimaryEntryPointCommandInteraction>;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIPrimaryEntryPointCommandGuildInteraction =
	APIGuildInteractionWrapper<APIPrimaryEntryPointCommandInteraction>;
