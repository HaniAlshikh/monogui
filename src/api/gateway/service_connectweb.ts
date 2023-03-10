// Copyright 2022 Monoskope Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-web v0.7.0 with parameter "target=ts,import_extension=none"
// @generated from file api/gateway/service.proto (package gateway, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { APITokenRequest, APITokenResponse, AuthenticationRequest, AuthenticationResponse, CheckRequest, CheckResponse, ClusterAuthTokenRequest, ClusterAuthTokenResponse, UpstreamAuthenticationRequest, UpstreamAuthenticationResponse } from "./messages_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * API of the Monoskope Gateway.
 *
 * @generated from service gateway.Gateway
 */
export const Gateway = {
  typeName: "gateway.Gateway",
  methods: {
    /**
     * PrepareAuthentication returns the URL to call to authenticate against the
     * upstream IDP
     *
     * @generated from rpc gateway.Gateway.RequestUpstreamAuthentication
     */
    requestUpstreamAuthentication: {
      name: "RequestUpstreamAuthentication",
      I: UpstreamAuthenticationRequest,
      O: UpstreamAuthenticationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RequestAuthentication is called to exchange the authorization code with the
     * upstream IDP and to authenticate with the m8 control plane
     *
     * @generated from rpc gateway.Gateway.RequestAuthentication
     */
    requestAuthentication: {
      name: "RequestAuthentication",
      I: AuthenticationRequest,
      O: AuthenticationResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * A service for performing authorization check on incoming
 * requests to a networked service part of m8.
 *
 * @generated from service gateway.GatewayAuth
 */
export const GatewayAuth = {
  typeName: "gateway.GatewayAuth",
  methods: {
    /**
     * Performs authorization check based on the attributes associated with the
     * incoming request, and returns status `OK` or not `OK`.
     *
     * @generated from rpc gateway.GatewayAuth.Check
     */
    check: {
      name: "Check",
      I: CheckRequest,
      O: CheckResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * ClusterAuth is the API to request token for cluster authentication from
 *
 * @generated from service gateway.ClusterAuth
 */
export const ClusterAuth = {
  typeName: "gateway.ClusterAuth",
  methods: {
    /**
     * @generated from rpc gateway.ClusterAuth.GetAuthToken
     */
    getAuthToken: {
      name: "GetAuthToken",
      I: ClusterAuthTokenRequest,
      O: ClusterAuthTokenResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * APIToken is the API to request API tokens with
 *
 * @generated from service gateway.APIToken
 */
export const APIToken = {
  typeName: "gateway.APIToken",
  methods: {
    /**
     * @generated from rpc gateway.APIToken.RequestAPIToken
     */
    requestAPIToken: {
      name: "RequestAPIToken",
      I: APITokenRequest,
      O: APITokenResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

