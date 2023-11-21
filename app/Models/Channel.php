<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Venturecraft\Revisionable\RevisionableTrait;

class Channel extends Model
{
    use CrudTrait;
    use RevisionableTrait;
    use ThumbnailTrait;

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

    /**
     * @return HasMany
     */
    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class);
    }

    /**
     * @return HasMany
     */
    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }
}
