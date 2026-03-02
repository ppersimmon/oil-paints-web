<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    public function definition(): array
    {
        $title = 'Paint ' . $this->faker->colorName() . ', ' . $this->faker->randomElement([10, 20, 45, 100, 490]) . ' ml';
        return [
            'category_id' => Category::factory(),
            'title' => $title,
            'slug' => Str::slug($title . '-' . $this->faker->unique()->numberBetween(1, 1000)),
            'price' => $this->faker->randomFloat(2, 500, 5000),
            'image' => 'oil_paint.jpg',
            'rating' => $this->faker->randomFloat(1, 0, 5),
            'reviews_count' => $this->faker->numberBetween(0, 50),
        ];
    }
}
