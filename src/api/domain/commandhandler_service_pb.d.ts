import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as validate_validate_pb from '../../validate/validate_pb';


export class PermissionModel extends jspb.Message {
  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): PermissionModel;
  clearRolesList(): PermissionModel;
  addRoles(value: string, index?: number): PermissionModel;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): PermissionModel;
  clearScopesList(): PermissionModel;
  addScopes(value: string, index?: number): PermissionModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionModel.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionModel): PermissionModel.AsObject;
  static serializeBinaryToWriter(message: PermissionModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionModel;
  static deserializeBinaryFromReader(message: PermissionModel, reader: jspb.BinaryReader): PermissionModel;
}

export namespace PermissionModel {
  export type AsObject = {
    rolesList: Array<string>,
    scopesList: Array<string>,
  }
}

