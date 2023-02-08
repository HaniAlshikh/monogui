import * as grpcWeb from 'grpc-web';

import * as api_domain_commandhandler_service_pb from '../../api/domain/commandhandler_service_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class CommandHandlerExtensionsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPermissionModel(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_domain_commandhandler_service_pb.PermissionModel) => void
  ): grpcWeb.ClientReadableStream<api_domain_commandhandler_service_pb.PermissionModel>;

}

export class CommandHandlerExtensionsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPermissionModel(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<api_domain_commandhandler_service_pb.PermissionModel>;

}

