<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Province extends Model
{
    /**
     * @var string
     */
    protected $connection = 'mongodb';

    /**
     * @return array
     */
    public static function getProvincesOption(): array
    {
        return static::all()->pluck('name', 'code')->toArray();
    }
}
