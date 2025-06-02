import type { Snowflake } from "../globals";

export const VoiceGatewayVersion = '8';

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes}
 */
export enum VoiceOpcodes {
	/**
	 * Begin a voice websocket connection
	 */
	Identify,
	/**
	 * Select the voice protocol
	 */
	SelectProtocol,
	/**
	 * Complete the websocket handshake
	 */
	Ready,
	/**
	 * Keep the websocket connection alive
	 */
	Heartbeat,
	/**
	 * Describe the session
	 */
	SessionDescription,
	/**
	 * Indicate which users are speaking
	 */
	Speaking,
	/**
	 * Sent to acknowledge a received client heartbeat
	 */
	HeartbeatAck,
	/**
	 * Resume a connection
	 */
	Resume,
	/**
	 * Time to wait between sending heartbeats in milliseconds
	 */
	Hello,
	/**
	 * Acknowledge a successful session resume
	 */
	Resumed,
	/**
	 * One or more clients have connected to the voice channel
	 */
	ClientsConnect = 11,
	/**
	 * A client has disconnected from the voice channel
	 */
	ClientDisconnect = 13,
	/**
	 * A downgrade from the DAVE protocol is upcoming
	 */
	DavePrepareTransition = 21,
	/**
	 * Execute a previously announced protocol transition
	 */
	DaveExecuteTransition,
	/**
	 * Acknowledge readiness previously announced transition
	 */
	DaveTransitionReady,
	/**
	 * A DAVE protocol version or group change is upcoming
	 */
	DavePrepareEpoch,
	/**
	 * Credential and public key for MLS external sender
	 */
	DaveMlsExternalSender,
	/**
	 * MLS Key Package for pending group member
	 */
	DaveMlsKeyPackage,
	/**
	 * MLS Proposals to be appended or revoked
	 */
	DaveMlsProposals,
	/**
	 * MLS Commit with optional MLS Welcome messages
	 */
	DaveMlsCommitWelcome,
	/**
	 * MLS Commit to be processed for upcoming transition
	 */
	DaveMlsAnnounceCommitTransition,
	/**
	 * MLS Welcome to group for upcoming transition
	 */
	DaveMlsWelcome,
	/**
	 * Flag invalid commit or welcome, request re-add
	 */
	DaveMlsInvalidCommitWelcome,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes}
 */
export enum VoiceCloseCodes {
	/**
	 * You sent an invalid opcode
	 */
	UnknownOpcode = 4_001,
	/**
	 * You sent a invalid payload in your identifying to the Gateway
	 */
	FailedToDecode,
	/**
	 * You sent a payload before identifying with the Gateway
	 */
	NotAuthenticated,
	/**
	 * The token you sent in your identify payload is incorrect
	 */
	AuthenticationFailed,
	/**
	 * You sent more than one identify payload. Stahp
	 */
	AlreadyAuthenticated,
	/**
	 * Your session is no longer valid
	 */
	SessionNoLongerValid,
	/**
	 * Your session has timed out
	 */
	SessionTimeout = 4_009,
	/**
	 * We can't find the server you're trying to connect to
	 */
	ServerNotFound = 4_011,
	/**
	 * We didn't recognize the protocol you sent
	 */
	UnknownProtocol,
	/**
	 * Either the channel was deleted, you were kicked, or the main gateway session was dropped. Should not reconnect
	 */
	Disconnected = 4_014,
	/**
	 * The server crashed. Our bad! Try resuming
	 */
	VoiceServerCrashed,
	/**
	 * We didn't recognize your encryption
	 */
	UnknownEncryptionMode,
	/**
	 * You sent a malformed request
	 */
	BadRequest = 4_020,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#transport-encryption-modes}
 */
export enum VoiceEncryptionMode {
	/**
	 * AEAD AES256-GCM (RTP Size)
	 */
	AeadAes256GcmRtpSize = 'aead_aes256_gcm_rtpsize',
	/**
	 * AEAD XChaCha20 Poly1305 (RTP Size)
	 */
	AeadXChaCha20Poly1305RtpSize = 'aead_xchacha20_poly1305_rtpsize',
	/**
	 * XSalsa20 Poly1305 Lite (RTP Size)
	 * 
	 * @deprecated This encryption mode has been discontinued.
	 */
	XSalsa20Poly1305LiteRtpSize = 'xsalsa20_poly1305_lite_rtpsize',
	/**
	 * AEAD AES256-GCM
	 * 
	 * @deprecated This encryption mode has been discontinued.
	 */
	AeadAes256Gcm = 'aead_aes256_gcm',
	/**
	 * XSalsa20 Poly1305
	 * 
	 * @deprecated This encryption mode has been discontinued.
	 */
	XSalsa20Poly1305 = 'xsalsa20_poly1305',
	/**
	 * XSalsa20 Poly1305 Suffix
	 * 
	 * @deprecated This encryption mode has been discontinued.
	 */
	XSalsa20Poly1305Suffix = 'xsalsa20_poly1305_suffix',
	/**
	 * XSalsa20 Poly1305 Lite
	 * 
	 * @deprecated This encryption mode has been discontinued.
	 */
	XSalsa20Poly1305Lite = 'xsalsa20_poly1305_lite',
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#speaking}
 */
export enum VoiceSpeakingFlags {
	/**
	 * Normal transmission of voice audio
	 */
	Microphone = 1 << 0,
	/**
	 * 	Transmission of context audio for video, no speaking indicator
	 */
	Soundshare = 1 << 1,
	/**
	 * Priority speaker, lowering audio of other speakers
	 */
	Priority = 1 << 2,
}

export type VoiceSendPayload =
	| VoiceDaveMlsInvalidCommitWelcome
	| VoiceDaveTransitionReady
	| VoiceHeartbeat
	| VoiceIdentify
	| VoiceResume
	| VoiceSelectProtocol
	| VoiceSpeakingSend;

export type VoiceReceivePayload =
	| VoiceDaveExecuteTransition
	| VoiceDavePrepareEpoch
	| VoiceDavePrepareTransition
	| VoiceHeartbeatAck
	| VoiceHello
	| VoiceReady
	| VoiceResumed
	| VoiceSessionDescription
	| VoiceSpeaking;

// #region Server Payloads

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#heartbeating}
 */
export type VoiceHello = _DataPayload<VoiceOpcodes.Hello, VoiceHelloData>;

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#heartbeating}
 */
export interface VoiceHelloData {
	/**
	 * Voice gateway version
	 * 
	 * @see {@link https://discord.com/developers/docs/topics/voice-connections#voice-gateway-versioning-gateway-versions}
	 */
	v: number;
	/**
	 * The interval (in milliseconds) the client should heartbeat with
	 */
	heartbeat_interval: number;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection}
 */
export type VoiceReady = _DataPayload<VoiceOpcodes.Ready, VoiceReadyData>;

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection}
 */
export interface VoiceReadyData {
	/**
	 * SSRC identifier
	 */
	ssrc: number;
	/**
	 * UDP IP
	 */
	ip: string;
	/**
	 * UDP port
	 */
	port: number;
	/**
	 * Supported encryption modes
	 * 
	 * @see {@link https://discord.com/developers/docs/topics/voice-connections#transport-encryption-modes}
	 */
	modes: VoiceEncryptionMode[];
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#heartbeating}
 */
export type VoiceHeartbeatAck = _DataPayload<VoiceOpcodes.HeartbeatAck, VoiceHeartbeatAckData>;

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#heartbeating}
 */
export interface VoiceHeartbeatAckData {
	/**
	 * The integer nonce
	 */
	t: number;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#transport-encryption-and-sending-voice}
 */
export type VoiceSessionDescription = _DataPayload<VoiceOpcodes.SessionDescription, VoiceSessionDescriptionData>;

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#transport-encryption-and-sending-voice}
 */
export interface VoiceSessionDescriptionData {
	/**
	 * The selected mode
	 */
	mode: VoiceEncryptionMode;
	/**
	 * The secret key
	 */
	secret_key: number[];
	/**
	 * The selected DAVE protocol version
	 * 
	 * @see {@link https://daveprotocol.com/#select_protocol_ack-4}
	 */
	dave_protocol_version: number;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection}
 */
export type VoiceResumed = _DataPayload<VoiceOpcodes.Resumed, null>;

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#speaking}
 */
export type VoiceSpeaking = _DataPayload<VoiceOpcodes.Speaking, VoiceSpeakingData>;

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#speaking}
 */
export interface VoiceSpeakingData {
	/**
	 * The speaking mode flags
	 */
	speaking: VoiceSpeakingFlags;
	/**
	 * SSRC identifier
	 */
	ssrc: number;
	/**
	 * User id
	 */
	user_id: Snowflake;
}

/**
 * @see {@link https://daveprotocol.com/#clients_connect-11}
 */
export type VoiceClientsConnect = _DataPayload<VoiceOpcodes.ClientsConnect, VoiceClientsConnectData>;

/**
 * @see {@link https://daveprotocol.com/#clients_connect-11}
 */
export interface VoiceClientsConnectData {
	/**
	 * The connected user ids
	 */
	user_ids: Snowflake[];
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections}
 */
export type VoiceClientDisconnect = _DataPayload<VoiceOpcodes.ClientDisconnect, VoiceClientDisconnectData>;

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections}
 */
export interface VoiceClientDisconnectData {
	/**
	 * The disconnected user id
	 */
	user_id: Snowflake;
}

/**
 * @see {@link https://daveprotocol.com/#dave_protocol_prepare_transition-21}
 */
export type VoiceDavePrepareTransition = _DataPayload<VoiceOpcodes.DavePrepareTransition, VoiceDavePrepareTransitionData>;

/**
 * @see {@link https://daveprotocol.com/#dave_protocol_prepare_transition-21}
 */
export interface VoiceDavePrepareTransitionData {
	/**
	 * The protocol version
	 */
	protocol_version: number;
	/**
	 * The transition id
	 */
	transition_id: number;
}

/**
 * @see {@link https://daveprotocol.com/#dave_protocol_execute_transition-22}
 */
export type VoiceDaveExecuteTransition = _DataPayload<VoiceOpcodes.DaveExecuteTransition, VoiceDaveExecuteTransitionData>;

/**
 * @see {@link https://daveprotocol.com/#dave_protocol_execute_transition-22}
 */
export interface VoiceDaveExecuteTransitionData {
	/**
	 * The transition id
	 */
	transition_id: number;
}

// #endregion Server Payloads

// #region Sendable Payloads

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection}
 */
export interface VoiceIdentify {
	op: VoiceOpcodes.Identify;
	d: VoiceIdentifyData;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection}
 */
export interface VoiceIdentifyData {
	/**
	 * The id of the server to connect to
	 */
	server_id: Snowflake;
	/**
	 * The id of the user to connect as
	 */
	user_id: Snowflake;
	/**
	 * Voice state session id
	 */
	session_id: string;
	/**
	 * Voice connection token
	 */
	token: string;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection}
 */
export interface VoiceHeartbeat {
	op: VoiceOpcodes.Heartbeat;
	d: VoiceHeartbeatData;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-websocket-connection}
 */
export interface VoiceHeartbeatData {
	/**
	 * The integer nonce
	 */
	t: number;
	/**
	 * The last sequence number recieved
	 */
	seq_ack: number;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection}
 */
export interface VoiceSelectProtocol {
	op: VoiceOpcodes.SelectProtocol;
	d: VoiceSelectProtocolData;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection}
 */
export interface VoiceSelectProtocolData {
	/**
	 * Voice protocol
	 */
	protocol: string;
	/**
	 * Data associated with the protocol
	 */
	data: VoiceUDPProtocolData;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection}
 */
export interface VoiceUDPProtocolData {
	/**
	 * External IP
	 */
	ip: string;
	/**
	 * External UDP port
	 */
	port: number;
	/**
	 * Selected mode
	 * 
	 * @see {@link https://discord.com/developers/docs/topics/voice-connections#transport-encryption-modes}
	 */
	mode: VoiceEncryptionMode;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection}
 */
export interface VoiceResume {
	op: VoiceOpcodes.Resume;
	d: VoiceResumeData;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#resuming-voice-connection}
 */
export interface VoiceResumeData {
	/**
	 * The id of the server to connect to
	 */
	server_id: Snowflake;
	/**
	 * Voice state session id
	 */
	session_id: string;
	/**
	 * Voice connection token
	 */
	token: string;
	/**
	 * Last recieved sequence number
	 */
	seq_ack: number;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#speaking}
 */
export interface VoiceSpeakingSend {
	op: VoiceOpcodes.Speaking;
	d: VoiceSpeakingSendData;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#speaking}
 */
export interface VoiceSpeakingSendData {
	/**
	 * The speaking mode flags
	 */
	speaking: VoiceSpeakingFlags;
	/**
	 * Voice delay
	 */
	delay: number;
	/**
	 * SSRC identifier
	 */
	ssrc: number;
}

/**
 * @see {@link https://daveprotocol.com/#dave_protocol_ready_for_transition-23}
 */
export interface VoiceDaveTransitionReady {
	op: VoiceOpcodes.DaveTransitionReady;
	d: VoiceDaveTransitionReadyData;
}

/**
 * @see {@link https://daveprotocol.com/#dave_protocol_ready_for_transition-23}
 */
export interface VoiceDaveTransitionReadyData {
	/**
	 * The transition id
	 */
	transition_id: number;
}

/**
 * @see {@link https://daveprotocol.com/#dave_protocol_prepare_epoch-24}
 */
export interface VoiceDavePrepareEpoch {
	op: VoiceOpcodes.DavePrepareEpoch;
	d: VoiceDavePrepareEpochData;
}

/**
 * @see {@link https://daveprotocol.com/#dave_protocol_prepare_epoch-24}
 */
export interface VoiceDavePrepareEpochData {
	/**
	 * The transition id
	 */
	transition_id: number;
	/**
	 * The epoch id
	 */
	epoch: number;
}

/**
 * @see {@link https://daveprotocol.com/#dave_mls_invalid_commit_welcome-31}
 */
export interface VoiceDaveMlsInvalidCommitWelcome {
	op: VoiceOpcodes.DaveMlsInvalidCommitWelcome;
	d: VoiceDaveMlsInvalidCommitWelcomeData;
}

/**
 * @see {@link https://daveprotocol.com/#dave_mls_invalid_commit_welcome-31}
 */
export interface VoiceDaveMlsInvalidCommitWelcomeData {
	/**
	 * The transition id
	 */
	transition_id: number;
}
// #endregion

// #region Shared
export interface _BasePayload {
	/**
	 * Opcode for the payload
	 */
	op: VoiceOpcodes;
	/**
	 * Event data
	 */
	d?: unknown;
	/**
	 * Sequence number, used for resuming sessions and heartbeats
	 */
	seq?: number;
}

export interface _DataPayload<Op extends VoiceOpcodes, D = unknown> extends _BasePayload {
	op: Op;
	d: D;
}
// #endregion Shared