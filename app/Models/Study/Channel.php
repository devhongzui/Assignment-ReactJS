<?php

namespace App\Models\Study;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Channel extends Model
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
        'url',
        'title',
        'description',
        'custom_url',
        'publish_at',
        'created_at',
        'updated_at',
    ];

    /**
     * @var string[]
     */
    static public array $sortableAttributes = [
        'id',
        'url',
        'title',
        'description',
        'custom_url',
        'publish_at',
        'created_at',
        'updated_at',
    ];

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
        return $this
            ->hasMany(Lesson::class)
            ->with([
                'thumbnails',
                'channel',
            ]);
    }

    /**
     * @return HasMany
     */
    public function subjects(): HasMany
    {
        return $this
            ->hasMany(Subject::class)
            ->with([
                'thumbnails',
                'channel',
            ]);
    }
}
