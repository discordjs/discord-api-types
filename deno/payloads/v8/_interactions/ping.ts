import type { APIBaseInteraction } from './base.ts';
import type { InteractionType } from './responses.ts';

export type APIPingInteraction = APIBaseInteraction<InteractionType.Ping, never>;
