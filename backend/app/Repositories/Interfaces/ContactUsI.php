<?php

namespace App\Repositories\Interfaces;

interface ContactUsI
{
    public function store(array $data): bool;
}
