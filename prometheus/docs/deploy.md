## Prometheus

### Запуск Prometheus

```
docker compose --file ./prometheus/prometheus.docker-compose.yml --env-file ./prometheus/.env up --detach
```

## Exporters

### Node

```
docker compose --file ./prometheus/node-exporter.docker-compose.yml --env-file ./prometheus/.env up --detach
```

### Redis

```
docker compose --file ./prometheus/redis-exporter.docker-compose.yml --env-file ./prometheus/.env up --detach
```
