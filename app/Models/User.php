<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory;
    use Notifiable;
    use SoftDeletes;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'birthdate',
        'gender',
        'password',
        'email',
        'avatar',
        'email_verified_at',
        'phone_number',
        'phone_number_verified_at',
        'country_code',
        'province_code',
        'district_code',
        'sub_district_code',
        'address_detail',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_number_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * @return string
     */
    public function getGender(): string
    {
        return static::getGendersOption()[$this->gender];
    }

    /**
     * @return array
     */
    public static function getGendersOption(): array
    {
        return [
            null => __('Choose'),
            0 => __('Male'),
            __('Female'),
            __('N/A')
        ];
    }
}
