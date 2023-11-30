<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Province extends Model
{
    /**
     * @var string
     */
    protected $connection = 'mongodb';
}
