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
// @generated from file api/domain/projections/metadata.proto (package projections, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message projections.LifecycleMetadata
 */
export class LifecycleMetadata extends Message<LifecycleMetadata> {
  /**
   * When it has been created
   *
   * @generated from field: google.protobuf.Timestamp created = 1;
   */
  created?: Timestamp;

  /**
   * By whom it has been created
   *
   * @generated from field: string created_by_id = 2;
   */
  createdById = "";

  /**
   * When it has been last modified
   *
   * @generated from field: google.protobuf.Timestamp last_modified = 3;
   */
  lastModified?: Timestamp;

  /**
   * By whom it has been last modified
   *
   * @generated from field: string last_modified_by_id = 4;
   */
  lastModifiedById = "";

  /**
   * By whom it has been deleted
   *
   * @generated from field: string deleted_by_id = 5;
   */
  deletedById = "";

  /**
   * When it has been deleted
   *
   * @generated from field: google.protobuf.Timestamp deleted = 6;
   */
  deleted?: Timestamp;

  constructor(data?: PartialMessage<LifecycleMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "projections.LifecycleMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "created", kind: "message", T: Timestamp },
    { no: 2, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_modified", kind: "message", T: Timestamp },
    { no: 4, name: "last_modified_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "deleted_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "deleted", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LifecycleMetadata {
    return new LifecycleMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LifecycleMetadata {
    return new LifecycleMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LifecycleMetadata {
    return new LifecycleMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: LifecycleMetadata | PlainMessage<LifecycleMetadata> | undefined, b: LifecycleMetadata | PlainMessage<LifecycleMetadata> | undefined): boolean {
    return proto3.util.equals(LifecycleMetadata, a, b);
  }
}

