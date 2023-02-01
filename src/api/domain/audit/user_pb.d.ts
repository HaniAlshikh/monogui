import * as jspb from 'google-protobuf'



export class UserOverview extends jspb.Message {
  getName(): string;
  setName(value: string): UserOverview;

  getEmail(): string;
  setEmail(value: string): UserOverview;

  getRoles(): string;
  setRoles(value: string): UserOverview;

  getTenants(): string;
  setTenants(value: string): UserOverview;

  getClusters(): string;
  setClusters(value: string): UserOverview;

  getDetails(): string;
  setDetails(value: string): UserOverview;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOverview.AsObject;
  static toObject(includeInstance: boolean, msg: UserOverview): UserOverview.AsObject;
  static serializeBinaryToWriter(message: UserOverview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOverview;
  static deserializeBinaryFromReader(message: UserOverview, reader: jspb.BinaryReader): UserOverview;
}

export namespace UserOverview {
  export type AsObject = {
    name: string,
    email: string,
    roles: string,
    tenants: string,
    clusters: string,
    details: string,
  }
}

