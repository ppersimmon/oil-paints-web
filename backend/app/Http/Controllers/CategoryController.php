<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{

    public function __construct(
        private readonly CategoryService $categoryService
    ) {}

    public function index(): AnonymousResourceCollection
    {
        return CategoryResource::collection($this->categoryService->getAllCategories());
    }

    public function show(Category $category): CategoryResource
    {
        return new CategoryResource($category->load('products'));
    }

    public function store(StoreCategoryRequest $request): CategoryResource
    {
        $category = $this->categoryService->createCategory($request->validated());
        return new CategoryResource($category);
    }

    public function update(UpdateCategoryRequest $request, Category $category): CategoryResource
    {
        $category = $this->categoryService->updateCategory($category, $request->validated());
        return new CategoryResource($category);
    }

    public function destroy(Category $category): JsonResponse
    {
        $isDeleted = $this->categoryService->deleteCategory($category);
        if (!$isDeleted) {
            return response()->json([
                'message' => 'Cannot delete category with products.'
            ], 409);
        }
        return response()->json(null, 204);
    }
}
