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
export type * from './_interactions/autocomplete.ts';
export type * from './_interactions/base.ts';
export type * from './_interactions/messageComponents.ts';
export type * from './_interactions/modalSubmit.ts';
export type * from './_interactions/ping.ts';
export * from './_interactions/responses.ts';

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIInteraction =
	| APIApplicationCommandAutocompleteInteraction
	| APIApplicationCommandInteraction
	| APIMessageComponentInteraction
	| APIModalSubmitInteraction
	| APIPingInteraction;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIDMInteraction =
	| APIApplicationCommandAutocompleteDMInteraction
	| APIApplicationCommandDMInteraction
	| APIMessageComponentDMInteraction
	| APIModalSubmitDMInteraction;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object}
 */
export type APIGuildInteraction =
	| APIApplicationCommandAutocompleteGuildInteraction
	| APIApplicationCommandGuildInteraction
	| APIMessageComponentGuildInteraction
	| APIModalSubmitGuildInteraction;
