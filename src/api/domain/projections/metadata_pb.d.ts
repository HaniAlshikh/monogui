import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class LifecycleMetadata extends jspb.Message {
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): LifecycleMetadata;
  hasCreated(): boolean;
  clearCreated(): LifecycleMetadata;

  getCreatedById(): string;
  setCreatedById(value: string): LifecycleMetadata;

  getLastModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModified(value?: google_protobuf_timestamp_pb.Timestamp): LifecycleMetadata;
  hasLastModified(): boolean;
  clearLastModified(): LifecycleMetadata;

  getLastModifiedById(): string;
  setLastModifiedById(value: string): LifecycleMetadata;

  getDeletedById(): string;
  setDeletedById(value: string): LifecycleMetadata;

  getDeleted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleted(value?: google_protobuf_timestamp_pb.Timestamp): LifecycleMetadata;
  hasDeleted(): boolean;
  clearDeleted(): LifecycleMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LifecycleMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: LifecycleMetadata): LifecycleMetadata.AsObject;
  static serializeBinaryToWriter(message: LifecycleMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LifecycleMetadata;
  static deserializeBinaryFromReader(message: LifecycleMetadata, reader: jspb.BinaryReader): LifecycleMetadata;
}

export namespace LifecycleMetadata {
  export type AsObject = {
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdById: string,
    lastModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModifiedById: string,
    deletedById: string,
    deleted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

