FROM node:9.11.1-alpine

ADD . /App
WORKDIR /App
RUN npm install
RUN npm run build

EXPOSE 4000
CMD [ "npm", "start" ]