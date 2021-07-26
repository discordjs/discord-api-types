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
} from './_interactions/slashCommands.ts';

export * from './_interactions/base.ts';
export * from './_interactions/messageComponents.ts';
export * from './_interactions/ping.ts';
export * from './_interactions/responses.ts';
export * from './_interactions/slashCommands.ts';

export type APIInteraction = APIPingInteraction | APIApplicationCommandInteraction | APIMessageComponentInteraction;

export type APIDMInteraction = APIApplicationCommandDMInteraction | APIMessageComponentDMInteraction;

export type APIGuildInteraction = APIApplicationCommandGuildInteraction | APIMessageComponentGuildInteraction;
