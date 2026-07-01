/**
 * @see {@link https://docs.discord.com/developers/topics/gateway#connecting-gateway-url-query-string-params}
 */
export interface GatewayURLQuery {
	v: string;
	encoding: 'etf' | 'json';
	compress?: 'zlib-stream' | 'zstd-stream';
}
