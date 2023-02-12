import * as op from "../operation/operation";

export const CreateGrpcConnectionAuthenticated = (ctx, client) => {
    return new GrpcConnectionFactory({client: client, hostname: ctx.hostname})
        .withAuth(ctx.accessToken)
        .withTimeout()
        .withRetry()
        .create()
}

class GrpcConnectionFactory {
    client: Class
    hostname: string
    options: Object

    constructor({client, hostname, options}) {
        this.client = client;
        this.hostname = hostname;
        this.options = options;
    }

    create() {
        const client = new this.client(this.hostname, null, this.options)
        if (op.getOperationMode() === op.DEVELOPMENT) {
            const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {
            });
            enableDevTools([client]);
        }
        return client
    }

    withCredentials() {
        // TODO
        return this
    }

    withAuth(token: string) {
        const authInterceptor = new AuthInterceptor(token)
        this.options = {
            unaryInterceptors: [...(this.options?.unaryInterceptors ?? []), authInterceptor],
            streamInterceptors: [...(this.options?.streamInterceptors ?? []), authInterceptor],
        }
        return this
    }

    withRetry() {
        // TODO
        return this
    }

    withTimeout() {
        // TODO
        return this
    }
}

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