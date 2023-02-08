import * as jspb from 'google-protobuf'

import * as api_domain_projections_metadata_pb from '../../../api/domain/projections/metadata_pb';


export class Cluster extends jspb.Message {
  getId(): string;
  setId(value: string): Cluster;

  getName(): string;
  setName(value: string): Cluster;

  getApiServerAddress(): string;
  setApiServerAddress(value: string): Cluster;

  getCaCertBundle(): Uint8Array | string;
  getCaCertBundle_asU8(): Uint8Array;
  getCaCertBundle_asB64(): string;
  setCaCertBundle(value: Uint8Array | string): Cluster;

  getMetadata(): api_domain_projections_metadata_pb.LifecycleMetadata | undefined;
  setMetadata(value?: api_domain_projections_metadata_pb.LifecycleMetadata): Cluster;
  hasMetadata(): boolean;
  clearMetadata(): Cluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cluster.AsObject;
  static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
  static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cluster;
  static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
  export type AsObject = {
    id: string,
    name: string,
    apiServerAddress: string,
    caCertBundle: Uint8Array | string,
    metadata?: api_domain_projections_metadata_pb.LifecycleMetadata.AsObject,
  }
}

export class ClusterAccess extends jspb.Message {
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): ClusterAccess;
  hasCluster(): boolean;
  clearCluster(): ClusterAccess;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): ClusterAccess;
  clearRolesList(): ClusterAccess;
  addRoles(value: string, index?: number): ClusterAccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterAccess.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterAccess): ClusterAccess.AsObject;
  static serializeBinaryToWriter(message: ClusterAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterAccess;
  static deserializeBinaryFromReader(message: ClusterAccess, reader: jspb.BinaryReader): ClusterAccess;
}

export namespace ClusterAccess {
  export type AsObject = {
    cluster?: Cluster.AsObject,
    rolesList: Array<string>,
  }
}

export class ClusterAccessV2 extends jspb.Message {
  getCluster(): Cluster | undefined;
  setCluster(value?: Cluster): ClusterAccessV2;
  hasCluster(): boolean;
  clearCluster(): ClusterAccessV2;

  getClusterrolesList(): Array<ClusterRole>;
  setClusterrolesList(value: Array<ClusterRole>): ClusterAccessV2;
  clearClusterrolesList(): ClusterAccessV2;
  addClusterroles(value?: ClusterRole, index?: number): ClusterRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterAccessV2.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterAccessV2): ClusterAccessV2.AsObject;
  static serializeBinaryToWriter(message: ClusterAccessV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterAccessV2;
  static deserializeBinaryFromReader(message: ClusterAccessV2, reader: jspb.BinaryReader): ClusterAccessV2;
}

export namespace ClusterAccessV2 {
  export type AsObject = {
    cluster?: Cluster.AsObject,
    clusterrolesList: Array<ClusterRole.AsObject>,
  }
}

export class ClusterRole extends jspb.Message {
  getScope(): ClusterRole.ClusterRoleScope;
  setScope(value: ClusterRole.ClusterRoleScope): ClusterRole;

  getRole(): string;
  setRole(value: string): ClusterRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterRole.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterRole): ClusterRole.AsObject;
  static serializeBinaryToWriter(message: ClusterRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterRole;
  static deserializeBinaryFromReader(message: ClusterRole, reader: jspb.BinaryReader): ClusterRole;
}

export namespace ClusterRole {
  export type AsObject = {
    scope: ClusterRole.ClusterRoleScope,
    role: string,
  }

  export enum ClusterRoleScope { 
    CLUSTER = 0,
    TENANT = 1,
  }
}

