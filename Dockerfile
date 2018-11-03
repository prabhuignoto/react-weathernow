ARG env
FROM mhart/alpine-node:latest as node-base
WORKDIR /usr/src/app
COPY ["./nginx.conf", "./weathernow.com", "./"]
RUN apk update && apk add --no-cache certbot && \
  mkdir /run/nginx && apk add --no-cache nginx && \
  adduser -D -g 'www' www &&  mkdir /var/www/weathernow && \
  mkdir /etc/nginx/sites-available && mkdir /etc/nginx/sites-enabled && \
  yes | cp -rf ./nginx.conf /etc/nginx/ && cp ./weathernow.com /etc/nginx/sites-available/ && \
  ln -s /etc/nginx/sites-available/weathernow.com /etc/nginx/sites-enabled/weathernow.com && \
  rm /etc/nginx/conf.d/default.conf

COPY ["./package.json", "./yarn.lock", "./"]

FROM node-base as development-build
RUN yarn install --development

FROM node-base as production-build
RUN yarn install --production

FROM ${env}-build
ARG env
ENV env=${env}
COPY . .
RUN yarn run build && cp -a ./build/. /var/www/weathernow && \
  mv ./run.sh ../ && cd .. && rm -r ./app/* && mv ./run.sh ./app
CMD [ "./run.sh" ]