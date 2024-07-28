source "./envs/.elk.env"
source "./elk/scripts/helpers/set_password.sh"

set_password kibana_system ${KIBANA_SYSTEM_PASSWORD}
set_password logstash_system ${LOGSTASH_SYSTEM_PASSWORD}