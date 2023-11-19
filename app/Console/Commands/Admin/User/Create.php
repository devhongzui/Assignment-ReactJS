<?php

namespace App\Console\Commands\Admin\User;

use App\Models\User;
use Backpack\PermissionManager\app\Models\Permission;
use Illuminate\Console\Command;
use Illuminate\Contracts\Console\PromptsForMissingInput;
use function Laravel\Prompts\search;

class Create extends Command implements PromptsForMissingInput
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:user:create
                            {user_id    : Administrator ID}
                            {permission : Permission      }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Name new Administrator';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle(): void
    {
        User
            ::find($this->argument('user_id'))
            ->givePermissionTo($this->argument('permission'));

        $this->info(__('Added Administrator successfully!'));
    }

    /**
     * @return array
     */
    protected function promptForMissingArgumentsUsing(): array
    {
        if (!Permission::first())
            Permission::create(['name' => 'Admin']);

        return [
            'user_id' => fn(): int => search(
                __('Select New Administrator'),
                fn($search_query) => $this->getUsers($search_query),
                User::first()->email ?? __('Empty board!')
            ),
            'permission' => fn() => search(
                __('Select Permissions'),
                fn($search_query) => $this->getPermissions($search_query),
                Permission::first()->name
            ),
        ];
    }

    /**
     * @param string $search_query
     * @return array
     */
    protected function getUsers(string $search_query): array
    {
        return strlen($search_query) > 0
            ? User::where('email', 'like', "%$search_query%")->pluck('email', 'id')->all()
            : array();
    }

    /**
     * @param string $search_query
     * @return array
     */
    protected function getPermissions(string $search_query): array
    {
        return strlen($search_query) > 0
            ? Permission::where('name', 'like', "%$search_query%")->pluck('name')->all()
            : array();
    }
}
