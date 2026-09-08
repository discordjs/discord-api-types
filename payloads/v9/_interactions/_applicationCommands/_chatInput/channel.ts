import type { Snowflake } from '../../../../../globals';
import type { ChannelType } from '../../../channel';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';

export interface APIApplicationCommandChannelOption extends APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Channel> {
	channel_types?: Exclude<ChannelType, ChannelType.GuildDirectory>[];
}

export type APIApplicationCommandInteractionDataChannelOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Channel,
	Snowflake
>;
