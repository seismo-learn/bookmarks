all: build

recent:
	@bash scripts/update-homepage-recent.sh

build: recent
	@echo "Building the website..."
	@hugo

serve: recent
	hugo server --baseURL http://localhost:1313/bookmarks/ --appendPort=false

clean:
	rm -rf public resources
