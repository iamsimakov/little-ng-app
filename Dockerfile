FROM node:12.12.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . ./
CMD ["npm", "start"]
