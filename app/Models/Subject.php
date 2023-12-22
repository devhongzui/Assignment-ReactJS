<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Subject extends Model
{
    use CrudTrait;
    use RevisionableTrait;
    use ThumbnailTrait;
    use Searchable;

    /**
     * @var string[]
     */
    static public array $filterableAttributes = [
        'id',
        'course_id',
        'channel_id',
        'url',
        'title',
        'description',
        'publish_at',
        'created_at',
        'updated_at',
    ];

    /**
     * @var string[]
     */
    static public array $sortableAttributes = [
        'id',
        'course_id',
        'channel_id',
        'url',
        'title',
        'description',
        'publish_at',
        'created_at',
        'updated_at',
    ];

    /**
     * @var string[]
     */
    protected $fillable = [
        'course_id',
        'channel_id',
        'url',
        'title',
        'description',
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
     * @return BelongsTo
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    /**
     * @return BelongsTo
     */
    public function channel(): BelongsTo
    {
        return $this->belongsTo(Channel::class);
    }

    /**
     * @return HasMany
     */
    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class);
    }
}
