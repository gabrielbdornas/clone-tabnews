.PHONY: help docker-start docker-exec docker-stop docker-clean docker-image nvm-install

.DEFAULT_GOAL := help

SHELL := /bin/bash
NVM_SH := $(HOME)/.nvm/nvm.sh

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}'

docker-start: ## Start the app container in the background
	@docker compose up -d

docker-exec: ## Open a shell inside the app container
	@docker compose exec app bash

docker-stop: ## Stop the app container
	@docker compose stop

docker-clean: ## Remove containers, images, volumes and orphans
	@docker compose down --rmi all --volumes --remove-orphans

docker-image: ## Build the image and start the app container
	@docker compose up --build

nvm-install: ## Install and use the node version defined in .nvmrc
	@. "$(NVM_SH)" && nvm install
