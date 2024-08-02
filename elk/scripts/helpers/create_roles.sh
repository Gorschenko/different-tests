create_logstash_writer_role() {
  local url="${ELASTICSEARCH_URL}/_security/role/logstash_writer"
  local content_type="Content-Type: application/json"
  local request_body='{
    "cluster": ["manage_index_templates", "monitor", "manage_ilm"],
    "indices": [
      {
        "names": ["logstash-*"],
        "privileges": ["write","create","create_index","manage","manage_ilm"]
      }
    ]
  }'

  echo "Creation logstash_writer role is started"

  curl -X POST "${url}" \
    -H "${content_type}" \
    -u "${ELASTICSEARCH_SYSTEM_USER}:${ELASTICSEARCH_SYSTEM_PASSWORD}" \
    -d "${request_body}"
}