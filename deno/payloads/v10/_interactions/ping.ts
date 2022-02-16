import type { APIBaseInteraction } from './base.ts';
import type { InteractionType } from './responses.ts';

export type APIPingInteraction = Omit<APIBaseInteraction<InteractionType.Ping, never>, 'locale'>;
