import * as grpcWeb from 'grpc-web';

import * as api_eventsourcing_messages_pb from '../../api/eventsourcing/messages_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class EventStoreClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieve(
    request: api_eventsourcing_messages_pb.EventFilter,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_eventsourcing_messages_pb.Event>;

  retrieveOr(
    request: api_eventsourcing_messages_pb.EventFilters,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_eventsourcing_messages_pb.Event>;

}

export class EventStorePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  retrieve(
    request: api_eventsourcing_messages_pb.EventFilter,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_eventsourcing_messages_pb.Event>;

  retrieveOr(
    request: api_eventsourcing_messages_pb.EventFilters,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<api_eventsourcing_messages_pb.Event>;

}

