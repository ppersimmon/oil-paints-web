<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{

    public function index(): JsonResponse
    {
        $products = Product::with(['category', 'tags'])->get();
        return response()->json($products);
    }

    public function show(Product $product): JsonResponse
    {
        $product->load(['category', 'tags']);
        return response()->json($product);
    }
}
