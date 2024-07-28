## Deploy

### Nginx

1. docker compose -f ./docker/nginx.docker-compose.yml --env-file ./envs/.nginx.env up -d --build

### ELK

1. docker compose -f ./elk/docker-compose.yml --env-file ./envs/.elk.env up -d --build
2. Запустить стартовый скрипт, который настроит пароли для системных пользователей:
   ./elk/scripts/start.sh

- Проверка успешного создания роли:
curl -X GET "http://${ELASTICSEARCH_URL}/_security/role/${ROLE}"

- Проверка успешного создания пользователя:
curl -X GET "http://${ELASTICSEARCH_URL}/_security/user/${USER}"