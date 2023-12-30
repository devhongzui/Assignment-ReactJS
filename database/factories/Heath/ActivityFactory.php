<?php

namespace Database\Factories\Heath;

use App\Models\Heath\Activity;
use Illuminate\Database\Eloquent\Factories\Factory;
use MongoDB\BSON\UTCDateTime;

/**
 * @extends Factory<Activity>
 */
class ActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'time' => new UTCDateTime(fake()->dateTimeBetween('-1 years')),
        ];
    }
}
