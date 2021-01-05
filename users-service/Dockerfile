# 
FROM node:12.18-alpine AS base
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn --pure-lockfile --silent

# 
FROM base as src
COPY . .

# 
FROM src as test
COPY . .
RUN yarn --pure-lockfile --silent
RUN yarn run test

# 
FROM src as prod
EXPOSE 3100
CMD ["yarn", "start"]
