{{-- This file is used for menu items by any Backpack v6 theme --}}
<x-backpack::menu-item :title="__('backpack::base.dashboard')" :link="backpack_url('dashboard')"
                       icon="fa-solid fa-house" />
<x-backpack::menu-item :title="__('backpack.activity-log::activity_log.activity_logs')"
                       :link="backpack_url('activity-log')" icon="fa-solid fa-bars-staggered" />
<x-backpack::menu-item :title="__('backpack::backup.backups')" :link="backpack_url('backup')"
                       icon="fa-solid fa-hard-drive" />

<x-backpack::menu-item :title="trans('backpack::crud.file_manager')" icon="fa-solid fa-file"
                       :link="backpack_url('elfinder')" />
