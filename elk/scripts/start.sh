source "./envs/.elk.env"
source "./elk/scripts/helpers/create_roles.sh"
source "./elk/scripts/helpers/create_user.sh"
source "./elk/scripts/helpers/set_user_password.sh"

create_logstash_writer_role

# user password role
create_user custom_kibana custom_kibana kibana_user
create_user logstash_writer logstash_writer logstash_writer

set_user_password ${KIBANA_SYSTEM_USER} ${KIBANA_SYSTEM_PASSWORD}
set_user_password ${LOGSTASH_SYSTEM_USER} ${LOGSTASH_SYSTEM_PASSWORD}

$SHELL