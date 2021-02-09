# base
FROM node:12.18-alpine AS base
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn --pure-lockfile --silent

# source
FROM base as src
COPY . .

# production
FROM src as prod
CMD ["yarn", "start"]
