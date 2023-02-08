import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class HumanReadableEvent extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): HumanReadableEvent;
  hasTimestamp(): boolean;
  clearTimestamp(): HumanReadableEvent;

  getIssuer(): string;
  setIssuer(value: string): HumanReadableEvent;

  getIssuerId(): string;
  setIssuerId(value: string): HumanReadableEvent;

  getEventType(): string;
  setEventType(value: string): HumanReadableEvent;

  getDetails(): string;
  setDetails(value: string): HumanReadableEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanReadableEvent.AsObject;
  static toObject(includeInstance: boolean, msg: HumanReadableEvent): HumanReadableEvent.AsObject;
  static serializeBinaryToWriter(message: HumanReadableEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanReadableEvent;
  static deserializeBinaryFromReader(message: HumanReadableEvent, reader: jspb.BinaryReader): HumanReadableEvent;
}

export namespace HumanReadableEvent {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    issuer: string,
    issuerId: string,
    eventType: string,
    details: string,
  }
}

