<?php

namespace Database\Factories\Heath;

use App\Models\Heath\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'avatar' => fake()->imageUrl,
            'first_name' => fake()->firstName,
            'last_name' => fake()->lastName,
            'status' => fake()->numberBetween(int2: 3),
            'contacts' => (object)[
                'phone' => str_replace(['(', ')', ' ', '-'], '', fake()->phoneNumber),
                'mail' => fake()->freeEmail,
                'other' => str_replace("\n", ', ', fake()->address),
            ],
        ];
    }
}
