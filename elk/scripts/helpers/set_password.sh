set_password() {
  local user=$1
  local password=$2
  local url="${ELASTICSEARCH_URL}/_security/user/${user}/_password"

  echo "Set password for user ${user} is started"

  curl -X POST "${url}" -H "Content-Type: application/json" -u "elastic:${ELASTICSEARCH_PASSWORD}" -d "{\"password\":\"${password}\"}"
}