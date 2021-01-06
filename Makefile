#!make

export STAGE=dev
export TAG?=latest
export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1
export NODE_ENV=development
export REPO?=$(shell basename ${PWD})

# --------------------------------------------------------
# 
.PHONY: up
all: up
up:
	@docker-compose -f docker-compose.${STAGE}.yml up -d --build
# --------------------------------------------------------
# Build a production image.
# 
.PHONY: build
build:
	@docker-compose -f docker-compose.${STAGE}.yml build
# --------------------------------------------------------
# Push the production image to hub.
# 
.PHONY: push
push: build
	@docker push ${PROD_IMAGE}
# --------------------------------------------------------
# Stop all containers
# 
.PHONY: stop
stop:
	@docker-compose -f docker-compose.${STAGE}.yml down
# --------------------------------------------------------
# Remove the container, image and clear the builder cache.
# 
.PHONY: clean
clean:
	@docker-compose -f docker-compose.${STAGE}.yml down --rmi all -v --remove-orphans
	@docker builder prune --force --filter type=exec.cachemount --filter=unused-for=24h
