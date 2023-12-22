<?php

namespace App\Actions\Fortify;

use Illuminate\Validation\Rules\Password;

trait PasswordValidationRules
{
    /**
     * @return array
     */
    protected function passwordRegister(): array
    {
        $password = Password::min(9)->numbers()->mixedCase()->symbols()->uncompromised();

        return ['required', 'string', 'max:50', 'confirmed', $password];
    }
}
