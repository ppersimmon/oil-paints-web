<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        User::factory(5)->create();
        $tags = Tag::factory(9)->create();

        Category::factory(3)->create()->each(function ($category) use ($tags) {
            $products = Product::factory(10)->create([
                'category_id' => $category->id
            ]);

            $products->each(function ($product) use ($tags) {
                $product->tags()->attach(
                    $tags->random(rand(1, 3))->pluck('id')->toArray()
                );
            });
        });
    }
}
