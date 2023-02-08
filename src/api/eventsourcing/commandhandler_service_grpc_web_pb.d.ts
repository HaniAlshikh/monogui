import * as grpcWeb from 'grpc-web';

import * as api_eventsourcing_commands_command_pb from '../../api/eventsourcing/commands/command_pb';
import * as api_eventsourcing_commandhandler_service_pb from '../../api/eventsourcing/commandhandler_service_pb';


export class CommandHandlerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  execute(
    request: api_eventsourcing_commands_command_pb.Command,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: api_eventsourcing_commandhandler_service_pb.CommandReply) => void
  ): grpcWeb.ClientReadableStream<api_eventsourcing_commandhandler_service_pb.CommandReply>;

}

export class CommandHandlerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  execute(
    request: api_eventsourcing_commands_command_pb.Command,
    metadata?: grpcWeb.Metadata
  ): Promise<api_eventsourcing_commandhandler_service_pb.CommandReply>;

}

