FROM node:18-alpine AS build
WORKDIR /usr/src/app
ENV NODE_ENV=production
ADD package.json .
ADD yarn.lock .
ADD service.js .
ADD schema.graphql .
RUN yarn
CMD ["yarn", "start"]