/**
 * Types extracted from https://discord.com/developers/docs/resources/sticker
 */

import type { Snowflake } from '../../globals.ts';
import type { APIUser } from './user.ts';

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object}
 */
export interface APISticker {
	/**
	 * ID of the sticker
	 */
	id: Snowflake;
	/**
	 * For standard stickers, ID of the pack the sticker is from
	 */
	pack_id?: Snowflake;
	/**
	 * Name of the sticker
	 */
	name: string;
	/**
	 * Description of the sticker
	 */
	description: string | null;
	/**
	 * Autocomplete/suggestion tags for the sticker (max 200 characters)
	 *
	 * @remarks A comma separated list of keywords is the format used in this field by standard stickers, but this is just a convention.
	 * Incidentally the client will always use a name generated from an emoji as the value of this field when creating or modifying a guild sticker.
	 */
	tags: string;
	/**
	 * Previously the sticker asset hash, now an empty string
	 *
	 * @deprecated This field is no longer documented by Discord and will be removed in v11
	 * @unstable This field is no longer documented by Discord and will be removed in v11
	 */
	asset?: '';
	/**
	 * Type of sticker
	 *
	 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
	 */
	type: StickerType;
	/**
	 * Type of sticker format
	 *
	 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
	 */
	format_type: StickerFormatType;
	/**
	 * Whether this guild sticker can be used, may be false due to loss of Server Boosts
	 */
	available?: boolean;
	/**
	 * ID of the guild that owns this sticker
	 */
	guild_id?: Snowflake;
	/**
	 * The user that uploaded the guild sticker
	 */
	user?: APIUser;
	/**
	 * The standard sticker's sort order within its pack
	 */
	sort_value?: number;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
 */
export enum StickerType {
	/**
	 * An official sticker in a pack
	 */
	Standard = 1,
	/**
	 * A sticker uploaded to a guild for the guild's members
	 */
	Guild,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
 */
export enum StickerFormatType {
	PNG = 1,
	APNG,
	Lottie,
	GIF,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-item-object}
 */
export type APIStickerItem = Pick<APISticker, 'format_type' | 'id' | 'name'>;

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-pack-object}
 */
export interface APIStickerPack {
	/**
	 * ID of the sticker pack
	 */
	id: Snowflake;
	/**
	 * The stickers in the pack
	 */
	stickers: APISticker[];
	/**
	 * Name of the sticker pack
	 */
	name: string;
	/**
	 * ID of the pack's SKU
	 */
	sku_id: Snowflake;
	/**
	 * ID of a sticker in the pack which is shown as the pack's icon
	 */
	cover_sticker_id?: Snowflake;
	/**
	 * Description of the sticker pack
	 */
	description: string;
	/**
	 * ID of the sticker pack's banner image
	 */
	banner_asset_id?: Snowflake;
}
