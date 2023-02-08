import * as grpcWeb from 'grpc-web';

import * as api_domain_audit_event_pb from '../../api/domain/audit/event_pb';
import * as api_domain_audit_user_pb from '../../api/domain/audit/user_pb';
import * as api_domain_queryhandler_service_pb from '../../api/domain/queryhandler_service_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as api_domain_projections_cluster_pb from '../../api/domain/projections/cluster_pb';
import * as api_domain_projections_tenant_pb from '../../api/domain/projections/tenant_pb';
import * as api_domain_projections_tenant_cluster_binding_pb from '../../api/domain/projections/tenant_cluster_binding_pb';
import * as api_domain_projections_user_pb from '../../api/domain/projections/user_pb';


export class UserClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAll(
    request: api_domain_queryhandler_service_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_user_pb.User>;

  getById(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_projections_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<api_domain_projections_user_pb.User>;

  getByEmail(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_projections_user_pb.User) => void
  ): grpcWeb.ClientReadableStream<api_domain_projections_user_pb.User>;

  getRoleBindingsById(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_user_pb.UserRoleBinding>;

  getCount(
    request: api_domain_queryhandler_service_pb.GetCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_queryhandler_service_pb.GetCountResult) => void
  ): grpcWeb.ClientReadableStream<api_domain_queryhandler_service_pb.GetCountResult>;

}

export class TenantClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAll(
    request: api_domain_queryhandler_service_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_pb.Tenant>;

  getById(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_projections_tenant_pb.Tenant) => void
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_pb.Tenant>;

  getByName(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_projections_tenant_pb.Tenant) => void
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_pb.Tenant>;

  getUsers(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_pb.TenantUser>;

}

export class ClusterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAll(
    request: api_domain_queryhandler_service_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_cluster_pb.Cluster>;

  getById(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_projections_cluster_pb.Cluster) => void
  ): grpcWeb.ClientReadableStream<api_domain_projections_cluster_pb.Cluster>;

  getByName(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_projections_cluster_pb.Cluster) => void
  ): grpcWeb.ClientReadableStream<api_domain_projections_cluster_pb.Cluster>;

}

export class ClusterAccessClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getClusterAccess(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_cluster_pb.ClusterAccess>;

  getClusterAccessV2(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_cluster_pb.ClusterAccessV2>;

  getTenantClusterMappingsByTenantId(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_cluster_binding_pb.TenantClusterBinding>;

  getTenantClusterMappingsByClusterId(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_cluster_binding_pb.TenantClusterBinding>;

  getTenantClusterMappingByTenantAndClusterId(
    request: api_domain_queryhandler_service_pb.GetClusterMappingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_projections_tenant_cluster_binding_pb.TenantClusterBinding) => void
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_cluster_binding_pb.TenantClusterBinding>;

}

export class AuditLogClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getByDateRange(
    request: api_domain_queryhandler_service_pb.GetAuditLogByDateRangeRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_audit_event_pb.HumanReadableEvent>;

  getByUser(
    request: api_domain_queryhandler_service_pb.GetByUserRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_audit_event_pb.HumanReadableEvent>;

  getUserActions(
    request: api_domain_queryhandler_service_pb.GetUserActionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_audit_event_pb.HumanReadableEvent>;

  getUsersOverview(
    request: api_domain_queryhandler_service_pb.GetUsersOverviewRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_audit_user_pb.UserOverview>;

}

export class K8sAuthZClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAll(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.BytesValue>;

  getByClusterId(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.BytesValue>;

}

export class UserPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAll(
    request: api_domain_queryhandler_service_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_user_pb.User>;

  getById(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_projections_user_pb.User>;

  getByEmail(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_projections_user_pb.User>;

  getRoleBindingsById(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_user_pb.UserRoleBinding>;

  getCount(
    request: api_domain_queryhandler_service_pb.GetCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_queryhandler_service_pb.GetCountResult>;

}

export class TenantPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAll(
    request: api_domain_queryhandler_service_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_pb.Tenant>;

  getById(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_projections_tenant_pb.Tenant>;

  getByName(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_projections_tenant_pb.Tenant>;

  getUsers(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_pb.TenantUser>;

}

export class ClusterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAll(
    request: api_domain_queryhandler_service_pb.GetAllRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_cluster_pb.Cluster>;

  getById(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_projections_cluster_pb.Cluster>;

  getByName(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_projections_cluster_pb.Cluster>;

}

export class ClusterAccessPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getClusterAccess(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_cluster_pb.ClusterAccess>;

  getClusterAccessV2(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_cluster_pb.ClusterAccessV2>;

  getTenantClusterMappingsByTenantId(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_cluster_binding_pb.TenantClusterBinding>;

  getTenantClusterMappingsByClusterId(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_projections_tenant_cluster_binding_pb.TenantClusterBinding>;

  getTenantClusterMappingByTenantAndClusterId(
    request: api_domain_queryhandler_service_pb.GetClusterMappingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_projections_tenant_cluster_binding_pb.TenantClusterBinding>;

}

export class AuditLogPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getByDateRange(
    request: api_domain_queryhandler_service_pb.GetAuditLogByDateRangeRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_audit_event_pb.HumanReadableEvent>;

  getByUser(
    request: api_domain_queryhandler_service_pb.GetByUserRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_audit_event_pb.HumanReadableEvent>;

  getUserActions(
    request: api_domain_queryhandler_service_pb.GetUserActionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_audit_event_pb.HumanReadableEvent>;

  getUsersOverview(
    request: api_domain_queryhandler_service_pb.GetUsersOverviewRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_audit_user_pb.UserOverview>;

}

export class K8sAuthZPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAll(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.BytesValue>;

  getByClusterId(
    request: google_protobuf_wrappers_pb.StringValue,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.BytesValue>;

}

