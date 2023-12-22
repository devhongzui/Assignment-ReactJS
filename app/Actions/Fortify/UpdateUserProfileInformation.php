<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\UpdatesUserProfileInformation;

class UpdateUserProfileInformation implements UpdatesUserProfileInformation
{
    /**
     * Validate and update the given user's profile information.
     *
     * @param array<string, string> $input
     */
    public function update(User $user, array $input): void
    {
        $validated = Validator::validate($input, [
            'name' => ['required', 'string', 'max:50'],
            'email' => [
                'required',
                'email:rfc,dns',
                'max:50',
                Rule::unique(User::class)->ignore($user->id)
            ],
            'phone_number' => ['nullable', 'numeric', 'digits:10'],
            'province_code' => ['nullable', 'numeric'],
            'district_code' => ['required_with:province_code', 'numeric'],
            'sub_district_code' => ['required_with:province_code', 'numeric'],
            'address_detail' => ['required_with:province_code', 'nullable', 'string', 'max:100'],
            'birthdate' => [
                'required',
                'date',
                'after:' . Carbon::parse('this day 80 years ago'),
                'before:' . Carbon::parse('this day 10 years ago')
            ],
            'gender' => ['required', 'int'],
        ]);

        $user->fill($validated);

        $this->updateVerifiedUser($user, $input);

        $user->save();
    }

    /**
     * Update the given verified user's profile information.
     *
     * @param array<string, string> $input
     */
    protected function updateVerifiedUser(User $user, array $input): void
    {
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
            $user->sendEmailVerificationNotification();
        }

        if ($user->isDirty('phone_number'))
            $user->phone_number_verified_at = null;
    }
}
