import type { APIBaseInteraction } from './base.ts';
import type { InteractionType } from './responses.ts';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIPingInteraction = Omit<APIBaseInteraction<InteractionType.Ping, never>, 'locale'>;
