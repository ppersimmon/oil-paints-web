<?php

namespace Database\Factories;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Tag>
 */
class TagFactory extends Factory
{
    public function definition(): array
    {
        $name = $this->faker->unique()->randomElement([
            'ROSA Gallery', 'ROSA Studio',
            'Set', 'Single',
            '10 ml aluminum tube', '20 ml aluminum tube', '45 ml aluminum tube',
            'For pleiners, sketches, study', 'Professional painting'
        ]);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
        ];
    }
}
