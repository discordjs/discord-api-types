import type { Snowflake } from '../../../../../globals.ts';
import type { ChannelType } from '../../../channel.ts';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandChannelOption extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Channel> {
	channel_types?: Exclude<ChannelType, ChannelType.GuildDirectory>[];
}

export interface APIApplicationCommandChannelOptionResponse extends APIApplicationCommandOptionBaseResponse<ApplicationCommandOptionType.Channel> {
	channel_types?: Exclude<ChannelType, ChannelType.GuildDirectory>[];
}

export type APIApplicationCommandInteractionDataChannelOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Channel,
	Snowflake
>;
