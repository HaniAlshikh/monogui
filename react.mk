NPM ?= yarn

##@ React

.PHONY: react-deploy
react-deploy: ## Build and deploy locally to k8s
	@[ "${MONOGUI_KIND_CLUSTER_NAME}" ] || ( echo ">> 'MONOGUI_KIND_CLUSTER_NAME' (monogui testing cluster to use when loading the local image) is not set"; exit 1 )
	$(DOCKER) build -f $(BUILD_PATH)/build/package/react.Dockerfile -t monogui:$(VERSION) $(BUILD_PATH)
	$(KIND) load --name $(MONOGUI_KIND_CLUSTER_NAME) docker-image monogui:$(VERSION)
	@$(HELM) upgrade -i monogui -n $(KUBE_NAMESPACE) --create-namespace $(HELM_PATH)/monogui --version $(VERSION) --values $(HELM_VALUES_EXAMPLE_FILE) \
		--set=image.pullPolicy=Never \
		--set=image.repository=monogui \
		--set=image.tag=$(VERSION)

.PHONY: react-install
react-install: yarn ## Install dependencies
	@$(NPM) install

.PHONY: react-build
react-build: js-protobuf ## build for production
	$(NPM) build

.PHONY: react-start
react-start: ## Start development server
	@ENV_FILE_PATH=.env.local $(BUILD_PATH)/env.sh && mv $(BUILD_PATH)/env.js $(BUILD_PATH)/public/
	$(NPM) run dev

.PHONY: react-install-ci
react-install-ci: yarn ## Install production dependencies only
	@$(NPM) install --prod --network-timeout 100000

##@ Build Dependencies

YARN ?= $(NODEBIN)/yarn

yarn: $(YARN) ## Download yarn locally if necessary.
$(YARN):
	@which npm >/dev/null || (echo "Node.js is required..." && exit 1)
	@npm install yarn@$(cat ./package.json | jq -r '.devDependencies["yarn"]') --no-save --no-package-lock
