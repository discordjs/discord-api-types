/**
 * Types extracted from https://discord.com/developers/docs/resources/template
 */

import type { APIUser } from './user';
import type { RESTPostAPIGuildsJSONBody } from '../rest';

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
	serialized_source_guild: APITemplateSerializedSourceGuild;
	is_dirty: boolean | null;
}

export interface APITemplateSerializedSourceGuild extends Omit<RESTPostAPIGuildsJSONBody, 'icon'> {
	description: string | null;
	preferred_locale: string;
	icon_hash: string | null;
}
