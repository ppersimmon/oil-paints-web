<?php

namespace App\Services;

use App\Models\Product;
use App\Repository\ProductRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
class ProductService
{
    public function __construct(
        protected ProductRepository $productRepository
    ) {}

    public function getAllProducts(): Collection
    {
        return $this->productRepository->getAll();
    }

    public function getProductInfo(Product $product): Product
    {
        return $this->productRepository->loadRelations($product, ['category', 'tags']);
    }

    public function createProduct(array $data): Product
    {
        $data['slug'] = Str::slug($data['name']);
        return DB::transaction(function () use ($data) {
            $product = $this->productRepository->create($data);

            if (isset($data['tags'])) {
                $this->productRepository->syncTags($product, $data['tags']);
            }
            return $this->productRepository->loadRelations($product, ['category', 'tags']);
        });
    }

    public function updateProduct(Product $product, array $data): Product
    {
        if (isset($data['name'])) {
            $data['slug'] = Str::slug($data['name']);
        }

        return DB::transaction(function () use ($product, $data) {
            $product = $this->productRepository->update($product, $data);

            if (isset($data['tags'])) {
                $this->productRepository->syncTags($product, $data['tags']);
            }

            return $this->productRepository->loadRelations($product, ['category', 'tags']);
        });
    }

    public function deleteProduct(Product $product): bool
    {
        return $this->productRepository->delete($product);
    }
}
