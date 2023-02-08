import * as jspb from 'google-protobuf'

import * as api_domain_projections_metadata_pb from '../../../api/domain/projections/metadata_pb';


export class Tenant extends jspb.Message {
  getId(): string;
  setId(value: string): Tenant;

  getName(): string;
  setName(value: string): Tenant;

  getPrefix(): string;
  setPrefix(value: string): Tenant;

  getMetadata(): api_domain_projections_metadata_pb.LifecycleMetadata | undefined;
  setMetadata(value?: api_domain_projections_metadata_pb.LifecycleMetadata): Tenant;
  hasMetadata(): boolean;
  clearMetadata(): Tenant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tenant.AsObject;
  static toObject(includeInstance: boolean, msg: Tenant): Tenant.AsObject;
  static serializeBinaryToWriter(message: Tenant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tenant;
  static deserializeBinaryFromReader(message: Tenant, reader: jspb.BinaryReader): Tenant;
}

export namespace Tenant {
  export type AsObject = {
    id: string,
    name: string,
    prefix: string,
    metadata?: api_domain_projections_metadata_pb.LifecycleMetadata.AsObject,
  }
}

export class TenantUser extends jspb.Message {
  getId(): string;
  setId(value: string): TenantUser;

  getName(): string;
  setName(value: string): TenantUser;

  getEmail(): string;
  setEmail(value: string): TenantUser;

  getTenantRolesList(): Array<string>;
  setTenantRolesList(value: Array<string>): TenantUser;
  clearTenantRolesList(): TenantUser;
  addTenantRoles(value: string, index?: number): TenantUser;

  getTenantId(): string;
  setTenantId(value: string): TenantUser;

  getMetadata(): api_domain_projections_metadata_pb.LifecycleMetadata | undefined;
  setMetadata(value?: api_domain_projections_metadata_pb.LifecycleMetadata): TenantUser;
  hasMetadata(): boolean;
  clearMetadata(): TenantUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantUser.AsObject;
  static toObject(includeInstance: boolean, msg: TenantUser): TenantUser.AsObject;
  static serializeBinaryToWriter(message: TenantUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantUser;
  static deserializeBinaryFromReader(message: TenantUser, reader: jspb.BinaryReader): TenantUser;
}

export namespace TenantUser {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    tenantRolesList: Array<string>,
    tenantId: string,
    metadata?: api_domain_projections_metadata_pb.LifecycleMetadata.AsObject,
  }
}

