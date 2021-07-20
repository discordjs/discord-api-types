import type {
	APIMessageComponentDMInteraction,
	APIMessageComponentGuildInteraction,
	APIMessageComponentInteraction,
} from './_interactions/messageComponents';
import type {
	APIApplicationCommandDMInteraction,
	APIApplicationCommandGuildInteraction,
	APIApplicationCommandInteraction,
} from './_interactions/slashCommands';

export * from './_interactions/base';
export * from './_interactions/messageComponents';
export * from './_interactions/responses';
export * from './_interactions/slashCommands';

export type APIInteraction = APIApplicationCommandInteraction | APIMessageComponentInteraction;

export type APIDMInteraction = APIApplicationCommandDMInteraction | APIMessageComponentDMInteraction;

export type APIGuildInteraction = APIApplicationCommandGuildInteraction | APIMessageComponentGuildInteraction;
