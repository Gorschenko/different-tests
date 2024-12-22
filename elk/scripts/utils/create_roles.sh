create_writer_role() {
  local role="writer"
  local url="${ES_URL}/_security/role/${role}"
  local content_type="Content-Type: application/json"
  local request_body='{
    "cluster": ["manage_index_templates", "monitor", "manage_ilm"],
    "indices": [
      {
        "names": ["*"],
        "privileges": ["write","create","create_index","manage","manage_ilm"]
      }
    ]
  }'

  echo "Creation ${role} role is started"

  curl -k -X POST "${url}" \
    -H "${content_type}" \
    -u "${ES_SYSTEM_USER}:${ES_SYSTEM_PASSWORD}" \
    -d "${request_body}"
}

create_monitor_role() {
  local role="monitor"
  local url="${ES_URL}/_security/role/${role}"
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
    -u "${ES_SYSTEM_USER}:${ES_SYSTEM_PASSWORD}" \
    -d "${request_body}"
}