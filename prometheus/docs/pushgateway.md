## Description

- Предназначен для получения метрик с короткоживущих задач, например, cron-задачи.

## Deploy

```
docker compose --file ./prometheus/pushgateway.docker-compose.yml --env-file ./prometheus/.env up --detach
```
