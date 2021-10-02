install:
	npm install

build:
	npm run build

develop:
	npm start

start: develop

lint:
	npx editorconfig-checker
	npx eslint './src/**/*{.js,.jsx}'

test:
	npx react-scripts test --watchAll=false

test-screenshot:
	SCREENSHOT_MODE=local npx jest -c jest.screenshot.config.js

deploy:
	npx surge ./build/

.PHONY: build
