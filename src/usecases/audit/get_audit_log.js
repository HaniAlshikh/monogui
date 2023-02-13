import UseCase from "../UseCase";
import {Timestamp} from "@bufbuild/protobuf";
import {AuditLog} from "../../api/domain/queryhandler_service_connectweb";
import {createPromiseClient} from "@bufbuild/connect-web";
import {createGrpcConnectionAuthenticated} from "../../grpc/connection.js";


class GetAuditLogUseCase extends UseCase {
    auditLogOptions = {}
    auditLogClient

    run(ctx) {
        return this.byDateRange(ctx)
    }

    byDateRange = async ctx => {
        this.auditLogClient = createPromiseClient(AuditLog, createGrpcConnectionAuthenticated(ctx))
        let logStream = this.auditLogClient.getByDateRange({
            minTimestamp: Timestamp.fromDate(this.auditLogOptions.minTime),
            maxTimestamp: Timestamp.fromDate(this.auditLogOptions.maxTime)
        });

        const data = []

        try {
            for await (const event of logStream) {
                console.log(`data received: ${event}`)
                // event === "EOF" && (return)
                const e = {
                    key: `${event.timestamp.seconds + BigInt(event.timestamp.nanos)}`,
                    timestamp: event.timestamp.toDate().toISOString(),
                    issuer: event.issuer,
                    issuerId: event.issuerId,
                    eventType: event.eventType,
                    details: event.details,
                }
                data.push(e)
            }
        } catch (e) {
            console.log("byDateRange error: ", e);
            throw e
        }

        return data
    }
}


export default GetAuditLogUseCase