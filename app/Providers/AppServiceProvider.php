<?php

namespace App\Providers;

use Backpack\ActivityLog\Http\Controllers\ActivityLogCrudController;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
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
    }
}
