import type { Snowflake } from '../../../../../globals.ts';
import type { ApplicationCommandOptionAllowedChannelType } from '../../../channel.ts';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandChannelOption extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Channel> {
	channel_types?: ApplicationCommandOptionAllowedChannelType[];
}

export interface APIApplicationCommandChannelOptionResponse extends APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Channel> {
	channel_types?: ApplicationCommandOptionAllowedChannelType[];
}

export type APIApplicationCommandInteractionDataChannelOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Channel,
	Snowflake
>;
