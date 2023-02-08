import * as jspb from 'google-protobuf'



export class TenantClusterBindingCreated extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): TenantClusterBindingCreated;

  getClusterId(): string;
  setClusterId(value: string): TenantClusterBindingCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantClusterBindingCreated.AsObject;
  static toObject(includeInstance: boolean, msg: TenantClusterBindingCreated): TenantClusterBindingCreated.AsObject;
  static serializeBinaryToWriter(message: TenantClusterBindingCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantClusterBindingCreated;
  static deserializeBinaryFromReader(message: TenantClusterBindingCreated, reader: jspb.BinaryReader): TenantClusterBindingCreated;
}

export namespace TenantClusterBindingCreated {
  export type AsObject = {
    tenantId: string,
    clusterId: string,
  }
}

