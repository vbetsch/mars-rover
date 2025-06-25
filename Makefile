node_modules:
	npm install


start: node_modules
	npm run start

tests: node_modules
	npm test


.PHONY: start tests
