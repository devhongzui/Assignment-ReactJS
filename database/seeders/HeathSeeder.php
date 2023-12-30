<?php

namespace Database\Seeders;

use App\Models\Heath\Activity;
use App\Models\Heath\Measurement;
use App\Models\Heath\Patient;
use Illuminate\Database\Seeder;

class HeathSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Patient::factory(1000)->create();

        /** @var Patient $patient */
        foreach (Patient::all() as $patient) {
            Activity::factory(10)->create(['patient_id' => $patient->getKey()]);
            Measurement::factory(10)->create(['patient_id' => $patient->getKey()]);
        }
    }
}
