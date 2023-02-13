import UseCase from "../UseCase";
import {createPromiseClient} from "@bufbuild/connect-web";
import {Gateway} from "../../api/gateway/service_connectweb";
import {createGrpcConnection} from "../../grpc/connection";
import {UpstreamAuthenticationRequest} from "../../api/gateway/messages_pb";


export default class AuthUseCase extends UseCase {
    // to typescript: takes upstreamIdpRedirect string and returns idp code promise
    onRedirect
    onAuthenticated

    constructor(onRedirect, onAuthenticated) {
        super();
        this.onRedirect = onRedirect;
        this.onAuthenticated = onAuthenticated;
    }

    run(ctx) {
        return this.runAuthenticationFlow(ctx)
    }

    runAuthenticationFlow = (ctx) => {
        console.log(`===== ${ctx.callbackUrl}`)
        const gatewayClient = createPromiseClient(Gateway, createGrpcConnection(ctx))

        const receiveCodeFromIdp = m8Resp => this.onRedirect(m8Resp.upstreamIdpRedirect)

        const checkState = (m8State, idpState) => {
            if (m8State !== idpState)
                throw new Error("Unexpected authentication response")
        }

        gatewayClient.requestUpstreamAuthentication(new UpstreamAuthenticationRequest(ctx))
            .then(m8Resp => {
                receiveCodeFromIdp(m8Resp)
                    .then((idpResponse) => {
                        console.log(idpResponse)
                        checkState(m8Resp.state, idpResponse.state)
                        gatewayClient.requestAuthentication(idpResponse)
                            .then(authInfo => {
                                this.onAuthenticated?.(authInfo)
                                ctx.login(authInfo)
                            })
                    })
            })
    }
}