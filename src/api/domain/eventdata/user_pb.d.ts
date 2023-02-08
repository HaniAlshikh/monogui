import * as jspb from 'google-protobuf'

import * as api_domain_common_messages_pb from '../../../api/domain/common/messages_pb';


export class UserCreated extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): UserCreated;

  getName(): string;
  setName(value: string): UserCreated;

  getSource(): api_domain_common_messages_pb.UserSource;
  setSource(value: api_domain_common_messages_pb.UserSource): UserCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCreated.AsObject;
  static toObject(includeInstance: boolean, msg: UserCreated): UserCreated.AsObject;
  static serializeBinaryToWriter(message: UserCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCreated;
  static deserializeBinaryFromReader(message: UserCreated, reader: jspb.BinaryReader): UserCreated;
}

export namespace UserCreated {
  export type AsObject = {
    email: string,
    name: string,
    source: api_domain_common_messages_pb.UserSource,
  }
}

export class UserRoleAdded extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): UserRoleAdded;

  getRole(): string;
  setRole(value: string): UserRoleAdded;

  getScope(): string;
  setScope(value: string): UserRoleAdded;

  getResource(): string;
  setResource(value: string): UserRoleAdded;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleAdded.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleAdded): UserRoleAdded.AsObject;
  static serializeBinaryToWriter(message: UserRoleAdded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleAdded;
  static deserializeBinaryFromReader(message: UserRoleAdded, reader: jspb.BinaryReader): UserRoleAdded;
}

export namespace UserRoleAdded {
  export type AsObject = {
    userId: string,
    role: string,
    scope: string,
    resource: string,
  }
}

export class UserUpdated extends jspb.Message {
  getName(): string;
  setName(value: string): UserUpdated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdated.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdated): UserUpdated.AsObject;
  static serializeBinaryToWriter(message: UserUpdated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdated;
  static deserializeBinaryFromReader(message: UserUpdated, reader: jspb.BinaryReader): UserUpdated;
}

export namespace UserUpdated {
  export type AsObject = {
    name: string,
  }
}

