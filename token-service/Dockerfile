FROM node:12.18-alpine

RUN mkdir -p /home/node/app/node_modules && \
  chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY ["package*.json", "yarn.lock", "./"]

RUN yarn --pure-lockfile --silent

COPY . .

EXPOSE 3010

CMD [ "yarn", "start" ]