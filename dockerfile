FROM node:14-alpine

COPY  .  /work

WORKDIR /work

RUN yarn install

CMD ["yarn", "start"]