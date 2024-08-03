create_logstash_writer_role() {
  local role="logstash_writer"
  local url="${ELASTICSEARCH_URL}/_security/role/${role}"
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

  echo "Creation ${role} role is started"

  curl -k -X POST "${url}" \
    -H "${content_type}" \
    -u "${ELASTICSEARCH_SYSTEM_USER}:${ELASTICSEARCH_SYSTEM_PASSWORD}" \
    -d "${request_body}"
}

create_kibana_custom_role() {
  local role="kibana_custom"
  local url="${ELASTICSEARCH_URL}/_security/role/${role}"
  local content_type="Content-Type: application/json"
  local request_body='{
    "cluster": [],
    "indices": [
      {
        "names": ["*"],  
        "privileges": ["read", "view_index_metadata"]
      }
    ],
    "applications": [
      {
        "application": "kibana-.kibana",
        "privileges": ["read"],
        "resources": ["*"]
      }
    ]
  }'

  echo "Creation ${role} role is started"

  curl -k -X POST "${url}" \
    -H "${content_type}" \
    -u "${ELASTICSEARCH_SYSTEM_USER}:${ELASTICSEARCH_SYSTEM_PASSWORD}" \
    -d "${request_body}"
}