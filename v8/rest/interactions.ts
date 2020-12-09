import type { APIApplicationCommand, APIInteractionResponse } from '../payloads';

export type RESTGetAPIApplicationCommandsResult = APIApplicationCommand[];

export type RESTPostAPIApplicationCommandsJSONBody = Omit<APIApplicationCommand, 'id' | 'application_id'>;

export type RESTPostAPIApplicationCommandsResult = APIApplicationCommand;

export type RESTPatchAPIApplicationCommandJSONBody = Partial<RESTPostAPIApplicationCommandsJSONBody>;

export type RESTPatchAPIApplicationCommandResult = APIApplicationCommand;

export type RESTGetAPIGuildApplicationCommandsResult = APIApplicationCommand[];

export type RESTPostAPIGuildApplicationCommandsJSONBody = Omit<APIApplicationCommand, 'id' | 'application_id'>;

export type RESTPostAPIGuildApplicationCommandsResult = APIApplicationCommand;

export type RESTPatchAPIGuildApplicationCommandJSONBody = Partial<RESTPostAPIApplicationCommandsJSONBody>;

export type RESTPatchAPIGuildApplicationCommandResult = APIApplicationCommand;

export type RESTPostAPIInteractionCallbackJSONBody = APIInteractionResponse;

export type RESTPostAPIInteractionCallbackFormDataBody =
	| {
			/**
			 * JSON stringified message body
			 */
			payload_json?: string;
			/**
			 * The file contents
			 */
			file: unknown;
	  }
	| (RESTPostAPIInteractionCallbackJSONBody & {
			/**
			 * The file contents
			 */
			file: unknown;
	  });
