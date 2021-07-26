import type {
	APIMessageComponentDMInteraction,
	APIMessageComponentGuildInteraction,
	APIMessageComponentInteraction,
} from './_interactions/messageComponents';
import type { APIPingInteraction } from './_interactions/ping';
import type {
	APIApplicationCommandDMInteraction,
	APIApplicationCommandGuildInteraction,
	APIApplicationCommandInteraction,
} from './_interactions/slashCommands';

export * from './_interactions/base';
export * from './_interactions/messageComponents';
export * from './_interactions/ping';
export * from './_interactions/responses';
export * from './_interactions/slashCommands';

export type APIInteraction = APIPingInteraction | APIApplicationCommandInteraction | APIMessageComponentInteraction;

export type APIDMInteraction = APIApplicationCommandDMInteraction | APIMessageComponentDMInteraction;

export type APIGuildInteraction = APIApplicationCommandGuildInteraction | APIMessageComponentGuildInteraction;
