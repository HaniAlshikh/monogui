import * as jspb from 'google-protobuf'

import * as api_domain_projections_user_pb from '../../api/domain/projections/user_pb';
import * as api_domain_projections_tenant_pb from '../../api/domain/projections/tenant_pb';
import * as api_domain_projections_cluster_pb from '../../api/domain/projections/cluster_pb';
import * as api_domain_projections_tenant_cluster_binding_pb from '../../api/domain/projections/tenant_cluster_binding_pb';
import * as api_domain_audit_user_pb from '../../api/domain/audit/user_pb';
import * as api_domain_audit_event_pb from '../../api/domain/audit/event_pb';
import * as validate_validate_pb from '../../validate/validate_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class GetAllRequest extends jspb.Message {
  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetAllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllRequest): GetAllRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllRequest;
  static deserializeBinaryFromReader(message: GetAllRequest, reader: jspb.BinaryReader): GetAllRequest;
}

export namespace GetAllRequest {
  export type AsObject = {
    includeDeleted: boolean,
  }
}

export class GetClusterMappingRequest extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): GetClusterMappingRequest;

  getClusterId(): string;
  setClusterId(value: string): GetClusterMappingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClusterMappingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClusterMappingRequest): GetClusterMappingRequest.AsObject;
  static serializeBinaryToWriter(message: GetClusterMappingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClusterMappingRequest;
  static deserializeBinaryFromReader(message: GetClusterMappingRequest, reader: jspb.BinaryReader): GetClusterMappingRequest;
}

export namespace GetClusterMappingRequest {
  export type AsObject = {
    tenantId: string,
    clusterId: string,
  }
}

export class GetCountRequest extends jspb.Message {
  getIncludeDeleted(): boolean;
  setIncludeDeleted(value: boolean): GetCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountRequest): GetCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountRequest;
  static deserializeBinaryFromReader(message: GetCountRequest, reader: jspb.BinaryReader): GetCountRequest;
}

export namespace GetCountRequest {
  export type AsObject = {
    includeDeleted: boolean,
  }
}

export class GetCountResult extends jspb.Message {
  getCount(): number;
  setCount(value: number): GetCountResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountResult.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountResult): GetCountResult.AsObject;
  static serializeBinaryToWriter(message: GetCountResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountResult;
  static deserializeBinaryFromReader(message: GetCountResult, reader: jspb.BinaryReader): GetCountResult;
}

export namespace GetCountResult {
  export type AsObject = {
    count: number,
  }
}

export class GetAuditLogByDateRangeRequest extends jspb.Message {
  getMinTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMinTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): GetAuditLogByDateRangeRequest;
  hasMinTimestamp(): boolean;
  clearMinTimestamp(): GetAuditLogByDateRangeRequest;

  getMaxTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaxTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): GetAuditLogByDateRangeRequest;
  hasMaxTimestamp(): boolean;
  clearMaxTimestamp(): GetAuditLogByDateRangeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuditLogByDateRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuditLogByDateRangeRequest): GetAuditLogByDateRangeRequest.AsObject;
  static serializeBinaryToWriter(message: GetAuditLogByDateRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuditLogByDateRangeRequest;
  static deserializeBinaryFromReader(message: GetAuditLogByDateRangeRequest, reader: jspb.BinaryReader): GetAuditLogByDateRangeRequest;
}

export namespace GetAuditLogByDateRangeRequest {
  export type AsObject = {
    minTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maxTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetByUserRequest extends jspb.Message {
  getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmail(value?: google_protobuf_wrappers_pb.StringValue): GetByUserRequest;
  hasEmail(): boolean;
  clearEmail(): GetByUserRequest;

  getDateRange(): GetAuditLogByDateRangeRequest | undefined;
  setDateRange(value?: GetAuditLogByDateRangeRequest): GetByUserRequest;
  hasDateRange(): boolean;
  clearDateRange(): GetByUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByUserRequest): GetByUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetByUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByUserRequest;
  static deserializeBinaryFromReader(message: GetByUserRequest, reader: jspb.BinaryReader): GetByUserRequest;
}

export namespace GetByUserRequest {
  export type AsObject = {
    email?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dateRange?: GetAuditLogByDateRangeRequest.AsObject,
  }
}

export class GetUserActionsRequest extends jspb.Message {
  getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmail(value?: google_protobuf_wrappers_pb.StringValue): GetUserActionsRequest;
  hasEmail(): boolean;
  clearEmail(): GetUserActionsRequest;

  getDateRange(): GetAuditLogByDateRangeRequest | undefined;
  setDateRange(value?: GetAuditLogByDateRangeRequest): GetUserActionsRequest;
  hasDateRange(): boolean;
  clearDateRange(): GetUserActionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserActionsRequest): GetUserActionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserActionsRequest;
  static deserializeBinaryFromReader(message: GetUserActionsRequest, reader: jspb.BinaryReader): GetUserActionsRequest;
}

export namespace GetUserActionsRequest {
  export type AsObject = {
    email?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dateRange?: GetAuditLogByDateRangeRequest.AsObject,
  }
}

export class GetUsersOverviewRequest extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): GetUsersOverviewRequest;
  hasTimestamp(): boolean;
  clearTimestamp(): GetUsersOverviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersOverviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersOverviewRequest): GetUsersOverviewRequest.AsObject;
  static serializeBinaryToWriter(message: GetUsersOverviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersOverviewRequest;
  static deserializeBinaryFromReader(message: GetUsersOverviewRequest, reader: jspb.BinaryReader): GetUsersOverviewRequest;
}

export namespace GetUsersOverviewRequest {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

