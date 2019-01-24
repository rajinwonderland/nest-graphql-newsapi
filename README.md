[![](https://img.shields.io/github/forks/badges/shields.svg?label=Fork&style=social)](https://github.com/rajinwonderland/nest-graphql-newsapi/tree/master/)
[![](https://img.shields.io/github/followers/rajinwonderland.svg?label=Follow&style=social)](https://github.com/rajinwonderland)

<p align="center">
  <a href="https://v61olxo547.sse.codesandbox.io/graphql" target="blank"><img src="https://rawcdn.githack.com/rajinwonderland/nest-graphql-newsapi/b32a4448121d9cff1abfbe4e70c0b759216456d8/public/nestjs-graphql-example.png?raw=true"
      width="320" alt="Nest Logo" /></a>
</p>
<p align="center">A <a href="https://graphql.org/" target="_blank">GraphQL</a> REST wrapper example using the <a href="https://newsapi.org"
    target="_blank">NewsAPI</a> build with the <a href="https://nestjs.com/" target="_blank">NestJS</a> Framework</p>
<p align="center">
  <a href="https://codesandbox.io/s/42nz8kzl14?autoresize=1&expanddevtools=1&hidenavigation=1&view=editor">
    <img alt="Edit nest-graphql-example" src="https://codesandbox.io/static/img/play-codesandbox.svg">
  </a>
</p>

## Background

Recently came across the [NestJS](https://nestjs.org) while expirementing with different [Typescript](https://www.typescriptlang.org/) based frameworks for [GraphQL](https://graphql.org) specific use cases.

Official NestJS [Documentation for use with GraphQL](https://docs.nestjs.com/graphql/quick-start)

Official NestJS [GraphQL example](https://github.com/nestjs/nest/tree/master/sample/12-graphql-apollo)

## Configurations

**Step 1:**

Login or Sign Up for [NewsAPI](https://newsapi.org)

**Step 2:**

Go to [your account page](https://newsapi.org/account) and copy your API Token

**Step 3:**

Create a new `.env` file and add the following environment variable

> Note: you can rename the `.env.sample` to `.env` for the same results

```sh
NEWS_API_KEY="YOURAPIKEYHERE"
PORT=3000 # or your preferred port
```

## Installation

Clone the repo!

```bash
git clone https://github.com/rajinwonderland/nest-graphql-newsapi
```

Install dependencies

```bash
yarn
```

> OR

```bash
npm install
```

## Start the App

```bash
yarn start
```

> OR

```bash
npm run start
```

## Examples

### Top Headlines Example

**Query** for returning `TopHeadlines`

<a href="./docs/TopHeadlinesExample.md">
<img src="docs/thQuery.png" />
</a>

**Variables** for our `TopHeadlines` Query

<a href="./docs/TopHeadlinesExample.md">
<img src="docs/thVar.png" />
</a>

## Built With

- [NestJS](https://docs.nestjs.com) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [NewsAPI](https://newsapi.org) - Up-to-date news headlines and metadata in JSON from 70+ popular news sites.
- [newsapi](https://www.npmjs.com/package/newsapi)- A node interface for NewsAPI.
- [GraphQL](https://graphql.org/) a query language for your API
- [Typescript](https://github.com/Microsoft/TypeScript) a superset of JavaScript that compiles to clean JavaScript output
- [CodeSandbox](https://codesandbox.io) is an online code editor with a focus on creating and sharing web application projects.
- [Apollo Server 2](https://www.apollographql.com/docs/apollo-server/) the best way to quickly build a production-ready, self-documenting API for GraphQL clients, using data from any source.
- [GraphQL-Playground](https://github.com/prisma/graphql-playground) a GraphQL IDE for better development workflows (GraphQL Subscriptions, interactive docs & collaboration).

## Stay in touch

### Author Info

<img src="https://avatars3.githubusercontent.com/u/15880596?s=460&v=4" width="175px"/>

[Raj Singh](https://github.com/rajinwonderland)

[![](https://rawcdn.githack.com/rajinwonderland/badgesauce/475260743e433e8d11426b38a2e65ac7d1611a4a/github.svg)](https://github.com/rajinwonderland)

[![](https://rawcdn.githack.com/rajinwonderland/badgesauce/475260743e433e8d11426b38a2e65ac7d1611a4a/twitter.svg)](https://twitter.com/rajinwonderland)

<p align="center"><a href="https://www.novvum.io" target="_blank"><img src="https://rawcdn.githack.com/rajinwonderland/badgesauce/475260743e433e8d11426b38a2e65ac7d1611a4a/mwlNovvum.svg"/></a></p>
<p align="right">Powered by <a href="https://newsapi.org" target="_blank">NewsAPI.org</a>
</p>
