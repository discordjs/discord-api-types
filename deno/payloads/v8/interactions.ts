import { APIDMInteractionWrapper, APIGuildInteractionWrapper } from './_interactions/base.ts';
import { APIMessageComponentInteraction } from './_interactions/messageComponents.ts';
import { APIApplicationCommandInteraction } from './_interactions/slashCommands.ts';

export * from './_interactions/base.ts';
export * from './_interactions/messageComponents.ts';
export * from './_interactions/responses.ts';
export * from './_interactions/slashCommands.ts';

export type APIInteraction = APIApplicationCommandInteraction | APIMessageComponentInteraction;

export type APIDMInteraction =
	| APIDMInteractionWrapper<APIApplicationCommandInteraction>
	| APIDMInteractionWrapper<APIMessageComponentInteraction>;

export type APIGuildInteraction =
	| APIGuildInteractionWrapper<APIApplicationCommandInteraction>
	| APIDMInteractionWrapper<APIMessageComponentInteraction>;
