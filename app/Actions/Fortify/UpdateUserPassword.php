<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\UpdatesUserPasswords;

class UpdateUserPassword implements UpdatesUserPasswords
{
    use PasswordValidationRules;

    /**
     * Validate and update the user's password.
     *
     * @param array<string, string> $input
     */
    public function update(User $user, array $input): void
    {
        $validated = Validator::validate($input, [
            'password' => $this->passwordRegister(),
        ]);

        $password = bcrypt($validated['password']);

        $user
            ->forceFill(['password' => $password])
            ->save();
    }
}
