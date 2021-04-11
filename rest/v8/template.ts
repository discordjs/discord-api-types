import type { APIGuild, APITemplate } from '../../payloads/v8/index';

/**
 * https://discord.com/developers/docs/resources/template#get-template
 */
export type RESTGetAPITemplateResult = APITemplate;

/**
 * https://discord.com/developers/docs/resources/template#create-guild-from-template
 */
export interface RESTPostAPITemplateCreateGuildJSONBody {
	/**
	 * Name of the guild (2-100 characters)
	 */
	name: string;
	/**
	 * base64 1024x1024 png/jpeg image for the guild icon
	 *
	 * See https://discord.com/developers/docs/reference#image-data
	 */
	icon?: string;
}
/**
 * https://discord.com/developers/docs/resources/template#create-guild-from-template
 */
export type RESTPostAPITemplateCreateGuildResult = APIGuild;

/**
 * https://discord.com/developers/docs/resources/template#get-guild-templates
 */
export type RESTGetAPIGuildTemplatesResult = APITemplate[];

/**
 * https://discord.com/developers/docs/resources/template#create-guild-template
 */
export interface RESTPostAPIGuildTemplatesJSONBody {
	/**
	 * Name of the template (1-100 characters)
	 */
	name: string;
	/**
	 * Description for the template (0-120 characters)
	 */
	description?: string | null;
}

/**
 * https://discord.com/developers/docs/resources/template#create-guild-template
 */
export type RESTPostAPIGuildTemplatesResult = APITemplate;

/**
 * https://discord.com/developers/docs/resources/template#sync-guild-template
 */
export type RESTPutAPIGuildTemplateSyncResult = APITemplate;

/**
 * https://discord.com/developers/docs/resources/template#modify-guild-template
 */
export type RESTPatchAPIGuildTemplateJSONBody = Partial<RESTPostAPIGuildTemplatesJSONBody>;

/**
 * https://discord.com/developers/docs/resources/template#modify-guild-template
 */
export type RESTPatchAPIGuildTemplateResult = APITemplate;

/**
 * https://discord.com/developers/docs/resources/template#delete-guild-template
 */
export type RESTDeleteAPIGuildTemplateResult = APITemplate;
