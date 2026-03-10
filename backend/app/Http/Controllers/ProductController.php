<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductController extends Controller
{

    public function index(): AnonymousResourceCollection
    {
        return ProductResource::collection(Product::with(['category', 'tags'])->get());
    }

    public function show(Product $product): ProductResource
    {
        return new ProductResource($product->load(['category', 'tags']));
    }

    public function store(StoreProductRequest $request): ProductResource
    {
        $validated = $request->validated();
        $validated['slug'] = Str::slug($validated['name']);
        $product = Product::query()->create($validated);

        if (isset($validated['tags'])) {
            $product->tags()->attach($validated['tags']);
        }

        return new ProductResource($product->load(['category', 'tags']));
    }

    public function update(UpdateProductRequest $request, Product $product): ProductResource
    {
        $validated = $request->validated();
        $validated['slug'] = Str::slug($validated['name']);
        $product->update($validated);

        if (isset($validated['tags'])) {
            $product->tags()->sync($validated['tags']);
        } else {
            $product->tags()->detach();
        }

        return new ProductResource($product->load(['category', 'tags']));
    }

    public function destroy(Product $product): JsonResponse
    {
        $product->tags()->detach();
        $product->delete();

        return response()->json(null, 204);
    }
}
