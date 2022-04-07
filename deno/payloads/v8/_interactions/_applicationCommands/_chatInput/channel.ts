import type { APIApplicationCommandOptionBase, APIInteractionDataOptionBase } from './base.ts';
import type { ApplicationCommandOptionType } from './shared.ts';
import type { Snowflake } from '../../../../../globals.ts';
import type { ChannelType } from '../../../channel.ts';

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandChannelOption
	extends APIApplicationCommandOptionBase<ApplicationCommandOptionType.Channel> {
	channel_types?: Exclude<ChannelType, ChannelType.DM | ChannelType.GroupDM>[];
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIApplicationCommandInteractionDataChannelOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Channel,
	Snowflake
>;
