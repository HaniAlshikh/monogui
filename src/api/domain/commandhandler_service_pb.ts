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
// @generated from file api/domain/commandhandler_service.proto (package domain, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message domain.PermissionModel
 */
export class PermissionModel extends Message<PermissionModel> {
  /**
   * @generated from field: repeated string roles = 1;
   */
  roles: string[] = [];

  /**
   * @generated from field: repeated string scopes = 2;
   */
  scopes: string[] = [];

  constructor(data?: PartialMessage<PermissionModel>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "domain.PermissionModel";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "roles", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "scopes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermissionModel {
    return new PermissionModel().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermissionModel {
    return new PermissionModel().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermissionModel {
    return new PermissionModel().fromJsonString(jsonString, options);
  }

  static equals(a: PermissionModel | PlainMessage<PermissionModel> | undefined, b: PermissionModel | PlainMessage<PermissionModel> | undefined): boolean {
    return proto3.util.equals(PermissionModel, a, b);
  }
}

