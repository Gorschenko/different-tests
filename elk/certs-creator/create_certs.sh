# Создаем свой Центр сертификации (СА)
elasticsearch-certutil ca --out elastic-stack-ca.p12 --pass ""

# Создаем SSL-сертификаты
elasticsearch-certutil cert \
    --ca elastic-stack-ca.p12 \
    --ca-pass "" \
    --in certs/instances.yml \
    --out certs/elasticsearch-certificates.zip \
    --pass ""

unzip certs/elasticsearch-certificates.zip -d certs
rm certs/elasticsearch-certificates.zip