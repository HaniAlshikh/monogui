SHELL := bash

HELM ?= helm
DOCKER ?= docker
KIND ?= kind

BUILD_PATH_TMP ?= $(shell pwd)
BUILD_PATH = $(shell [ "$(BUILD_PATH_TMP)" = "/" ] && echo "." || echo $(BUILD_PATH_TMP))
NODEBIN ?= $(BUILD_PATH)/node_modules/.bin
LOCALBIN ?= $(BUILD_PATH)/bin
$(LOCALBIN):
	mkdir -p $(LOCALBIN)

VERSION ?= 0.0.1-local
KUBE_NAMESPACE ?= monoskope
LATEST_REV = $(shell git rev-list --tags --max-count=1 2>/dev/null)
LATEST_TAG = $(shell git describe --tags $(LATEST_REV) 2>/dev/null)

export M8GUI_OPERATION_MODE = development
M8_VERSION ?= 0.5.2

##@ General

# The help target prints out all targets with their descriptions organized
# beneath their categories. The categories are represented by '##@' and the
# target descriptions by '##'. The awk commands is responsible for reading the
# entire set of makefiles included in this invocation, looking for lines of the
# file as xyz: ## something, and then pretty-format the target and help. Then,
# if there's a line with ##@ something, that gets pretty-printed as a category.
# More info on the usage of ANSI control characters for terminal formatting:
# https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_parameters
# More info on the awk command:
# http://linuxcommand.org/lc3_adv_awk.php

help: ## Display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

show-latest-tag: ## Echos the latest tag
	@echo "Latest tag is $(LATEST_TAG)"

.PHONY: clean
clean: ## Clean up build dependencies
	rm -R $(LOCALBIN)

export
include helm.mk
include js.mk
include react.mk