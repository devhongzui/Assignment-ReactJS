<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class Channel extends Model
{
    use CrudTrait;
    use RevisionableTrait;

    /**
     * @var string[]
     */
    protected $fillable = [
        'url',
        'title',
        'description',
        'custom_url',
        'publish_at',
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'publish_at' => 'datetime',
    ];

    /**
     * @return string
     */
    public function identifiableName(): string
    {
        return $this->title;
    }
}
