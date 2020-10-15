import type { APIGuild, APITemplate } from '../payloads';

/**
 * https://github.com/discord/discord-api-docs/blob/master/docs/resources/Template.md#get-template--get-guildstemplatestemplatecodedocs_resources_templatetemplate-object
 */
export type RESTGetAPITemplateResult = APITemplate;

/**
 * https://github.com/discord/discord-api-docs/blob/master/docs/resources/Template.md#create-guild-from-template--post-guildstemplatestemplatecodedocs_resources_templatetemplate-object
 */
export interface RESTPostAPITemplateJSONBody {
	name: string;
	icon?: string;
}
/**
 * https://github.com/discord/discord-api-docs/blob/master/docs/resources/Template.md#create-guild-from-template--post-guildstemplatestemplatecodedocs_resources_templatetemplate-object
 */
export type RESTPostAPITemplateResult = APIGuild;

export type RESTGetAPIGuildTemplatesResult = APITemplate[];

export interface RESTPostAPIGuildTemplatesJSONBody {
	name: string;
	description?: string | null;
}
export type RESTPostAPIGuildTemplatesResult = APITemplate;

export type RESTPutAPIGuildTemplateResult = APITemplate;

export type RESTPatchAPIGuildTemplateJSONBody = Partial<RESTPostAPIGuildTemplatesJSONBody>;
export type RESTPatchAPIGuildTemplateResult = APITemplate;

export type RESTDeleteAPIGuildTemplateResult = APITemplate;
