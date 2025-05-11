## Description

- Предназначен для получения метрик с короткоживущих задач, например, cron-задачи.

## Deploy

```
docker compose --file ./prometheus/pushgateway.docker-compose.yml --env-file ./prometheus/.env up --detach
```

## Полезные запросы

- Отправка метрики cron_app_processed_users=112 с тегом job=cron_app.

```
echo "cron_app_processed_users 112" | curl --data-binary @- http://localhost:9091/metrics/job/cron_app
```

- Отправка метрики test_app_processed=12 с тегом type=users, job=test_app, instance=db1.

```
`echo 'test_app_processed{type="users"} 12' | curl --data-binary @- http://localhost:9091/metrics/job/test_app/instance/db1
```

- Удалить метрику job=test_app, instance=db1

```
curl -X DELETE http://localhost:9091/metrics/job/test_app/instance/db1
```
