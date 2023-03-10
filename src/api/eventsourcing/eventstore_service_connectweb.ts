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
// @generated from file api/eventsourcing/eventstore_service.proto (package eventsourcing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Event, EventFilter, EventFilters } from "./messages_pb";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * API of the Monoskope EventStore.
 *
 * @generated from service eventsourcing.EventStore
 */
export const EventStore = {
  typeName: "eventsourcing.EventStore",
  methods: {
    /**
     * Store streams events to the store.
     *
     * @generated from rpc eventsourcing.EventStore.Store
     */
    store: {
      name: "Store",
      I: Event,
      O: Empty,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * Retrieve returns a stream of Events.
     *
     * @generated from rpc eventsourcing.EventStore.Retrieve
     */
    retrieve: {
      name: "Retrieve",
      I: EventFilter,
      O: Event,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * RetrieveOr returns a stream of Events by concatenating the filters with the logical or
     *
     * @generated from rpc eventsourcing.EventStore.RetrieveOr
     */
    retrieveOr: {
      name: "RetrieveOr",
      I: EventFilters,
      O: Event,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

