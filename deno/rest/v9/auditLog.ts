/* eslint local/explicitly-optional-undefined-properties: "error", local/explicit-undefined-on-optional-properties: "error" */

import type { Snowflake } from '../../globals.ts';
import type { APIAuditLog, AuditLogEvent } from '../../payloads/v9/auditLog.ts';

/**
 * https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
 */
export interface RESTGetAPIAuditLogQuery {
	/**
	 * Filter the log for actions made by a user
	 */
	user_id?: Snowflake | undefined;
	/**
	 * The type of audit log events
	 */
	action_type?: AuditLogEvent | undefined;
	/**
	 * Filter the log before a certain entry ID
	 */
	before?: Snowflake | undefined;
	/**
	 * Filter the log after a certain entry ID
	 */
	after?: Snowflake | undefined;
	/**
	 * How many entries are returned (default 50, minimum 1, maximum 100)
	 *
	 * @default 50
	 */
	limit?: number | undefined;
}

export type RESTGetAPIAuditLogResult = APIAuditLog;
