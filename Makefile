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

build: node_modules
	npm run build

.PHONY: start tests lint format build

# Aliases
ci: lint tests
ci_and_build: ci build
.PHONY: ci ci_and_build
