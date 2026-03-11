<?php

namespace App\Services;

use App\Models\Category;
use App\Repository\CategoryRepository;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;


class CategoryService
{

    public function __construct(
        protected CategoryRepository $categoryRepository,
    ) {}

    public function getAllCategories(): Collection
    {
        return $this->categoryRepository->getAll();
    }

    public function createCategory(array $data): Category
    {
        $data['slug'] = Str::slug($data['name']);
        return $this->categoryRepository->create($data);
    }

    public function updateCategory(Category $category, array $data): Category
    {
        $data['slug'] = Str::slug($data['name']);
        return $this->categoryRepository->update($category, $data);
    }

    public function deleteCategory(Category $category): bool
    {
        if ($this->categoryRepository->hasProduct($category)) {
            return false;
        }

        return $this->categoryRepository->delete($category);
    }
}
