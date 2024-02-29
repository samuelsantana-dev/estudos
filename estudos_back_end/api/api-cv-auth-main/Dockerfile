FROM node:14.17.0-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

FROM base AS local

EXPOSE 8000

CMD [ "yarn", "dev" ]

FROM base AS dev

EXPOSE 8000

CMD [ "yarn", "dev" ]

FROM base AS prod

RUN yarn build

EXPOSE 8000

CMD [ "yarn", "start" ]