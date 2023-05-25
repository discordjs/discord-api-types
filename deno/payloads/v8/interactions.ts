import type {
	APIApplicationCommandDMInteraction,
	APIApplicationCommandGuildInteraction,
	APIApplicationCommandInteraction,
} from './_interactions/applicationCommands.ts';
import type {
	APIApplicationCommandAutocompleteDMInteraction,
	APIApplicationCommandAutocompleteGuildInteraction,
	APIApplicationCommandAutocompleteInteraction,
} from './_interactions/autocomplete.ts';
import type {
	APIMessageComponentDMInteraction,
	APIMessageComponentGuildInteraction,
	APIMessageComponentInteraction,
} from './_interactions/messageComponents.ts';
import type {
	APIModalSubmitDMInteraction,
	APIModalSubmitGuildInteraction,
	APIModalSubmitInteraction,
} from './_interactions/modalSubmit.ts';
import type { APIPingInteraction } from './_interactions/ping.ts';

export * from './_interactions/applicationCommands.ts';
export * from './_interactions/autocomplete.ts';
export * from './_interactions/base.ts';
export * from './_interactions/messageComponents.ts';
export * from './_interactions/modalSubmit.ts';
export * from './_interactions/ping.ts';
export * from './_interactions/responses.ts';

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIInteraction =
	| APIPingInteraction
	| APIApplicationCommandInteraction
	| APIMessageComponentInteraction
	| APIApplicationCommandAutocompleteInteraction
	| APIModalSubmitInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIDMInteraction =
	| APIApplicationCommandDMInteraction
	| APIMessageComponentDMInteraction
	| APIApplicationCommandAutocompleteDMInteraction
	| APIModalSubmitDMInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 *
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIGuildInteraction =
	| APIApplicationCommandGuildInteraction
	| APIMessageComponentGuildInteraction
	| APIApplicationCommandAutocompleteGuildInteraction
	| APIModalSubmitGuildInteraction;
