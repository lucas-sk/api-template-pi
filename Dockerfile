FROM node:slim

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

CMD [ ".docker/start.sh"]
