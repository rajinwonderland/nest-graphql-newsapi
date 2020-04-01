FROM alpine:node:slim-8

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

RUN yarn global add @nestjs/cli@6.14.1

ENV PORT=3000
ENV GRAPHQL_ENV=production

COPY . .

CMD [ "nest","start" ]




