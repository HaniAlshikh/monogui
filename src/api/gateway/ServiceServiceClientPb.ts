/**
 * @fileoverview gRPC-Web generated client stub for gateway
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.2
// source: api/gateway/service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_gateway_messages_pb from '../../api/gateway/messages_pb';


export class GatewayClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorRequestUpstreamAuthentication = new grpcWeb.MethodDescriptor(
    '/gateway.Gateway/RequestUpstreamAuthentication',
    grpcWeb.MethodType.UNARY,
    api_gateway_messages_pb.UpstreamAuthenticationRequest,
    api_gateway_messages_pb.UpstreamAuthenticationResponse,
    (request: api_gateway_messages_pb.UpstreamAuthenticationRequest) => {
      return request.serializeBinary();
    },
    api_gateway_messages_pb.UpstreamAuthenticationResponse.deserializeBinary
  );

  requestUpstreamAuthentication(
    request: api_gateway_messages_pb.UpstreamAuthenticationRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_gateway_messages_pb.UpstreamAuthenticationResponse>;

  requestUpstreamAuthentication(
    request: api_gateway_messages_pb.UpstreamAuthenticationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.UpstreamAuthenticationResponse) => void): grpcWeb.ClientReadableStream<api_gateway_messages_pb.UpstreamAuthenticationResponse>;

  requestUpstreamAuthentication(
    request: api_gateway_messages_pb.UpstreamAuthenticationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.UpstreamAuthenticationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gateway.Gateway/RequestUpstreamAuthentication',
        request,
        metadata || {},
        this.methodDescriptorRequestUpstreamAuthentication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gateway.Gateway/RequestUpstreamAuthentication',
    request,
    metadata || {},
    this.methodDescriptorRequestUpstreamAuthentication);
  }

  methodDescriptorRequestAuthentication = new grpcWeb.MethodDescriptor(
    '/gateway.Gateway/RequestAuthentication',
    grpcWeb.MethodType.UNARY,
    api_gateway_messages_pb.AuthenticationRequest,
    api_gateway_messages_pb.AuthenticationResponse,
    (request: api_gateway_messages_pb.AuthenticationRequest) => {
      return request.serializeBinary();
    },
    api_gateway_messages_pb.AuthenticationResponse.deserializeBinary
  );

  requestAuthentication(
    request: api_gateway_messages_pb.AuthenticationRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_gateway_messages_pb.AuthenticationResponse>;

  requestAuthentication(
    request: api_gateway_messages_pb.AuthenticationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.AuthenticationResponse) => void): grpcWeb.ClientReadableStream<api_gateway_messages_pb.AuthenticationResponse>;

  requestAuthentication(
    request: api_gateway_messages_pb.AuthenticationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.AuthenticationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gateway.Gateway/RequestAuthentication',
        request,
        metadata || {},
        this.methodDescriptorRequestAuthentication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gateway.Gateway/RequestAuthentication',
    request,
    metadata || {},
    this.methodDescriptorRequestAuthentication);
  }

}

export class GatewayAuthClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCheck = new grpcWeb.MethodDescriptor(
    '/gateway.GatewayAuth/Check',
    grpcWeb.MethodType.UNARY,
    api_gateway_messages_pb.CheckRequest,
    api_gateway_messages_pb.CheckResponse,
    (request: api_gateway_messages_pb.CheckRequest) => {
      return request.serializeBinary();
    },
    api_gateway_messages_pb.CheckResponse.deserializeBinary
  );

  check(
    request: api_gateway_messages_pb.CheckRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_gateway_messages_pb.CheckResponse>;

  check(
    request: api_gateway_messages_pb.CheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.CheckResponse) => void): grpcWeb.ClientReadableStream<api_gateway_messages_pb.CheckResponse>;

  check(
    request: api_gateway_messages_pb.CheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.CheckResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gateway.GatewayAuth/Check',
        request,
        metadata || {},
        this.methodDescriptorCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gateway.GatewayAuth/Check',
    request,
    metadata || {},
    this.methodDescriptorCheck);
  }

}

export class ClusterAuthClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetAuthToken = new grpcWeb.MethodDescriptor(
    '/gateway.ClusterAuth/GetAuthToken',
    grpcWeb.MethodType.UNARY,
    api_gateway_messages_pb.ClusterAuthTokenRequest,
    api_gateway_messages_pb.ClusterAuthTokenResponse,
    (request: api_gateway_messages_pb.ClusterAuthTokenRequest) => {
      return request.serializeBinary();
    },
    api_gateway_messages_pb.ClusterAuthTokenResponse.deserializeBinary
  );

  getAuthToken(
    request: api_gateway_messages_pb.ClusterAuthTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_gateway_messages_pb.ClusterAuthTokenResponse>;

  getAuthToken(
    request: api_gateway_messages_pb.ClusterAuthTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.ClusterAuthTokenResponse) => void): grpcWeb.ClientReadableStream<api_gateway_messages_pb.ClusterAuthTokenResponse>;

  getAuthToken(
    request: api_gateway_messages_pb.ClusterAuthTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.ClusterAuthTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gateway.ClusterAuth/GetAuthToken',
        request,
        metadata || {},
        this.methodDescriptorGetAuthToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gateway.ClusterAuth/GetAuthToken',
    request,
    metadata || {},
    this.methodDescriptorGetAuthToken);
  }

}

export class APITokenClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorRequestAPIToken = new grpcWeb.MethodDescriptor(
    '/gateway.APIToken/RequestAPIToken',
    grpcWeb.MethodType.UNARY,
    api_gateway_messages_pb.APITokenRequest,
    api_gateway_messages_pb.APITokenResponse,
    (request: api_gateway_messages_pb.APITokenRequest) => {
      return request.serializeBinary();
    },
    api_gateway_messages_pb.APITokenResponse.deserializeBinary
  );

  requestAPIToken(
    request: api_gateway_messages_pb.APITokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_gateway_messages_pb.APITokenResponse>;

  requestAPIToken(
    request: api_gateway_messages_pb.APITokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.APITokenResponse) => void): grpcWeb.ClientReadableStream<api_gateway_messages_pb.APITokenResponse>;

  requestAPIToken(
    request: api_gateway_messages_pb.APITokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.APITokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gateway.APIToken/RequestAPIToken',
        request,
        metadata || {},
        this.methodDescriptorRequestAPIToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gateway.APIToken/RequestAPIToken',
    request,
    metadata || {},
    this.methodDescriptorRequestAPIToken);
  }

}

