import type { APIApplicationCommand, APIInteractionResponse } from '../payloads';

export type RESTGetAPIApplicationCommandsResult = APIApplicationCommand[];

export type RESTPostAPIApplicationCommandsJSONBody = Omit<APIApplicationCommand, 'id' | 'application_id'>;

export type RESTPostAPIApplicationCommandsResult = APIApplicationCommand;

export type RESTPatchAPIApplicationCommandJSONBody = Partial<RESTPostAPIApplicationCommandsJSONBody>;

export type RESTPatchAPIApplicationCommandResult = APIApplicationCommand;

export type RESTGetAPIApplicationGuildCommandsResult = APIApplicationCommand[];

export type RESTPostAPIApplicationGuildCommandsJSONBody = RESTPostAPIApplicationCommandsJSONBody;

export type RESTPostAPIApplicationGuildCommandsResult = APIApplicationCommand;

export type RESTPatchAPIApplicationGuildCommandJSONBody = Partial<RESTPostAPIApplicationCommandsJSONBody>;

export type RESTPatchAPIApplicationGuildCommandResult = APIApplicationCommand;

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
