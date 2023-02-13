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
// @generated from file api/domain/commanddata/tenant.proto (package commanddata, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, StringValue } from "@bufbuild/protobuf";

/**
 * Command data to create a new tenant
 *
 * @generated from message commanddata.CreateTenantCommandData
 */
export class CreateTenantCommandData extends Message<CreateTenantCommandData> {
  /**
   * Name of the tenant
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Prefix for namespaces and other resources related to the tenant
   *
   * @generated from field: string prefix = 2;
   */
  prefix = "";

  constructor(data?: PartialMessage<CreateTenantCommandData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "commanddata.CreateTenantCommandData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTenantCommandData {
    return new CreateTenantCommandData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTenantCommandData {
    return new CreateTenantCommandData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTenantCommandData {
    return new CreateTenantCommandData().fromJsonString(jsonString, options);
  }

  static equals(a: CreateTenantCommandData | PlainMessage<CreateTenantCommandData> | undefined, b: CreateTenantCommandData | PlainMessage<CreateTenantCommandData> | undefined): boolean {
    return proto3.util.equals(CreateTenantCommandData, a, b);
  }
}

/**
 * Command data to update a tenant
 *
 * @generated from message commanddata.UpdateTenantCommandData
 */
export class UpdateTenantCommandData extends Message<UpdateTenantCommandData> {
  /**
   * New name for the tenant
   *
   * @generated from field: google.protobuf.StringValue name = 1;
   */
  name?: string;

  constructor(data?: PartialMessage<UpdateTenantCommandData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "commanddata.UpdateTenantCommandData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "message", T: StringValue },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateTenantCommandData {
    return new UpdateTenantCommandData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateTenantCommandData {
    return new UpdateTenantCommandData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateTenantCommandData {
    return new UpdateTenantCommandData().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateTenantCommandData | PlainMessage<UpdateTenantCommandData> | undefined, b: UpdateTenantCommandData | PlainMessage<UpdateTenantCommandData> | undefined): boolean {
    return proto3.util.equals(UpdateTenantCommandData, a, b);
  }
}

