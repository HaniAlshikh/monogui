import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as validate_validate_pb from '../../validate/validate_pb';


export class Event extends jspb.Message {
  getType(): string;
  setType(value: string): Event;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Event;
  hasTimestamp(): boolean;
  clearTimestamp(): Event;

  getAggregateId(): string;
  setAggregateId(value: string): Event;

  getAggregateType(): string;
  setAggregateType(value: string): Event;

  getAggregateVersion(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setAggregateVersion(value?: google_protobuf_wrappers_pb.UInt64Value): Event;
  hasAggregateVersion(): boolean;
  clearAggregateVersion(): Event;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Event;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    type: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    aggregateId: string,
    aggregateType: string,
    aggregateVersion?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    data: Uint8Array | string,
    metadataMap: Array<[string, string]>,
  }
}

export class EventFilter extends jspb.Message {
  getAggregateId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAggregateId(value?: google_protobuf_wrappers_pb.StringValue): EventFilter;
  hasAggregateId(): boolean;
  clearAggregateId(): EventFilter;

  getAggregateType(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAggregateType(value?: google_protobuf_wrappers_pb.StringValue): EventFilter;
  hasAggregateType(): boolean;
  clearAggregateType(): EventFilter;

  getMinVersion(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setMinVersion(value?: google_protobuf_wrappers_pb.UInt64Value): EventFilter;
  hasMinVersion(): boolean;
  clearMinVersion(): EventFilter;

  getMaxVersion(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setMaxVersion(value?: google_protobuf_wrappers_pb.UInt64Value): EventFilter;
  hasMaxVersion(): boolean;
  clearMaxVersion(): EventFilter;

  getMinTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMinTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): EventFilter;
  hasMinTimestamp(): boolean;
  clearMinTimestamp(): EventFilter;

  getMaxTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaxTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): EventFilter;
  hasMaxTimestamp(): boolean;
  clearMaxTimestamp(): EventFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EventFilter): EventFilter.AsObject;
  static serializeBinaryToWriter(message: EventFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventFilter;
  static deserializeBinaryFromReader(message: EventFilter, reader: jspb.BinaryReader): EventFilter;
}

export namespace EventFilter {
  export type AsObject = {
    aggregateId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    aggregateType?: google_protobuf_wrappers_pb.StringValue.AsObject,
    minVersion?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    maxVersion?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    minTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maxTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class EventFilters extends jspb.Message {
  getFiltersList(): Array<EventFilter>;
  setFiltersList(value: Array<EventFilter>): EventFilters;
  clearFiltersList(): EventFilters;
  addFilters(value?: EventFilter, index?: number): EventFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventFilters.AsObject;
  static toObject(includeInstance: boolean, msg: EventFilters): EventFilters.AsObject;
  static serializeBinaryToWriter(message: EventFilters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventFilters;
  static deserializeBinaryFromReader(message: EventFilters, reader: jspb.BinaryReader): EventFilters;
}

export namespace EventFilters {
  export type AsObject = {
    filtersList: Array<EventFilter.AsObject>,
  }
}

