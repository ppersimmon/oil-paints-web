<?php

namespace App\Http\Controllers;

use App\Repositories\Interfaces\ProductsI;
use Illuminate\View\View;

class ProductController extends Controller
{
    protected ProductsI $productRepository;

    public function __construct(ProductsI $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function index(): View
    {
        $products = $this->productRepository->getProducts();
        return view('products.index', compact('products'));
    }

    public function show($id): View
    {
        $product = $this->productRepository->findById((int)$id);
        if (!$product) {
            abort(404);
        }
        return view('products.show', compact('product'));
    }

}
