.SILENT: install test build
all: install test build

install: install_ui install_server

install_ui: 
	echo "Installing UI dependencies"
	cd frontend ; npm install

install_server:
	echo "Installing Server dependencies"
	cd backend ; npm install

test: test_ui

test_ui:
	echo "Testing UI components"
	cd frontend ; npm test -- --coverage

build: build_server build_ui

build_ui:
	echo "Building UI"
	cd frontend ; npm run build

build_server:
	echo "Building Server"
	cd backend ; npm run build

build_image:
	echo "Building the app"
	docker build -t rjmarques/personal-website .
	echo "Runnable docker image: rjmarques/personal-website"

run:
	echo "Running app in container"
	docker run --rm -p 80:80/tcp --env RECAPTCHA_SECRET --env CONTACT_EMAIL --env SMTP_HOST --env SMTP_USER --env SMTP_PASS rjmarques/personal-website
