<?php

namespace App\Models\Address;

use MongoDB\Laravel\Eloquent\Model;

class District extends Model
{
    /**
     * @var string
     */
    protected $connection = 'mongodb';
}
