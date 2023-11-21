<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait ThumbnailTrait
{
    /**
     * @param string $type
     * @return Thumbnail|null
     * @throws Exception
     */
    public function getThumbnail(string $type): ?Thumbnail
    {
        return $this->thumbnails()
            ->whereType(Thumbnail::getTypeCode($type))
            ->first();
    }

    /**
     * @return HasMany
     * @throws Exception
     */
    public function thumbnails(): HasMany
    {
        return $this->hasMany(Thumbnail::class);
    }
}
