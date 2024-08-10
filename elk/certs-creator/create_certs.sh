
# Создаем сертификаты для соединения между экземплярами ES по HTTPS

# Создаем доверенный сертификат (СА)
elasticsearch-certutil ca --out config/certs/elastic-stack-ca.p12 --pass ""

# Создаем SSL-сертификат и ключ
elasticsearch-certutil cert \
    --ca config/certs/elastic-stack-ca.p12 --ca-pass "" \
    --out config/certs/elasticsearch-certificates.p12 --pass ""
    # Если указать, то создаcт сертификаты и ключи для каждого узла.
    # Далее можно установить мод, который будет проверять не только сертификаты, но
    # и адреса узлов, перечисленных в файле - full
    # --in certs/instances.yml
    # --out certs/elasticsearch-certificates.zip \
    # --pass ""
# Далее необходимо разархивировать
# unzip certs/elasticsearch-certificates.zip -d certs
# rm certs/elasticsearch-certificates.zip 

# Создаем сертификаты для подключения Kibana, Logstash и ES по HTTPS

# elasticsearch-certutil http <<EOF
# n
# y 
# certs/elastic-stack-ca.p12
# password
# 12M
# n - generate certs for miltiple nodes
# es1 - dns of nodes, which kibana or logstash will be connect
# ENTER - confirm dns
# y - confirm dns
# enter ips (empty field)
# y - confirm ips
# n - change info about certs
# password
# name of file
# EOF

# Создаем сертификаты для соединения между Клиентами и Kibana по HTTPS 

elasticsearch-certutil cert \
    -ca config/certs/elastic-stack-ca.p12 --ca-pass "" \
    --out config/certs/kibana-certificates.p12 --pass ""