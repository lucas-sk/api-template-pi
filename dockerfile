FROM node:alpine
WORKDIR /usr/app
COPY package.json ./ yarn.lock ./
COPY prisma ./prisma/
RUN yarn
COPY . .
RUN yarn generate
EXPOSE 3000
CMD [ "yarn", "dev"]
