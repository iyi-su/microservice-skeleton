FROM node:18-alpine AS build
WORKDIR /usr/src/app
ARG NODE_AUTH_TOKEN
ENV NODE_ENV=production
ADD package.json .
ADD yarn.lock .
ADD service.js .
ADD schema.graphql .
RUN yarn
CMD ["yarn", "start"]