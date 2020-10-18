import type { APIGuild, APITemplate } from '../payloads';

/**
 * https://github.com/discord/discord-api-docs/blob/master/docs/resources/Template.md#get-template--get-guildstemplatestemplatecodedocs_resources_templatetemplate-object
 */
export type RESTGetAPITemplateResult = APITemplate;

/**
 * https://github.com/discord/discord-api-docs/blob/master/docs/resources/Template.md#create-guild-from-template--post-guildstemplatestemplatecodedocs_resources_templatetemplate-object
 */
export interface RESTPostAPITemplateCreateGuildJSONBody {
	name: string;
	icon?: string;
}
/**
 * https://github.com/discord/discord-api-docs/blob/master/docs/resources/Template.md#create-guild-from-template--post-guildstemplatestemplatecodedocs_resources_templatetemplate-object
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
