import type { RESTPostAPIWebhookWithTokenJSONBody } from '../rest';
import type { MessageFlags } from './channel';
import type { APIGuildMember } from './guild';

export interface APIApplicationCommand {
	id: string;
	application_id: string;
	name: string;
	description: string;
	options: APIApplicationCommandOption[];
}

export interface APIApplicationCommandOption {
	type: ApplicationCommandOptionType;
	name: string;
	description: string;
	default?: boolean;
	required?: boolean;
	choices?: APIApplicationCommandOptionChoice[];
	options?: APIApplicationCommandOption[];
}

export enum ApplicationCommandOptionType {
	SUB_COMMAND = 1,
	SUB_COMMAND_GROUP,
	STRING,
	INTEGER,
	BOOLEAN,
	USER,
	CHANNEL,
	ROLE,
}

export interface APIApplicationCommandOptionChoice {
	name: string;
	value: string | number;
}

export interface APIInteraction {
	id: string;
	type: InteractionType;
	data?: APIApplicationCommandInteractionData;
	guild_id: string;
	channel_id: string;
	member: APIGuildMember;
	token: string;
	version: 1;
}

export type APIApplicationCommandInteraction = Required<APIInteraction>;

export enum InteractionType {
	Ping = 1,
	ApplicationCommand,
}

export interface APIApplicationCommandInteractionData {
	id: string;
	name: string;
	options: APIApplicationCommandInteractionDataOption[];
}

export interface APIApplicationCommandInteractionDataOption {
	name: string;
	// For now, this is unknown
	value?: unknown;
	options?: APIApplicationCommandInteractionDataOption[];
}

export interface APIInteractionResponse {
	type: APIInteractionResponseType;
	data?: APIInteractionApplicationCommandCallbackData;
}

export enum APIInteractionResponseType {
	Pong = 1,
	Acknowledge,
	ChannelMessage,
	ChannelMessageWithSource,
	AcknowledgeWithSource,
}

export type APIInteractionApplicationCommandCallbackData = Omit<
	RESTPostAPIWebhookWithTokenJSONBody,
	'username' | 'avatar_url'
> & { flags?: MessageFlags };
