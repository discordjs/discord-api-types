import type { APIVoiceRegion } from '../../payloads/v8/index';

/**
 * https://discord.com/developers/docs/resources/voice#list-voice-regions
 * @deprecated Gateway v8 is deprecated and the types will not receive further updates, please update to v10.
 */
export type GetAPIVoiceRegionsResult = APIVoiceRegion[];
