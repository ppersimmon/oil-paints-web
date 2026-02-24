<?php

namespace App\Repositories;

use App\Repositories\Interfaces\ContactUsI;
use Illuminate\Support\Facades\Log;

class MockFormData implements ContactUsI
{
    public function store(array $data): bool
    {
        Log::info('New message received:', $data);
        return true;
    }
}
