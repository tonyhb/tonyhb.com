COFFEE_DIR = ./assets/coffee
JS_DIR = ./public/js
SASS_DIR = ./assets/sass
CSS_DIR = ./public/css
PID_FILE = .watchers

all: build

build: sass coffee require
prod: sass coffee require remove_js move_built_file

sass: 
	@echo "Compiling SASS..."
	@`which sass` --compass --style=compressed ${SASS_DIR}:${CSS_DIR} --update

coffee:
	@echo "Compiling CoffeeScript..."
	@`which coffee` -o public/js/ -c assets/coffee

require:
	@echo "Optimizing via RequireJS..."
	@`which r.js` -o build.js > /dev/null

remove_js:
	@echo "Removing JS..."
	@rm -rf ${JS_DIR}/collection
	@rm -rf ${JS_DIR}/model
	@rm -rf ${JS_DIR}/view
	@rm -f ${JS_DIR}/*.js

remove_css:
	@echo "Removing CSS..."
	@rm -f ${CSS_DIR}/*.css

move_built_file:
	@echo "Moving RequireJS optimized file..."
	@mv app-built.js ${JS_DIR}/

clean:
	@echo "RequireJS optimized file removed"
	@rm -f "app-built.js"
	@rm -f "public/js/app-built.js"

watch:
	@echo "Watching Coffee and SASS files"
	@`which jitter` assets/coffee public/js &> /dev/null & echo $$! >> ${PID_FILE}
	@`which sass` --watch assets/sass:public/css -t compact --compass &> /dev/null & echo $$! >> ${PID_FILE}

unwatch:
	@if [ -f ${PID_FILE} ]; then \
		echo 'Watchers stopped'; \
		for pid in `cat ${PID_FILE}`; do kill -9 $$pid; done; \
		rm ${PID_FILE}; \
	fi;
