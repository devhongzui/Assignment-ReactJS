<?php

namespace App\Models\Address;

use MongoDB\Laravel\Eloquent\Model;

class Province extends Model
{
    /**
     * @var string
     */
    protected $connection = 'mongodb';
}
