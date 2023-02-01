BUILD_PATH ?= $(shell pwd)

CURL ?= curl
export M8GUI_OPERATION_MODE = development

##@ Javascript
.PHONY: js-protobuf
js-protobuf: .protobuf-deps ## Generate neccessery client stubs
	rm -rf ./api ./src/api
	mkdir -p ./src/api
	$(CURL) -fL -o m8.tar.gz "https://github.com/finleap-connect/monoskope/archive/refs/tags/v$(M8_VERSION).tar.gz"
	tar -xf m8.tar.gz --strip-components=1 "monoskope-$(M8_VERSION)/api"
	export PATH="$(LOCALBIN):$$PATH" ; find ./api -name '*.proto' -exec $(PROTOC) -I. -I$(PROTOC_IMPORTS_DIR) --js_out=import_style=commonjs:./src --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src {} \;
	rm -rf m8.tar.gz

##@ Build Dependencies

## Location to install dependencies to
LOCALBIN ?= $(shell pwd)/bin
$(LOCALBIN):
	mkdir -p $(LOCALBIN)

.PHONY: clean
clean: ## Clean up build dependencies
	rm -R $(LOCALBIN)

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

.protobuf-deps: protoc-get $(PROTO_FILES)
	@for file in $$(find src/api/ -name "*.pb.go") ; do source=$$(awk '/^\/\/ source:/ { print $$3 }' $$file) ; echo "$$file: $$source"; done >.protobuf-deps
	@echo -n "GENERATED_GO_FILES := " >>.protobuf-deps
	@for file in $$(find src/api/ -name "*.pb.go") ; do echo -n " $$file"; done >>.protobuf-deps
	@echo >>.protobuf-deps
	
protoc-get $(PROTOC): $(LOCALBIN)
	mkdir -p $(PROTOC_IMPORTS_DIR)/
	$(CURL) -fL -o protoc.zip "https://github.com/protocolbuffers/protobuf/releases/download/v$(PROTOC_VERSION)/protoc-$(PROTOC_VERSION)-$(PROTO_ARCH_OS).zip"
	unzip protoc.zip -d $(LOCALBIN)/.protoc-unpack
	mv -f $(LOCALBIN)/.protoc-unpack/bin/protoc $(LOCALBIN)/protoc
	cp -a $(LOCALBIN)/.protoc-unpack/include/* $(PROTOC_IMPORTS_DIR)/
	rm -rf $(LOCALBIN)/.protoc-unpack/ protoc.zip

	$(CURL) -fL -o protobuf-javascript.zip "https://github.com/protocolbuffers/protobuf-javascript/releases/download/v$(PROTOBUF_JAVASCRIPT_VERSION)/protobuf-javascript-$(PROTOBUF_JAVASCRIPT_VERSION)-$(PROTO_ARCH_OS).zip"
	unzip protobuf-javascript.zip -d $(LOCALBIN)/.protobuf-javascript-unpack
	mv -f $(LOCALBIN)/.protobuf-javascript-unpack/bin/protoc-gen-js $(LOCALBIN)/protoc-gen-js
	cp -a $(LOCALBIN)/.protobuf-javascript-unpack/google/* $(PROTOC_IMPORTS_DIR)/google/
	rm -rf $(LOCALBIN)/.protobuf-javascript-unpack/ protobuf-javascript.zip
	
	$(CURL) -fL -o protoc-gen-validate.zip "https://github.com/envoyproxy/protoc-gen-validate/archive/refs/tags/v$(PROTOC_GEN_VALIDATE_VERSION).zip"
	unzip protoc-gen-validate.zip -d $(LOCALBIN)/protoc-gen-validate-unpack
	mkdir -p $(PROTOC_IMPORTS_DIR)/validate/
	cp -a $(LOCALBIN)/protoc-gen-validate-unpack/protoc-gen-validate-$(PROTOC_GEN_VALIDATE_VERSION)/validate/validate.proto $(PROTOC_IMPORTS_DIR)/validate/
	rm -rf $(LOCALBIN)/protoc-gen-validate-unpack protoc-gen-validate.zip

	$(CURL) -fL -o $(LOCALBIN)/protoc-gen-grpc-web "https://github.com/grpc/grpc-web/releases/download/$(GRPC_WEB_VERSION)/protoc-gen-grpc-web-$(GRPC_WEB_VERSION)-$(GRPC_WEB_ARCH_OS)"
	chmod +x $(LOCALBIN)/protoc-gen-grpc-web