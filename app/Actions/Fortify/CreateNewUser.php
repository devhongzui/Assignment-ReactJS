<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravolt\Avatar\Avatar;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param array<string, string> $input
     */
    public function create(array $input): User
    {
        $after = Carbon::parse('this day 80 years ago');
        $before = Carbon::parse('this day 10 years ago');
        $user = User::class;

        $validated = Validator::validate($input, array_merge([
            'name' => ['required', 'string', 'max:50'],
            'birthdate' => ['required', 'date', 'after:' . $after, 'before:' . $before],
            'gender' => ['required', 'int'],
            'email' => ['required', 'email:rfc,dns', 'max:50', 'unique:' . $user],
            'terms' => ['required', 'accepted'],
        ], [
            'password' => $this->passwordRegister()
        ]));

        $validated['avatar'] = app(Avatar::class)->create($validated['email'])->toGravatar();
        $validated['password'] = bcrypt($validated['password']);

        $user = User::create($validated);

        event(new Registered($user));

        return $user;
    }
}
