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
<x-backpack::menu-dropdown :title="__('Add-ons')" icon="fa-solid fa-puzzle-piece">
    <x-backpack::menu-dropdown-header :title="__('Authentication')" />
    <x-backpack::menu-dropdown-item :title="__('backpack::permissionmanager.users')"
                                    :link="backpack_url('user')" icon="fa-solid fa-user" />
    <x-backpack::menu-dropdown-item :title="__('backpack::permissionmanager.roles')"
                                    :link="backpack_url('role')" icon="fa-solid fa-users" />
    <x-backpack::menu-dropdown-item :title="__('backpack::permissionmanager.permission_plural')"
                                    :link="backpack_url('permission')" icon="fa-solid fa-key" />
</x-backpack::menu-dropdown>
