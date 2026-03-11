<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Services\ProductService;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductController extends Controller
{
    public function __construct(
        private readonly ProductService $productService
    ) {}

    public function index(): AnonymousResourceCollection
    {
        return ProductResource::collection($this->productService->getAllProducts());
    }

    public function show(Product $product): ProductResource
    {
        $productWithRelations = $this->productService->getProductInfo($product);
        return new ProductResource($productWithRelations);
    }

    public function store(StoreProductRequest $request): ProductResource
    {
        $product = $this->productService->createProduct($request->validated());
        return new ProductResource($product);
    }

    public function update(UpdateProductRequest $request, Product $product): ProductResource
    {
        $product = $this->productService->updateProduct($product, $request->validated());
        return new ProductResource($product);
    }

    public function destroy(Product $product): JsonResponse
    {
        $this->productService->deleteProduct($product);
        return response()->json(null, 204);
    }
}
