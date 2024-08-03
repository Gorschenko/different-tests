
# Создаем сертификаты для соединения между экземплярами es

# Создаем доверенный сертификат (СА)
elasticsearch-certutil ca --out config/certs/elastic-stack-ca.p12 --pass ""

# Создаем SSL-сертификат и ключ
elasticsearch-certutil cert \
    --ca config/certs/elastic-stack-ca.p12 \
    --ca-pass "" \
    --out config/certs/elasticsearch-certificates.p12 \
    --pass ""
    # Если указать, то создаcт сертификаты и ключи для каждого узла.
    # Далее можно установить мод, который будет проверять не только сертификаты, но
    # и адреса узлов, перечисленных в файле - full
    # --in certs/instances.yml
    # --out certs/elasticsearch-certificates.zip \
    # --pass ""
# Далее необходимо разархивировать
# unzip certs/elasticsearch-certificates.zip -d certs
# rm certs/elasticsearch-certificates.zip 

# Создаем сертификаты для клиентского соединения

# elasticsearch-certutil http <<EOF
# n
# y 
# certs/elastic-stack-ca.p12
# password
# 12M
# n for miltiple nodes
# es1
# ENTER dns
# y
# ENTER ips
# y
# n
# password
# name of file
# EOF
# printf "\n"