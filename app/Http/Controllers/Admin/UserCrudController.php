<?php

namespace App\Http\Controllers\Admin;

class UserCrudController extends \Backpack\PermissionManager\app\Http\Controllers\UserCrudController
{
    /**
     * @return void
     */
    public function setupShowOperation()
    {
        $this->setupListOperation();
    }
}
