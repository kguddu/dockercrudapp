FROM node:alpine

WORKDIR /app

COPY ./package.json /app

RUN  npm install

COPY . /app

CMD ["npm","start","0.0.0.0:3000"]
