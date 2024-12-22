source "./envs/.elk.env"
source "./elk/scripts/utils/create_roles.sh"
source "./elk/scripts/utils/create_user.sh"
source "./elk/scripts/utils/set_user_password.sh"

create_writer_role
create_monitor_role

# create_user user password role
create_user monitor monitor monitor
create_user writer writer writer

set_user_password ${KIBANA_SYSTEM_USER} ${KIBANA_SYSTEM_PASSWORD}

$SHELL