source "./envs/.elk.env"
source "./elk/scripts/helpers/set_password.sh"

set_password ${KIBANA_SYSTEM_USER} ${KIBANA_SYSTEM_PASSWORD}
set_password ${LOGSTASH_SYSTEM_USER} ${LOGSTASH_SYSTEM_PASSWORD}

$SHELL