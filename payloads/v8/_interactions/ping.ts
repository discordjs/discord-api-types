import type { APIBaseInteraction } from './base';
import type { InteractionType } from './responses';

export type APIPingInteraction = APIBaseInteraction<InteractionType.Ping, never>;
