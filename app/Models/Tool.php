<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Tool extends Model
{
    use Searchable;

    /**
     * @var string[]
     */
    static public array $filterableAttributes = [
        'id',
        'url',
        'view',
        'image',
        'title',
        'description',
        'url',
        'view',
        'image',
        'title',
        'description',
        'created_at',
        'updated_at',
    ];

    /**
     * @var string[]
     */
    static public array $sortableAttributes = [
        'id',
        'url',
        'view',
        'image',
        'title',
        'description',
        'url',
        'view',
        'image',
        'title',
        'description',
        'created_at',
        'updated_at',
    ];

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
