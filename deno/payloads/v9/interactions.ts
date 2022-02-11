import type {
	APIMessageComponentDMInteraction,
	APIMessageComponentGuildInteraction,
	APIMessageComponentInteraction,
} from './_interactions/messageComponents.ts';
import type { APIPingInteraction } from './_interactions/ping.ts';
import type {
	APIApplicationCommandDMInteraction,
	APIApplicationCommandGuildInteraction,
	APIApplicationCommandInteraction,
} from './_interactions/applicationCommands.ts';
import type { APIApplicationCommandAutocompleteInteraction } from './_interactions/autocomplete.ts';
import type {
	APIModalSubmitDMInteraction,
	APIModalSubmitGuildInteraction,
	APIModalSubmitInteraction,
} from './_interactions/modalSubmit.ts';

export * from './_interactions/base.ts';
export * from './_interactions/messageComponents.ts';
export * from './_interactions/ping.ts';
export * from './_interactions/responses.ts';
export * from './_interactions/applicationCommands.ts';
export * from './_interactions/modalSubmit.ts';

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIInteraction =
	| APIPingInteraction
	| APIApplicationCommandInteraction
	| APIMessageComponentInteraction
	| APIApplicationCommandAutocompleteInteraction
	| APIModalSubmitInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIDMInteraction =
	| APIApplicationCommandDMInteraction
	| APIMessageComponentDMInteraction
	| APIModalSubmitDMInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIGuildInteraction =
	| APIApplicationCommandGuildInteraction
	| APIMessageComponentGuildInteraction
	| APIModalSubmitGuildInteraction;
