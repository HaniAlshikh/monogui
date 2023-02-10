import {AuditLogClient} from '../../api/domain/queryhandler_service_grpc_web_pb';
import {GetAuditLogByDateRangeRequest} from '../../api/domain/queryhandler_service_pb';

class AuthInterceptor {
    token: string

    constructor(token: string) {
        this.token = token
    }

    intercept(request: any, invoker: any) {
        const metadata = request.getMetadata()
        metadata.Authorization = 'Bearer ' + this.token
        return invoker(request)
    }
}

const GetByDateRange = (ctx, from: Date, to: Date) => {
    const token = ctx.accessToken
    const authInterceptor = new AuthInterceptor(token)
    const options = {
        unaryInterceptors: [authInterceptor],
        streamInterceptors: [authInterceptor]
    }
    const client = new AuditLogClient("https://api.monoskope.dev:8443", null, options)
    const req = new GetAuditLogByDateRangeRequest()
    const min = from
    const max = to

    const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {
    });
    enableDevTools([
        client,
    ]);

    const timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb')
    req.setMaxTimestamp(timestamp_pb.Timestamp.fromDate(max))
    req.setMinTimestamp(timestamp_pb.Timestamp.fromDate(min))

    return client.getByDateRange(req, null);
}

export default GetByDateRange