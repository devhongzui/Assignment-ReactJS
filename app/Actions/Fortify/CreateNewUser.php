<?php

namespace App\Actions\Fortify;

use App\Models\User;
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
        $validated = Validator::validate($input, [
            'name' => ['required', 'string', 'max:50'],
            'birthdate' => [
                'required',
                'date',
                'after:' . Carbon::parse('this day 80 years ago'),
                'before:' . Carbon::parse('this day 10 years ago')
            ],
            'gender' => ['required', 'int'],
            'email' => ['required', 'email:rfc,dns', 'max:50', 'unique:' . User::class],
            'terms' => ['required', 'accepted'],
            'password' => $this->passwordRegister(),
        ]);

        $validated['avatar'] = app(Avatar::class)->create($validated['email'])->toGravatar();
        $validated['password'] = bcrypt($validated['password']);

        return User::create($validated);
    }
}
