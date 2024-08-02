# Deploy

## Nginx

1. docker compose -f ./docker/nginx.docker-compose.yml --env-file ./envs/.nginx.env up -d --build

## ELK

1. Одиночный экземпляр: 
   docker compose -f ./elk/elastic.docker-compose.yml --env-file ./envs/.elk.env up -d --build
2. Кластер: 
   docker compose -f ./elk/elastic-cluster.docker-compose.yml --env-file ./envs/.elk.env up -d --build
3. Запустить стартовый скрипт, который настроит пароли для системных пользователей:
   ./elk/scripts/start.sh

### Роли

Список ролей:
- superuser: Полные права доступа ко всем API Elasticsearch и Kibana.
- kibana_admin: Полные права доступа ко всем возможностям Kibana, включая управление данными и настройками.
- kibana_user: Базовые права для доступа к интерфейсу Kibana и работы с дашбордами, визуализациями и другими функциями.
- read_only: Права только на чтение всех данных.
- logstash_system: Используется для взаимодействия Logstash с Elasticsearch.
- monitoring_user: Права на просмотр данных мониторинга.
- remote_monitoring_agent: Права, необходимые для агента удаленного мониторинга.
- remote_monitoring_collector: Права, необходимые для сборщика удаленного мониторинга.
- ingest_admin: Права на управление конвейерами обработки данных.
- machine_learning_user: Права доступа к функциям машинного обучения.

- Проверка успешного создания роли:
curl -u "elastic:elastic" -X GET "http://localhost:9200/_security/role/${ROLE}"

- Если не указать ${ROLE}, то отдаст массив.
- Аналогично можно использовать другие методы этого пути: put, delete, post.

### Пользователи
- Проверка успешного создания пользователя:
curl -u "elastic:elastic" -X GET "http://localhost:9200/_security/user/${USER}"
Если не указать ${ROLE}, то отдаст массив
