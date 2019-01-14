FROM node:8

WORKDIR /App

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000
CMD [ "npm", "start" ]