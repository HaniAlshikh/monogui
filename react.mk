NPM ?= npm

##@ React

.PHONY: react-start
react-start: ## Start development server
	$(NPM) run start