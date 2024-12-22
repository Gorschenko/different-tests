create_user() {
  local user=$1
  local password=$2
  local role=$3
  local url="${ES_URL}/_security/user/${user}"
  local content_type="Content-Type: application/json"
  local request_body='{
    "password" : "'$2'",
    "roles" : [ "'$3'" ]
  }'

  echo "Creation ${user} user with ${role} is started"

  curl -k -X POST "${url}" \
    -H "${content_type}" \
    -u "${ES_SYSTEM_USER}:${ES_SYSTEM_PASSWORD}" \
    -d "${request_body}"
}