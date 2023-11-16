<?php

namespace App\Actions\Fortify;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Validation\Rules\Password;

trait PasswordValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @return array<int, Rule|array|string>
     */
    protected function passwordRules(): array
    {
        $password = Password::min(9)->numbers()->mixedCase()->symbols()->uncompromised();

        return ['string', 'max:20', 'confirmed', $password];
    }

    /**
     * @return array
     */
    protected function passwordRegister(): array
    {
        $password = Password::min(9)->numbers()->mixedCase()->symbols()->uncompromised();

        return ['required', 'string', 'max:50', 'confirmed', $password];
    }
}
