## Deploy

### Nginx

1. docker compose -f ./docker/nginx.docker-compose.yml --env-file ./envs/.nginx.env up -d --build

### ELK

1. docker compose -f ./elk/docker-compose.yml up -d --build