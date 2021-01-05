#!make

# include .env
# export $(shell sed 's/=.*//' .env)

export DOCKER_BUILDKIT=1
export COMPOSE_DOCKER_CLI_BUILD=1

ENV=dev

REPO?=$(shell basename ${PWD})

# --------------------------------------------------------
# 
.PHONY: dev
all: dev
dev:
	@docker-compose -f docker-compose.${ENV}.yml up -d --build


# --------------------------------------------------------
# Build a production image.
# 
.PHONY: build
build:
	@docker-compose -f docker-compose.${ENV}.yml build


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
	@docker-compose -f docker-compose.${ENV}.yml down


# --------------------------------------------------------
# Remove the container, image and clear the builder cache.
# 
.PHONY: clean
clean:
	@docker-compose -f docker-compose.${ENV}.yml down --rmi all -v --remove-orphans
	@docker builder prune --force --filter type=exec.cachemount --filter=unused-for=24h
