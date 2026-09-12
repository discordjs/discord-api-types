import type { Snowflake } from '../../../../../globals';
import type { ChannelType } from '../../../channel';
import type {
	APIApplicationCommandOptionBase,
	APIApplicationCommandOptionBaseResponse,
	APIInteractionDataOptionBase,
} from './base';
import type { ApplicationCommandOptionType } from './shared';

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
