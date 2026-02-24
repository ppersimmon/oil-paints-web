<?php

namespace App\Repositories;

use App\Repositories\Interfaces\ProductsI;

class MockProducts implements ProductsI
{
    private array $products = [
        [
            'id' => 1,
            'image' => 'oil_paint.jpg',
            'title' => 'Oil paint set, 10 ml, ROSA Gallery',
            'rating' => 5,
            'reviewsCount' => 11,
            'price' => 944,
        ],
        [
            'id' => 2,
            'image' => 'oil_paint.jpg',
            'title' => 'Acrylic paint set, 20 ml, ROSA Studio',
            'rating' => 4,
            'reviewsCount' => 12,
            'price' => 995,
        ],
    ];

    public function getProducts(): array
    {
        return $this->products;
    }

    public function findById(int $id): ?array
    {
        foreach ($this->products as $product) {
            if ($product['id'] === $id) {
                return $product;
            }
        }
        return null;
    }
}
