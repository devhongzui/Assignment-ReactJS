<?php

namespace App\Models\Heath;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\BSON\UTCDateTime;
use MongoDB\Laravel\Eloquent\Model;
use MongoDB\Laravel\Relations\HasOne;

class Measurement extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $connection = 'mongodb';

    /**
     * @return HasOne
     */
    public function patient(): HasOne
    {
        return $this->hasOne(Patient::class);
    }

    /**
     * @param UTCDateTime $time
     * @return string
     */
    public function getTimeAttribute(UTCDateTime $time): string
    {
        return Carbon::createFromTimestamp($time->toDateTime()->getTimestamp())->format('Y-m-d H:i:s');
    }
}
