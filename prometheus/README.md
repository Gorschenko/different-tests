## Deploy

### Запуск Prometheus

```
docker compose --file ./prometheus/prometheus.docker-compose.yml --env-file ./prometheus/.env up --detach
```

### Запуск Node Exporter

```
docker compose --file ./prometheus/node-exporter.docker-compose.yml --env-file ./prometheus/.env up --detach
```
