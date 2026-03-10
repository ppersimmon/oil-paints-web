<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\Tag;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $tags = Tag::all();

        Category::factory(3)->create()->each(function ($category) use ($tags) {
            $products = Product::factory(10)->create([
                'category_id' => $category->id
            ]);
            $products->each(function ($product) use ($tags) {
                if ($tags->isNotEmpty()) {
                    $product->tags()->attach(
                        $tags->random(rand(1, 3))->pluck('id')->toArray()
                    );
                }
            });
        });
    }
}
