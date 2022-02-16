import type { APIBaseInteraction } from './base.ts';
import type { InteractionType } from './responses.ts';

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIPingInteraction = Omit<APIBaseInteraction<InteractionType.Ping, never>, 'locale'>;
