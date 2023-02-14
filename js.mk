CURL ?= curl

##@ Javascript
.PHONY: js-protobuf
js-protobuf: _js-protobuf _fix-connect-web-imports ## Generate neccessery client stubs

# TODO create protoc-gen-connect-web issue to adress name conflict between messages and services
_js-protobuf: protobuf-deps ## Generate neccessery client stubs
	rm -rf ./api ./src/api
	mkdir -p ./src/api
	$(CURL) -fL -o m8.tar.gz "https://github.com/finleap-connect/monoskope/archive/refs/tags/v$(M8_VERSION).tar.gz"
	tar -xf m8.tar.gz --strip-components=1 "monoskope-$(M8_VERSION)/api"
	export PATH="$(LOCALBIN):$(NODEBIN):$$PATH" ; find ./api -name '*.proto' -exec $(PROTOC) -I. -I$(PROTOC_IMPORTS_DIR) --es_out ./src --es_opt target=ts --connect-web_out ./src --connect-web_opt target=ts --connect-web_opt import_extension=none  {} \;
	rm -rf m8.tar.gz

_fix-connect-web-imports:
	@sed -i.bak 's/import { User, UserRoleBinding } from ".\/projections\/user_pb"/import { User as UserProjection, UserRoleBinding } from ".\/projections\/user_pb"/' src/api/domain/queryhandler_service_connectweb.ts
	@sed -i.bak 's/O: User,/O: UserProjection,/' src/api/domain/queryhandler_service_connectweb.ts
	@sed -i.bak 's/import { Tenant, TenantUser } from ".\/projections\/tenant_pb"/import { Tenant as TenantProjection, TenantUser } from ".\/projections\/tenant_pb"/' src/api/domain/queryhandler_service_connectweb.ts
	@sed -i.bak 's/O: Tenant,/O: TenantProjection,/' src/api/domain/queryhandler_service_connectweb.ts
	@sed -i.bak 's/import { Cluster, ClusterAccess, ClusterAccessV2 } from ".\/projections\/cluster_pb"/import { Cluster as ClusterProjection, ClusterAccess as ClusterAccessProjection, ClusterAccessV2 } from ".\/projections\/cluster_pb"/' src/api/domain/queryhandler_service_connectweb.ts
	@sed -i.bak 's/O: Cluster,/O: ClusterProjection,/' src/api/domain/queryhandler_service_connectweb.ts
	@sed -i.bak 's/O: ClusterAccess,/O: ClusterAccessProjection,/' src/api/domain/queryhandler_service_connectweb.ts
	@rm src/api/domain/queryhandler_service_connectweb.ts.bak
	

##@ Build Dependencies

## Tool Binaries
PROTOC ?= $(LOCALBIN)/protoc
PROTOC-GEN-JS ?= $(LOCALBIN)/protoc-gen-js
PROTOC-GEN-GRPC-WEB ?= $(LOCALBIN)/protoc-gen-grpc-web

## Tool Versions
PROTOC_VERSION ?= 21.2
PROTOBUF_JAVASCRIPT_VERSION ?= 3.21.2
GRPC_WEB_VERSION ?= 1.4.2
PROTOC_GEN_VALIDATE_VERSION ?= 0.6.7

ARCH := $(shell sh -c 'uname -m 2>/dev/null || echo not')
OS := $(shell sh -c 'uname -s 2>/dev/null | tr A-Z a-z || echo not')
PROTO_OS := $(OS)

ifeq ($(OS),darwin)
PROTO_OS = osx
endif
PROTO_ARCH_OS := $(PROTO_OS)-$(ARCH)
GRPC_WEB_ARCH_OS := $(OS)-$(ARCH)

## Tool Config
PROTOC_IMPORTS_DIR          ?= $(BUILD_PATH)/api_includes
PROTO_FILES                 != find api -name "*.proto"

protobuf-deps: protoc-get

protoc-get $(PROTOC): $(LOCALBIN)
	mkdir -p $(PROTOC_IMPORTS_DIR)/
	$(CURL) -fL -o protoc.zip "https://github.com/protocolbuffers/protobuf/releases/download/v$(PROTOC_VERSION)/protoc-$(PROTOC_VERSION)-$(PROTO_ARCH_OS).zip"
	unzip protoc.zip -d $(LOCALBIN)/.protoc-unpack
	mv -f $(LOCALBIN)/.protoc-unpack/bin/protoc $(LOCALBIN)/protoc
	cp -a $(LOCALBIN)/.protoc-unpack/include/* $(PROTOC_IMPORTS_DIR)/
	rm -rf $(LOCALBIN)/.protoc-unpack/ protoc.zip
	
	$(CURL) -fL -o protoc-gen-validate.zip "https://github.com/envoyproxy/protoc-gen-validate/archive/refs/tags/v$(PROTOC_GEN_VALIDATE_VERSION).zip"
	unzip protoc-gen-validate.zip -d $(LOCALBIN)/protoc-gen-validate-unpack
	mkdir -p $(PROTOC_IMPORTS_DIR)/validate/
	cp -a $(LOCALBIN)/protoc-gen-validate-unpack/protoc-gen-validate-$(PROTOC_GEN_VALIDATE_VERSION)/validate/validate.proto $(PROTOC_IMPORTS_DIR)/validate/
	rm -rf $(LOCALBIN)/protoc-gen-validate-unpack protoc-gen-validate.zip

	npm install @bufbuild/protoc-gen-connect-web@$(cat ./package.json | jq -r '.devDependencies["@bufbuild/protoc-gen-connect-web"]') --no-save --no-package-lock
	npm install @bufbuild/protoc-gen-es@$(cat ./package.json | jq -r '.devDependencies["@bufbuild/protoc-gen-es"]') --no-save --no-package-lock