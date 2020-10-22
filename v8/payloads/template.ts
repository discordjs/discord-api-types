/**
 * Types extracted from https://discord.com/developers/docs/resources/template
 */

import type { APIUser } from './user';
import type { APIGuild } from './guild';

/**
 * https://discord.com/developers/docs/resources/template#template-object
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
