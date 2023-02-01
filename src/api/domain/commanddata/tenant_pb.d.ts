import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class CreateTenantCommandData extends jspb.Message {
  getName(): string;
  setName(value: string): CreateTenantCommandData;

  getPrefix(): string;
  setPrefix(value: string): CreateTenantCommandData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTenantCommandData.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTenantCommandData): CreateTenantCommandData.AsObject;
  static serializeBinaryToWriter(message: CreateTenantCommandData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTenantCommandData;
  static deserializeBinaryFromReader(message: CreateTenantCommandData, reader: jspb.BinaryReader): CreateTenantCommandData;
}

export namespace CreateTenantCommandData {
  export type AsObject = {
    name: string,
    prefix: string,
  }
}

export class UpdateTenantCommandData extends jspb.Message {
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): UpdateTenantCommandData;
  hasName(): boolean;
  clearName(): UpdateTenantCommandData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTenantCommandData.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTenantCommandData): UpdateTenantCommandData.AsObject;
  static serializeBinaryToWriter(message: UpdateTenantCommandData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTenantCommandData;
  static deserializeBinaryFromReader(message: UpdateTenantCommandData, reader: jspb.BinaryReader): UpdateTenantCommandData;
}

export namespace UpdateTenantCommandData {
  export type AsObject = {
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

