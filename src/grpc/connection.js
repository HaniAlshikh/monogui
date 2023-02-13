import * as op from "../operation/operation";
import {createGrpcWebTransport} from "@bufbuild/connect-web";

export const createGrpcConnectionAuthenticated = (ctx) => {
    return new GrpcConnectionFactory(ctx)
        .withAuth(ctx.accessToken)
        .withTimeout()
        .withRetry()
        .create()
}

export const createGrpcConnection = (ctx) => {
    return new GrpcConnectionFactory(ctx)
        .withTimeout()
        .withRetry()
        .create()
}

export class GrpcConnectionFactory {
    hostname
    interceptors

    constructor({hostname}) {
        this.hostname = hostname;
        this.interceptors = [];
    }

    create() {
        if (op.getOperationMode() === op.DEVELOPMENT) {
            const logger = (next) => async (req) => {
                console.log(`gRPC Call: ${JSON.stringify(req)}`);
                return await next(req);
            }
            this.interceptors.push(logger)
        }
        // if (op.getOperationMode() === op.DEVELOPMENT) {
        //     const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {
        //     });
        //     enableDevTools([client]);
        // }
        console.log("interceptors: " + this.interceptors)
        return createGrpcWebTransport({
            baseUrl: this.hostname,
            interceptors: this.interceptors
        });
    }

    withCredentials() {
        // TODO
        return this
    }

    withAuth(token) {
        const authenticator = (next) => async (req) => {
            req.header.set('Authorization', `Bearer ${token}`)
            return await next(req);
        }
        this.interceptors.push(authenticator)
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