<?php

namespace App\Models\Heath;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Relations\HasMany;

class Patient extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $connection = 'mongodb';

    /**
     * @return HasMany
     */
    public function activities(): HasMany
    {
        return $this->hasMany(Activity::class);
    }

    /**
     * @return HasMany
     */
    public function measurements(): HasMany
    {
        return $this->hasMany(Measurement::class);
    }
}
