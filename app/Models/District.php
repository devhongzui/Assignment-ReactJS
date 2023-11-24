<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class District extends Model
{
    /**
     * @var string
     */
    protected $connection = 'mongodb';

    /**
     * @return array
     */
    public static function getDistrictsOption(): array
    {
        $items = static::all(['name', 'code', 'province_code']);

        $districts = [];
        foreach ($items as $item)
            $districts[$item->province_code][$item->code] = $item->name;

        return $districts;
    }
}
