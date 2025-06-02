export const VoiceGatewayVersion = '4';

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
	 * Previously for when a client has connected to the voice channel, now unused
	 *
	 * @deprecated
	 */
	ClientConnect,
	/**
	 * A client has disconnected from the voice channel
	 */
	ClientDisconnect,
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
