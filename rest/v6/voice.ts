/* eslint local/explicitly-optional-undefined-properties: "error", local/explicit-undefined-on-optional-properties: "error" */

import type { APIVoiceRegion } from '../../payloads/v6/index';

/**
 * https://discord.com/developers/docs/resources/voice#list-voice-regions
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type GetAPIVoiceRegionsResult = APIVoiceRegion[];
