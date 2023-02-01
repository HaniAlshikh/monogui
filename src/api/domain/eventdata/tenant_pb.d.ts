import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class TenantCreated extends jspb.Message {
  getName(): string;
  setName(value: string): TenantCreated;

  getPrefix(): string;
  setPrefix(value: string): TenantCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantCreated.AsObject;
  static toObject(includeInstance: boolean, msg: TenantCreated): TenantCreated.AsObject;
  static serializeBinaryToWriter(message: TenantCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantCreated;
  static deserializeBinaryFromReader(message: TenantCreated, reader: jspb.BinaryReader): TenantCreated;
}

export namespace TenantCreated {
  export type AsObject = {
    name: string,
    prefix: string,
  }
}

export class TenantUpdated extends jspb.Message {
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): TenantUpdated;
  hasName(): boolean;
  clearName(): TenantUpdated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TenantUpdated.AsObject;
  static toObject(includeInstance: boolean, msg: TenantUpdated): TenantUpdated.AsObject;
  static serializeBinaryToWriter(message: TenantUpdated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TenantUpdated;
  static deserializeBinaryFromReader(message: TenantUpdated, reader: jspb.BinaryReader): TenantUpdated;
}

export namespace TenantUpdated {
  export type AsObject = {
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

