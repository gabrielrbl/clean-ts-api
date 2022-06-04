FROM node:16

WORKDIR /usr/src/clean-node-api

COPY package*.json ./

RUN npm ci --only=production --ignore-scripts && npm rebuild bcrypt --build-from-source 