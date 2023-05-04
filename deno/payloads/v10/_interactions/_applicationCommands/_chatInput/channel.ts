import type { Snowflake } from '../../../../../globals.ts';
import type { ChannelType } from '../../../channel.ts';
import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';

export interface APIApplicationCommandChannelOption
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Channel> {
	channel_types?: Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM>[];
}

export type APIApplicationCommandInteractionDataChannelOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Channel,
	Snowflake
>;
