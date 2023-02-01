import * as jspb from 'google-protobuf'

import * as api_domain_projections_metadata_pb from '../../../api/domain/projections/metadata_pb';


export class TenantClusterBinding extends jspb.Message {
  getId(): string;
  setId(value: string): TenantClusterBinding;

  getClusterId(): string;
  setClusterId(value: string): TenantClusterBinding;

  getTenantId(): string;
  setTenantId(value: string): TenantClusterBinding;

  getMetadata(): api_domain_projections_metadata_pb.LifecycleMetadata | undefined;
  setMetadata(value?: api_domain_projections_metadata_pb.LifecycleMetadata): TenantClusterBinding;
  hasMetadata(): boolean;
  clearMetadata(): TenantClusterBinding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantClusterBinding.AsObject;
  static toObject(includeInstance: boolean, msg: TenantClusterBinding): TenantClusterBinding.AsObject;
  static serializeBinaryToWriter(message: TenantClusterBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantClusterBinding;
  static deserializeBinaryFromReader(message: TenantClusterBinding, reader: jspb.BinaryReader): TenantClusterBinding;
}

export namespace TenantClusterBinding {
  export type AsObject = {
    id: string,
    clusterId: string,
    tenantId: string,
    metadata?: api_domain_projections_metadata_pb.LifecycleMetadata.AsObject,
  }
}

