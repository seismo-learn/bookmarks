all: build

recent:
	@sh scripts/update-homepage-recent.sh

build: recent
	@echo "Building the website..."
	@hugo

serve: recent
	hugo server --baseURL http://localhost:1313/links/ --appendPort=false

clean:
	rm -rf public resources
