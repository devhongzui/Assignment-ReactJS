<?php

namespace Database\Factories\Heath;

use App\Models\Heath\Measurement;
use Illuminate\Database\Eloquent\Factories\Factory;
use MongoDB\BSON\UTCDateTime;

/**
 * @extends Factory<Measurement>
 */
class MeasurementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'index1' => fake()->numberBetween(90, 180),
            'index2' => fake()->numberBetween(60, 120),
            'index3' => fake()->numberBetween(60, 200),
            'time' => new UTCDateTime(fake()->dateTimeBetween('-1 months')),
        ];
    }
}
