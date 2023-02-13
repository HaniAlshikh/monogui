import {useContext, useMemo} from "react";
import AuthContext from "../auth/AuthContext.jsx";
import {createGrpcConnectionAuthenticated} from "../../grpc/connection.js";
import {ServiceType} from "@bufbuild/protobuf";
import {createPromiseClient, PromiseClient,} from "@bufbuild/connect-web";

/**
 * Get a promise client for the given service.
 */
export function useAuthenticatedClient<T extends ServiceType>(service: T): PromiseClient<T> {
    // useMemo -> singleton
    return useMemo(
        () => createPromiseClient(service, createGrpcConnectionAuthenticated(useContext(AuthContext))
        ), [service]);
}