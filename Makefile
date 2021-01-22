install:
	npm install

build:
	npm run build

develop:
	npm start

lint:
	npx eslint './src/**/*{.js,.jsx}'

test:
	npx react-scripts test --watchAll=false

.PHONY: build
