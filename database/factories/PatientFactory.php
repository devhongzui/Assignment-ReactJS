<?php

namespace Database\Factories;

use App\Models\Patient;
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
            'measurement' => [
                $this->getMeasurement(),
                $this->getMeasurement(),
                $this->getMeasurement(),
                $this->getMeasurement(),
                $this->getMeasurement(),
            ],
            'visit' => [
                $this->getVisit(),
                $this->getVisit(),
                $this->getVisit(),
                $this->getVisit(),
                $this->getVisit(),
            ],
            'contacts' => (object)[
                'phone' => fake()->phoneNumber,
                'mail' => fake()->freeEmail,
                'other' => fake()->address,
            ]
        ];
    }

    /**
     * @return object
     */
    protected function getMeasurement(): object
    {
        return (object)[
            'index1' => fake()->numberBetween(90, 180),
            'index2' => fake()->numberBetween(60, 120),
            'index3' => fake()->numberBetween(60, 200),
            'time' => fake()->dateTimeBetween('-1 months')->format('Y-m-d H:i:s'),
        ];
    }

    /**
     * @return string
     */
    protected function getVisit(): string
    {
        return fake()->dateTimeBetween('-1 years')->format('Y-m-d H:i:s');
    }
}
