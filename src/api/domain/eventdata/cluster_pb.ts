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
// @generated from file api/domain/eventdata/cluster.proto (package eventdata, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, StringValue } from "@bufbuild/protobuf";

/**
 * @generated from message eventdata.ClusterCreated
 */
export class ClusterCreated extends Message<ClusterCreated> {
  /**
   * Display name of the cluster
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Unique name of the cluster, to be utilized for generating unique labels
   * and symbols, e.g. with metrics.
   *
   * @generated from field: string label = 2;
   */
  label = "";

  /**
   * Address of the KubeApiServer
   *
   * @generated from field: string api_server_address = 3;
   */
  apiServerAddress = "";

  /**
   * CA certificate of the K8s cluster
   *
   * @generated from field: bytes ca_certificate_bundle = 4;
   */
  caCertificateBundle = new Uint8Array(0);

  constructor(data?: PartialMessage<ClusterCreated>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventdata.ClusterCreated";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "api_server_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ca_certificate_bundle", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterCreated {
    return new ClusterCreated().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterCreated {
    return new ClusterCreated().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterCreated {
    return new ClusterCreated().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterCreated | PlainMessage<ClusterCreated> | undefined, b: ClusterCreated | PlainMessage<ClusterCreated> | undefined): boolean {
    return proto3.util.equals(ClusterCreated, a, b);
  }
}

/**
 * @generated from message eventdata.ClusterCreatedV2
 */
export class ClusterCreatedV2 extends Message<ClusterCreatedV2> {
  /**
   * Unique name of the cluster, to be utilized for generating unique labels
   * and symbols, e.g. with metrics.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Display name of the cluster
   *
   * @generated from field: string display_name = 2;
   */
  displayName = "";

  /**
   * Address of the KubeApiServer
   *
   * @generated from field: string api_server_address = 3;
   */
  apiServerAddress = "";

  /**
   * CA certificate of the K8s cluster
   *
   * @generated from field: bytes ca_certificate_bundle = 4;
   */
  caCertificateBundle = new Uint8Array(0);

  constructor(data?: PartialMessage<ClusterCreatedV2>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventdata.ClusterCreatedV2";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "api_server_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ca_certificate_bundle", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterCreatedV2 {
    return new ClusterCreatedV2().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterCreatedV2 {
    return new ClusterCreatedV2().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterCreatedV2 {
    return new ClusterCreatedV2().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterCreatedV2 | PlainMessage<ClusterCreatedV2> | undefined, b: ClusterCreatedV2 | PlainMessage<ClusterCreatedV2> | undefined): boolean {
    return proto3.util.equals(ClusterCreatedV2, a, b);
  }
}

/**
 * @generated from message eventdata.ClusterCreatedV3
 */
export class ClusterCreatedV3 extends Message<ClusterCreatedV3> {
  /**
   * Unique name of the cluster, to be utilized for generating unique labels
   * and symbols, e.g. with metrics.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Address of the KubeApiServer
   *
   * @generated from field: string api_server_address = 2;
   */
  apiServerAddress = "";

  /**
   * CA certificate of the K8s cluster
   *
   * @generated from field: bytes ca_certificate_bundle = 3;
   */
  caCertificateBundle = new Uint8Array(0);

  constructor(data?: PartialMessage<ClusterCreatedV3>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventdata.ClusterCreatedV3";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "api_server_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ca_certificate_bundle", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterCreatedV3 {
    return new ClusterCreatedV3().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterCreatedV3 {
    return new ClusterCreatedV3().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterCreatedV3 {
    return new ClusterCreatedV3().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterCreatedV3 | PlainMessage<ClusterCreatedV3> | undefined, b: ClusterCreatedV3 | PlainMessage<ClusterCreatedV3> | undefined): boolean {
    return proto3.util.equals(ClusterCreatedV3, a, b);
  }
}

/**
 * @generated from message eventdata.ClusterUpdated
 */
export class ClusterUpdated extends Message<ClusterUpdated> {
  /**
   * Display name of the cluster
   *
   * @generated from field: string display_name = 1;
   */
  displayName = "";

  /**
   * Address of the KubeApiServer
   *
   * @generated from field: string api_server_address = 2;
   */
  apiServerAddress = "";

  /**
   * CA certificate of the K8s cluster
   *
   * @generated from field: bytes ca_certificate_bundle = 3;
   */
  caCertificateBundle = new Uint8Array(0);

  constructor(data?: PartialMessage<ClusterUpdated>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventdata.ClusterUpdated";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "api_server_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ca_certificate_bundle", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterUpdated {
    return new ClusterUpdated().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterUpdated {
    return new ClusterUpdated().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterUpdated {
    return new ClusterUpdated().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterUpdated | PlainMessage<ClusterUpdated> | undefined, b: ClusterUpdated | PlainMessage<ClusterUpdated> | undefined): boolean {
    return proto3.util.equals(ClusterUpdated, a, b);
  }
}

/**
 * @generated from message eventdata.ClusterUpdatedV2
 */
export class ClusterUpdatedV2 extends Message<ClusterUpdatedV2> {
  /**
   * Unique name of the cluster, to be utilized for generating unique labels
   * and symbols, e.g. with metrics.
   *
   * @generated from field: google.protobuf.StringValue name = 1;
   */
  name?: string;

  /**
   * Address of the KubeApiServer
   *
   * @generated from field: google.protobuf.StringValue api_server_address = 2;
   */
  apiServerAddress?: string;

  /**
   * CA certificate of the K8s cluster
   *
   * @generated from field: bytes ca_certificate_bundle = 3;
   */
  caCertificateBundle = new Uint8Array(0);

  constructor(data?: PartialMessage<ClusterUpdatedV2>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventdata.ClusterUpdatedV2";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "message", T: StringValue },
    { no: 2, name: "api_server_address", kind: "message", T: StringValue },
    { no: 3, name: "ca_certificate_bundle", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterUpdatedV2 {
    return new ClusterUpdatedV2().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterUpdatedV2 {
    return new ClusterUpdatedV2().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterUpdatedV2 {
    return new ClusterUpdatedV2().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterUpdatedV2 | PlainMessage<ClusterUpdatedV2> | undefined, b: ClusterUpdatedV2 | PlainMessage<ClusterUpdatedV2> | undefined): boolean {
    return proto3.util.equals(ClusterUpdatedV2, a, b);
  }
}

