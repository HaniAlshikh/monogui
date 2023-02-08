import * as jspb from 'google-protobuf'



export class TestEventData extends jspb.Message {
  getHello(): string;
  setHello(value: string): TestEventData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestEventData.AsObject;
  static toObject(includeInstance: boolean, msg: TestEventData): TestEventData.AsObject;
  static serializeBinaryToWriter(message: TestEventData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestEventData;
  static deserializeBinaryFromReader(message: TestEventData, reader: jspb.BinaryReader): TestEventData;
}

export namespace TestEventData {
  export type AsObject = {
    hello: string,
  }
}

