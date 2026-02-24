<?php

namespace App\Providers;

use App\Repositories\Interfaces\ProductsI;
use App\Repositories\MockProducts;
use Illuminate\Support\ServiceProvider;
use App\Repositories\MockFormData;
use App\Repositories\Interfaces\ContactUsI;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(ProductsI::class, MockProducts::class);
        $this->app->bind(ContactUsI::class, MockFormData::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
