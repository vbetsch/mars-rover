# Requirements
node_modules:
	npm install

# Commands
start: node_modules
	npm run start

tests: node_modules
	npm test

lint: node_modules
	npm run lint

format: node_modules
	npm run format

.PHONY: start tests lint format

# Aliases
ci: lint tests
.PHONY: ci
