
# 1. Создаем сертификаты для взаимодействия между узлами ES

# 1. Создаем доверенный сертификат (СА)
elasticsearch-certutil ca --out config/certs/elastic-stack-ca.p12 --pass ""

# 2. Создаем сертификат сервера (для всех узлов ES)
elasticsearch-certutil cert \
    --ca config/certs/elastic-stack-ca.p12 --ca-pass "" \
    --out config/certs/elasticsearch-certificates.p12 --pass ""

# Можно добавить проверку по ip или dns - это улучшит систему безопаности.
# Для этого нужно докинуть ключи в cli:
# elasticsearch-certutil cert \
# --ca config/certs/elastic-stack-ca.p12 --ca-pass "" \
# --in certs/instances.yml \
# --out certs/elasticsearch-certificates.zip \
# --pass ""

# Далее необходимо разархивировать
# unzip certs/elasticsearch-certificates.zip -d certs
# Удаляем ненужный архив
# rm certs/elasticsearch-certificates.zip 

# 3. Создаем сертификат сервера (для всех узлов ES) и корневой сертификат клиента (Kibana, Logstash, Beats)

# elasticsearch-certutil http <<EOF
# n
# y 
# certs/elastic-stack-ca.p12
# password
# 12M
# n - generate certs for miltiple nodes
# es1,es2 - dns of nodes, which kibana or logstash will be connect
# ENTER - confirm dns
# y - confirm dns
# enter ips (empty field)
# y - confirm ips
# n - change info about certs
# password
# name of file
# EOF

# 4. Создаем сертифиат сервера (для Kibana) и Клиентами браузера
elasticsearch-certutil cert \
    -ca config/certs/elastic-stack-ca.p12 --ca-pass "" \
    --out config/certs/kibana-certificates.p12 --pass ""