<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Lesson extends Model
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
        'subject_id',
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
        'subject_id',
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
        'subject_id',
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
    public function channel(): BelongsTo
    {
        return $this->belongsTo(Channel::class);
    }

    /**
     * @return BelongsTo
     */
    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }
}
