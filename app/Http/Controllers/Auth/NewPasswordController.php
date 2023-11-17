<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Fortify\PasswordValidationRules;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Laravel\Fortify\Actions\CompletePasswordReset;
use Laravel\Fortify\Contracts\FailedPasswordResetResponse;
use Laravel\Fortify\Contracts\PasswordResetResponse;
use Laravel\Fortify\Contracts\ResetsUserPasswords;
use Laravel\Fortify\Fortify;

class NewPasswordController extends \Laravel\Fortify\Http\Controllers\NewPasswordController
{
    use PasswordValidationRules;

    /**
     * Reset the user's password.
     *
     * @param Request $request
     * @return Responsable
     */
    public function store(Request $request): Responsable
    {
        $validated = $request->validate([
            'token' => ['required'],
            Fortify::email() => ['required', 'email:rfc,dns', 'max:50'],
            'password' => $this->passwordRegister(),
        ]);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = $this->broker()->reset(
            $validated,
            function ($user) use ($validated) {
                app(ResetsUserPasswords::class)->reset($user, $validated);

                app(CompletePasswordReset::class)($this->guard, $user);
            }
        );

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        return $status == Password::PASSWORD_RESET
            ? app(PasswordResetResponse::class, ['status' => $status])
            : app(FailedPasswordResetResponse::class, ['status' => $status]);
    }
}
