import type { Snowflake } from '../../../../../globals';
import type { ApplicationCommandOptionAllowedChannelType } from '../../../channel';
import type { APIApplicationCommandBasicOptionBase, APIInteractionDataOptionBase } from './base';
import type { ApplicationCommandOptionType } from './shared';

export interface APIApplicationCommandChannelOption extends APIApplicationCommandBasicOptionBase<ApplicationCommandOptionType.Channel> {
	channel_types?: ApplicationCommandOptionAllowedChannelType[];
}

export type APIApplicationCommandInteractionDataChannelOption = APIInteractionDataOptionBase<
	ApplicationCommandOptionType.Channel,
	Snowflake
>;
