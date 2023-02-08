import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class ClusterCreated extends jspb.Message {
  getName(): string;
  setName(value: string): ClusterCreated;

  getLabel(): string;
  setLabel(value: string): ClusterCreated;

  getApiServerAddress(): string;
  setApiServerAddress(value: string): ClusterCreated;

  getCaCertificateBundle(): Uint8Array | string;
  getCaCertificateBundle_asU8(): Uint8Array;
  getCaCertificateBundle_asB64(): string;
  setCaCertificateBundle(value: Uint8Array | string): ClusterCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterCreated.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterCreated): ClusterCreated.AsObject;
  static serializeBinaryToWriter(message: ClusterCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterCreated;
  static deserializeBinaryFromReader(message: ClusterCreated, reader: jspb.BinaryReader): ClusterCreated;
}

export namespace ClusterCreated {
  export type AsObject = {
    name: string,
    label: string,
    apiServerAddress: string,
    caCertificateBundle: Uint8Array | string,
  }
}

export class ClusterCreatedV2 extends jspb.Message {
  getName(): string;
  setName(value: string): ClusterCreatedV2;

  getDisplayName(): string;
  setDisplayName(value: string): ClusterCreatedV2;

  getApiServerAddress(): string;
  setApiServerAddress(value: string): ClusterCreatedV2;

  getCaCertificateBundle(): Uint8Array | string;
  getCaCertificateBundle_asU8(): Uint8Array;
  getCaCertificateBundle_asB64(): string;
  setCaCertificateBundle(value: Uint8Array | string): ClusterCreatedV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterCreatedV2.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterCreatedV2): ClusterCreatedV2.AsObject;
  static serializeBinaryToWriter(message: ClusterCreatedV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterCreatedV2;
  static deserializeBinaryFromReader(message: ClusterCreatedV2, reader: jspb.BinaryReader): ClusterCreatedV2;
}

export namespace ClusterCreatedV2 {
  export type AsObject = {
    name: string,
    displayName: string,
    apiServerAddress: string,
    caCertificateBundle: Uint8Array | string,
  }
}

export class ClusterCreatedV3 extends jspb.Message {
  getName(): string;
  setName(value: string): ClusterCreatedV3;

  getApiServerAddress(): string;
  setApiServerAddress(value: string): ClusterCreatedV3;

  getCaCertificateBundle(): Uint8Array | string;
  getCaCertificateBundle_asU8(): Uint8Array;
  getCaCertificateBundle_asB64(): string;
  setCaCertificateBundle(value: Uint8Array | string): ClusterCreatedV3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterCreatedV3.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterCreatedV3): ClusterCreatedV3.AsObject;
  static serializeBinaryToWriter(message: ClusterCreatedV3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterCreatedV3;
  static deserializeBinaryFromReader(message: ClusterCreatedV3, reader: jspb.BinaryReader): ClusterCreatedV3;
}

export namespace ClusterCreatedV3 {
  export type AsObject = {
    name: string,
    apiServerAddress: string,
    caCertificateBundle: Uint8Array | string,
  }
}

export class ClusterUpdated extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): ClusterUpdated;

  getApiServerAddress(): string;
  setApiServerAddress(value: string): ClusterUpdated;

  getCaCertificateBundle(): Uint8Array | string;
  getCaCertificateBundle_asU8(): Uint8Array;
  getCaCertificateBundle_asB64(): string;
  setCaCertificateBundle(value: Uint8Array | string): ClusterUpdated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterUpdated.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterUpdated): ClusterUpdated.AsObject;
  static serializeBinaryToWriter(message: ClusterUpdated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterUpdated;
  static deserializeBinaryFromReader(message: ClusterUpdated, reader: jspb.BinaryReader): ClusterUpdated;
}

export namespace ClusterUpdated {
  export type AsObject = {
    displayName: string,
    apiServerAddress: string,
    caCertificateBundle: Uint8Array | string,
  }
}

export class ClusterUpdatedV2 extends jspb.Message {
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): ClusterUpdatedV2;
  hasName(): boolean;
  clearName(): ClusterUpdatedV2;

  getApiServerAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
  setApiServerAddress(value?: google_protobuf_wrappers_pb.StringValue): ClusterUpdatedV2;
  hasApiServerAddress(): boolean;
  clearApiServerAddress(): ClusterUpdatedV2;

  getCaCertificateBundle(): Uint8Array | string;
  getCaCertificateBundle_asU8(): Uint8Array;
  getCaCertificateBundle_asB64(): string;
  setCaCertificateBundle(value: Uint8Array | string): ClusterUpdatedV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterUpdatedV2.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterUpdatedV2): ClusterUpdatedV2.AsObject;
  static serializeBinaryToWriter(message: ClusterUpdatedV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterUpdatedV2;
  static deserializeBinaryFromReader(message: ClusterUpdatedV2, reader: jspb.BinaryReader): ClusterUpdatedV2;
}

export namespace ClusterUpdatedV2 {
  export type AsObject = {
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    apiServerAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
    caCertificateBundle: Uint8Array | string,
  }
}

