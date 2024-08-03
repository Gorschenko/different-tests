# Создаем доверенный сертификат (СА)
elasticsearch-certutil ca --out elastic-stack-ca.p12 --pass ""

# Создаем SSL-сертификат
elasticsearch-certutil cert \
    --ca elastic-stack-ca.p12 \
    --ca-pass "" \
    --out certs/elasticsearch-certificates.p12 \
    --pass ""
    # Если указать, то создаcт сертификаты для каждого узла.
    # Далее можно установить мод, который будет проверять не только сертификаты, но
    # и адреса узлов, перечисленных в файле
    # --out elasticsearch-certificates.zip \
    # --in certs/instances.yml
    # --pass ""
# Далее необходимо разархивировать
# unzip certs/elasticsearch-certificates.zip -d certs
# rm certs/elasticsearch-certificates.zip 
