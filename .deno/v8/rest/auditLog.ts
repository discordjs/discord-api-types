import type { APIAuditLog, AuditLogEvent } from '../payloads/auditLog.ts';

/**
 * https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
 */
export interface RESTGetAPIAuditLogQuery {
	/**
	 * Filter the log for actions made by a user
	 */
	user_id?: string;
	/**
	 * The type of audit log events
	 */
	action_type?: AuditLogEvent;
	/**
	 * Filter the log before a certain entry ID
	 */
	before?: string;
	/**
	 * How many entries are returned (default 50, minimum 1, maximum 100)
	 *
	 * @default 50
	 */
	limit?: number;
}

export type RESTGetAPIAuditLogResult = APIAuditLog;
