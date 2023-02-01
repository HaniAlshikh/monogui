import * as jspb from 'google-protobuf'

import * as validate_validate_pb from '../../../validate/validate_pb';


export class CreateTenantClusterBindingCommandData extends jspb.Message {
  getTenantId(): string;
  setTenantId(value: string): CreateTenantClusterBindingCommandData;

  getClusterId(): string;
  setClusterId(value: string): CreateTenantClusterBindingCommandData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTenantClusterBindingCommandData.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTenantClusterBindingCommandData): CreateTenantClusterBindingCommandData.AsObject;
  static serializeBinaryToWriter(message: CreateTenantClusterBindingCommandData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTenantClusterBindingCommandData;
  static deserializeBinaryFromReader(message: CreateTenantClusterBindingCommandData, reader: jspb.BinaryReader): CreateTenantClusterBindingCommandData;
}

export namespace CreateTenantClusterBindingCommandData {
  export type AsObject = {
    tenantId: string,
    clusterId: string,
  }
}

