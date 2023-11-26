<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OpenAuth extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'provider_code',
        'provider_id',
        'token',
        'refresh_token',
    ];

    /**
     * @var string[]
     */
    protected $hidden = [
        'token',
        'refresh_token',
    ];

    /**
     * @param string $provider
     * @return int|false
     */
    public static function getServiceCode(string $provider): int|false
    {
        return array_search($provider, static::getServicesOption());
    }

    /**
     * @return string[]
     */
    public static function getServicesOption(): array
    {
        return [
            'facebook',
            'google',
            'github',
            'spotify',
            'yahoo',
            'twitter-oauth-2',
            'zalo',
        ];
    }

    /**
     * @return string
     */
    public function getServiceName(): string
    {
        return static::getServicesOption()[$this->provider_code];
    }
}
