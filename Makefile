all: build

validate:
	@echo "Validating resource data..."
	@ruby scripts/validate_resource_data.rb

build: validate
	@echo "Building the website..."
	@hugo

serve:
	hugo server

clean:
	rm -rf public resources
