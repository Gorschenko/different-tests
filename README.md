## Deploy

### Nginx

1. docker compose -f ./docker/nginx.docker-compose.yml --env-file ./envs/.nginx.env up -d --build

### ELK

1. docker compose -f ./elk/docker-compose.yml up -d --build
2. Настроить пароли для системных пользователей:
    docker exec -it elk-es1-1 /bin/bash bin/elasticsearch-setup-passwords interactive
Далее следовать инструкции.