# Deploy

## Nginx

1. docker compose -f ./docker/nginx.docker-compose.yml --env-file ./envs/.nginx.env up -d --build

## ELK

1. Одиночный экземпляр HTTP: 
   docker compose -f ./elk/elastic.docker-compose.yml --env-file ./envs/.elk.env up -d --build
2. Кластер SSL: 
   docker compose -f ./elk/elastic-cluster.docker-compose.yml --env-file ./envs/.elk.env up -d --build
3. Запустить стартовый скрипт, который настроит пароли для системных пользователей:
   ./elk/scripts/start.sh
