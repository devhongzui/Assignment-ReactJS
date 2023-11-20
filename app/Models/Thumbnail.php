<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use StdClass;
use Venturecraft\Revisionable\RevisionableTrait;

class Thumbnail extends Model
{
    use CrudTrait;
    use RevisionableTrait;

    /**
     * @var string[]
     */
    protected $fillable = [
        'subject_id',
        'lesson_id',
        'channel_id',
        'type',
        'url',
        'width',
        'height',
    ];

    /**
     * @param StdClass $foreign_key
     * @param string $type
     * @param StdClass $thumbnail
     * @return Model
     */
    public static function insertThumbnail(StdClass $foreign_key, string $type, StdClass $thumbnail): Model
    {
        return static::create([
            $foreign_key->name => $foreign_key->id,
            'type' => static::getTypeCode($type),
            'url' => $thumbnail->url,
            'width' => $thumbnail->width,
            'height' => $thumbnail->height,
        ]);
    }

    /**
     * @param string $type_name
     * @return string|false
     */
    public function getTypeCode(string $type_name): string|false
    {
        return array_search(
            strtolower($type_name),
            $this->getTypesOption()
        );
    }

    /**
     * @return string[]
     */
    public function getTypesOption(): array
    {
        return [
            'default',
            'medium',
            'high',
            'standard',
            'maxres'
        ];
    }

    /**
     * @return string
     */
    public function identifiableName(): string
    {
        return $this->url;
    }

    /**
     * @return BelongsTo
     */
    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    /**
     * @return BelongsTo
     */
    public function lesson(): BelongsTo
    {
        return $this->belongsTo(Lesson::class);
    }

    /**
     * @return BelongsTo
     */
    public function channel(): BelongsTo
    {
        return $this->belongsTo(Channel::class);
    }
}
