import * as grpcWeb from 'grpc-web';

import * as api_domain_common_messages_pb from '../../../api/domain/common/messages_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ServiceInformationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getServiceInformation(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_common_messages_pb.ServiceInformation>;

}

export class ServiceInformationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getServiceInformation(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_domain_common_messages_pb.ServiceInformation>;

}

