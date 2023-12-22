<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Laravel\Fortify\Contracts\ResetsUserPasswords;

class ResetUserPassword implements ResetsUserPasswords
{
    /**
     * Validate and reset the user's forgotten password.
     *
     * @param array<string, string> $input
     */
    public function reset(User $user, array $input): void
    {
        $user
            ->forceFill(['password' => bcrypt($input['password'])])
            ->save();
    }
}
