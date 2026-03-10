<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return CategoryResource::collection(Category::all());
    }

    public function show(Category $category): CategoryResource
    {
        return new CategoryResource($category->load('products'));
    }

    public function store(StoreCategoryRequest $request): CategoryResource
    {
        $validated = $request->validated();
        $validated['slug'] = Str::slug($validated['name']);
        $category = Category::query()->create($validated);
        return new CategoryResource($category);
    }

    public function update(UpdateCategoryRequest $request, Category $category): CategoryResource
    {
        $validated = $request->validated();
        $validated['slug'] = Str::slug($validated['name']);
        $category->update($validated);
        return new CategoryResource($category);
    }

    public function destroy(Category $category): JsonResponse
    {
        if ($category->products()->exists()) {
            return response()->json([
                'message' => 'Cannot delete category with products.'
            ], 409);
        }

        $category->delete();
        return response()->json(null, 204);
    }
}
