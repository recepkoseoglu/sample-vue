FROM mhart/alpine-node:10

ADD . /App
WORKDIR /App
RUN npm install
RUN npm run build

EXPOSE 4000
CMD [ "npm", "start" ]