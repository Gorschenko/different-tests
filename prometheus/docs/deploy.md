## Prometheus

### Prometheus and Alertmanager

```
docker compose --file ./prometheus/prometheus.docker-compose.yml --env-file ./prometheus/.env up --detach
```

### Grafana

```
docker compose --file ./prometheus/grafana.docker-compose.yml --env-file ./prometheus/.env up --detach
```


## Exporters

### Pushgateway

```
docker compose --file ./prometheus/pushgateway.docker-compose.yml --env-file ./prometheus/.env up --detach
```

### Node

```
docker compose --file ./prometheus/node-exporter.docker-compose.yml --env-file ./prometheus/.env up --detach
```

### Redis

```
docker compose --file ./prometheus/redis-exporter.docker-compose.yml --env-file ./prometheus/.env up --detach
```
