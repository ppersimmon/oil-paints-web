<?php

namespace App\Repository;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductRepository
{
    public function getAll(): Collection
    {
        return Product::query()->with(['category', 'tags'])->get();
    }

    public function create(array $data): Product
    {
        return Product::query()->create($data);
    }

    public function update(Product $product, array $data): Product
    {
        $product->update($data);
        return $product;
    }

    public function delete(Product $product): bool
    {
        return $product->delete();
    }

    public function syncTags(Product $product, array $tagIds): void
    {
        $product->tags()->sync($tagIds);
    }

    public function loadRelations(Product $product, array $relations): Product
    {
        return $product->load($relations);
    }
}
