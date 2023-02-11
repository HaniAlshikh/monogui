import {GatewayPromiseClient} from "../../api/gateway/service_grpc_web_pb";
import {AuthenticationRequest, UpstreamAuthenticationRequest} from "../../api/gateway/messages_pb";

export const M8Auth = (redirectUri: String) => {

    const client = new GatewayPromiseClient("https://api.monoskope.dev:8443", null, null)
    const req = new UpstreamAuthenticationRequest()
    console.log(`===== ${redirectUri}`)
    req.setCallbackUrl(redirectUri)
    const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {
    });
    enableDevTools([
        client,
    ]);

    return client.requestUpstreamAuthentication(req, {})
}
export const M8GetToken = (configuration: Object) => {
    const {
        code,
        state,
    } = configuration;

    const client = new GatewayPromiseClient("https://api.monoskope.dev:8443", null, null)
    const req = new AuthenticationRequest()
    req.setCode(code)
    req.setState(state)

    const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {
    });
    enableDevTools([
        client,
    ]);

    return client.requestAuthentication(req, {})
}