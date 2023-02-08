import * as jspb from 'google-protobuf'

import * as api_domain_projections_metadata_pb from '../../../api/domain/projections/metadata_pb';
import * as api_domain_common_messages_pb from '../../../api/domain/common/messages_pb';


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getName(): string;
  setName(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getRolesList(): Array<UserRoleBinding>;
  setRolesList(value: Array<UserRoleBinding>): User;
  clearRolesList(): User;
  addRoles(value?: UserRoleBinding, index?: number): UserRoleBinding;

  getMetadata(): api_domain_projections_metadata_pb.LifecycleMetadata | undefined;
  setMetadata(value?: api_domain_projections_metadata_pb.LifecycleMetadata): User;
  hasMetadata(): boolean;
  clearMetadata(): User;

  getSource(): api_domain_common_messages_pb.UserSource;
  setSource(value: api_domain_common_messages_pb.UserSource): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    rolesList: Array<UserRoleBinding.AsObject>,
    metadata?: api_domain_projections_metadata_pb.LifecycleMetadata.AsObject,
    source: api_domain_common_messages_pb.UserSource,
  }
}

export class UserRoleBinding extends jspb.Message {
  getId(): string;
  setId(value: string): UserRoleBinding;

  getUserId(): string;
  setUserId(value: string): UserRoleBinding;

  getRole(): string;
  setRole(value: string): UserRoleBinding;

  getScope(): string;
  setScope(value: string): UserRoleBinding;

  getResource(): string;
  setResource(value: string): UserRoleBinding;

  getMetadata(): api_domain_projections_metadata_pb.LifecycleMetadata | undefined;
  setMetadata(value?: api_domain_projections_metadata_pb.LifecycleMetadata): UserRoleBinding;
  hasMetadata(): boolean;
  clearMetadata(): UserRoleBinding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleBinding.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleBinding): UserRoleBinding.AsObject;
  static serializeBinaryToWriter(message: UserRoleBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleBinding;
  static deserializeBinaryFromReader(message: UserRoleBinding, reader: jspb.BinaryReader): UserRoleBinding;
}

export namespace UserRoleBinding {
  export type AsObject = {
    id: string,
    userId: string,
    role: string,
    scope: string,
    resource: string,
    metadata?: api_domain_projections_metadata_pb.LifecycleMetadata.AsObject,
  }
}

