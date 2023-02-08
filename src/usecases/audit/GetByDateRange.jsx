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

const GetByDateRange = (from: Date, to: Date) => {
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRmZjU1NmUxN2M2NTRjOTMzOGYyYzEzNmVmZDMzYTQzOTQ4NDNmMDFmNTEzMTJiN2NiMmZkMGU2N2U2NzVmOTciLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsibThhcGkiXSwiZW1haWwiOiJhZG1pbkBtb25vc2tvcGUuZGV2IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTY3NTg5MDA1OCwiaWF0IjoxNjc1ODQ2ODU4LCJpc19hcGlfdG9rZW4iOmZhbHNlLCJpc3MiOiJodHRwczovL2FwaS5tb25vc2tvcGUuZGV2IiwianRpIjoiNTg1OGI0YTAtZTI4NC00ZDQwLWIzN2ItZjYzNGVkMGVmODdjIiwibmFtZSI6ImFkbWluIiwibmJmIjoxNjc1ODQ2ODU4LCJzY29wZSI6IkFQSSIsInN1YiI6IjhhYjQxMzRmLTUwMmEtNDFiNi05YWMzLTRjN2YwY2Y1ZDIxNiJ9.UQdutcx2Xbl8fA9V_F85CHFRomfDr96FNf0jZAIBJuj9y6kgxN8JLEz6BBOcN-f_NH0mmoS_5Oom27ZZRfiWsK9yNqzP-PD35NlQWJNaLG1zfjbPc-yUqxLPpf0nREu9Rp2puXEDjPtx1ZRsdmiLetJ0NNk8ulutEuQPaexfCEBn5nesqZpHReqJUnBfRoQDoKNKWm4Dkn26u1quZZiSbG4LpPSl0Bnw7NYSZxfFhSb_t8nt531QxNFAFCwqRKiA6DcPimqzn__-tesVl9WzqxP1l8yPvY2fMhDcdJ4I0x4PYUw7bnHyX7lEZcZGMq9LPhDsX8EQtacTtiP7sL0GuQ"
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