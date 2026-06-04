all: build

build:
	@echo "Building the website..."
	@hugo

serve:
	hugo server --baseURL http://localhost:1313/links/ --appendPort=false

clean:
	rm -rf public resources
