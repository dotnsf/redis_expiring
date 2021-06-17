# Redis Expiring

## Overview

Sample application which use Redis with expireat attribute.


## How to run with docker

- Run Redis image as container:

  - `$ docker run -d --name redisserver -p 6379:6379 redis`

- Run app:

  - `$ REDIS_SERVER=localhost node app`

- Access to application:

  - http://localhost:8080/


## Copyright

2021 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
