node_modules:
	npm install


start: node_modules
	npm run start

tests: node_modules
	npm test

lint: node_modules
	npm run lint

format: node_modules
	npm run format

.PHONY: start tests lint format
