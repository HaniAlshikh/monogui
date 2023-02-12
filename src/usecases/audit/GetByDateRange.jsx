import {AuditLogClient} from '../../api/domain/queryhandler_service_grpc_web_pb';
import {GetAuditLogByDateRangeRequest} from '../../api/domain/queryhandler_service_pb';
import {CreateGrpcConnectionAuthenticated} from "../../grpc/connection";
import * as timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import UseCase from "../UseCase";


class GetAuditLogUseCase extends UseCase {
    auditLogOptions = {}
    auditLogClient

    run(ctx) {
        return this.byDateRange(ctx)
    }

    byDateRange = (ctx) => {
        this.auditLogClient = CreateGrpcConnectionAuthenticated(ctx, AuditLogClient)
        const req = new GetAuditLogByDateRangeRequest()
        req.setMinTimestamp(timestamp_pb.Timestamp.fromDate(this.auditLogOptions.minTime))
        req.setMaxTimestamp(timestamp_pb.Timestamp.fromDate(this.auditLogOptions.maxTime))

        let logStream = this.auditLogClient.getByDateRange(req, null);
        const data = []
        logStream.on('data', event => {
            console.log(`data received: ${event}`)
            event === "EOF" && (logStream = null)
            const e = {
                key: event.getTimestamp().getSeconds() + event.getTimestamp().getNanos(),
                timestamp: event.getTimestamp().toDate().toISOString(),
                issuer: event.getIssuer(),
                issuerId: event.getIssuerId(),
                eventType: event.getEventType(),
                details: event.getDetails(),
            }
            data.push(e)
        });
        logStream.on('status', status => {
            console.log(JSON.stringify(status))
            logStream = null
        });
        logStream.on('end', end => {
            logStream = null
        });
        logStream.on('error', error => {
            console.log(JSON.stringify(error))
            logStream = null
        });
        logStream.on('metadata', metadata => {
            console.log(JSON.stringify(metadata))
        });

        while (logStream) {
            // temporary solution until streaming is properly implemented
        }
        logStream.cancel()

        return data
    }
}


export default GetAuditLogUseCase