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
// @generated from file api/domain/common/messages.proto (package common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum common.UserSource
 */
export enum UserSource {
  /**
   * @generated from enum value: INTERNAL = 0;
   */
  INTERNAL = 0,

  /**
   * @generated from enum value: SCIM = 1;
   */
  SCIM = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(UserSource)
proto3.util.setEnumType(UserSource, "common.UserSource", [
  { no: 0, name: "INTERNAL" },
  { no: 1, name: "SCIM" },
]);

/**
 * ServiceInformation are the version and commit hash of a service
 *
 * @generated from message common.ServiceInformation
 */
export class ServiceInformation extends Message<ServiceInformation> {
  /**
   * version
   *
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * name
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * commit hash of the service
   *
   * @generated from field: string commit = 3;
   */
  commit = "";

  constructor(data?: PartialMessage<ServiceInformation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "common.ServiceInformation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "commit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceInformation {
    return new ServiceInformation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceInformation {
    return new ServiceInformation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceInformation {
    return new ServiceInformation().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceInformation | PlainMessage<ServiceInformation> | undefined, b: ServiceInformation | PlainMessage<ServiceInformation> | undefined): boolean {
    return proto3.util.equals(ServiceInformation, a, b);
  }
}

/**
 * Chain of certificates
 *
 * @generated from message common.CertificateChain
 */
export class CertificateChain extends Message<CertificateChain> {
  /**
   * CA Certificate
   *
   * @generated from field: bytes ca = 1;
   */
  ca = new Uint8Array(0);

  /**
   * Certificate
   *
   * @generated from field: bytes certificate = 2;
   */
  certificate = new Uint8Array(0);

  constructor(data?: PartialMessage<CertificateChain>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "common.CertificateChain";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ca", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "certificate", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CertificateChain {
    return new CertificateChain().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CertificateChain {
    return new CertificateChain().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CertificateChain {
    return new CertificateChain().fromJsonString(jsonString, options);
  }

  static equals(a: CertificateChain | PlainMessage<CertificateChain> | undefined, b: CertificateChain | PlainMessage<CertificateChain> | undefined): boolean {
    return proto3.util.equals(CertificateChain, a, b);
  }
}
