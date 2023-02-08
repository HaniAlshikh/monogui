import * as grpcWeb from 'grpc-web';

import * as api_gateway_messages_pb from '../../api/gateway/messages_pb';


export class GatewayClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  requestUpstreamAuthentication(
    request: api_gateway_messages_pb.UpstreamAuthenticationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.UpstreamAuthenticationResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_messages_pb.UpstreamAuthenticationResponse>;

  requestAuthentication(
    request: api_gateway_messages_pb.AuthenticationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.AuthenticationResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_messages_pb.AuthenticationResponse>;

}

export class GatewayAuthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  check(
    request: api_gateway_messages_pb.CheckRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.CheckResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_messages_pb.CheckResponse>;

}

export class ClusterAuthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAuthToken(
    request: api_gateway_messages_pb.ClusterAuthTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.ClusterAuthTokenResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_messages_pb.ClusterAuthTokenResponse>;

}

export class APITokenClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  requestAPIToken(
    request: api_gateway_messages_pb.APITokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_gateway_messages_pb.APITokenResponse) => void
  ): grpcWeb.ClientReadableStream<api_gateway_messages_pb.APITokenResponse>;

}

export class GatewayPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  requestUpstreamAuthentication(
    request: api_gateway_messages_pb.UpstreamAuthenticationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_messages_pb.UpstreamAuthenticationResponse>;

  requestAuthentication(
    request: api_gateway_messages_pb.AuthenticationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_messages_pb.AuthenticationResponse>;

}

export class GatewayAuthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  check(
    request: api_gateway_messages_pb.CheckRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_messages_pb.CheckResponse>;

}

export class ClusterAuthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAuthToken(
    request: api_gateway_messages_pb.ClusterAuthTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_messages_pb.ClusterAuthTokenResponse>;

}

export class APITokenPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  requestAPIToken(
    request: api_gateway_messages_pb.APITokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<api_gateway_messages_pb.APITokenResponse>;

}

