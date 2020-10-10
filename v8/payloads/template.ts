/**
 * Types extracted from https://github.com/discord/discord-api-docs/blob/master/docs/resources/Template.md
 */

import type { APIUser } from './user'
import type { APIGuild } from './guild'

/**
 * https://github.com/discord/discord-api-docs/blob/master/docs/resources/Template.md#template-structure
 */
export interface APITemplate {
    code: string;
    name: string;
    description: string | null;
    usage_count: number;
    creator_id: string;
    creator: APIUser;
    created_at: string;
    updated_at: string;
    source_guild_id: string;
    serialized_source_guild: Partial<APIGuild>;
    is_dirty: boolean | null;
}
