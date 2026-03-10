<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthController;
use App\Http\Resources\UserResource;

Route::controller(AuthController::class)->group(function () {
    Route::post('/register', 'register');
    Route::post('/login', 'login');
});

Route::post('/contact', [ContactUsController::class, 'store']);

Route::controller(CategoryController::class)->group(function () {
    Route::get('/categories', 'index');
    Route::get('/categories/{category:slug}', 'show');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return new UserResource($request->user());
    });

    Route::controller(ProductController::class)->group(function () {
        Route::get('/products', 'index');
        Route::get('/products/{product:slug}', 'show');
    });

    Route::middleware('admin')->group(function () {
        Route::controller(ProductController::class)->group(function () {
            Route::post('/products', 'store');
            Route::put('/products/{product}', 'update');
            Route::delete('/products/{product}', 'destroy');
        });

        Route::controller(CategoryController::class)->group(function () {
            Route::post('/categories', 'store');
            Route::put('/categories/{category}', 'update');
            Route::delete('/categories/{category}', 'destroy');
        });
    });
});
