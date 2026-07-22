FROM docker.io/node:20

# dsx what does this do why isn't it in client?
WORKDIR /usr/src

COPY ./out/ .

EXPOSE 8097
ENV REDIS_URL=redis://redis-master:6379

CMD ["node", "index.js"]
