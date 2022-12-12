import type { APIApplicationRoleConnectionMetadata } from '../../payloads/v9/application';

/**
 * https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records
 */
export type RESTGetAPIApplicationRoleConnectionMetadataResult = APIApplicationRoleConnectionMetadata[];

/**
 * https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records
 */
export type RESTPutAPIApplicationRoleConnectionMetadataJSONBody = APIApplicationRoleConnectionMetadata[];

/**
 * https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records
 */
export type RESTPutAPIApplicationRoleConnectionMetadataResult = APIApplicationRoleConnectionMetadata[];
