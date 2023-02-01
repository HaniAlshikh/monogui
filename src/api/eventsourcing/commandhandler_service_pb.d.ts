import * as jspb from 'google-protobuf'

import * as api_eventsourcing_commands_command_pb from '../../api/eventsourcing/commands/command_pb';
import * as validate_validate_pb from '../../validate/validate_pb';


export class CommandReply extends jspb.Message {
  getAggregateId(): string;
  setAggregateId(value: string): CommandReply;

  getVersion(): number;
  setVersion(value: number): CommandReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandReply.AsObject;
  static toObject(includeInstance: boolean, msg: CommandReply): CommandReply.AsObject;
  static serializeBinaryToWriter(message: CommandReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandReply;
  static deserializeBinaryFromReader(message: CommandReply, reader: jspb.BinaryReader): CommandReply;
}

export namespace CommandReply {
  export type AsObject = {
    aggregateId: string,
    version: number,
  }
}

