.PHONY: help
help:
	@echo "Usage: make <target>"
	@echo
	@echo "Main targets:"
	@echo
	@echo "- build               Compile the application"
	@echo "- serve               Run the development server"
	@echo

.PHONY: build
build: dist/app.js dist/index.html

dist/app.js: config.json src/main.js
	mkdir -p $(dir $@)
	# compile using closure-util
	./../node_modules/.bin/closure-util build config.json dist/app.js

dist/index.html: index.html
	mkdir -p $(dir $@)
	# replace the include for the development server with an include
	# for the built file
	sed -e 's|@?main=.*.js|app.js|' index.html > dist/index.html

.PHONY: serve
serve: config.json
	./../node_modules/.bin/closure-util serve config.json
