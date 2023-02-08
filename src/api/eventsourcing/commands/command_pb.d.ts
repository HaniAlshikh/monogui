import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class Command extends jspb.Message {
  getId(): string;
  setId(value: string): Command;

  getType(): string;
  setType(value: string): Command;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): Command;
  hasData(): boolean;
  clearData(): Command;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    id: string,
    type: string,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class TestCommandData extends jspb.Message {
  getTest(): string;
  setTest(value: string): TestCommandData;

  getTestCount(): number;
  setTestCount(value: number): TestCommandData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestCommandData.AsObject;
  static toObject(includeInstance: boolean, msg: TestCommandData): TestCommandData.AsObject;
  static serializeBinaryToWriter(message: TestCommandData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestCommandData;
  static deserializeBinaryFromReader(message: TestCommandData, reader: jspb.BinaryReader): TestCommandData;
}

export namespace TestCommandData {
  export type AsObject = {
    test: string,
    testCount: number,
  }
}

