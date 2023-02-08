import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class CreateCluster extends jspb.Message {
  getName(): string;
  setName(value: string): CreateCluster;

  getApiServerAddress(): string;
  setApiServerAddress(value: string): CreateCluster;

  getCaCertBundle(): Uint8Array | string;
  getCaCertBundle_asU8(): Uint8Array;
  getCaCertBundle_asB64(): string;
  setCaCertBundle(value: Uint8Array | string): CreateCluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCluster.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCluster): CreateCluster.AsObject;
  static serializeBinaryToWriter(message: CreateCluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCluster;
  static deserializeBinaryFromReader(message: CreateCluster, reader: jspb.BinaryReader): CreateCluster;
}

export namespace CreateCluster {
  export type AsObject = {
    name: string,
    apiServerAddress: string,
    caCertBundle: Uint8Array | string,
  }
}

export class UpdateCluster extends jspb.Message {
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): UpdateCluster;
  hasName(): boolean;
  clearName(): UpdateCluster;

  getApiServerAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
  setApiServerAddress(value?: google_protobuf_wrappers_pb.StringValue): UpdateCluster;
  hasApiServerAddress(): boolean;
  clearApiServerAddress(): UpdateCluster;

  getCaCertBundle(): Uint8Array | string;
  getCaCertBundle_asU8(): Uint8Array;
  getCaCertBundle_asB64(): string;
  setCaCertBundle(value: Uint8Array | string): UpdateCluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCluster.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCluster): UpdateCluster.AsObject;
  static serializeBinaryToWriter(message: UpdateCluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCluster;
  static deserializeBinaryFromReader(message: UpdateCluster, reader: jspb.BinaryReader): UpdateCluster;
}

export namespace UpdateCluster {
  export type AsObject = {
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    apiServerAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
    caCertBundle: Uint8Array | string,
  }
}

