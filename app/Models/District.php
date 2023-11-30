<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class District extends Model
{
    /**
     * @var string
     */
    protected $connection = 'mongodb';
}
