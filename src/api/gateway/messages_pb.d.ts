import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as validate_validate_pb from '../../validate/validate_pb';


export class UpstreamAuthenticationRequest extends jspb.Message {
  getCallbackUrl(): string;
  setCallbackUrl(value: string): UpstreamAuthenticationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpstreamAuthenticationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpstreamAuthenticationRequest): UpstreamAuthenticationRequest.AsObject;
  static serializeBinaryToWriter(message: UpstreamAuthenticationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpstreamAuthenticationRequest;
  static deserializeBinaryFromReader(message: UpstreamAuthenticationRequest, reader: jspb.BinaryReader): UpstreamAuthenticationRequest;
}

export namespace UpstreamAuthenticationRequest {
  export type AsObject = {
    callbackUrl: string,
  }
}

export class UpstreamAuthenticationResponse extends jspb.Message {
  getUpstreamIdpRedirect(): string;
  setUpstreamIdpRedirect(value: string): UpstreamAuthenticationResponse;

  getState(): string;
  setState(value: string): UpstreamAuthenticationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpstreamAuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpstreamAuthenticationResponse): UpstreamAuthenticationResponse.AsObject;
  static serializeBinaryToWriter(message: UpstreamAuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpstreamAuthenticationResponse;
  static deserializeBinaryFromReader(message: UpstreamAuthenticationResponse, reader: jspb.BinaryReader): UpstreamAuthenticationResponse;
}

export namespace UpstreamAuthenticationResponse {
  export type AsObject = {
    upstreamIdpRedirect: string,
    state: string,
  }
}

export class AuthenticationRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): AuthenticationRequest;

  getState(): string;
  setState(value: string): AuthenticationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationRequest): AuthenticationRequest.AsObject;
  static serializeBinaryToWriter(message: AuthenticationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationRequest;
  static deserializeBinaryFromReader(message: AuthenticationRequest, reader: jspb.BinaryReader): AuthenticationRequest;
}

export namespace AuthenticationRequest {
  export type AsObject = {
    code: string,
    state: string,
  }
}

export class AuthenticationResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AuthenticationResponse;

  getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): AuthenticationResponse;
  hasExpiry(): boolean;
  clearExpiry(): AuthenticationResponse;

  getUsername(): string;
  setUsername(value: string): AuthenticationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationResponse): AuthenticationResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationResponse;
  static deserializeBinaryFromReader(message: AuthenticationResponse, reader: jspb.BinaryReader): AuthenticationResponse;
}

export namespace AuthenticationResponse {
  export type AsObject = {
    accessToken: string,
    expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    username: string,
  }
}

export class ClusterAuthTokenRequest extends jspb.Message {
  getClusterId(): string;
  setClusterId(value: string): ClusterAuthTokenRequest;

  getRole(): string;
  setRole(value: string): ClusterAuthTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterAuthTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterAuthTokenRequest): ClusterAuthTokenRequest.AsObject;
  static serializeBinaryToWriter(message: ClusterAuthTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterAuthTokenRequest;
  static deserializeBinaryFromReader(message: ClusterAuthTokenRequest, reader: jspb.BinaryReader): ClusterAuthTokenRequest;
}

export namespace ClusterAuthTokenRequest {
  export type AsObject = {
    clusterId: string,
    role: string,
  }
}

export class ClusterAuthTokenResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): ClusterAuthTokenResponse;

  getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): ClusterAuthTokenResponse;
  hasExpiry(): boolean;
  clearExpiry(): ClusterAuthTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterAuthTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterAuthTokenResponse): ClusterAuthTokenResponse.AsObject;
  static serializeBinaryToWriter(message: ClusterAuthTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterAuthTokenResponse;
  static deserializeBinaryFromReader(message: ClusterAuthTokenResponse, reader: jspb.BinaryReader): ClusterAuthTokenResponse;
}

export namespace ClusterAuthTokenResponse {
  export type AsObject = {
    accessToken: string,
    expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class APITokenRequest extends jspb.Message {
  getAuthorizationScopesList(): Array<AuthorizationScope>;
  setAuthorizationScopesList(value: Array<AuthorizationScope>): APITokenRequest;
  clearAuthorizationScopesList(): APITokenRequest;
  addAuthorizationScopes(value: AuthorizationScope, index?: number): APITokenRequest;

  getValidity(): google_protobuf_duration_pb.Duration | undefined;
  setValidity(value?: google_protobuf_duration_pb.Duration): APITokenRequest;
  hasValidity(): boolean;
  clearValidity(): APITokenRequest;

  getUserId(): string;
  setUserId(value: string): APITokenRequest;

  getUsername(): string;
  setUsername(value: string): APITokenRequest;

  getUserCase(): APITokenRequest.UserCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APITokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: APITokenRequest): APITokenRequest.AsObject;
  static serializeBinaryToWriter(message: APITokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APITokenRequest;
  static deserializeBinaryFromReader(message: APITokenRequest, reader: jspb.BinaryReader): APITokenRequest;
}

export namespace APITokenRequest {
  export type AsObject = {
    authorizationScopesList: Array<AuthorizationScope>,
    validity?: google_protobuf_duration_pb.Duration.AsObject,
    userId: string,
    username: string,
  }

  export enum UserCase { 
    USER_NOT_SET = 0,
    USER_ID = 3,
    USERNAME = 4,
  }
}

export class APITokenResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): APITokenResponse;

  getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): APITokenResponse;
  hasExpiry(): boolean;
  clearExpiry(): APITokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APITokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: APITokenResponse): APITokenResponse.AsObject;
  static serializeBinaryToWriter(message: APITokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APITokenResponse;
  static deserializeBinaryFromReader(message: APITokenResponse, reader: jspb.BinaryReader): APITokenResponse;
}

export namespace APITokenResponse {
  export type AsObject = {
    accessToken: string,
    expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CheckRequest extends jspb.Message {
  getFullMethodName(): string;
  setFullMethodName(value: string): CheckRequest;

  getAccessToken(): string;
  setAccessToken(value: string): CheckRequest;

  getRequest(): Uint8Array | string;
  getRequest_asU8(): Uint8Array;
  getRequest_asB64(): string;
  setRequest(value: Uint8Array | string): CheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
  static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRequest;
  static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
  export type AsObject = {
    fullMethodName: string,
    accessToken: string,
    request: Uint8Array | string,
  }
}

export class CheckResponse extends jspb.Message {
  getTagsList(): Array<CheckResponse.CheckResponseTag>;
  setTagsList(value: Array<CheckResponse.CheckResponseTag>): CheckResponse;
  clearTagsList(): CheckResponse;
  addTags(value?: CheckResponse.CheckResponseTag, index?: number): CheckResponse.CheckResponseTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
  static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResponse;
  static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
  export type AsObject = {
    tagsList: Array<CheckResponse.CheckResponseTag.AsObject>,
  }

  export class CheckResponseTag extends jspb.Message {
    getKey(): string;
    setKey(value: string): CheckResponseTag;

    getValue(): string;
    setValue(value: string): CheckResponseTag;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckResponseTag.AsObject;
    static toObject(includeInstance: boolean, msg: CheckResponseTag): CheckResponseTag.AsObject;
    static serializeBinaryToWriter(message: CheckResponseTag, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckResponseTag;
    static deserializeBinaryFromReader(message: CheckResponseTag, reader: jspb.BinaryReader): CheckResponseTag;
  }

  export namespace CheckResponseTag {
    export type AsObject = {
      key: string,
      value: string,
    }
  }

}

export enum AuthorizationScope { 
  NONE = 0,
  API = 1,
  WRITE_SCIM = 2,
  WRITE_K8SOPERATOR = 3,
}
