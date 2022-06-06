FROM node:16

WORKDIR /usr/src/clean-node-api

COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts && npm rebuild bcrypt --build-from-source 