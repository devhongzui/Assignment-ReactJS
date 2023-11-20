<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Venturecraft\Revisionable\RevisionableTrait;

class Course extends Model
{
    use CrudTrait;
    use RevisionableTrait;

    /**
     * @var string[]
     */
    protected $fillable = [
        'image',
        'title',
        'description',
    ];

    /**
     * @return string
     */
    public function identifiableName(): string
    {
        return $this->title;
    }

    /**
     * @return HasMany
     */
    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }
}
