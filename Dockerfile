FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build && npm cache clean --force

EXPOSE 3000

CMD [ "npm", "start" ]