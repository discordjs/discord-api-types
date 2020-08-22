/**
 * Types extracted from https://discord.com/developers/docs/resources/emoji
 */

import type { APIUser } from './user';

/**
 * Not documented but mentioned
 */
export interface APIPartialEmoji {
  id: string | null;
  name: string | null;
  animated?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmoji extends APIPartialEmoji {
  roles?: string[];
  user?: APIUser;
  require_colons?: boolean;
  managed?: boolean;
  available?: boolean;
}
