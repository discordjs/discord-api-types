import type { APIAuditLog, AuditLogEvent } from '../payloads/auditLog';

/**
 * https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
 */
export interface RESTGetAPIAuditLogQuery {
	user_id?: string;
	action_type?: AuditLogEvent;
	before?: string;
	limit?: number;
}

export type RESTGetAPIAuditLogResult = APIAuditLog;
