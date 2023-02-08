NPM ?= npm

##@ React

.PHONY: react-install
react-install: ## Install dependencies
	$(NPM) install

.PHONY: react-start
react-start: ## Start development server
	$(NPM) run start