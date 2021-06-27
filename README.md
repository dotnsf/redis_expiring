# Redis Expiring

## Overview

Sample application which use Redis with expireat attribute.

This application demonstrates get/set values into Redis, which data is going to expire automatically. 

When getting, application would  ..

1. search data from Redis. If found, application would return that value.

2. If not found(first time or expired), application generate new value and set it into Redis with expiring period. Then application would return that generated value.


## How to run with docker

- Run Redis image as container:

  - `$ docker run -d --name redisserver -p 6379:6379 redis`

- Run app with REDIS_SERVER( and REDIS_PORT ) as environment variable:

  - `$ REDIS_SERVER=localhost node app`

- Access to application:

  - http://localhost:8080/{num}


## Copyright

2021 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
