#!/bin/sh

if [ $env = "development" ]
then
  yarn run start
elif [ $env = "production" ]
then
  nginx -g 'daemon off;'
fi
