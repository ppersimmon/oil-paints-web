<?php

namespace App\Repositories\Interfaces;

interface ProductsI
{
    public function getProducts(): array;

    public function findById(int $id): ?array;

}
