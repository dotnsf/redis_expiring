#! /bin/bash

docker network create my-network

docker run --name redisserver --network my-network redis

docker run --name myapp --network my-network -d -v REDIS_SERVER=redisserver -v REDIS_PORT=6379 -p 8080:8080 dotnsf/redis_expiring

