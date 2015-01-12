SASS_DIR = ./public/assets/sass
CSS_DIR = ./public/assets/css
PID_FILE = .watchers

all: build

build: sass coffee require
prod: sass coffee require remove_js move_built_file

sass: 
	@echo "Compiling Sass..."
	@`which sass` --compass --style=compressed ${SASS_DIR}:${CSS_DIR} --update

webpack:
	@echo "Running webpack"
	exec webpack --progress -cdw --display-error-details --display-chunks

remove_css:
	@echo "Removing CSS..."
	@rm -f ${CSS_DIR}/*.css

watch:
	@echo "Running Sass and Webpack in watch mode"
	@`webpack -dw` assets/coffee public/js &> /dev/null & echo $$! >> ${PID_FILE}
	@`which sass` --watch assets/sass:public/css -t compact --compass &> /dev/null & echo $$! >> ${PID_FILE}

unwatch:
	@if [ -f ${PID_FILE} ]; then \
		echo 'Watchers stopped'; \
		for pid in `cat ${PID_FILE}`; do kill -9 $$pid; done; \
		rm ${PID_FILE}; \
	fi;
