<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = [
        'url',
        'view',
        'image',
        'title',
        'description',
    ];
}
