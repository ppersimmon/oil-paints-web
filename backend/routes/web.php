<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\ProductController;

Route::redirect('/', '/products');
Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/{id}', [ProductController::class, 'show'])->name('products.show');
Route::get('/contact', [ContactUsController::class, 'create'])->name('contact.create');
Route::post('/contact', [ContactUsController::class, 'store'])->name('contact.store');
