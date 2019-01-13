FROM mhart/alpine-node:10

ENV HOST 0.0.0.0

ADD . /App
WORKDIR /App
RUN npm install
RUN npm run build

EXPOSE 80
CMD [ "npm", "start" ]