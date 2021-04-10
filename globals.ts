/**
 * https://discord.com/developers/docs/reference#snowflakes
 */
export type Snowflake = `${bigint}`;

/**
 * https://discord.com/developers/docs/topics/permissions
 * @internal
 */
export type Permissions = `${bigint}`;

/**
 * https://discord.com/developers/docs/reference#message-formatting-formats
 */
export const FormattingPatterns = {
	/**
	 * Regular expression for matching a user mention, strictly without a nickname
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	User: /<@(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a user mention, strictly with a nickname
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	UserWithNickname: /<@!(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a user mention, with or without a nickname
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	UserWithOptionalNickname: /<@!?(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a channel mention
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	Channel: /<#(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a role mention
	 *
	 * The `id` group property is present on the `exec` result of this expression
	 */
	Role: /<@&(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching a custom emoji, either static or animated
	 *
	 * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
	 */
	Emoji: /<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching strictly an animated custom emoji
	 *
	 * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
	 */
	AnimatedEmoji: /<(?<animated>a):(?<name>\w{2,32}):(?<id>\d{17,20})>/,
	/**
	 * Regular expression for matching strictly a static custom emoji
	 *
	 * The `name` and `id` group properties are present on the `exec` result of this expression
	 */
	StaticEmoji: /<:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
} as const;

/**
 * Freezes the formatting patterns
 * @internal
 */
Object.freeze(FormattingPatterns);
