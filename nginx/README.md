## Директивы:

- include PATH_TO_FILE - позволяет подключать другие файлы;
- client_max_body_size VALUE - определяет максимальный размер файла;
- return HTTP_CODE URL/TEXT - возвращает текст или делает редирект. Частый пример использования - редирект всех доменов на HTTPS - return 301 https://$host$request_uri/;

### Server

Определяет виртуальный хост.

- server_name DNS_NAME_1 DNS_NAME_2 - указывает какие dns имена будет обрабатывать сервер;
- listen PORT OPTIONS - определяет порт.

OPTIONS:

1. listen 443 ssl
2. listen 80 default_server - запросы без указания host будут обарабатываться этим сервером.
