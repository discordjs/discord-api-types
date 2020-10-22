import type { APIGuild, APITemplate } from '../payloads';

/**
 * https://discord.com/developers/docs/resources/template#get-template
 */
export type RESTGetAPITemplateResult = APITemplate;

/**
 * https://discord.com/developers/docs/resources/template#create-guild-from-template
 */
export interface RESTPostAPITemplateCreateGuildJSONBody {
	name: string;
	icon?: string;
}
/**
 * https://discord.com/developers/docs/resources/template#create-guild-from-template
 */
export type RESTPostAPITemplateCreateGuildResult = APIGuild;

export type RESTGetAPIGuildTemplatesResult = APITemplate[];

export interface RESTPostAPIGuildTemplatesJSONBody {
	name: string;
	description?: string | null;
}
export type RESTPostAPIGuildTemplatesResult = APITemplate;

export type RESTPutAPIGuildTemplateSyncResult = APITemplate;

export type RESTPatchAPIGuildTemplateJSONBody = Partial<RESTPostAPIGuildTemplatesJSONBody>;
export type RESTPatchAPIGuildTemplateResult = APITemplate;

export type RESTDeleteAPIGuildTemplateResult = APITemplate;
