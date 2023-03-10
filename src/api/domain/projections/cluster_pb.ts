// Copyright 2022 Monoskope Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file api/domain/projections/cluster.proto (package projections, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { LifecycleMetadata } from "./metadata_pb.js";

/**
 * Cluster is the information the Control Plane has about a cluster
 *
 * @generated from message projections.Cluster
 */
export class Cluster extends Message<Cluster> {
  /**
   * Unique identifier of the cluster (UUID 128-bit number)
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * Unique name of the cluster, to be utilized for generating unique labels
   * and symbols, e.g. with metrics.
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * Address of the clusters KubeAPIServer
   *
   * @generated from field: string api_server_address = 3;
   */
  apiServerAddress = "";

  /**
   * CA certificates of the cluster
   *
   * @generated from field: bytes ca_cert_bundle = 4;
   */
  caCertBundle = new Uint8Array(0);

  /**
   * Metadata about the projection
   *
   * @generated from field: projections.LifecycleMetadata metadata = 5;
   */
  metadata?: LifecycleMetadata;

  constructor(data?: PartialMessage<Cluster>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "projections.Cluster";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "api_server_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ca_cert_bundle", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "metadata", kind: "message", T: LifecycleMetadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Cluster {
    return new Cluster().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Cluster {
    return new Cluster().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Cluster {
    return new Cluster().fromJsonString(jsonString, options);
  }

  static equals(a: Cluster | PlainMessage<Cluster> | undefined, b: Cluster | PlainMessage<Cluster> | undefined): boolean {
    return proto3.util.equals(Cluster, a, b);
  }
}

/**
 * ClusterAccess represents an access to a specific cluster with a list of roles
 * within that cluster for a user
 *
 * @generated from message projections.ClusterAccess
 */
export class ClusterAccess extends Message<ClusterAccess> {
  /**
   * @generated from field: projections.Cluster cluster = 1;
   */
  cluster?: Cluster;

  /**
   * @generated from field: repeated string roles = 2;
   */
  roles: string[] = [];

  constructor(data?: PartialMessage<ClusterAccess>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "projections.ClusterAccess";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: Cluster },
    { no: 2, name: "roles", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterAccess {
    return new ClusterAccess().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterAccess {
    return new ClusterAccess().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterAccess {
    return new ClusterAccess().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterAccess | PlainMessage<ClusterAccess> | undefined, b: ClusterAccess | PlainMessage<ClusterAccess> | undefined): boolean {
    return proto3.util.equals(ClusterAccess, a, b);
  }
}

/**
 * ClusterAccessV2 represents an access to a specific cluster with a list of
 * roles within that cluster for a user
 *
 * @generated from message projections.ClusterAccessV2
 */
export class ClusterAccessV2 extends Message<ClusterAccessV2> {
  /**
   * @generated from field: projections.Cluster cluster = 1;
   */
  cluster?: Cluster;

  /**
   * @generated from field: repeated projections.ClusterRole clusterRoles = 2;
   */
  clusterRoles: ClusterRole[] = [];

  constructor(data?: PartialMessage<ClusterAccessV2>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "projections.ClusterAccessV2";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cluster", kind: "message", T: Cluster },
    { no: 2, name: "clusterRoles", kind: "message", T: ClusterRole, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterAccessV2 {
    return new ClusterAccessV2().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterAccessV2 {
    return new ClusterAccessV2().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterAccessV2 {
    return new ClusterAccessV2().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterAccessV2 | PlainMessage<ClusterAccessV2> | undefined, b: ClusterAccessV2 | PlainMessage<ClusterAccessV2> | undefined): boolean {
    return proto3.util.equals(ClusterAccessV2, a, b);
  }
}

/**
 * ClusterRole is the role a user has in a cluster
 *
 * @generated from message projections.ClusterRole
 */
export class ClusterRole extends Message<ClusterRole> {
  /**
   * @generated from field: projections.ClusterRole.ClusterRoleScope scope = 1;
   */
  scope = ClusterRole_ClusterRoleScope.CLUSTER;

  /**
   * @generated from field: string role = 2;
   */
  role = "";

  constructor(data?: PartialMessage<ClusterRole>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "projections.ClusterRole";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "scope", kind: "enum", T: proto3.getEnumType(ClusterRole_ClusterRoleScope) },
    { no: 2, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterRole {
    return new ClusterRole().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterRole {
    return new ClusterRole().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterRole {
    return new ClusterRole().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterRole | PlainMessage<ClusterRole> | undefined, b: ClusterRole | PlainMessage<ClusterRole> | undefined): boolean {
    return proto3.util.equals(ClusterRole, a, b);
  }
}

/**
 * @generated from enum projections.ClusterRole.ClusterRoleScope
 */
export enum ClusterRole_ClusterRoleScope {
  /**
   * @generated from enum value: CLUSTER = 0;
   */
  CLUSTER = 0,

  /**
   * @generated from enum value: TENANT = 1;
   */
  TENANT = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(ClusterRole_ClusterRoleScope)
proto3.util.setEnumType(ClusterRole_ClusterRoleScope, "projections.ClusterRole.ClusterRoleScope", [
  { no: 0, name: "CLUSTER" },
  { no: 1, name: "TENANT" },
]);

