HELM                        ?= helm
HELM_PATH 		              ?= build/package/helm
HELM_VALUES_FILE            ?= build/package/helm/values.yaml
HELM_VALUES_EXAMPLE_FILE    ?= build/deploy/setup/monogui.yaml
HELM_OUTPUT_DIR             ?= tmp/helm
HELM_REGISTRY               ?= https://alshikh.de/charts
HELM_REGISTRY_ALIAS         ?= HaniAlshikh
HELM_RELEASE                ?= monogui

.PHONY: template-clean dependency-update install uninstall template docs

##@ Helm

helm-clean: ## clean up templated helm charts
	@rm -Rf $(HELM_OUTPUT_DIR)

helm-dep-%: ## update helm dependencies
	@$(HELM) dep update $(HELM_PATH)/$*

helm-lint: ## lint helm chart
	@$(HELM) lint $(HELM_PATH)/**

helm-install-from-repo: ## install helm chart from build artifact
	@$(HELM) repo update
	@$(HELM) upgrade --install $(HELM_RELEASE) $(HELM_REGISTRY_ALIAS)/monogui --namespace $(KUBE_NAMESPACE) --version $(VERSION) --values $(HELM_VALUES_EXAMPLE_FILE) --skip-crds

helm-uninstall: ## uninstall helm chart
	@$(HELM) uninstall $(HELM_RELEASE) --namespace $(KUBE_NAMESPACE)

helm-template: helm-clean ## template helm chart
	@mkdir -p $(HELM_OUTPUT_DIR)
	@$(HELM) template --debug $(HELM_RELEASE) $(HELM_PATH)/monogui --namespace $(KUBE_NAMESPACE) --values $(HELM_VALUES_EXAMPLE_FILE) --output-dir $(HELM_OUTPUT_DIR) --include-crds

helm-add-chart: ## add h-s helm chart repo
	@$(HELM) repo add $(HELM_REGISTRY_ALIAS) "$(HELM_REGISTRY)"

helm-set-version-all:
	@find $(HELM_PATH) -name 'Chart.yaml' -exec $(YQ) e --inplace '.version = "$(VERSION)"' {} \;
	@find $(HELM_PATH) -name 'Chart.yaml' -exec $(YQ) e --inplace '.appVersion = "$(VERSION)"' {} \;
	@find $(HELM_PATH) -name 'Chart.yaml' -exec $(YQ) e --inplace '(.dependencies.[].version | select(. == "0.0.1-local")) |= "$(VERSION)"' {} \;

helm-docs: ## update the auto generated docs of all helm charts
	@docker run --rm --volume "$(PWD):/helm-docs" -u $(shell id -u) jnorwood/helm-docs:v1.4.0 --template-files=./README.md.gotmpl
