<?php

namespace App\Repository;

use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;

class CategoryRepository
{
    public function getAll(): Collection
    {
        return Category::all();
    }
    public function create(array $data): Category
    {
        return Category::query()->create($data);
    }

    public function update(Category $category, array $data): Category
    {
        $category->update($data);
        return $category;
    }

    public function hasProduct(Category $category): bool
    {
        return $category->products()->exists();
    }

    public function delete(Category $category): bool
    {
        return $category->delete();
    }
}
