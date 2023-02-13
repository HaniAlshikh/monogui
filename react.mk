NPM ?= yarn

##@ React

.PHONY: react-install
react-install: ## Install dependencies
	$(NPM) install

.PHONY: react-build
react-build: ## build for production
	$(NPM) build

.PHONY: react-start
react-start: ## Start development server
	$(NPM) run dev