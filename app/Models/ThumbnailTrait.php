<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;

trait ThumbnailTrait
{
    /**
     * @param string $type
     * @return Thumbnail|null
     */
    public function getThumbnail(string $type): ?Thumbnail
    {
        return $this->thumbnails()
            ->whereType(Thumbnail::getTypeCode($type))
            ->first();
    }

    /**
     * @return HasMany
     */
    public function thumbnails(): HasMany
    {
        return $this->hasMany(Thumbnail::class);
    }
}
