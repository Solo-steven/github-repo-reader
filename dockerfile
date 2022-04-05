FROM node

COPY  .  /work

WORKDIR /work

RUN yarn install

CMD ["yarn", "start"]