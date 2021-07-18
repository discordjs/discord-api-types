import { APIMessageComponentInteraction } from './_interactions/messageComponents.ts';
import { APIApplicationCommandInteraction } from './_interactions/slashCommands.ts';

export * from './_interactions/base.ts';
export * from './_interactions/messageComponents.ts';
export * from './_interactions/responses.ts';
export * from './_interactions/slashCommands.ts';

export type APIInteraction = APIApplicationCommandInteraction | APIMessageComponentInteraction;
