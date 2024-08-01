create_logstash_writer_role() {
  local user=$1
  local password=$2
  local url="${ELASTICSEARCH_URL}/_security/role/logstash_writer"
  local content_type="Content-Type: application/json"
  local request_body="{\"password\":\"${password}\"}"

  echo "Create logstash_writer is started"

  curl -X POST "${url}" -H "${content_type}" -u "${ELASTICSEARCH_SYSTEM_USER}:${ELASTICSEARCH_SYSTEM_PASSWORD}" -d "${request_body}"
}