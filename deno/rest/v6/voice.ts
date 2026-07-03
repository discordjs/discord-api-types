import type { APIVoiceRegion } from '../../payloads/v6/mod.ts';

/**
 * https://docs.discord.com/developers/resources/voice#list-voice-regions
 *
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GetAPIVoiceRegionsResult = APIVoiceRegion[];
