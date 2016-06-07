.PHONY: help
help:
	@echo "Usage: make <target>"
	@echo
	@echo "Main targets:"
	@echo
	@echo "- build          Compile the application"
	@echo "- build-debug    Compile with pretty-print"
	@echo

.PHONY: build
build: dist/app.js

dist/app.js: config.json src/main.js
	mkdir -p $(dir $@)
	./../node_modules/.bin/closure-util build config.json dist/app.js

.PHONY: build-debug
build-debug: dist/app-debug.js

dist/app-debug.js: config-debug.json src/main.js
	mkdir -p $(dir $@)
	./../node_modules/.bin/closure-util build config-debug.json dist/app-debug.js
