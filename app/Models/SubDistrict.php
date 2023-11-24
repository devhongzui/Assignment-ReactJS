<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class SubDistrict extends Model
{
    /**
     * @var string
     */
    protected $connection = 'mongodb';

    /**
     * @return array
     */
    public static function getSubDistrictsOption(): array
    {
        $items = static::all(['name', 'code', 'district_code']);

        $sub_districts = [];
        foreach ($items as $item)
            $sub_districts[$item->district_code][$item->code] = $item->name;

        return $sub_districts;
    }
}
