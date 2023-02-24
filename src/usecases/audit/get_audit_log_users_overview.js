import UseCase from "../UseCase";
import {AuditLog} from "../../api/domain/queryhandler_service_connectweb";
import {createPromiseClient} from "@bufbuild/connect-web";
import {createGrpcConnectionAuthenticated} from "../../grpc/connection.js";
import {Timestamp} from "@bufbuild/protobuf";


export default class GetAuditLogUsersOverviewUseCase extends UseCase {
    auditLogOptions = {}
    auditLogClient

    run(ctx) {
        return this.doRun(ctx)
    }

    doRun = async ctx => {
        this.auditLogClient = createPromiseClient(AuditLog, createGrpcConnectionAuthenticated(ctx))
        let logStream = this.auditLogClient.getUsersOverview({
            timestamp: Timestamp.fromDate(this.auditLogOptions.timestamp),
        });

        const data = []

        try {
            for await (const event of logStream) {
                console.log(`data received: ${event}`)
                // event === "EOF" && (return)
                const e = {
                    key: event.email,
                    name: event.name,
                    email: event.email,
                    roles: event.roles,
                    tenants: event.tenants,
                    clusters: event.clusters,
                    details: event.details,
                }
                data.push(e)
            }
        } catch (e) {
            console.log(this.toString() + " error: ", e);
            // throw e
        }

        return data
    }
}