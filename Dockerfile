FROM --platform=linux/amd64 node:lts-alpine

LABEL maintainer="DeprivedStudios"

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "http-server", "dist", "-p 25001" ]