<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use CrudTrait;
    use HasRoles;
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
     * @param int $provider_code
     * @param string $provider_email
     * @param string $provider_id
     * @return User|null
     */
    public static function getUserByOpenAuth(int $provider_code, string $provider_email, string $provider_id): ?User
    {
        $open_auth = app(OpenAuth::class)->getTable();

        return static::whereEmail($provider_email)
            ->orWhere(fn(Builder $query) => $query
                ->where("$open_auth.provider_code", $provider_code)
                ->where("$open_auth.provider_id", $provider_id))
            ->join($open_auth, "$open_auth.user_id", '=', 'users.id', 'left')
            ->select('users.*')
            ->withTrashed()
            ->first();
    }

    /**
     * @return ?string
     */
    public function getGender(): ?string
    {
        return is_int($this->gender)
            ? static::getGendersOption()[$this->gender]
            : null;
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

    /**
     * @return HasMany
     */
    public function socials(): HasMany
    {
        return $this->hasMany(OpenAuth::class);
    }
}
