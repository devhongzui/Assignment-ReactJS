<?php

namespace App\Models\Study;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Course extends Model
{
    use CrudTrait;
    use RevisionableTrait;
    use Searchable;

    /**
     * @var string[]
     */
    static public array $filterableAttributes = [
        'id',
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
        return $this
            ->hasMany(Subject::class)
            ->with('thumbnails');
    }
}
