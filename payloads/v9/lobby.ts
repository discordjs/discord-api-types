/**
 * Types extracted from https://discord.com/developers/docs/game-sdk/lobbies
 */

import type { Snowflake } from '../../globals';

export interface APILobby {
	/**
	 * Unique id of this lobby
	 */
	id: Snowflake;
	/**
	 * The type of this lobby (whether it is private or public)
	 *
	 * @default Private
	 */
	type: LobbyType;
	/**
	 * The user id of the lobby owner
	 */
	owner_id: Snowflake;
	/**
	 * The password of this lobby
	 */
	secret: string;
	/**
	 * The maximum capacity of this lobby
	 *
	 * @default 16
	 */
	capacity: number;
	/**
	 * Whether this lobby can be joined
	 */
	locked: boolean;
	/**
	 * Unique id of the application
	 */
	application_id: Snowflake;
	/**
	 * Metadata for this lobby. key/value pairs with type `string`
	 *
	 * @default {}
	 */
	metadata: Record<string, string>;
	/**
	 * The region of this lobby. Defaults the region of the requesting server's IP address
	 */
	region: LobbyRegion;
}

export enum LobbyRegion {
	Atlanta = 'atlanta',
	Brazil = 'brazil',
	Bucharest = 'bucharest',
	BuenosAires = 'buenos-aires',
	Dubai = 'dubai',
	Finland = 'finland',
	Hongkong = 'hongkong',
	India = 'india',
	Japan = 'japan',
	Madrid = 'madrid',
	Milan = 'milan',
	Montreal = 'montreal',
	Newark = 'newark',
	Rotterdam = 'rotterdam',
	Russia = 'russia',
	SantaClara = 'santa-clara',
	Santiago = 'santiago',
	Seattle = 'seattle',
	Singapore = 'singapore',
	SouthKorea = 'south-korea',
	SouthAfrica = 'southafrica',
	StPete = 'st-pete',
	Stockholm = 'stockholm',
	Sydney = 'sydney',
	UsCentral = 'us-central',
	UsEast = 'us-east',
	UsSouth = 'us-south',
	UsWest = 'us-west',
}

export enum LobbyType {
	Private = 1,
	Public,
}
