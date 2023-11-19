<?php

namespace App\Providers;

use Backpack\ActivityLog\Http\Controllers\ActivityLogCrudController;
use Backpack\PermissionManager\app\Http\Controllers\UserCrudController;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        set_time_limit(60);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(
            ActivityLogCrudController::class,
            \App\Http\Controllers\Admin\ActivityLogCrudController::class
        );

        $this->app->bind(
            UserCrudController::class,
            \App\Http\Controllers\Admin\UserCrudController::class
        );
    }
}
