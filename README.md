## Deploy

### Nginx

1. docker compose -f ./docker/nginx.docker-compose.yml --env-file ./envs/.nginx.env up -d --build

### ELK

1. docker compose -f ./elk/docker-compose.yml --env-file ./envs/.elk.env up -d --build
2. Запустить стартовый скрипт, который настроит пароли для системных пользователей:
   ./elk/scripts/start.sh
