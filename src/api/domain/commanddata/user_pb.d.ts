import * as jspb from 'google-protobuf'

import * as validate_validate_pb from '../../../validate/validate_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class CreateUserCommandData extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreateUserCommandData;

  getName(): string;
  setName(value: string): CreateUserCommandData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserCommandData.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserCommandData): CreateUserCommandData.AsObject;
  static serializeBinaryToWriter(message: CreateUserCommandData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserCommandData;
  static deserializeBinaryFromReader(message: CreateUserCommandData, reader: jspb.BinaryReader): CreateUserCommandData;
}

export namespace CreateUserCommandData {
  export type AsObject = {
    email: string,
    name: string,
  }
}

export class CreateUserRoleBindingCommandData extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreateUserRoleBindingCommandData;

  getRole(): string;
  setRole(value: string): CreateUserRoleBindingCommandData;

  getScope(): string;
  setScope(value: string): CreateUserRoleBindingCommandData;

  getResource(): google_protobuf_wrappers_pb.StringValue | undefined;
  setResource(value?: google_protobuf_wrappers_pb.StringValue): CreateUserRoleBindingCommandData;
  hasResource(): boolean;
  clearResource(): CreateUserRoleBindingCommandData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRoleBindingCommandData.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRoleBindingCommandData): CreateUserRoleBindingCommandData.AsObject;
  static serializeBinaryToWriter(message: CreateUserRoleBindingCommandData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRoleBindingCommandData;
  static deserializeBinaryFromReader(message: CreateUserRoleBindingCommandData, reader: jspb.BinaryReader): CreateUserRoleBindingCommandData;
}

export namespace CreateUserRoleBindingCommandData {
  export type AsObject = {
    userId: string,
    role: string,
    scope: string,
    resource?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UpdateUserCommandData extends jspb.Message {
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): UpdateUserCommandData;
  hasName(): boolean;
  clearName(): UpdateUserCommandData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserCommandData.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserCommandData): UpdateUserCommandData.AsObject;
  static serializeBinaryToWriter(message: UpdateUserCommandData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserCommandData;
  static deserializeBinaryFromReader(message: UpdateUserCommandData, reader: jspb.BinaryReader): UpdateUserCommandData;
}

export namespace UpdateUserCommandData {
  export type AsObject = {
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

