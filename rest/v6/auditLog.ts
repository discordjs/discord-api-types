/* eslint local/explicitly-optional-undefined-properties: "error", local/explicit-undefined-on-optional-properties: "error" */

import type { APIAuditLog, AuditLogEvent } from '../../payloads/v6/auditLog';

/**
 * https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export interface RESTGetAPIAuditLogQuery {
	user_id?: string | undefined;
	action_type?: AuditLogEvent | undefined;
	before?: string | undefined;
	limit?: number | undefined;
}

/**
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type RESTGetAPIAuditLogResult = APIAuditLog;
