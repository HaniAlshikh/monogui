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
// @generated from file api/gateway/messages.proto (package gateway, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * AuthorizationScope is an enum defining the available API scopes.
 *
 * @generated from enum gateway.AuthorizationScope
 */
export enum AuthorizationScope {
  /**
   * Dummy to prevent accidents
   *
   * @generated from enum value: NONE = 0;
   */
  NONE = 0,

  /**
   * Read-write for the complete API
   *
   * @generated from enum value: API = 1;
   */
  API = 1,

  /**
   * Read-write for endpoints under "/scim"
   *
   * @generated from enum value: WRITE_SCIM = 2;
   */
  WRITE_SCIM = 2,

  /**
   * Read-write for K8sOperator endpoints
   *
   * @generated from enum value: WRITE_K8SOPERATOR = 3;
   */
  WRITE_K8SOPERATOR = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(AuthorizationScope)
proto3.util.setEnumType(AuthorizationScope, "gateway.AuthorizationScope", [
  { no: 0, name: "NONE" },
  { no: 1, name: "API" },
  { no: 2, name: "WRITE_SCIM" },
  { no: 3, name: "WRITE_K8SOPERATOR" },
]);

/**
 * @generated from message gateway.UpstreamAuthenticationRequest
 */
export class UpstreamAuthenticationRequest extends Message<UpstreamAuthenticationRequest> {
  /**
   * callback_url is the URL where the authorization code
   * will be redirected to by the upstream IDP
   *
   * @generated from field: string callback_url = 1;
   */
  callbackUrl = "";

  constructor(data?: PartialMessage<UpstreamAuthenticationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.UpstreamAuthenticationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "callback_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpstreamAuthenticationRequest {
    return new UpstreamAuthenticationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpstreamAuthenticationRequest {
    return new UpstreamAuthenticationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpstreamAuthenticationRequest {
    return new UpstreamAuthenticationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpstreamAuthenticationRequest | PlainMessage<UpstreamAuthenticationRequest> | undefined, b: UpstreamAuthenticationRequest | PlainMessage<UpstreamAuthenticationRequest> | undefined): boolean {
    return proto3.util.equals(UpstreamAuthenticationRequest, a, b);
  }
}

/**
 * @generated from message gateway.UpstreamAuthenticationResponse
 */
export class UpstreamAuthenticationResponse extends Message<UpstreamAuthenticationResponse> {
  /**
   * upstream_idp_redirect is the URL of the IDP to authenticate against
   *
   * @generated from field: string upstream_idp_redirect = 1;
   */
  upstreamIdpRedirect = "";

  /**
   * state is the encoded, server-side nonced state containing the callback.
   * This has to be presented to the server along with the actual m8
   * AuthenticationRequest.
   *
   * @generated from field: string state = 2;
   */
  state = "";

  constructor(data?: PartialMessage<UpstreamAuthenticationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.UpstreamAuthenticationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "upstream_idp_redirect", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpstreamAuthenticationResponse {
    return new UpstreamAuthenticationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpstreamAuthenticationResponse {
    return new UpstreamAuthenticationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpstreamAuthenticationResponse {
    return new UpstreamAuthenticationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpstreamAuthenticationResponse | PlainMessage<UpstreamAuthenticationResponse> | undefined, b: UpstreamAuthenticationResponse | PlainMessage<UpstreamAuthenticationResponse> | undefined): boolean {
    return proto3.util.equals(UpstreamAuthenticationResponse, a, b);
  }
}

/**
 * @generated from message gateway.AuthenticationRequest
 */
export class AuthenticationRequest extends Message<AuthenticationRequest> {
  /**
   * code is the auth code received by the IDP
   *
   * @generated from field: string code = 1;
   */
  code = "";

  /**
   * state is the encoded, nonced AuthState
   *
   * @generated from field: string state = 2;
   */
  state = "";

  constructor(data?: PartialMessage<AuthenticationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.AuthenticationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticationRequest {
    return new AuthenticationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticationRequest {
    return new AuthenticationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticationRequest {
    return new AuthenticationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AuthenticationRequest | PlainMessage<AuthenticationRequest> | undefined, b: AuthenticationRequest | PlainMessage<AuthenticationRequest> | undefined): boolean {
    return proto3.util.equals(AuthenticationRequest, a, b);
  }
}

/**
 * @generated from message gateway.AuthenticationResponse
 */
export class AuthenticationResponse extends Message<AuthenticationResponse> {
  /**
   * access_token is a JWT to authenticate against the m8 API
   *
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * expiry is the timestamp when the token expires
   *
   * @generated from field: google.protobuf.Timestamp expiry = 2;
   */
  expiry?: Timestamp;

  /**
   * username is the username known the m8 control plane
   *
   * @generated from field: string username = 3;
   */
  username = "";

  constructor(data?: PartialMessage<AuthenticationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.AuthenticationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "expiry", kind: "message", T: Timestamp },
    { no: 3, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticationResponse {
    return new AuthenticationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticationResponse {
    return new AuthenticationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticationResponse {
    return new AuthenticationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AuthenticationResponse | PlainMessage<AuthenticationResponse> | undefined, b: AuthenticationResponse | PlainMessage<AuthenticationResponse> | undefined): boolean {
    return proto3.util.equals(AuthenticationResponse, a, b);
  }
}

/**
 * ClusterAuthTokenRequest is send in order to retrieve an auth token valid to
 * authenticate against a certain cluster with a specific role.
 *
 * @generated from message gateway.ClusterAuthTokenRequest
 */
export class ClusterAuthTokenRequest extends Message<ClusterAuthTokenRequest> {
  /**
   * Unique identifier of the cluster (UUID 128-bit number)
   *
   * @generated from field: string cluster_id = 1;
   */
  clusterId = "";

  /**
   * Kubernetes role name
   *
   * @generated from field: string role = 2;
   */
  role = "";

  constructor(data?: PartialMessage<ClusterAuthTokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.ClusterAuthTokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cluster_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterAuthTokenRequest {
    return new ClusterAuthTokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterAuthTokenRequest {
    return new ClusterAuthTokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterAuthTokenRequest {
    return new ClusterAuthTokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterAuthTokenRequest | PlainMessage<ClusterAuthTokenRequest> | undefined, b: ClusterAuthTokenRequest | PlainMessage<ClusterAuthTokenRequest> | undefined): boolean {
    return proto3.util.equals(ClusterAuthTokenRequest, a, b);
  }
}

/**
 * ClusterAuthTokenResponse contains an auth token valid to
 * authenticate against a certain cluster with a specific role.
 *
 * @generated from message gateway.ClusterAuthTokenResponse
 */
export class ClusterAuthTokenResponse extends Message<ClusterAuthTokenResponse> {
  /**
   * JWT to authenticate against a K8s cluster
   *
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * Timestamp when the token expires
   *
   * @generated from field: google.protobuf.Timestamp expiry = 2;
   */
  expiry?: Timestamp;

  constructor(data?: PartialMessage<ClusterAuthTokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.ClusterAuthTokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "expiry", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClusterAuthTokenResponse {
    return new ClusterAuthTokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClusterAuthTokenResponse {
    return new ClusterAuthTokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClusterAuthTokenResponse {
    return new ClusterAuthTokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ClusterAuthTokenResponse | PlainMessage<ClusterAuthTokenResponse> | undefined, b: ClusterAuthTokenResponse | PlainMessage<ClusterAuthTokenResponse> | undefined): boolean {
    return proto3.util.equals(ClusterAuthTokenResponse, a, b);
  }
}

/**
 * APITokenRequest is send in order to retrieve an API token valid to
 * authenticate against Monoskope and authorize specific scopes.
 *
 * @generated from message gateway.APITokenRequest
 */
export class APITokenRequest extends Message<APITokenRequest> {
  /**
   * Scope the resulting token is issued for
   *
   * @generated from field: repeated gateway.AuthorizationScope authorization_scopes = 1;
   */
  authorizationScopes: AuthorizationScope[] = [];

  /**
   * Duration for which the issued token will be valid
   *
   * @generated from field: google.protobuf.Duration validity = 2;
   */
  validity?: Duration;

  /**
   * @generated from oneof gateway.APITokenRequest.user
   */
  user: {
    /**
     * Unique identifier of an existing user (UUID 128-bit number)
     *
     * @generated from field: string user_id = 3;
     */
    value: string;
    case: "userId";
  } | {
    /**
     * Name of the user the token is valid for (not necessarily a real user)
     *
     * @generated from field: string username = 4;
     */
    value: string;
    case: "username";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<APITokenRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.APITokenRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authorization_scopes", kind: "enum", T: proto3.getEnumType(AuthorizationScope), repeated: true },
    { no: 2, name: "validity", kind: "message", T: Duration },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "user" },
    { no: 4, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "user" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): APITokenRequest {
    return new APITokenRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): APITokenRequest {
    return new APITokenRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): APITokenRequest {
    return new APITokenRequest().fromJsonString(jsonString, options);
  }

  static equals(a: APITokenRequest | PlainMessage<APITokenRequest> | undefined, b: APITokenRequest | PlainMessage<APITokenRequest> | undefined): boolean {
    return proto3.util.equals(APITokenRequest, a, b);
  }
}

/**
 * APITokenResponse is the answer to an APITokenRequest
 * containing a JWT to authenticate against the m8 API.
 *
 * @generated from message gateway.APITokenResponse
 */
export class APITokenResponse extends Message<APITokenResponse> {
  /**
   * JWT to authenticate against the m8 API
   *
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * Timestamp when the token expires
   *
   * @generated from field: google.protobuf.Timestamp expiry = 2;
   */
  expiry?: Timestamp;

  constructor(data?: PartialMessage<APITokenResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.APITokenResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "expiry", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): APITokenResponse {
    return new APITokenResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): APITokenResponse {
    return new APITokenResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): APITokenResponse {
    return new APITokenResponse().fromJsonString(jsonString, options);
  }

  static equals(a: APITokenResponse | PlainMessage<APITokenResponse> | undefined, b: APITokenResponse | PlainMessage<APITokenResponse> | undefined): boolean {
    return proto3.util.equals(APITokenResponse, a, b);
  }
}

/**
 * Request information that should be checked if authorized.
 *
 * @generated from message gateway.CheckRequest
 */
export class CheckRequest extends Message<CheckRequest> {
  /**
   * FullMethodName is the full RPC method string, i.e.,
   * /package.service/method.
   *
   * @generated from field: string full_method_name = 1;
   */
  fullMethodName = "";

  /**
   * AccessToken is the token from the auth header of the client request
   *
   * @generated from field: string access_token = 2;
   */
  accessToken = "";

  /**
   * The actual request to authorize
   *
   * @generated from field: bytes request = 3;
   */
  request = new Uint8Array(0);

  constructor(data?: PartialMessage<CheckRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.CheckRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "full_method_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "request", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckRequest {
    return new CheckRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckRequest {
    return new CheckRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckRequest {
    return new CheckRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CheckRequest | PlainMessage<CheckRequest> | undefined, b: CheckRequest | PlainMessage<CheckRequest> | undefined): boolean {
    return proto3.util.equals(CheckRequest, a, b);
  }
}

/**
 * Intended for gRPC and Network Authorization servers `only`.
 * Status `OK` allows the request. Any other status indicates the request
 * should be denied.
 *
 * @generated from message gateway.CheckResponse
 */
export class CheckResponse extends Message<CheckResponse> {
  /**
   * @generated from field: repeated gateway.CheckResponse.CheckResponseTag tags = 1;
   */
  tags: CheckResponse_CheckResponseTag[] = [];

  constructor(data?: PartialMessage<CheckResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.CheckResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tags", kind: "message", T: CheckResponse_CheckResponseTag, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckResponse {
    return new CheckResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckResponse {
    return new CheckResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckResponse {
    return new CheckResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CheckResponse | PlainMessage<CheckResponse> | undefined, b: CheckResponse | PlainMessage<CheckResponse> | undefined): boolean {
    return proto3.util.equals(CheckResponse, a, b);
  }
}

/**
 * @generated from message gateway.CheckResponse.CheckResponseTag
 */
export class CheckResponse_CheckResponseTag extends Message<CheckResponse_CheckResponseTag> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * @generated from field: string value = 2;
   */
  value = "";

  constructor(data?: PartialMessage<CheckResponse_CheckResponseTag>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "gateway.CheckResponse.CheckResponseTag";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckResponse_CheckResponseTag {
    return new CheckResponse_CheckResponseTag().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckResponse_CheckResponseTag {
    return new CheckResponse_CheckResponseTag().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckResponse_CheckResponseTag {
    return new CheckResponse_CheckResponseTag().fromJsonString(jsonString, options);
  }

  static equals(a: CheckResponse_CheckResponseTag | PlainMessage<CheckResponse_CheckResponseTag> | undefined, b: CheckResponse_CheckResponseTag | PlainMessage<CheckResponse_CheckResponseTag> | undefined): boolean {
    return proto3.util.equals(CheckResponse_CheckResponseTag, a, b);
  }
}

