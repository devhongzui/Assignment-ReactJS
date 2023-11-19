<x-backpack::menu-item :title="__('backpack::base.dashboard')" :link="backpack_url('dashboard')"
                       icon="fa-solid fa-house" />
<x-backpack::menu-item :title="__('backpack.activity-log::activity_log.activity_logs')"
                       :link="backpack_url('activity-log')" icon="fa-solid fa-bars-staggered" />
<x-backpack::menu-item :title="__('backpack::backup.backups')" :link="backpack_url('backup')"
                       icon="fa-solid fa-hard-drive" />
<x-backpack::menu-item :title="__('backpack::crud.file_manager')" icon="fa-solid fa-file"
                       :link="backpack_url('elfinder')" />
<x-backpack::menu-item :title="__('backpack::logmanager.logs')" :link="backpack_url('log')"
                       icon="fa-solid fa-terminal" />
