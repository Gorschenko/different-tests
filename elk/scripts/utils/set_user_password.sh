set_user_password() {
  local user=$1
  local password=$2
  local url="${ES_URL}/_security/user/${user}/_password"
  local content_type="Content-Type: application/json"
  local request_body='{"password": "'$2'"}'

  echo "Set password for user ${user} is started"

  curl -k -X POST "${url}" \
    -H "${content_type}" \
    -u "${ES_SYSTEM_USER}:${ES_SYSTEM_PASSWORD}" \
    -d "${request_body}"
}