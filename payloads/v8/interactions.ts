import { APIMessageComponentInteraction } from './_interactions/messageComponents';
import { APIApplicationCommandInteraction } from './_interactions/slashCommands';

export * from './_interactions/base';
export * from './_interactions/messageComponents';
export * from './_interactions/responses';
export * from './_interactions/slashCommands';

export type APIInteraction = APIApplicationCommandInteraction | APIMessageComponentInteraction;
