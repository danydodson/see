FROM node:12.18-alpine

RUN mkdir -p /usr/src/app/node_modules && \
  chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn --pure-lockfile --silent

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "docker"]
