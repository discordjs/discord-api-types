import type { APIBaseInteraction } from './base';
import type { InteractionType } from './responses';

/**
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type APIPingInteraction = Omit<APIBaseInteraction<InteractionType.Ping, never>, 'locale'>;
