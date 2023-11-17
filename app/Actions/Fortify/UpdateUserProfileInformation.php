<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Carbon\Carbon;
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
        $after = Carbon::parse('this day 100 years ago');
        $before = Carbon::parse('this day 14 years ago');
        $unique = Rule::unique(User::class)->ignore($user->id);

        $validated = Validator::validate($input, [
            'name' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email:rfc,dns', 'max:50', $unique],
            'phone_number' => ['nullable', 'numeric', 'digits:10'],
            'country_code' => ['nullable', 'numeric'],
            'province_code' => ['required_with:country_code', 'numeric'],
            'district_code' => ['required_with:country_code', 'numeric'],
            'sub_district_code' => ['required_with:country_code', 'numeric'],
            'address_detail' => ['required_with:country_code', 'nullable', 'string', 'max:100'],
            'birthdate' => ['required', 'date', 'after:' . $after, 'before:' . $before],
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
